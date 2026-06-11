import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sobre from './components/Sobre.jsx';
import Formacao from './components/Formacao.jsx';
import Processo from './components/Processo.jsx';
import Experiencia from './components/Experiencia.jsx';
import Skills from './components/Skills.jsx';
import Servicos from './components/Servicos.jsx';
import Projetos from './components/Projetos.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';
import SectionPagination from './components/SectionPagination.jsx';

import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Animações ao rolar (mesma configuração do script original), executadas
  // depois que os componentes já estão montados no DOM.
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      reset: false,
      mobile: true,
    });

    sr.reveal('.welcome-text h1', { delay: 300, origin: 'left', distance: '80px' });
    sr.reveal('.welcome-text p', { delay: 500 });
    sr.reveal('.button-div', { delay: 700, origin: 'bottom', distance: '40px' });
    sr.reveal('.welcome-photo', { delay: 400, origin: 'right', distance: '80px', scale: 0.85 });

    sr.reveal('.sobre-div', { delay: 200, scale: 0.95 });

    sr.reveal('#formacao h2', { delay: 200 });
    sr.reveal('.edu-card', { delay: 300, interval: 200 });

    sr.reveal('#processo h2', { delay: 200 });
    sr.reveal('.process-subtitle', { delay: 300 });
    sr.reveal('.process-card', { delay: 400, interval: 150, origin: 'bottom', distance: '50px' });

    sr.reveal('#experiencia h2', { delay: 200 });
    sr.reveal('.job-card', { delay: 300, interval: 200, origin: 'left', distance: '60px' });

    sr.reveal('#skills h2', { delay: 200 });
    sr.reveal('.skill-card', { delay: 300, interval: 100, scale: 0.9 });

    sr.reveal('.services-section h2', { delay: 200 });
    sr.reveal('.services-subtitle', { delay: 300 });
    sr.reveal('.service-card', { delay: 400, interval: 150, origin: 'bottom', distance: '50px' });

    sr.reveal('#projects h2', { delay: 200 });
    sr.reveal('.subtitle', { delay: 300 });
    sr.reveal('.project-card', { delay: 400, interval: 150, origin: 'bottom', distance: '60px', scale: 0.95 });

    sr.reveal('.contact-header', { delay: 200, origin: 'top' });
    sr.reveal('#contact-link', { delay: 400, scale: 0.8 });

    return () => sr.destroy();
  }, []);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <hr />
        <Sobre />
        <hr />
        <Formacao />
        <hr />
        <Processo />
        <hr />
        <Experiencia />
        <hr />
        <Skills />
        <hr />
        <Servicos />
        <hr />
        <Projetos />
        <Contato />
      </main>

      <Footer />

      <SectionPagination />
    </>
  );
}
