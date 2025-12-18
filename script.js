// script.js

document.addEventListener('DOMContentLoaded', () => {
  /* ================== TYPING EFFECT ================== */
  const textElement = document.querySelector('.typing-effect');

  const phrases = [
    'Identidade Visual',
    'Design Gráfico',
    'Edição de Vídeo',
    'Motion Design',
    'Direção de Arte'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    if (!textElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      textElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000; // pausa com a frase completa
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500; // pausa antes da próxima
    }

    setTimeout(type, typeSpeed);
  }

  if (textElement) {
    type();
  }

  /* ================== ANIMAÇÃO ENTRE SEÇÕES ================== */

  const sections = Array.from(document.querySelectorAll('section')).filter(
    (sec) => sec.id && sec.id !== 'welcome-section'
  );

  // Classe base para começar "escondida"
  sections.forEach((sec) => sec.classList.add('reveal-section'));

  // Fallback: se o navegador não suportar IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    sections.forEach((sec) => sec.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // remove para permitir reanimar ao voltar
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.25
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  /* ================== ANIMAÇÃO LEVE NO HERO AO CARREGAR ================== */

  const hero = document.querySelector('#welcome-section .welcome-hero');
  if (hero) {
    hero.classList.add('hero-enter');
  }
});
