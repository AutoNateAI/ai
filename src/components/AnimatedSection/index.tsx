import React, { useEffect, useRef, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

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
  // Start with visible=true in SSR and non-browser environments
  const [isVisible, setIsVisible] = React.useState(!ExecutionEnvironment.canUseDOM);

  useEffect(() => {
    // Set a backup timer to make content visible even if IntersectionObserver fails
    const backupTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Show after 1 second as fallback

    // Only use IntersectionObserver in browser environments
    if (ExecutionEnvironment.canUseDOM && 'IntersectionObserver' in window) {
      try {
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
          clearTimeout(backupTimer);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      } catch (err) {
        console.error('Error with IntersectionObserver:', err);
        setIsVisible(true); // Show content if observer fails
        return () => clearTimeout(backupTimer);
      }
    } else {
      // If IntersectionObserver isn't available, make content visible
      setIsVisible(true);
      return () => clearTimeout(backupTimer);
    }
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
