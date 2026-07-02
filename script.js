(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    // Close the nav after tapping a link on mobile
    nav.addEventListener('click', (e) => {
      if (e.target instanceof HTMLAnchorElement && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  // Scroll reveal
  const revealables = document.querySelectorAll('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add('is-visible'));
  }

  // Newsletter signup → mailto: (swap for ConvertKit/Buttondown/Substack later)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.querySelectorAll('.newsletter-form').forEach((form) => {
    const errorEl = form.querySelector('.form-error');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = String(new FormData(form).get('email') || '').trim();

      if (!email || !emailPattern.test(email)) {
        if (errorEl) {
          errorEl.hidden = false;
          errorEl.textContent = 'Please enter a valid email address.';
        }
        return;
      }
      if (errorEl) errorEl.hidden = true;

      const subject = 'Newsletter signup';
      const body = `Please add ${email} to the newsletter. I'd like the free guide: "5 KrisFlyer Sweet Spots from SIN Nobody Books".`;
      window.location.href = `mailto:hello@themileswhisperer.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
})();
