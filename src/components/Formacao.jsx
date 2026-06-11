import RevealSection from './RevealSection.jsx';
import { educationItems } from '../data/portfolio.js';

export default function Formacao() {
  return (
    <RevealSection id="formacao">
      <h2>Formação</h2>
      <div className="education-grid">
        {educationItems.map((item) => (
          <div className="edu-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>
              <strong>{item.institution}</strong> | Conclusão: {item.conclusion}
            </p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
