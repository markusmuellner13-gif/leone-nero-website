/*!
 * Leone Nero S.r.l. — Lion Particle Loader
 * Canvas-based particle animation: particles converge to form a black lion,
 * the lion roars with a gold flash, then the screen dissolves into the site.
 */
(function () {
  'use strict';

  const loader  = document.getElementById('loader');

  /* Skip animation entirely for users who request reduced motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('loaded');
    if (loader) loader.style.display = 'none';
    return;
  }

  const canvas  = document.getElementById('loader-canvas');
  const ctx     = canvas.getContext('2d');

  let W, H, CX, CY, SCALE;
  let particles  = [];
  let roarBursts = [];
  let phase      = 'gathering';   // gathering | hold | roar | fadeout | done
  let phaseT     = 0;
  let gathered   = 0;
  let globalAlpha = 1;
  let textAlpha   = 0;
  let roarPulse   = 0;

  /* ── Resize ── */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    CX = W / 2;
    CY = H / 2;
    SCALE = Math.min(W, H) / 700;
    if (SCALE < 0.5) SCALE = 0.5;
    if (SCALE > 1.4) SCALE = 1.4;
  }
  resize();
  window.addEventListener('resize', resize);

  /* ────────────────────────────────────────────────
     Generate lion target points
     All coordinates are in a 700×700 space, then
     scaled by SCALE and shifted to canvas centre.
  ──────────────────────────────────────────────── */
  function makeLionTargets() {
    const pts = [];
    const cx = 0, cy = -20; // lion offset from origin

    function pt(x, y, opts) {
      pts.push({
        tx: CX + (cx + x) * SCALE,
        ty: CY + (cy + y) * SCALE,
        ...opts
      });
    }

    function ring(ox, oy, rx, ry, count, from, to, opts) {
      for (let i = 0; i < count; i++) {
        const a = from + (i / count) * (to - from);
        const noise = (Math.random() - 0.5) * 18;
        pt(ox + Math.cos(a) * (rx + noise), oy + Math.sin(a) * (ry + noise * 0.6), opts);
      }
    }

    function fill(ox, oy, rx, ry, count, opts) {
      for (let i = 0; i < count; i++) {
        const a  = Math.random() * Math.PI * 2;
        const r  = Math.sqrt(Math.random());
        pt(ox + Math.cos(a) * rx * r, oy + Math.sin(a) * ry * r, opts);
      }
    }

    // ── Outer mane spiky ring ──
    for (let s = 0; s < 18; s++) {
      const baseA = (s / 18) * Math.PI * 2 - Math.PI / 2;
      const spike = s % 2 === 0;
      const rOut  = spike ? 185 + Math.random() * 22 : 155 + Math.random() * 14;
      for (let j = 0; j < 10; j++) {
        const jA   = baseA + (Math.random() - 0.5) * (Math.PI / 18) * 1.8;
        const jR   = rOut * (0.70 + Math.random() * 0.30);
        const dark = 15 + Math.random() * 12;
        pt(Math.cos(jA) * jR * 1.05, Math.sin(jA) * jR * 0.88 - 8,
          { color: `hsl(38,${60 + Math.random()*25}%,${dark}%)`, sz: 1.1 + Math.random() * 1.4, glow: false });
      }
    }

    // ── Inner mane fill ──
    ring(0, -8, 128, 112, 160, 0, Math.PI * 2,
      { color: null, sz: 1.2, mane: true, glow: false });

    // ── Face fill ──
    fill(0, 12, 76, 84, 200,
      { color: null, sz: 1.0, face: true, glow: false });

    // ── Forehead darker band ──
    fill(0, -45, 52, 22, 30,
      { color: 'hsl(28,40%,7%)', sz: 1.1, glow: false });

    // ── Brow ridges ──
    for (let side of [-1, 1]) {
      for (let i = 0; i < 12; i++) {
        const t = i / 11;
        pt(side * (25 + t * 22), -30 - Math.sin(t * Math.PI) * 8,
          { color: 'hsl(28,35%,9%)', sz: 1.2, glow: false });
      }
    }

    // ── Left eye (gold + pupil) ──
    fill(-32, -10, 14, 10, 18,
      { color: '#d4a820', sz: 1.8, glow: true });
    fill(-33, -10,  7,  8, 10,
      { color: '#0a0500', sz: 1.6, glow: false });
    pt(-28, -15, { color: 'rgba(255,255,255,0.7)', sz: 2.2, glow: false });

    // ── Right eye ──
    fill( 32, -10, 14, 10, 18,
      { color: '#d4a820', sz: 1.8, glow: true });
    fill( 33, -10,  7,  8, 10,
      { color: '#0a0500', sz: 1.6, glow: false });
    pt( 28, -15, { color: 'rgba(255,255,255,0.7)', sz: 2.2, glow: false });

    // ── Nose bridge ──
    fill(0, 8, 9, 6, 10, { color: 'hsl(25,38%,10%)', sz: 1.1, glow: false });

    // ── Nose ──
    fill(0, 22, 18, 13, 22,
      { color: 'hsl(20,50%,8%)', sz: 1.5, glow: false });
    // Nose shine
    pt(-7, 19, { color: 'rgba(255,255,255,0.18)', sz: 2.0, glow: false });
    pt( 5, 18, { color: 'rgba(255,255,255,0.12)', sz: 1.6, glow: false });

    // ── Upper lip / philtrum ──
    for (let i = 0; i < 20; i++) {
      const t = i / 19;
      pt((t - 0.5) * 80, 38 + Math.abs(t - 0.5) * 12,
        { color: 'hsl(20,38%,10%)', sz: 1.2, glow: false });
    }

    // ── Cheeks ──
    fill(-52, 18, 18, 12, 25,
      { color: 'hsl(30,45%,14%)', sz: 1.2, glow: false });
    fill( 52, 18, 18, 12, 25,
      { color: 'hsl(30,45%,14%)', sz: 1.2, glow: false });

    // ── Open roaring mouth ──
    // Roof of mouth (dark red)
    for (let i = 0; i < 28; i++) {
      const t = i / 27;
      const mx = (t - 0.5) * 95;
      const my = 40 + Math.sin(t * Math.PI) * 5;
      pt(mx, my, { color: '#3a0808', sz: 1.3, glow: false });
    }

    // Teeth upper row (4 fangs)
    const teethU = [-33, -14, 6, 25];
    teethU.forEach(tx => {
      for (let j = 0; j < 8; j++) {
        pt(tx + (Math.random() - 0.5) * 7,
           42 + j * 4 + (Math.random() - 0.5) * 2,
           { color: 'rgba(240,235,220,0.92)', sz: 1.4, glow: false });
      }
    });

    // Open jaw interior
    fill(0, 70, 42, 22, 35,
      { color: '#280000', sz: 1.5, glow: false });

    // Tongue
    fill(0, 75, 24, 16, 25,
      { color: '#8b1520', sz: 1.6, glow: false });

    // Teeth lower row
    const teethL = [-26, -8, 10, 28];
    teethL.forEach(tx => {
      for (let j = 0; j < 6; j++) {
        pt(tx + (Math.random() - 0.5) * 6,
           88 - j * 3.5 + (Math.random() - 0.5) * 2,
           { color: 'rgba(230,225,210,0.88)', sz: 1.3, glow: false });
      }
    });

    // Lower jaw outline
    for (let i = 0; i < 30; i++) {
      const t = i / 29;
      pt((t - 0.5) * 94, 95 - Math.sin(t * Math.PI) * 12,
        { color: 'hsl(22,40%,9%)', sz: 1.2, glow: false });
    }

    // Whiskers
    [[-75, 20], [-88, 28], [-78, 36]].forEach(([wx, wy]) => {
      for (let k = 0; k < 4; k++) {
        pt(wx + k * 2, wy + k * 0.5, { color: 'rgba(200,190,160,0.45)', sz: 1.1, glow: false });
      }
    });
    [[ 75, 20], [ 88, 28], [ 78, 36]].forEach(([wx, wy]) => {
      for (let k = 0; k < 4; k++) {
        pt(wx - k * 2, wy + k * 0.5, { color: 'rgba(200,190,160,0.45)', sz: 1.1, glow: false });
      }
    });

    return pts;
  }

  /* ── Particle ── */
  class Particle {
    constructor(target, delay) {
      this.tx    = target.tx;
      this.ty    = target.ty;
      this.color = target.color;
      this.mane  = target.mane  || false;
      this.face  = target.face  || false;
      this.glow  = target.glow  || false;
      this.sz    = target.sz    || 1.5;
      this.delay = delay;

      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 3;
      this.vy = (Math.random() - 0.5) * 3;
      this.a  = 0;
      this.done = false;
    }

    resolveColor() {
      if (this.color) return this.color;
      if (this.mane)  return `hsl(${36 + Math.random()*18},${62+Math.random()*22}%,${17+Math.random()*10}%)`;
      if (this.face)  return `hsl(${28 + Math.random()*10},${42+Math.random()*18}%,${11+Math.random()*7}%)`;
      return '#c9a84c';
    }

    update(tick) {
      if (tick < this.delay) return;
      if (!this._color) this._color = this.resolveColor();

      const dx = this.tx - this.x;
      const dy = this.ty - this.y;
      const d2 = dx * dx + dy * dy;

      if (d2 < 2) {
        this.x = this.tx; this.y = this.ty;
        this.done = true;
      } else {
        this.vx += dx * 0.055;
        this.vy += dy * 0.055;
        this.vx *= 0.82;
        this.vy *= 0.82;
        this.x += this.vx;
        this.y += this.vy;
      }
      this.a = Math.min(1, this.a + 0.028);
    }

    draw() {
      if (this.a <= 0) return;
      ctx.save();
      ctx.globalAlpha = this.a * globalAlpha;

      if (this.glow) {
        ctx.shadowBlur  = 9;
        ctx.shadowColor = '#ffd700';
      }

      ctx.fillStyle = this._color || '#c9a84c';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  /* ── Roar burst particle ── */
  class Burst {
    constructor() {
      const a = Math.random() * Math.PI * 2;
      const sp = 2.5 + Math.random() * 6;
      this.x  = CX + (Math.random() - 0.5) * 40 * SCALE;
      this.y  = CY + (Math.random() - 0.5) * 40 * SCALE;
      this.vx = Math.cos(a) * sp;
      this.vy = Math.sin(a) * sp;
      this.a  = 1;
      this.sz = 2 + Math.random() * 3;
      this.hue = 28 + Math.random() * 30;
      this.sat = 80 + Math.random() * 20;
      this.lit = 50 + Math.random() * 25;
    }
    update() {
      this.x  += this.vx;
      this.y  += this.vy;
      this.vx *= 0.96;
      this.vy *= 0.96;
      this.a  -= 0.018;
    }
    draw() {
      if (this.a <= 0) return;
      ctx.save();
      ctx.globalAlpha = this.a * globalAlpha;
      ctx.shadowBlur  = 12;
      ctx.shadowColor = `hsl(${this.hue},${this.sat}%,${this.lit}%)`;
      ctx.fillStyle   = `hsl(${this.hue},${this.sat}%,${this.lit}%)`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  /* ── Init ── */
  function init() {
    const targets = makeLionTargets();
    particles = targets.map((t, i) =>
      new Particle(t, Math.floor(i / 4))
    );
  }

  /* ── Main loop ── */
  let tick = 0;
  function loop() {
    if (phase === 'done') return;
    requestAnimationFrame(loop);

    tick++;
    phaseT++;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, W, H);

    /* ---- Gathering ---- */
    if (phase === 'gathering') {
      particles.forEach(p => p.update(tick));
      gathered = particles.filter(p => p.done).length;

      if (gathered >= particles.length * 0.96) {
        phase  = 'hold';
        phaseT = 0;
      }
    }

    /* ---- Hold (short pause, glow builds) ---- */
    if (phase === 'hold') {
      roarPulse = Math.min(1, roarPulse + 0.04);
      if (phaseT > 35) { phase = 'roar'; phaseT = 0; spawnBursts(); }
    }

    /* ---- Roar ---- */
    if (phase === 'roar') {
      roarPulse = Math.sin(phaseT * 0.14) * 0.5 + 0.8;
      textAlpha = Math.min(1, phaseT / 40);
      roarBursts.forEach(b => b.update());
      roarBursts = roarBursts.filter(b => b.a > 0);

      if (phaseT > 110 && roarBursts.length === 0) {
        phase  = 'fadeout';
        phaseT = 0;
      }
    }

    /* ---- Fadeout ---- */
    if (phase === 'fadeout') {
      globalAlpha = Math.max(0, 1 - phaseT / 55);
      textAlpha   = globalAlpha;
      if (phaseT >= 55) { finishLoader(); return; }
    }

    /* ---- Draw gold aura ---- */
    if (roarPulse > 0) {
      const gr = ctx.createRadialGradient(CX, CY, 0, CX, CY, 210 * SCALE);
      gr.addColorStop(0, `rgba(201,168,76,${roarPulse * 0.22})`);
      gr.addColorStop(1,  'rgba(0,0,0,0)');
      ctx.fillStyle = gr;
      ctx.fillRect(0, 0, W, H);
    }

    /* ---- Draw particles ---- */
    particles.forEach(p => p.draw());

    /* ---- Draw bursts ---- */
    roarBursts.forEach(b => b.draw());

    /* ---- Company text ---- */
    if (textAlpha > 0) {
      drawText();
    }
  }

  function spawnBursts() {
    for (let i = 0; i < 100; i++) roarBursts.push(new Burst());
  }

  function drawText() {
    const fontSize1 = Math.round(32 * SCALE);
    const fontSize2 = Math.round(12 * SCALE);
    const ty = CY + 210 * SCALE;

    ctx.save();
    ctx.globalAlpha = textAlpha * globalAlpha;
    ctx.textAlign   = 'center';
    ctx.textBaseline = 'middle';

    /* Gold glow text */
    ctx.shadowBlur  = 24;
    ctx.shadowColor = '#c9a84c';
    ctx.fillStyle   = '#c9a84c';
    ctx.font        = `700 ${fontSize1}px 'Playfair Display', Georgia, serif`;
    ctx.fillText('LEONE NERO', CX, ty);

    ctx.shadowBlur = 0;
    ctx.fillStyle  = 'rgba(150,140,120,0.8)';
    ctx.font       = `500 ${fontSize2}px Inter, sans-serif`;
    ctx.letterSpacing = '0.18em';
    ctx.fillText('S . R . L .', CX, ty + fontSize1 * 0.9);

    ctx.restore();
  }

  function finishLoader() {
    phase = 'done';
    loader.classList.add('hiding');
    document.body.classList.add('loaded');
    setTimeout(() => { loader.style.display = 'none'; }, 950);
  }

  /* ── Google Fonts preconnect then start ── */
  function start() {
    init();
    loop();
  }

  /* Start after fonts likely loaded (small delay ensures Playfair Display is available) */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(start);
  } else {
    setTimeout(start, 120);
  }
})();
