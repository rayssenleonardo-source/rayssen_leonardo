import { useState } from 'react';
import { navLinks } from '../data/portfolio.js';

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 720) {
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <button
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label="Abrir menu de navegação"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="navbar" className={menuOpen ? 'open' : ''}>
        {navLinks.map((link) => (
          <ul key={link.id}>
            <a href={`#${link.id}`} onClick={closeMenuOnMobile}>
              <li>{link.label}</li>
            </a>
          </ul>
        ))}

        <button
          className="theme-toggle"
          type="button"
          aria-label="Alternar tema claro/escuro"
          onClick={onToggleTheme}
        >
          <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
        </button>
      </div>
    </header>
  );
}
