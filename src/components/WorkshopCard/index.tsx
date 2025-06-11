import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import FloatingCard from '../FloatingCard';
import styles from './styles.module.css';

export interface WorkshopCardProps {
  title: string;
  duration: string;
  description: string;
  includes: string[];
  price: string;
  priceNote: string;
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
  badge?: string;
  forList?: string[];
  secondary?: boolean;
}

export default function WorkshopCard({
  title,
  duration,
  description,
  includes,
  price,
  priceNote,
  ctaText,
  ctaLink,
  featured = false,
  badge,
  forList,
  secondary = false,
}: WorkshopCardProps): JSX.Element {
  return (
    <FloatingCard featured={featured} className={styles.workshopCard}>
      {badge && <div className={styles.cardBadge}>{badge}</div>}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.workshopDuration}>{duration}</div>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.workshopIncludes}>
        <h4>{forList ? 'Perfect For:' : 'What\'s Included:'}</h4>
        <ul>
          {(forList || includes).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className={styles.workshopPricing}>
        <span className={styles.price}>{price}</span>
        <span className={styles.priceNote}>{priceNote}</span>
      </div>
      
      <Link
        to={ctaLink}
        className={clsx(
          'button',
          secondary ? 'button--secondary' : 'button--primary',
          styles.ctaButton
        )}
      >
        {ctaText}
      </Link>
    </FloatingCard>
  );
}
