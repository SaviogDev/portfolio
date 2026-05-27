import React, { useEffect, useRef, useState } from 'react';

export function ScrollReveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${visible ? 'reveal-visible' : ''}`}
      style={{
        transitionDelay: `${delay}s`,
        width: '100%',
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
