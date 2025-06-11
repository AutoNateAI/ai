import React from 'react';
import FloatingCard from '../FloatingCard';
import styles from './styles.module.css';

export interface TestimonialCardProps {
  content: string;
  authorName: string;
  authorTitle: string;
}

export default function TestimonialCard({
  content,
  authorName,
  authorTitle,
}: TestimonialCardProps): JSX.Element {
  return (
    <FloatingCard className={styles.testimonialCard}>
      <div className={styles.testimonialContent}>
        "{content}"
      </div>
      <div className={styles.testimonialAuthor}>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{authorName}</div>
          <div className={styles.authorTitle}>{authorTitle}</div>
        </div>
      </div>
    </FloatingCard>
  );
}
