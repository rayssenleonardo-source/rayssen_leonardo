import { useEffect, useRef, useState } from 'react';

// Envolve uma <section> e aplica a classe `is-visible` quando ela entra na
// viewport (e remove ao sair), reproduzindo o reveal por scroll do original.
export default function RevealSection({ id, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = ['reveal-section', isVisible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes} ref={ref} {...rest}>
      {children}
    </section>
  );
}
