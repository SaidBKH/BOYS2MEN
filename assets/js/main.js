/* ============================================================
   BOYS 2 MEN — MAIN.JS
   Lenis · GSAP init · Loader · Navbar · Mobile menu
   ============================================================ */

/* ---- GSAP REGISTRATION ---- */
gsap.registerPlugin(ScrollTrigger);

/* ---- LENIS SMOOTH SCROLL ---- */
const lenis = new Lenis({
  duration: 1.3,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

/* ---- LOADER ---- */
const loader  = document.getElementById('loader');
const body    = document.body;

window.addEventListener('load', () => {
  body.classList.add('is-loading');

  setTimeout(() => {
    if (loader) loader.classList.add('hidden');
    body.classList.remove('is-loading');

    // Hero entry
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('loaded');

    // Start page animations
    if (typeof initAnimations === 'function') initAnimations();
  }, 1600);
});

/* ---- NAVBAR ---- */
const navbar = document.getElementById('navbar');

ScrollTrigger.create({
  start: 80,
  onEnter:      () => navbar && navbar.classList.add('is-scrolled'),
  onLeaveBack:  () => navbar && navbar.classList.remove('is-scrolled'),
});

/* ---- ACTIVE LINK ---- */
(function setActiveLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link, .nav-mobile__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === page ||
      (page === '' && href === 'index.html') ||
      (page === 'index.html' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
})();

/* ---- MOBILE MENU ---- */
const burger    = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');

if (burger && navMobile) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('is-open');
    navMobile.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (isOpen) {
      // Stagger mobile links in
      gsap.fromTo('.nav-mobile__links li', {
        y: 40, opacity: 0
      }, {
        y: 0, opacity: 1,
        stagger: 0.07,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.15
      });
    }
  });

  // Close on link click
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-open');
      navMobile.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMobile.classList.contains('is-open')) {
      burger.classList.remove('is-open');
      navMobile.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

/* ---- TICKER (GSAP infinite marquee) ---- */
function initTicker() {
  const track = document.querySelector('.ticker__track');
  if (!track) return;

  // Duplicate content for seamless loop
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);

  gsap.to([track, clone], {
    x: '-100%',
    duration: 22,
    ease: 'linear',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % 100)
    }
  });

  // Simple approach - just duplicate and animate both
  gsap.set([track, clone], { x: '0%' });

  const tl = gsap.timeline({ repeat: -1 });
  tl.to(track, { x: '-100%', duration: 22, ease: 'linear' })
    .set(track, { x: '0%' }, '+=0');

  const tl2 = gsap.timeline({ repeat: -1, delay: 11 });
  tl2.to(clone, { x: '-100%', duration: 22, ease: 'linear' })
     .set(clone, { x: '0%' }, '+=0');
}

/* Better ticker implementation */
function initTickerV2() {
  const ticker = document.querySelector('.ticker__track');
  if (!ticker) return;

  const items = ticker.innerHTML;
  ticker.innerHTML = items + items + items;

  const totalWidth = ticker.scrollWidth / 3;

  gsap.fromTo(ticker,
    { x: 0 },
    {
      x: -totalWidth,
      duration: 24,
      ease: 'linear',
      repeat: -1,
    }
  );
}

document.addEventListener('DOMContentLoaded', initTickerV2);
