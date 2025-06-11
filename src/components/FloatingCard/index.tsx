import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  onClick?: () => void;
}

export default function FloatingCard({ 
  children, 
  className, 
  featured = false,
  onClick 
}: FloatingCardProps): JSX.Element {
  return (
    <div 
      className={clsx(
        styles.floatingCard, 
        featured && styles.featured,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
