/*!
 * Leone Nero S.r.l. — Loader controller
 * CSS/SVG animation — GPU-composited, identical speed on all devices.
 */
(function () {
  'use strict';

  const loader = document.getElementById('loader');

  /* Skip animation for users who prefer reduced motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('loaded');
    if (loader) loader.style.display = 'none';
    return;
  }

  const lion = loader ? loader.querySelector('.loader-lion') : null;

  /* Trigger roar effect at 1.8 s (after reveal finishes) */
  setTimeout(function () {
    if (lion) lion.classList.add('ln-roaring');
  }, 1800);

  /* Fade out and reveal site at 4.2 s */
  setTimeout(function () {
    if (!loader) return;
    loader.classList.add('hiding');
    document.body.classList.add('loaded');
    setTimeout(function () { loader.style.display = 'none'; }, 950);
  }, 4200);
})();
