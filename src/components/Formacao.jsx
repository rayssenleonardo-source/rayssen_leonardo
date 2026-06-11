import RevealSection from './RevealSection.jsx';
import { certificationItems, educationItems } from '../data/portfolio.js';

export default function Formacao() {
  return (
    <RevealSection id="formacao">
      <h2>Formação</h2>
      <h3 className="education-section-title">Formação acadêmica</h3>
      <div className="education-grid">
        {educationItems.map((item) => (
          <div className="edu-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>
              <strong>{item.institution}</strong> | {item.period}
            </p>
          </div>
        ))}
      </div>

      <h3 className="education-section-title education-section-title--spaced">
        Cursos e certificações
      </h3>
      <div className="certifications-grid">
        {certificationItems.map((item) => (
          <div className="edu-card certification-card" key={item.title}>
            <span className="certification-meta">
              {item.institution ? `${item.institution} | ` : ''}
              {item.period}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
