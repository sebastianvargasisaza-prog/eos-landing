// EOS landing — JS mínimo
(function(){
  // Mobile menu toggle
  const btn = document.querySelector('.nav__menu-btn');
  const links = document.querySelector('.nav__links');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const tgt = document.querySelector(id);
        if (tgt) {
          e.preventDefault();
          tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (links) links.classList.remove('open');
        }
      }
    });
  });

  // Intersection observer fade
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('fade-up');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.card, .plan, .feature').forEach(el => io.observe(el));

  // Demo form (POSTs to Cloudflare Worker o Web3Forms — endpoint configurable)
  const form = document.querySelector('form[data-eos-form]');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = form.querySelector('[data-form-status]');
      const submit = form.querySelector('button[type=submit]');
      const data = Object.fromEntries(new FormData(form));
      submit.disabled = true;
      submit.textContent = 'Enviando...';
      try {
        const endpoint = form.dataset.endpoint || 'https://api.web3forms.com/submit';
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: form.dataset.key || '__W3F_KEY__',
            subject: 'EOS — nueva solicitud de demo',
            from_name: data.nombre || 'Demo EOS',
            ...data
          })
        });
        if (res.ok) {
          form.reset();
          if (status) {
            status.textContent = '✓ Recibido. Te contactamos en menos de 24 horas hábiles.';
            status.style.color = 'var(--eos-success)';
          }
        } else throw new Error('Network');
      } catch (err) {
        if (status) {
          status.textContent = 'No pudimos enviar. Escríbenos directo a sebastian@hhagroup.co';
          status.style.color = 'var(--eos-danger)';
        }
      } finally {
        submit.disabled = false;
        submit.textContent = 'Solicitar demo';
      }
    });
  }
})();
