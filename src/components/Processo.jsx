import RevealSection from './RevealSection.jsx';
import { processSteps } from '../data/portfolio.js';

export default function Processo() {
  return (
    <RevealSection id="processo">
      <div className="process-inner">
        <h2>Processo de Trabalho</h2>
        <p className="process-subtitle">
          Do briefing à entrega final, cada projeto passa por etapas bem
          definidas para garantir coerência visual, alinhamento com o cliente
          e aplicação prática da marca.
        </p>

        <div className="button-div">
          <a href="#projects">Ver cases na prática</a>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.title}>
              <div className="process-icon">
                <i className={step.icon}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
