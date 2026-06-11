import RevealSection from './RevealSection.jsx';
import SkillAnimation from './SkillAnimation.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <RevealSection id="skills">
      <h2>Ferramentas</h2>
      <p className="skills-lead">
        Um conjunto híbrido para criar marcas, interfaces, automações e soluções digitais completas.
      </p>

      {skillGroups.map((group) => (
        <div className="skills-group" key={group.title}>
          <h3 className="skills-group-title">{group.title}</h3>
          <div className="skills-grid">
            {group.items.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-visual">
                  <SkillAnimation variant={skill.key} />
                  {skill.icon ? (
                    <img
                      className="skill-icon"
                      src={skill.icon}
                      alt={skill.name}
                      width="48"
                      height="48"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="skill-icon skill-symbol" aria-hidden="true">
                      {skill.lettermark ? (
                        skill.lettermark
                      ) : (
                        <i className={skill.iconClass} />
                      )}
                    </span>
                  )}
                </div>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </RevealSection>
  );
}
