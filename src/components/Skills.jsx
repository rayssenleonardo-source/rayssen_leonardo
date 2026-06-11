import RevealSection from './RevealSection.jsx';
import SkillAnimation from './SkillAnimation.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <RevealSection id="skills">
      <h2>Softwares</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-visual">
              <SkillAnimation variant={skill.key} />
              <img
                className="skill-icon"
                src={skill.icon}
                alt={skill.name}
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
