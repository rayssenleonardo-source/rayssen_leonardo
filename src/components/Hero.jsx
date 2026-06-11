import { useEffect, useState } from 'react';
import { profile, typingPhrases } from '../data/portfolio.js';
import { useTypingEffect } from '../hooks/useTypingEffect.js';

export default function Hero() {
  const typedText = useTypingEffect(typingPhrases);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setEntered(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="welcome-section">
      <div className={`welcome-hero${entered ? ' hero-enter' : ''}`}>
        <div className="welcome-photo">
          <img
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            width="250"
            height="250"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="welcome-text">
          <h1>Olá, eu sou {profile.name}</h1>
          <p>
            e trabalho com{' '}
            <span className="typing-effect" style={{ color: '#d1af6e' }}>
              {typedText}
            </span>
            <span className="cursor">|</span>
          </p>

          <div className="button-div" style={{ marginTop: '20px' }}>
            <a href="#projects">Ver projetos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
