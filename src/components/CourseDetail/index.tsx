import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { Course } from '../../pages/courses';
import styles from './styles.module.css';

interface CourseDetailProps {
  course: Course;
}

export default function CourseDetail({ course }: CourseDetailProps): JSX.Element {
  return (
    <div className={styles.courseDetail}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>{course.category}</div>
            <Heading as="h1" className={styles.heroTitle}>
              {course.title}
            </Heading>
            <p className={styles.heroSubtitle}>{course.subtitle}</p>
            <div className={styles.heroDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>📅</span>
                <span className={styles.detailText}>Available {new Date(course.releaseDate).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>⏱️</span>
                <span className={styles.detailText}>{course.duration}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>🎓</span>
                <span className={styles.detailText}>{course.level}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>💻</span>
                <span className={styles.detailText}>{course.format}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>🤖</span>
                <span className={styles.detailText}>{course.aiTool}</span>
              </div>
            </div>
            <div className={styles.heroCta}>
              <Link to="#enroll" className={styles.primaryButton}>
                Enroll Now
              </Link>
              <div className={styles.priceTag}>
                <span className={styles.currentPrice}>${course.price}</span>
                {course.originalPrice && (
                  <span className={styles.originalPrice}>${course.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className={styles.descriptionSection}>
        <div className="container">
          <div className={styles.sectionContent}>
            <div className={styles.problemStatement}>
              <Heading as="h2" className={styles.sectionTitle}>
                Enhance Your Research With AI
              </Heading>
              <p className={styles.descriptionText}>{course.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className={styles.journeySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Your Learning Journey
            </Heading>
            <p className={styles.sectionSubtitle}>
              Comprehensive, interactive modules designed for effective learning
            </p>
          </div>
          <div className={styles.modulesList}>
            {course.modules.map((module, index) => (
              <div key={index} className={styles.moduleCard}>
                <div className={styles.moduleNumber}>{module.number}</div>
                <div className={styles.moduleContent}>
                  <h3 className={styles.moduleTitle}>{module.title}</h3>
                  <p className={styles.moduleDescription}>{module.description}</p>
                  {module.interactiveElements && module.interactiveElements.length > 0 && (
                    <div className={styles.interactiveElements}>
                      <p className={styles.interactiveTitle}>Interactive Elements:</p>
                      <div className={styles.elementTags}>
                        {module.interactiveElements.map((element, i) => (
                          <span key={i} className={styles.elementTag}>{element}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Creator Section */}
      <section className={styles.creatorSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Course Creator
            </Heading>
            <p className={styles.sectionSubtitle}>
              Learn from experts in the field
            </p>
          </div>
          <div className={styles.creatorProfile}>
            <div className={styles.creatorInfo}>
              <h3 className={styles.creatorName}>{course.creator.name}</h3>
              <p className={styles.creatorTitle}>{course.creator.title}</p>
              <p className={styles.creatorInstitution}>{course.creator.institution}</p>
              <p className={styles.creatorExpertise}>{course.creator.expertise}</p>
              <div className={styles.creatorCredentials}>
                {course.creator.credentials.map((credential, index) => (
                  <div key={index} className={styles.credentialItem}>✓ {credential}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className={styles.outcomesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              What You'll Learn
            </Heading>
            <p className={styles.sectionSubtitle}>
              Practical skills and knowledge you'll gain
            </p>
          </div>
          <div className={styles.outcomesList}>
            {course.learningOutcomes.map((outcome, index) => (
              <div key={index} className={styles.outcomeItem}>
                <div className={styles.outcomeIcon}>✓</div>
                <p className={styles.outcomeText}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {course.testimonials && course.testimonials.length > 0 && (
        <section className={styles.testimonialsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                What Academics Are Saying
              </Heading>
              <p className={styles.sectionSubtitle}>
                Hear from researchers who have taken this course
              </p>
            </div>
            <div className={styles.testimonialsList}>
              {course.testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorName}>{testimonial.author}</div>
                    <div className={styles.authorRole}>
                      {testimonial.role}, {testimonial.institution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className={styles.enrollSection} id="enroll">
        <div className="container">
          <div className={styles.enrollCard}>
            <div className={styles.enrollContent}>
              <Heading as="h2" className={styles.enrollTitle}>
                Start Your AI-Enhanced Research Journey
              </Heading>
              <p className={styles.enrollDescription}>
                Join thousands of academics transforming their research with AI-powered methods
              </p>
              <div className={styles.enrollDetails}>
                <div className={styles.enrollDetail}>
                  <span className={styles.detailLabel}>Course:</span>
                  <span className={styles.detailValue}>{course.title}</span>
                </div>
                <div className={styles.enrollDetail}>
                  <span className={styles.detailLabel}>Format:</span>
                  <span className={styles.detailValue}>{course.format}</span>
                </div>
                <div className={styles.enrollDetail}>
                  <span className={styles.detailLabel}>Duration:</span>
                  <span className={styles.detailValue}>{course.duration}</span>
                </div>
                <div className={styles.enrollDetail}>
                  <span className={styles.detailLabel}>Modules:</span>
                  <span className={styles.detailValue}>{course.moduleCount} interactive modules</span>
                </div>
              </div>
              <div className={styles.enrollAction}>
                <div className={styles.finalPrice}>
                  <span className={styles.currentPrice}>${course.price}</span>
                  {course.originalPrice && (
                    <span className={styles.originalPrice}>${course.originalPrice}</span>
                  )}
                </div>
                <Link to="/contact" className={styles.enrollButton}>
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
