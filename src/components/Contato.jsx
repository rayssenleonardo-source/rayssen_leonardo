import RevealSection from './RevealSection.jsx';
import { profile } from '../data/portfolio.js';

export default function Contato() {
  const { social } = profile;

  return (
    <RevealSection id="contact">
      <div className="contact-header">
        <h3>Vamos conversar?</h3>
        <p>Estou disponível para colaborações e novas oportunidades.</p>
        <hr />
      </div>

      <div id="contact-link">
        <div className="icon-div">
          <a
            className="linkedin"
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
        </div>

        <div className="icon-div">
          <a className="email" href={`mailto:${social.email}`}>
            <i className="fas fa-envelope fa-3x"></i>
          </a>
        </div>

        <div className="icon-div">
          <a
            className="numero"
            href={social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp fa-3x"></i>
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
