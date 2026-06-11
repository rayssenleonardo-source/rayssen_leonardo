import RevealSection from './RevealSection.jsx';
import { projects } from '../data/portfolio.js';

export default function Projetos() {
  return (
    <RevealSection id="projects">
      <h2>Projetos</h2>
      <p className="subtitle">Identidades visuais &amp; sistemas de marca</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-meta">
              <span className="badge">{project.badge}</span>
              <span className="project-year">{project.year}</span>
            </div>

            <div
              className="project-thumbnail"
              style={{ backgroundImage: `url(${project.thumb})` }}
              role="img"
              aria-label={`Capa do projeto ${project.title}`}
            ></div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-file-pdf"></i> Ver apresentação
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
