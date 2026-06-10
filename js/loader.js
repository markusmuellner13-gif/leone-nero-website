/*!
 * Leone Nero S.r.l. — Loader (GSAP timeline)
 * A black lion emerges from darkness, roars, and fades into the site.
 * GPU-composited, frame-rate independent — same speed on phone and desktop.
 */
(function () {
  'use strict';

  var loader = document.getElementById('loader');

  /* Accessibility: skip entirely */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('loaded');
    if (loader) loader.style.display = 'none';
    return;
  }

  /* Fallback: GSAP failed to load from CDN */
  if (typeof gsap === 'undefined') {
    if (loader) {
      setTimeout(function () {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.9s ease';
        document.body.classList.add('loaded');
        setTimeout(function () { loader.style.display = 'none'; }, 950);
      }, 3000);
    }
    return;
  }

  /* ─── Initial states (everything hidden until GSAP reveals it) ─── */
  gsap.set('.rl-aura',   { opacity: 0, scale: 0.6, svgOrigin: '250 250' });
  gsap.set(['.rl-mane-o', '.rl-mane-m', '.rl-mane-i'], { opacity: 0, scale: 0.88, svgOrigin: '250 250' });
  gsap.set(['.rl-face', '.rl-nose', '.rl-brow'], { opacity: 0 });
  gsap.set('.rl-mouth',    { opacity: 0, scaleY: 0.1, svgOrigin: '250 262' });
  gsap.set('.rl-fangs-u',  { opacity: 0 });
  gsap.set('.rl-eyes',     { opacity: 0 });
  gsap.set('.rl-whiskers', { opacity: 0 });
  gsap.set('.rl-fur',      { opacity: 0 });
  gsap.set('.rl-wrinkles', { opacity: 0 });
  gsap.set('.rl-wave',     { opacity: 0, scale: 0.3, svgOrigin: '250 290' });
  gsap.set('.loader-brand', { opacity: 0, y: 16 });

  /* ─── Main timeline ─── */
  var tl = gsap.timeline();

  tl
    /* 1. Aura breathes into the darkness */
    .to('.rl-aura', { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' }, 0.1)

    /* 2. Two glowing eyes open first — alone in the dark */
    .to('.rl-eyes', { opacity: 1, duration: 0.7, ease: 'power2.inOut' }, 0.3)

    /* 3. The mane emerges from the shadow, layer by layer */
    .to('.rl-mane-o', { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.4)' }, 0.85)
    .to('.rl-mane-m', { opacity: 1, scale: 1, duration: 0.5,  ease: 'back.out(1.4)' }, 1.0)
    .to('.rl-mane-i', { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.4)' }, 1.12)

    /* 4. The face resolves */
    .to('.rl-face',  { opacity: 1, duration: 0.45, ease: 'power2.out' }, 1.3)
    .to('.rl-mouth', { opacity: 1, duration: 0.3 }, 1.35)
    .to(['.rl-brow', '.rl-nose'], { opacity: 1, duration: 0.4, ease: 'power2.out' }, 1.45)

    /* 5. Whiskers + fur sheen */
    .to('.rl-whiskers', { opacity: 1, duration: 0.35 }, 1.62)
    .to('.rl-fur',      { opacity: 0.16, duration: 0.35 }, 1.62)

    /* 6. The inhale — head draws back, eyes narrow */
    .to('.loader-lion', { scale: 0.955, duration: 0.42, ease: 'power2.inOut', transformOrigin: 'center' }, 1.95)
    .to('.rl-eyes',     { scaleY: 0.8, svgOrigin: '250 184', duration: 0.42, ease: 'power2.inOut' }, 1.95)

    /* 7. THE ROAR — jaw drops, gold burst, shockwaves, screen shake */
    .to('.rl-mouth',    { scaleY: 1, duration: 0.5, ease: 'back.out(1.6)' }, 2.4)
    .to('.rl-fangs-u',  { opacity: 1, duration: 0.15 }, 2.4)
    .to('.rl-wrinkles', { opacity: 0.85, duration: 0.3 }, 2.42)
    .to('.rl-eyes',     { scaleY: 0.62, duration: 0.3, ease: 'power2.out' }, 2.4)
    .to('.rl-brow',     { y: 7, duration: 0.3, ease: 'power2.out' }, 2.4)
    .to('.loader-lion', {
      scale: 1.15,
      filter: 'drop-shadow(0 0 44px rgba(255,208,0,0.62)) drop-shadow(0 0 20px rgba(201,168,76,0.7))',
      duration: 0.45, ease: 'power3.out', transformOrigin: 'center'
    }, 2.4)
    .to('#loader', {
      keyframes: [
        { x: -8, y: 5 }, { x: 7, y: -6 }, { x: -6, y: -4 }, { x: 5, y: 5 },
        { x: -4, y: -2 }, { x: 3, y: 2 }, { x: -1, y: -1 }, { x: 0, y: 0 }
      ],
      duration: 0.6, ease: 'power1.inOut'
    }, 2.42)
    .to('.rl-wave', { opacity: 0.9, duration: 0.06, stagger: 0.16 }, 2.45)
    .to('.rl-wave', { scale: 5.4, opacity: 0, duration: 1.05, stagger: 0.16, ease: 'power2.out' }, 2.5)

    /* 8. Brand slams in on the roar */
    .to('.loader-brand', { opacity: 1, y: 0, duration: 0.45, ease: 'back.out(1.8)' }, 2.58)

    /* 9. Settle — the roar rings out */
    .to('.loader-lion', {
      scale: 1.04,
      filter: 'drop-shadow(0 0 26px rgba(201,168,76,0.55))',
      duration: 0.8, ease: 'elastic.out(1, 0.5)', transformOrigin: 'center'
    }, 3.0)

    /* 10. Mouth eases to a snarl, eyes reopen */
    .to('.rl-mouth',    { scaleY: 0.5, duration: 0.55, ease: 'power2.inOut' }, 3.65)
    .to('.rl-wrinkles', { opacity: 0.25, duration: 0.5 }, 3.65)
    .to('.rl-eyes',     { scaleY: 1, duration: 0.5, ease: 'power2.out' }, 3.65)
    .to('.rl-brow',     { y: 0, duration: 0.5, ease: 'power2.out' }, 3.65)

    /* 11. Eye glow pulse until fade-out */
    .to('.rl-eyes', {
      filter: 'drop-shadow(0 0 14px rgba(255,220,0,0.9))',
      duration: 1.1, yoyo: true, repeat: -1, ease: 'sine.inOut'
    }, 4.2);

  /* ─── Fade out + reveal site at 4.7 s ─── */
  setTimeout(function () {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.85,
      ease: 'power2.inOut',
      onComplete: function () { loader.style.display = 'none'; }
    });
    document.body.classList.add('loaded');
  }, 4700);
})();
