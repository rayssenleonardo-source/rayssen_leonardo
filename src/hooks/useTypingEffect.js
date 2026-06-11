import { useEffect, useRef, useState } from 'react';

// Reproduz o efeito de digitação do script original: escreve e apaga
// cada frase em sequência, em loop.
export function useTypingEffect(phrases, { typeSpeed = 100, deleteSpeed = 50 } = {}) {
  const [text, setText] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!phrases.length) return undefined;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const tick = () => {
      const currentPhrase = phrases[phraseIndex];
      let nextDelay;

      if (isDeleting) {
        charIndex -= 1;
        setText(currentPhrase.substring(0, charIndex));
        nextDelay = deleteSpeed;
      } else {
        charIndex += 1;
        setText(currentPhrase.substring(0, charIndex));
        nextDelay = typeSpeed;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        nextDelay = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        nextDelay = 500;
      }

      timeoutRef.current = window.setTimeout(tick, nextDelay);
    };

    timeoutRef.current = window.setTimeout(tick, typeSpeed);

    return () => window.clearTimeout(timeoutRef.current);
  }, [phrases, typeSpeed, deleteSpeed]);

  return text;
}
