import RevealSection from './RevealSection.jsx';
import { jobs } from '../data/portfolio.js';

export default function Experiencia() {
  return (
    <RevealSection id="experiencia" style={{ padding: '50px 20px' }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '40px',
        }}
      >
        Experiência Profissional
      </h2>

      <div className="timeline">
        {jobs.map((job) => (
          <div className="job-card" key={job.title}>
            <h3>{job.title}</h3>
            <h4>{job.period}</h4>
            <ul>
              {job.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
