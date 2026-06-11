import RevealSection from './RevealSection.jsx';
import { services } from '../data/portfolio.js';

export default function Servicos() {
  return (
    <RevealSection id="servicos" className="services-section">
      <h2>Como posso ajudar</h2>
      <p className="services-subtitle">
        Do conceito à aplicação final: crio identidades visuais completas,
        materiais de apoio e peças para o dia a dia da sua marca.
      </p>

      <div className="button-div">
        <a href="#contact">Falar sobre um projeto</a>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
