import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ finalValue }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationDuration = 600; // milliseconds
          const steps = 100; // Number of steps
          const stepDuration = animationDuration / steps;
          const increment = finalValue / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            setCount(prevCount => {
              const newValue = Math.min(prevCount + increment, finalValue);
              return currentStep === steps ? finalValue : newValue;
            });
            if (currentStep === steps) clearInterval(interval);
          }, stepDuration);

          observer.unobserve(entry.target);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [finalValue]);

  return <span ref={elementRef}>{Math.floor(count)}</span>;
};
export default AnimatedCounter;