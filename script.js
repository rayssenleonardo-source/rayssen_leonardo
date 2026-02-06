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
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  if (textElement) {
    type();
  }

  /* ================== HERO AO CARREGAR ================== */
  const hero = document.querySelector('#welcome-section .welcome-hero');
  if (hero) {
    setTimeout(() => {
      hero.classList.add('hero-enter');
    }, 100);
  }

  /* ================== PAGINAÇÃO LATERAL DAS SEÇÕES ================== */
  const paginationDots = document.querySelectorAll('.section-pagination button');
  const scrollSections = document.querySelectorAll('section[id]');

  if (paginationDots.length && scrollSections.length) {
    // Clique no dot -> rola até a seção
    paginationDots.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Observa qual seção está em destaque e acende o dot correspondente
    const pagObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleId = entry.target.id;
            paginationDots.forEach((btn) => {
              const btnTarget = btn.getAttribute('data-target');
              btn.classList.toggle('active', btnTarget === visibleId);
            });
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    scrollSections.forEach((sec) => pagObserver.observe(sec));
  }

  /* ================== REVEAL DAS SEÇÕES (ENTRA E SOME) ================== */
  const sections = Array.from(document.querySelectorAll('section')).filter(
    (sec) => sec.id && sec.id !== 'welcome-section'
  );

  sections.forEach((sec) => sec.classList.add('reveal-section'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  } else {
    sections.forEach((sec) => sec.classList.add('is-visible'));
  }

  /* ================== TEMA CLARO/ESCURO ================== */
  const root = document.documentElement;
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('rl-portfolio-theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.setAttribute('data-theme', storedTheme);
  }

  updateThemeIcon();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('rl-portfolio-theme', newTheme);
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (!icon) return;
    const theme = root.getAttribute('data-theme') || 'dark';
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }

  /* ================== MENU MOBILE ================== */
  const menuToggleBtn = document.querySelector('.menu-toggle');
  const navbar = document.getElementById('navbar');

  if (menuToggleBtn && navbar) {
    menuToggleBtn.addEventListener('click', () => {
      navbar.classList.toggle('open');
      menuToggleBtn.classList.toggle('is-open');
    });

    // Fecha o menu ao clicar em qualquer link (no mobile)
    navbar.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 720) {
          navbar.classList.remove('open');
          menuToggleBtn.classList.remove('is-open');
        }
      });
    });
  }

  /* ================== SMOOTH SCROLL PARA TODOS OS LINKS ÂNCORA ================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* ================== SCROLL REVEAL (ANIMAÇÕES AO ROLAR) ================== */
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      reset: false,
      mobile: true
    });

    // Hero Section
    sr.reveal('.welcome-text h1', { 
      delay: 300,
      origin: 'left',
      distance: '80px'
    });
    
    sr.reveal('.welcome-text p', { 
      delay: 500 
    });
    
    sr.reveal('.button-div', { 
      delay: 700,
      origin: 'bottom',
      distance: '40px'
    });
    
    sr.reveal('.welcome-photo', { 
      delay: 400,
      origin: 'right',
      distance: '80px',
      scale: 0.85
    });

    // Ticker de tecnologias
    sr.reveal('.tech-ticker-wrapper', { 
      delay: 900,
      origin: 'bottom',
      distance: '30px'
    });

    // Seções gerais
    sr.reveal('.sobre-div', { 
      delay: 200,
      scale: 0.95
    });

    sr.reveal('#formacao h2', { 
      delay: 200 
    });
    
    sr.reveal('.edu-card', { 
      delay: 300,
      interval: 200
    });

    // Processo
    sr.reveal('#processo h2', { 
      delay: 200 
    });
    
    sr.reveal('.process-subtitle', { 
      delay: 300 
    });
    
    sr.reveal('.process-card', { 
      delay: 400,
      interval: 150,
      origin: 'bottom',
      distance: '50px'
    });

    // Experiência
    sr.reveal('#experiencia h2', { 
      delay: 200 
    });
    
    sr.reveal('.job-card', { 
      delay: 300,
      interval: 200,
      origin: 'left',
      distance: '60px'
    });

    // Skills
    sr.reveal('#skills h2', { 
      delay: 200 
    });
    
    sr.reveal('.skill-card', { 
      delay: 300,
      interval: 100,
      scale: 0.9
    });

    // Serviços
    sr.reveal('.services-section h2', { 
      delay: 200 
    });
    
    sr.reveal('.services-subtitle', { 
      delay: 300 
    });
    
    sr.reveal('.service-card', { 
      delay: 400,
      interval: 150,
      origin: 'bottom',
      distance: '50px'
    });

    // Projetos
    sr.reveal('#projects h2', { 
      delay: 200 
    });
    
    sr.reveal('.subtitle', { 
      delay: 300 
    });
    
    sr.reveal('.project-card', { 
      delay: 400,
      interval: 150,
      origin: 'bottom',
      distance: '60px',
      scale: 0.95
    });

    // Contato
    sr.reveal('.contact-header', { 
      delay: 200,
      origin: 'top'
    });
    
    sr.reveal('#contact-link', { 
      delay: 400,
      scale: 0.8
    });
  }
});
