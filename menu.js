// Gestion du menu latéral sur mobile
window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const backdrop = document.querySelector('.nav-backdrop');

  if (!burger || !navLinks || !backdrop) return;

  const closeMenu = () => {
    navLinks.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    backdrop.classList.toggle('show', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  backdrop.addEventListener('click', closeMenu);

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // Slider équipe (un cadre à la fois)
  const slider = document.querySelector('[data-team-slider]');
  if (slider) {
    const track = slider.querySelector('.team-track');
    const cards = Array.from(slider.querySelectorAll('.team-card'));
    const prevBtn = slider.querySelector('.team-btn.prev');
    const nextBtn = slider.querySelector('.team-btn.next');
    let index = 0;
    const total = cards.length;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      update();
    });

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % total;
      update();
    });

    update();
  }
});
