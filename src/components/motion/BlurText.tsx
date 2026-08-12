import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../../utils/cn';

export interface BlurTextProps {
  text: string;
  highlightText?: string;
  className?: string;
  delay?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  highlightText = 'INTELLIGENT SYSTEMS',
  className,
  delay = 100
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Split sentence into words for clean staggered blur-fade reveal
  const words = text.split(' ');

  return (
    <h1
      ref={ref}
      className={cn('tracking-tight text-white font-sans leading-[1.1]', className)}
    >
      {words.map((word, idx) => {
        const isHighlight = highlightText && word.includes(highlightText.split(' ')[0]);
        const isHighlightSecond = highlightText && word.includes(highlightText.split(' ')[1] || '');

        return (
          <span
            key={idx}
            className={cn(
              'inline-block transition-all duration-700 ease-out mr-[0.25em] last:mr-0',
              inView ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-3',
              (isHighlight || isHighlightSecond) ? 'text-cyan-400 font-bold' : ''
            )}
            style={{ transitionDelay: `${delay + idx * 70}ms` }}
          >
            {word}
          </span>
        );
      })}
    </h1>
  );
};
