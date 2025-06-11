import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1 
}: AnimatedSectionProps) {
  // For non-browser environments, render content immediately without animation
  if (!ExecutionEnvironment.canUseDOM) {
    return <div className={className}>{children}</div>;
  }
  
  // For browser environments, use BrowserOnly to ensure proper hydration
  return (
    <BrowserOnly fallback={<div className={className}>{children}</div>}>
      {() => <AnimatedSectionBrowser children={children} className={className} delay={delay} threshold={threshold} />}
    </BrowserOnly>
  );
}

// Client-side only implementation of AnimatedSection
function AnimatedSectionBrowser({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1 
}: AnimatedSectionProps) {
  // Start with section invisible for animation
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set a fallback timer to ensure content becomes visible
    // even if IntersectionObserver fails or is unavailable
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Show content after 1 second regardless
    
    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        },
        { threshold } // Trigger when threshold visible
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
        clearTimeout(fallbackTimer);
      };
    } catch (error) {
      console.error('Error setting up IntersectionObserver:', error);
      setIsVisible(true); // Show content if observer setup fails
      clearTimeout(fallbackTimer);
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
