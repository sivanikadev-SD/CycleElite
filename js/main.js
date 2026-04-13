/* ===================================================
   CYCLE PLATFORM — Main JS
   =================================================== */

// --- Theme Toggle ---
function getTheme() { return localStorage.getItem('cycle-theme') || 'dark'; }
function setTheme(t) {
  localStorage.setItem('cycle-theme', t);
  document.documentElement.setAttribute('data-theme', t);
  if (document.body) document.body.setAttribute('data-theme', t);
  document.querySelectorAll('[data-theme-icon]').forEach(el => {
    el.innerHTML = t === 'dark'
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  });
}

function toggleTheme() { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

// --- RTL Toggle ---
function getDir() { return localStorage.getItem('cycle-dir') || 'ltr'; }
function setDir(d) {
  localStorage.setItem('cycle-dir', d);
  document.documentElement.setAttribute('dir', d);
  if (document.body) document.body.setAttribute('dir', d);
  document.querySelectorAll('[data-rtl-icon]').forEach(el => {
    el.innerHTML = d === 'rtl'
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/></svg>`;
  });
}

function toggleDir() { setDir(getDir() === 'rtl' ? 'ltr' : 'rtl'); }

// --- Mobile Nav ---
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('mobileDrawer');
  if (!toggle || !drawer) return;
  toggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    toggle.classList.toggle('active', open);
  });
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !drawer.contains(e.target)) {
      drawer.classList.remove('open');
      toggle.classList.remove('active');
    }
  });
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// --- Staggered reveal ---
function initStaggerReveal() {
  const groups = document.querySelectorAll('.stagger-group');
  groups.forEach(g => {
    const children = g.querySelectorAll('.stagger-item');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          children.forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 100);
          });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    io.observe(g);
    children.forEach(c => c.classList.add('reveal'));
  });
}

// --- Smooth count up ---
function countUp(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = el.dataset.prefix
      ? el.dataset.prefix + Math.floor(start).toLocaleString()
      : Math.floor(start).toLocaleString() + (el.dataset.suffix || '');
  }, 16);
}

function initCountUp() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        countUp(e.target, parseFloat(e.target.dataset.count));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
}

// --- Sticky nav shadow ---
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// --- Active nav link ---
function setActiveNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// --- Password toggle ---
function initPasswordToggle() {
  document.querySelectorAll('[data-pw-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.pwToggle);
      if (!input) return;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.innerHTML = show
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    });
  });
}

// --- Password Strength ---
function initPasswordStrength() {
  const input = document.getElementById('password');
  const bars = document.querySelectorAll('.strength-bar');
  if (!input || !bars.length) return;
  input.addEventListener('input', () => {
    const v = input.value;
    let score = 0;
    if (v.length >= 8) score++;
    if (/[A-Z]/.test(v)) score++;
    if (/[0-9]/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    bars.forEach((b, i) => {
      b.classList.remove('active', 'weak', 'fair', 'strong');
      if (i < score) {
        b.classList.add('active');
        b.classList.add(score <= 1 ? 'weak' : score <= 2 ? 'fair' : 'strong');
      }
    });
  });
}

// --- Testimonials slider ---
function initTestimonials() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!track) return;
  let current = 0;
  const items = track.querySelectorAll('.testimonial-card');
  if (!items.length) return;

  function goTo(i) {
    current = (i + items.length) % items.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, j) => d.classList.toggle('active', j === current));
  }

  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  document.querySelector('.testimonial-prev')?.addEventListener('click', () => goTo(current - 1));
  document.querySelector('.testimonial-next')?.addEventListener('click', () => goTo(current + 1));

  if (items.length > 1) setInterval(() => goTo(current + 1), 5000);
}

// --- Tabs ---
function initTabs() {
  document.querySelectorAll('[data-tab-trigger]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const group = trigger.closest('[data-tab-group]');
      if (!group) return;
      const target = trigger.dataset.tabTrigger;
      group.querySelectorAll('[data-tab-trigger]').forEach(t => t.classList.toggle('active', t === trigger));
      group.querySelectorAll('[data-tab-content]').forEach(c => c.classList.toggle('hidden', c.dataset.tabContent !== target));
    });
  });
}

// --- Pricing toggle ---
function initPricingToggle() {
  const toggle = document.getElementById('billingToggle');
  if (!toggle) return;
  toggle.addEventListener('change', () => {
    const annual = toggle.checked;
    document.querySelectorAll('[data-price-monthly]').forEach(el => {
      el.textContent = annual ? el.dataset.priceAnnual : el.dataset.priceMonthly;
    });
    document.querySelectorAll('.billing-label').forEach((l, i) => {
      l.classList.toggle('active', annual ? i === 1 : i === 0);
    });
  });
}

// --- Init all ---
document.addEventListener('DOMContentLoaded', () => {
  setTheme(getTheme());
  setDir(getDir());
  initMobileNav();
  initScrollReveal();
  initStaggerReveal();
  initCountUp();
  initNavScroll();
  setActiveNav();
  initPasswordToggle();
  initPasswordStrength();
  initTestimonials();
  initTabs();
  initPricingToggle();
});
