/*!
 * Leone Nero S.r.l. — Main Site JavaScript
 */
(function () {
  'use strict';

  /* ── Navbar scroll behaviour ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile navigation ── */
  const burger    = document.getElementById('nav-burger');
  const mobileNav = document.getElementById('mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ── Animated counters ── */
  function animateCounter(el) {
    const raw    = el.dataset.target || el.textContent;
    const suffix = raw.replace(/[\d.]/g, '');
    const target = parseFloat(raw);
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const v = target * ease;
      el.textContent = (Number.isInteger(target) ? Math.round(v) : v.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (counters.length && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          co.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => co.observe(c));
  }

  /* ── Contact form — Formspree backend ── */
  // Sign up free at formspree.io, create a form, then replace the ID below.
  const FORMSPREE_ID = 'YOUR_FORM_ID';

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn     = contactForm.querySelector('button[type=submit]');
      const success = document.getElementById('form-success');
      const errMsg  = document.getElementById('form-error');

      const origText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled    = true;

      fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method : 'POST',
        body   : new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.ok || data.next) {
          contactForm.style.display = 'none';
          if (success) success.style.display = 'flex';
        } else {
          throw new Error('form rejected');
        }
      })
      .catch(function () {
        btn.textContent = origText;
        btn.disabled    = false;
        if (errMsg) {
          errMsg.style.display = 'block';
          setTimeout(function () { errMsg.style.display = 'none'; }, 4000);
        }
      });
    });
  }

  /* ── Smooth anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id  = this.getAttribute('href').slice(1);
      const el  = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const offset = 80;
      const top    = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Active nav link highlight ── */
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('#navbar .nav-links a, #mobile-nav a');

  if (sections.length) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => sio.observe(s));
  }

  /* ── Cursor glow (desktop only) ── */
  if (window.matchMedia('(pointer:fine)').matches) {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    Object.assign(glow.style, {
      position: 'fixed',
      width: '280px',
      height: '280px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(201,168,76,0.055) 0%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: '9990',
      transform: 'translate(-50%,-50%)',
      transition: 'opacity 0.3s',
      top: '-999px',
      left: '-999px',
    });
    document.body.appendChild(glow);

    let mx = -999, my = -999;
    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      glow.style.left = mx + 'px';
      glow.style.top  = my + 'px';
    }, { passive: true });
  }

  /* ── Year in footer ── */
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ── Cookie Consent Banner ── */
  (function () {
    const COOKIE_KEY = 'ln_cookie_consent';
    const banner    = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('cb-accept');
    const btnDecline= document.getElementById('cb-decline');

    if (!banner) return;

    function dismiss(choice) {
      banner.classList.remove('cb-visible');
      try { localStorage.setItem(COOKIE_KEY, choice); } catch (_) {}
      setTimeout(() => { banner.style.display = 'none'; }, 600);
    }

    function checkConsent() {
      try {
        const stored = localStorage.getItem(COOKIE_KEY);
        if (stored) return; // already decided
      } catch (_) {}
      // Show banner after a short delay
      setTimeout(() => banner.classList.add('cb-visible'), 1800);
    }

    if (btnAccept)  btnAccept.addEventListener ('click', () => dismiss('accepted'));
    if (btnDecline) btnDecline.addEventListener('click', () => dismiss('declined'));

    // Only run consent check after site is loaded
    if (document.body.classList.contains('loaded')) {
      checkConsent();
    } else {
      document.body.addEventListener('transitionend', function handler() {
        if (document.body.classList.contains('loaded')) {
          document.body.removeEventListener('transitionend', handler);
          checkConsent();
        }
      });
      // Fallback
      setTimeout(checkConsent, 6000);
    }
  })();

})();
