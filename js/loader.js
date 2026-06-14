/*!
 * Leone Nero S.r.l. — Loader
 * A cinematic black-lion roar (Higgsfield AI video) that plays once and then
 * fades smoothly into the site. Fully self-contained: no external libraries.
 * Robust against autoplay blocking, slow networks, and missing media — the
 * loader can never trap the visitor behind it.
 */
(function () {
  'use strict';

  var loader = document.getElementById('loader');
  if (!loader) { document.body.classList.add('loaded'); return; }

  var video = document.getElementById('loader-video');
  var brand = loader.querySelector('.loader-brand');
  var done  = false;

  /* Reveal the site and retire the loader (idempotent) */
  function reveal() {
    if (done) return;
    done = true;
    document.body.classList.add('loaded');
    loader.classList.add('hiding');
    setTimeout(function () {
      loader.style.display = 'none';
      if (video) {
        try { video.pause(); video.removeAttribute('src'); video.load(); } catch (e) {}
      }
    }, 1100); /* matches #loader opacity transition */
  }

  /* Accessibility: honour reduced-motion — skip the roar entirely */
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (video) { try { video.pause(); } catch (e) {} }
    reveal();
    return;
  }

  /* Bring the brand wordmark in shortly after the roar begins */
  if (brand) { setTimeout(function () { brand.classList.add('show'); }, 900); }

  /* Hard safety net: reveal no matter what after 9 s */
  var safety = setTimeout(reveal, 9000);

  if (!video) { setTimeout(reveal, 2600); return; }

  /* End of clip → reveal. Also reveal on any media error. */
  video.addEventListener('ended', reveal);
  video.addEventListener('error', reveal);
  if (video.querySelector('source')) {
    video.querySelector('source').addEventListener('error', reveal);
  }

  /* Once we know the real duration, hand off to the site a hair before the
     clip ends so the CSS fade overlaps the video's own fade-to-black. */
  video.addEventListener('loadedmetadata', function () {
    var d = video.duration;
    if (isFinite(d) && d > 0.5) {
      clearTimeout(safety);
      safety = setTimeout(reveal, d * 1000 + 2500);          /* backup if 'ended' misfires */
      setTimeout(reveal, Math.max(400, (d - 0.5) * 1000));   /* seamless hand-off */
    }
  });

  /* Kick off playback. Muted + playsinline should satisfy autoplay policies;
     if a browser still blocks it, fall back to a brief poster hold. */
  var p = video.play();
  if (p && typeof p.catch === 'function') {
    p.catch(function () { setTimeout(reveal, 2600); });
  }
})();
