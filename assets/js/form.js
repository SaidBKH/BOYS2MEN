/* ============================================================
   BOYS 2 MEN — FORM.JS
   Candidature form validation & file upload
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const form    = document.getElementById('candidatureForm');
  const fileInput = document.getElementById('cv');
  const fileHint  = document.querySelector('.form__file-hint');
  const success   = document.querySelector('.form__success');

  if (!form) return;

  /* ---- FILE UPLOAD DISPLAY ---- */
  if (fileInput && fileHint) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) {
        const name = file.name.length > 28
          ? file.name.substring(0, 25) + '...'
          : file.name;
        fileHint.textContent = name;
        fileHint.style.color = 'var(--gold)';
      } else {
        fileHint.textContent = 'PDF, DOC — MAX 5MB';
        fileHint.style.color = '';
      }
    });
  }

  /* ---- SELECT HAS VALUE ---- */
  const selects = form.querySelectorAll('select');
  selects.forEach(sel => {
    sel.addEventListener('change', () => {
      sel.classList.toggle('has-value', sel.value !== '');
    });
  });

  /* ---- VALIDATION ---- */
  function validate() {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const wrapper = field.closest('.form__field');
      if (!field.value.trim()) {
        valid = false;
        wrapper && wrapper.classList.add('is-error');
      } else {
        wrapper && wrapper.classList.remove('is-error');
      }
    });

    const email = form.querySelector('input[type="email"]');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.closest('.form__field').classList.add('is-error');
      valid = false;
    }

    return valid;
  }

  /* ---- ERROR STYLES ---- */
  const style = document.createElement('style');
  style.textContent = `
    .form__field.is-error input,
    .form__field.is-error textarea,
    .form__field.is-error select {
      border-bottom-color: var(--error) !important;
    }
    .form__field.is-error label {
      color: var(--error) !important;
    }
  `;
  document.head.appendChild(style);

  /* ---- SUBMIT ---- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validate()) {
      // Shake animation on first error
      const firstError = form.querySelector('.is-error');
      if (firstError) {
        gsap.fromTo(firstError, { x: -6 }, {
          x: 0, duration: 0.4, ease: 'elastic.out(1,0.3)',
          onStart: () => gsap.set(firstError, { x: -6 })
        });
        gsap.to(firstError, { x: [0, -8, 8, -8, 8, -4, 4, 0], duration: 0.5, ease: 'power2.out' });
      }
      return;
    }

    /* Simulate success (no backend) */
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.querySelector('.btn__text').textContent;

    submitBtn.querySelector('.btn__text').textContent = 'ENVOI...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      selects.forEach(s => s.classList.remove('has-value'));
      if (fileHint) {
        fileHint.textContent = 'PDF, DOC — MAX 5MB';
        fileHint.style.color = '';
      }
      submitBtn.querySelector('.btn__text').textContent = originalText;
      submitBtn.disabled = false;

      if (success) {
        success.classList.add('visible');
        gsap.from(success, { y: 20, opacity: 0, duration: 0.5 });
        setTimeout(() => success.classList.remove('visible'), 6000);
      }
    }, 1200);
  });

  /* ---- LIVE CLEAR ERRORS ---- */
  form.addEventListener('input', (e) => {
    const wrapper = e.target.closest('.form__field');
    if (wrapper && e.target.value.trim()) {
      wrapper.classList.remove('is-error');
    }
  });

});
