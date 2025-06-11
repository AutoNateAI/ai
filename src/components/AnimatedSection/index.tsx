import React, { useEffect, useRef, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={sectionRef}
      className={clsx(
        styles.animatedSection,
        isVisible && styles.visible,
        className
      )}
    >
      {children}
    </div>
  );
}
