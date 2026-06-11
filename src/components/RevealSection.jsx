import { useEffect, useRef, useState } from 'react';

// Envolve uma <section> e aplica a classe `is-visible` na primeira vez que
// ela entra na viewport. A revelação é definitiva (não some mais ao rolar),
// evitando que a seção "pule" e conflite com as animações de cada card.
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
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
