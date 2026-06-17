/* ============================================================
   BOYS 2 MEN — ANIMATIONS.JS
   All GSAP ScrollTrigger animations
   ============================================================ */

function initAnimations() {

  /* ---- HERO ---- */
  const heroLines = gsap.utils.toArray('.hero__title .hline span');
  if (heroLines.length) {
    gsap.to(heroLines, {
      y: 0,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.12,
      delay: 0.1
    });
  }

  gsap.to('.hero__eyebrow', {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
    delay: 0.6
  });

  gsap.to('.hero__subtitle', {
    opacity: 1,
    duration: 0.9,
    ease: 'power2.out',
    delay: 0.8
  });

  gsap.to('.hero__actions', {
    opacity: 1,
    duration: 0.9,
    ease: 'power2.out',
    delay: 1.0
  });

  /* ---- HERO PARALLAX ---- */
  const heroImg = document.querySelector('.hero__img');
  if (heroImg) {
    gsap.to(heroImg, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      }
    });
  }

  /* ---- MANIFESTO TEXT REVEAL ---- */
  const manifLines = gsap.utils.toArray('.manifesto__line span');
  if (manifLines.length) {
    gsap.from(manifLines, {
      y: '110%',
      opacity: 0,
      duration: 1.0,
      ease: 'expo.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.manifesto',
        start: 'top 72%',
      }
    });
  }

  gsap.from('.manifesto__label', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.manifesto__label', start: 'top 85%' }
  });

  /* ---- SECTION LABELS REVEAL ---- */
  gsap.utils.toArray('.section-label').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      x: -20,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  /* ---- SERVICES CARDS ---- */
  const serviceCards = gsap.utils.toArray('.service-card');
  if (serviceCards.length) {
    gsap.from(serviceCards, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: '.services__grid',
        start: 'top 80%',
      }
    });
  }

  gsap.from('.services__title', {
    y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '.services__header', start: 'top 85%' }
  });

  /* ---- GALLERY IMAGES ---- */
  const immItems = gsap.utils.toArray('.immersion__item');
  immItems.forEach((item, i) => {
    gsap.fromTo(item,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: 'expo.inOut',
        delay: i * 0.15,
        scrollTrigger: {
          trigger: '.immersion',
          start: 'top 85%',
        }
      }
    );
  });

  /* ---- REVIEWS COUNTER ---- */
  const scoreEl = document.querySelector('.reviews__score');
  if (scoreEl) {
    gsap.from('.reviews__score-wrap', {
      y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.reviews', start: 'top 75%' }
    });

    let obj = { val: 0 };
    gsap.to(obj, {
      val: 4.6,
      duration: 2.2,
      ease: 'power2.out',
      onUpdate: () => {
        scoreEl.textContent = obj.val.toFixed(1);
      },
      scrollTrigger: { trigger: '.reviews', start: 'top 72%', once: true }
    });

    gsap.from('.reviews__stars, .reviews__count, .reviews__source', {
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.reviews', start: 'top 70%' }
    });
  }

  /* ---- CTA FINAL ---- */
  const ctaLines = gsap.utils.toArray('.cta-final .hline span');
  if (ctaLines.length) {
    gsap.from(ctaLines, {
      y: '110%',
      duration: 1.0,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: '.cta-final', start: 'top 75%' }
    });
  }

  gsap.from('.cta-final__sub', {
    opacity: 0, y: 24, duration: 0.8,
    scrollTrigger: { trigger: '.cta-final__sub', start: 'top 88%' }
  });

  gsap.from('.cta-final .btn', {
    opacity: 0, y: 20, duration: 0.7,
    scrollTrigger: { trigger: '.cta-final .btn', start: 'top 90%' }
  });

  /* ---- GENERIC FADE-UP (cards, headings, etc.) ---- */
  gsap.utils.toArray('[data-reveal]').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.from(el, {
      y: 50, opacity: 0,
      duration: 0.9,
      delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 86%' }
    });
  });

  /* ---- IMAGE REVEALS (clip-path) ---- */
  gsap.utils.toArray('[data-img-reveal]').forEach((img, i) => {
    const delay = parseFloat(img.dataset.delay || i * 0.12);
    gsap.fromTo(img,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.3,
        delay,
        ease: 'expo.inOut',
        scrollTrigger: { trigger: img, start: 'top 88%' }
      }
    );
  });

  /* ---- STAGGER GRIDS ---- */
  gsap.utils.toArray('[data-stagger]').forEach(parent => {
    const children = parent.querySelectorAll(':scope > *');
    gsap.from(children, {
      y: 50, opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: parent, start: 'top 82%' }
    });
  });

  /* ---- CONCEPT PAGE — SPLIT IMAGES ---- */
  gsap.utils.toArray('.concept-split__img').forEach(img => {
    gsap.fromTo(img,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: 'expo.inOut',
        scrollTrigger: { trigger: img, start: 'top 80%' }
      }
    );
    gsap.from(img.querySelector('img'), {
      scale: 1.12,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: img, start: 'top 80%' }
    });
  });

  /* ---- CONCEPT — FULL WIDTH IMAGE PARALLAX ---- */
  gsap.utils.toArray('.concept-full').forEach(sec => {
    const img = sec.querySelector('img');
    if (img) {
      gsap.to(img, {
        y: '18%',
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    }
  });

  /* ---- PRESTATIONS CARDS ---- */
  const prestaCards = gsap.utils.toArray('.presta-card');
  if (prestaCards.length) {
    gsap.from(prestaCards, {
      y: 70, opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.13,
      scrollTrigger: { trigger: '.presta-grid', start: 'top 80%' }
    });
  }

  /* ---- WHY CARDS ---- */
  const whyCards = gsap.utils.toArray('.why-card');
  if (whyCards.length) {
    gsap.from(whyCards, {
      y: 60, opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.13,
      scrollTrigger: { trigger: '.why-grid', start: 'top 80%' }
    });
  }

  /* ---- PROFILE LIST ITEMS ---- */
  const profileItems = gsap.utils.toArray('.profile-item');
  if (profileItems.length) {
    gsap.from(profileItems, {
      x: -30, opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.profile-list', start: 'top 80%' }
    });
  }

  /* ---- AVANTAGES CARDS ---- */
  const avCards = gsap.utils.toArray('.avantage-card');
  if (avCards.length) {
    gsap.from(avCards, {
      y: 50, opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: '.avantages-grid', start: 'top 80%' }
    });
  }

  /* ---- PAGE HERO TEXT ---- */
  gsap.utils.toArray('.page-hero__content, .join-hero__content, .prestations-hero__content').forEach(el => {
    gsap.from(el.children, {
      y: 40, opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.3
    });
  });

  /* ---- FOOTER ---- */
  gsap.from('.footer__grid > *', {
    y: 30, opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '.footer__grid', start: 'top 90%' }
  });

}

/* Expose globally */
window.initAnimations = initAnimations;

/* If page already loaded, init immediately */
if (document.readyState === 'complete') {
  setTimeout(initAnimations, 1700);
}
