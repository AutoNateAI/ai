import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface WorkshopData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  time: string;
  format: string;
  duration: string;
  level: string;
  price: number;
  originalPrice?: number;
  seatsRemaining: number;
  totalSeats: number;
  focusArea: string;
  type: string;
  outcomes: string[];
  instructor: {
    name: string;
    title: string;
    company: string;
    expertise: string;
    credentials: string[];
  };
  agenda: {
    time: string;
    title: string;
    description: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    company: string;
    role: string;
  }[];
}

interface WorkshopDetailProps {
  workshop: WorkshopData;
}

export default function WorkshopDetail({ workshop }: WorkshopDetailProps): JSX.Element {
  const isEarlyBird = workshop.originalPrice && workshop.originalPrice > workshop.price;
  const savings = isEarlyBird ? workshop.originalPrice - workshop.price : 0;
  
  return (
    <>
      {/* Hero Section */}
      <section className={styles.workshopHero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroContent}>
            <div className={styles.heroContainer}>
              <div className={styles.heroLeft}>
                <div className={styles.categoryBadge}>
                  <span className={styles.badgeIcon}>🧠</span>
                  {workshop.focusArea} • {workshop.type}
                </div>
                
                <h1 className={styles.heroTitle}>{workshop.title}</h1>
                <p className={styles.heroSubtitle}>{workshop.subtitle}</p>
                
                <div className={styles.heroDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📅</span>
                    <div>
                      <div className={styles.detailLabel}>Date & Time</div>
                      <div className={styles.detailValue}>{workshop.date} • {workshop.time}</div>
                    </div>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>🎯</span>
                    <div>
                      <div className={styles.detailLabel}>Format & Duration</div>
                      <div className={styles.detailValue}>{workshop.format} • {workshop.duration}</div>
                    </div>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>👥</span>
                    <div>
                      <div className={styles.detailLabel}>Seats Available</div>
                      <div className={styles.detailValue}>{workshop.seatsRemaining} of {workshop.totalSeats}</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.credibilityHighlight}>
                  <span className={styles.credibilityIcon}>⭐</span>
                  Led by {workshop.instructor.name}, {workshop.instructor.title} at {workshop.instructor.company}
                </div>
              </div>
              
              <div className={styles.heroRight}>
                <div className={styles.reservationCard}>
                  <div className={styles.cardHeader}>
                    <h3>Reserve Your Spot</h3>
                    <div className={styles.urgencyBadge}>
                      Only {workshop.seatsRemaining} seats left
                    </div>
                  </div>
                  
                  <div className={styles.pricingDisplay}>
                    {isEarlyBird && (
                      <div className={styles.originalPrice}>${workshop.originalPrice}</div>
                    )}
                    <div className={styles.currentPrice}>${workshop.price}</div>
                    {isEarlyBird && (
                      <div className={styles.savings}>Save ${savings}</div>
                    )}
                  </div>
                  
                  <button className={styles.reserveButton}>
                    Reserve Your Strategic Advantage
                  </button>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.guarantee}>✓ 100% Money-Back Guarantee</div>
                    <div className={styles.community}>✓ Lifetime Community Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className={styles.problemSection}>
        <div className="container">
          <div className={styles.problemContent}>
            <h2 className={styles.sectionTitle}>
              The Strategic Intelligence Gap That's Costing You Competitive Edge
            </h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>😰</div>
                <h3>Cognitive Overload</h3>
                <p>Information flooding your decision-making process without frameworks to synthesize strategic insights.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🔄</div>
                <h3>Reactive Patterns</h3>
                <p>Constantly responding to market changes instead of anticipating and positioning ahead of trends.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⚡</div>
                <h3>Speed vs Quality</h3>
                <p>Pressure to make rapid decisions compromising the depth of analysis that drives breakthrough results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity & Positioning */}
      <section className={styles.exclusivitySection}>
        <div className="container">
          <div className={styles.exclusivityContent}>
            <h2 className={styles.sectionTitle}>
              Why This Isn't Another Generic Workshop
            </h2>
            <div className={styles.exclusivityGrid}>
              <div className={styles.exclusivityCard}>
                <div className={styles.exclusivityIcon}>🏢</div>
                <h3>Fortune 100 Proven</h3>
                <p>Frameworks battle-tested in high-stakes corporate environments where million-dollar decisions happen daily.</p>
              </div>
              <div className={styles.exclusivityCard}>
                <div className={styles.exclusivityIcon}>🤖</div>
                <h3>AI-Augmented Intelligence</h3>
                <p>Unique integration of human intuition with AI analysis for compound cognitive performance.</p>
              </div>
              <div className={styles.exclusivityCard}>
                <div className={styles.exclusivityIcon}>👑</div>
                <h3>Executive Cohort</h3>
                <p>Limited to senior professionals ensuring peer-level strategic discussions and networking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className={styles.journeySection}>
        <div className="container">
          <div className={styles.journeyContent}>
            <h2 className={styles.sectionTitle}>Your Cognitive Evolution Pathway</h2>
            <div className={styles.journeyTimeline}>
              {workshop.agenda.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>{index + 1}</div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTime}>{item.time}</div>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Credibility */}
      <section className={styles.instructorSection}>
        <div className="container">
          <div className={styles.instructorContent}>
            <h2 className={styles.sectionTitle}>Your Strategic Intelligence Guide</h2>
            <div className={styles.instructorCard}>
              <div className={styles.instructorInfo}>
                <h3 className={styles.instructorName}>{workshop.instructor.name}</h3>
                <p className={styles.instructorTitle}>{workshop.instructor.title}</p>
                <p className={styles.instructorCompany}>{workshop.instructor.company}</p>
                <p className={styles.instructorExpertise}>{workshop.instructor.expertise}</p>
                
                <div className={styles.credentials}>
                  <h4>Corporate Intelligence Credentials:</h4>
                  <ul>
                    {workshop.instructor.credentials.map((cred, index) => (
                      <li key={index}>{cred}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Value */}
      <section className={styles.outcomesSection}>
        <div className="container">
          <div className={styles.outcomesContent}>
            <h2 className={styles.sectionTitle}>Strategic Intelligence You'll Gain</h2>
            <div className={styles.outcomesGrid}>
              {workshop.outcomes.map((outcome, index) => (
                <div key={index} className={styles.outcomeCard}>
                  <div className={styles.outcomeIcon}>🎯</div>
                  <p>{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.testimonialsContent}>
            <h2 className={styles.sectionTitle}>Strategic Leaders Share Their Results</h2>
            <div className={styles.testimonialsGrid}>
              {workshop.testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role} at {testimonial.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCTA}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Your Competitive Intelligence Transformation Starts Now
            </h2>
            <p className={styles.ctaSubtitle}>
              Join the executive cohort that's redefining strategic decision-making with AI-augmented intelligence.
            </p>
            
            <div className={styles.ctaActions}>
              <button className={styles.primaryCTA}>
                Claim Your Strategic Advantage
              </button>
              <div className={styles.ctaGuarantee}>
                <span className={styles.guaranteeIcon}>🛡️</span>
                100% Money-Back Guarantee • Lifetime Community Access
              </div>
            </div>
            
            <div className={styles.ctaUrgency}>
              <strong>{workshop.seatsRemaining} seats remaining</strong> • Next cohort starts {workshop.date}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
