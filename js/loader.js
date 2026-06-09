/*!
 * Leone Nero S.r.l. — Loader (GSAP timeline)
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
  gsap.set('.ln-aura',   { opacity: 0, scale: 0, svgOrigin: '250 252' });
  gsap.set('.ln-md',     { opacity: 0, scale: 0, svgOrigin: '250 250' });
  gsap.set('.ln-spikes use', { opacity: 0, scale: 0, svgOrigin: '250 250' });
  gsap.set('.ln-mb',     { opacity: 0, scale: 0, svgOrigin: '250 250' });
  gsap.set('.ln-mm',     { opacity: 0, scale: 0, svgOrigin: '250 248' });
  gsap.set('.ln-mi',     { opacity: 0, scale: 0, svgOrigin: '250 246' });
  gsap.set('.ln-face',   { opacity: 0, scale: 0.5, svgOrigin: '250 280' });
  gsap.set('.ln-eye-l',  { opacity: 0, scale: 0, svgOrigin: '195 228' });
  gsap.set('.ln-eye-r',  { opacity: 0, scale: 0, svgOrigin: '305 228' });
  gsap.set('.ln-nose',   { opacity: 0, y: -12 });
  gsap.set('.ln-jaw',    { opacity: 0, scaleY: 0, svgOrigin: '250 332' });
  gsap.set('.ln-tooth',  { opacity: 0, y: -10 });
  gsap.set('.ln-tongue', { opacity: 0 });
  gsap.set('.ln-whiskers line', { opacity: 0, scaleX: 0, svgOrigin: '206 297' });
  gsap.set('.loader-brand', { opacity: 0, y: 16 });

  /* ─── Main timeline ─── */
  var tl = gsap.timeline();

  tl
    /* 1. Aura & mane outer dark */
    .to('.ln-aura', { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }, 0.1)
    .to('.ln-md',   { opacity: 1, scale: 1, duration: 0.65, ease: 'back.out(1.4)' }, 0.18)

    /* 2. Spikes fan outward one by one */
    .to('.ln-spikes use', {
      opacity: 1, scale: 1,
      duration: 0.45,
      stagger: { amount: 0.5, from: 'start' },
      ease: 'back.out(2.4)'
    }, 0.28)

    /* 3. Mane layers build inward */
    .to('.ln-mb', { opacity: 1, scale: 1, duration: 0.38, ease: 'power2.out' }, 0.52)
    .to('.ln-mm', { opacity: 1, scale: 1, duration: 0.32, ease: 'power2.out' }, 0.64)
    .to('.ln-mi', { opacity: 1, scale: 1, duration: 0.28, ease: 'power2.out' }, 0.75)

    /* 4. Face snaps in */
    .to('.ln-face', { opacity: 1, scale: 1, duration: 0.42, ease: 'back.out(1.7)' }, 0.84)

    /* 5. Eyes open (left then right) */
    .to('.ln-eye-l', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.8)' }, 1.10)
    .to('.ln-eye-r', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.8)' }, 1.20)

    /* 6. Nose appears */
    .to('.ln-nose', { opacity: 1, y: 0, duration: 0.24, ease: 'power2.out' }, 1.34)

    /* 7. Jaw drops */
    .to('.ln-jaw', { opacity: 1, scaleY: 1, duration: 0.36, ease: 'back.out(1.3)' }, 1.42)

    /* 8. Teeth drop in */
    .to('.ln-tooth', { opacity: 1, y: 0, duration: 0.2, stagger: 0.04, ease: 'power3.out' }, 1.52)

    /* 9. Tongue */
    .to('.ln-tongue', { opacity: 1, duration: 0.18 }, 1.66)

    /* 10. Whiskers shoot out */
    .to('.ln-whiskers line', {
      opacity: 1, scaleX: 1,
      duration: 0.28,
      stagger: 0.04,
      ease: 'power3.out'
    }, 1.72)

    /* 11. ROAR — gold burst then settle */
    .to('.loader-lion', {
      filter: 'drop-shadow(0 0 72px rgba(255,208,0,0.98)) drop-shadow(0 0 36px rgba(201,168,76,1))',
      scale: 1.13,
      duration: 0.26,
      ease: 'power3.in',
      transformOrigin: 'center'
    }, 2.02)
    .to('.loader-lion', {
      filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.55))',
      scale: 1.0,
      duration: 0.6,
      ease: 'elastic.out(1.1, 0.44)',
      transformOrigin: 'center'
    }, 2.28)

    /* 12. Brand name slides up */
    .to('.loader-brand', { opacity: 1, y: 0, duration: 0.48, ease: 'power2.out' }, 2.36)

    /* 13. Eye glow pulse (runs indefinitely until fadeout) */
    .to(['.ln-eye-l', '.ln-eye-r'], {
      filter: 'drop-shadow(0 0 12px rgba(255,220,0,0.92)) drop-shadow(0 0 5px rgba(255,200,0,0.72))',
      duration: 1.3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    }, 2.5);

  /* ─── Fade out + reveal site at 4.6 s ─── */
  setTimeout(function () {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.88,
      ease: 'power2.inOut',
      onComplete: function () { loader.style.display = 'none'; }
    });
    document.body.classList.add('loaded');
  }, 4600);
})();
