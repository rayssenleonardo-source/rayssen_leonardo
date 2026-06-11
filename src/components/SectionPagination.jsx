import { paginationSections } from '../data/portfolio.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

const sectionIds = paginationSections.map((section) => section.id);

export default function SectionPagination() {
  const activeId = useActiveSection(sectionIds);

  const goToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="section-pagination">
      {paginationSections.map((section) => (
        <button
          key={section.id}
          type="button"
          className={activeId === section.id ? 'active' : ''}
          aria-label={section.label}
          onClick={() => goToSection(section.id)}
        ></button>
      ))}
    </div>
  );
}
