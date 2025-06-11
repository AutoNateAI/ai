import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './workshops.module.css';
import FloatingCard from '../components/FloatingCard';
import WorkshopCard from '../components/WorkshopCard';
import TestimonialCard from '../components/TestimonialCard';
// AnimatedSection removed for stability on deployment

function HeroSection() {
  return (
    <div className="section">
      <section className={styles.heroSection}>
        <div className="container">
          <FloatingCard className={styles.heroCard}>
            <Heading as="h1" className={styles.heroTitle}>
              Where Minds Meet Machines
            </Heading>
            <p className={styles.heroSubtitle}>
              Interactive workshops that unlock the hidden patterns between human psychology, 
              artificial intelligence, and cultural evolution
            </p>
            <div className={styles.workshopPreviewStats}>
              <div className={styles.statCard}>500+ Professionals Transformed</div>
              <div className={styles.statCard}>98% Application Rate</div>
              <div className={styles.statCard}>3X Decision Speed</div>
            </div>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaPrimary)}
              to="#workshop-types">
              Experience the Transformation
            </Link>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}

function ProblemDiscoverySection() {
  return (
    <div className="section">
      <section className={styles.storySection}>
        <div className="container">
          <FloatingCard className={styles.storyCard}>
            <div className={styles.cardIcon}>🧠</div>
            <Heading as="h2">The Invisible Patterns</Heading>
            <p>
              Every trending topic. Every viral moment. Every AI breakthrough. 
              They're all connected by invisible networks of human psychology that most people never see.
            </p>
            <div className={styles.insightHighlight}>
              "What if you could see the patterns before they become obvious to everyone else?"
            </div>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}

function WorkshopExperienceSection() {
  return (
    <div className="section">
      <section className={styles.workshopExperience}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            The AutoNateAI Workshop Experience
          </Heading>
          
          <div className={styles.experienceCardsGrid}>
            <div className={styles.slideInRight}>
              <FloatingCard className={styles.experienceCard}>
                <div className={styles.cardNumber}>01</div>
                <Heading as="h3">Pattern Recognition</Heading>
                <p>Learn to identify psychological patterns in real-time cultural data and AI behavior</p>
                <div className={styles.cardHighlight}>Live trend analysis exercises</div>
              </FloatingCard>
            </div>
            
            <div className={styles.slideInRight}>
              <FloatingCard className={styles.experienceCard}>
                <div className={styles.cardNumber}>02</div>
                <Heading as="h3">Framework Application</Heading>
                <p>Apply proprietary frameworks to predict emerging trends and AI developments</p>
                <div className={styles.cardHighlight}>Hands-on prediction modeling</div>
              </FloatingCard>
            </div>
            
            <div className={styles.slideInRight}>
              <FloatingCard className={styles.experienceCard}>
                <div className={styles.cardNumber}>03</div>
                <Heading as="h3">Strategic Implementation</Heading>
                <p>Develop action plans that leverage these insights for your specific context</p>
                <div className={styles.cardHighlight}>Personalized strategy sessions</div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TransformationOutcomesSection() {
  return (
    <div className="section">
      <section className={styles.transformationOutcomes}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Transformation Outcomes
          </Heading>
          
          <div className={styles.outcomesGrid}>
            <div className={styles.fadeIn}>
              <FloatingCard className={styles.outcomeCard}>
                <div className={styles.outcomeIcon}>🎯</div>
                <Heading as="h3">Predictive Advantage</Heading>
                <p>Spot trends 3-6 months before they go mainstream</p>
                <ul className={styles.benefitList}>
                  <li>Early market positioning</li>
                  <li>Strategic content timing</li>
                  <li>Competitive intelligence</li>
                </ul>
              </FloatingCard>
            </div>
            
            <div className={styles.fadeIn}>
              <FloatingCard className={styles.outcomeCard}>
                <div className={styles.outcomeIcon}>🤖</div>
                <Heading as="h3">AI Collaboration Mastery</Heading>
                <p>Develop sophisticated human-AI working relationships</p>
                <ul className={styles.benefitList}>
                  <li>Tool selection frameworks</li>
                  <li>Prompt engineering psychology</li>
                  <li>Automation decision trees</li>
                </ul>
              </FloatingCard>
            </div>
            
            <div className={styles.fadeIn}>
              <FloatingCard className={styles.outcomeCard}>
                <div className={styles.outcomeIcon}>🌐</div>
                <Heading as="h3">Cultural Intelligence</Heading>
                <p>Understand and influence memetic patterns</p>
                <ul className={styles.benefitList}>
                  <li>Viral content mechanics</li>
                  <li>Community psychology</li>
                  <li>Influence network analysis</li>
                </ul>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkshopTypesSection() {
  return (
    <div className="section">
      <section id="workshop-types" className={styles.workshopTypes}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Choose Your Journey
          </Heading>
          
          <div className={styles.workshopCardsContainer}>
            <WorkshopCard
              title="Strategic Intelligence Intensive"
              duration="Full Day (8 hours)"
              description="A comprehensive immersion into the intersection of psychology, AI, and cultural evolution. Ideal for leadership teams and strategic decision-makers."
              includes={[
                "Pattern recognition frameworks",
                "AI collaboration playbooks",
                "Cultural intelligence mapping",
                "Strategic implementation planning",
                "90-day follow-up consultation"
              ]}
              price="$12,000"
              priceNote="Per organization (up to 8 people)"
              ctaText="Reserve Your Workshop"
              ctaLink="#contact"
              featured={true}
              badge="Most Popular"
            />
            
            <WorkshopCard
              title="Executive Briefing"
              duration="Half Day (4 hours)"
              description="A focused session on the key patterns and frameworks. Perfect for executives who need the insights without the hands-on exercises."
              includes={[
                "Core pattern recognition",
                "Strategic framework overview",
                "Implementation roadmap",
                "30-day follow-up call"
              ]}
              price="$6,000"
              priceNote="Per organization (up to 5 people)"
              ctaText="Book Executive Briefing"
              ctaLink="#contact"
            />
            
            <WorkshopCard
              title="Team Transformation"
              duration="Two Days"
              description="An immersive experience designed to transform how your entire team thinks about and works with AI and cultural patterns."
              includes={[
                "All Strategic Intelligence content",
                "Team-specific applications",
                "Collaborative exercises",
                "Custom implementation plan",
                "6-month transformation roadmap"
              ]}
              price="$20,000"
              priceNote="Per team (up to 10 people)"
              ctaText="Transform Your Team"
              ctaLink="#contact"
              secondary={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SocialProofSection() {
  return (
    <div className="section">
      <section className={styles.socialProof}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Transformation Stories
          </Heading>
          
          <div className={styles.testimonialCards}>
            <div className={styles.fadeIn}>
              <TestimonialCard
                content="The workshop completely changed how I think about AI strategy. I can now predict market shifts 4-6 months ahead."
                authorName="Sarah Chen"
                authorTitle="VP Strategy, TechCorp"
              />
            </div>
            
            <div className={styles.fadeIn}>
              <TestimonialCard
                content="Finally, someone who understands that AI isn't just about tools—it's about psychology. Game-changing insights."
                authorName="Marcus Rodriguez"
                authorTitle="Creative Director, BrandStudio"
              />
            </div>
            
            <div className={styles.fadeIn}>
              <TestimonialCard
                content="The network mapping techniques have 3x'd our content engagement. Worth every minute and dollar."
                authorName="Jessica Park"
                authorTitle="Content Strategy Lead"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FinalCTASection() {
  const nextWorkshopDate = new Date();
  nextWorkshopDate.setDate(nextWorkshopDate.getDate() + 14);
  const formattedDate = nextWorkshopDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={styles.zoomIn}>
      <section id="contact" className={styles.finalCta}>
        <div className="container">
          <FloatingCard className={styles.ctaCard}>
            <Heading as="h2">Your Strategic Advantage Awaits</Heading>
            <p>
              Join the professionals who understand that the future belongs to those 
              who can bridge human psychology and artificial intelligence.
            </p>
            
            <div className={styles.fadeIn}>
              <div className={styles.urgencyElements}>
                <div className={styles.scarcityNote}>Limited to 12 participants per workshop</div>
                <div className={styles.nextWorkshop}>Next Workshop: {formattedDate}</div>
              </div>
            </div>
            
            <div className={styles.fadeIn}>
              <div id="contact-form" className={styles.ctaButtons}>
                <Link
                  className={clsx('button button--primary button--lg', styles.ctaPrimaryLarge)}
                  to="#contact-form">
                  Reserve Your Strategic Advantage
                </Link>
                <Link
                  className={clsx('button button--secondary', styles.ctaSecondary)}
                  to="#contact-form">
                  Schedule Consultation Call
                </Link>
              </div>
            </div>
            
            <div className={styles.fadeIn}>
              <div className={styles.guarantee}>
                <div className={styles.guaranteeBadge}>100% Application Guarantee</div>
                <p>If you don't apply at least 3 frameworks within 30 days, full refund.</p>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}

// Animation helper for scroll-triggered animations
function useScrollAnimation() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(`.${styles.fadeInUp}`);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
}

export default function Workshops() {
  const {siteConfig} = useDocusaurusContext();
  useScrollAnimation();
  
  return (
    <Layout
      title="Psychology x AI x Culture Workshops"
      description="Interactive workshops that unlock the hidden patterns between human psychology, artificial intelligence, and cultural evolution">
      <main className={styles.workshopsPage}>
        <HeroSection />
        <ProblemDiscoverySection />
        <WorkshopExperienceSection />
        <TransformationOutcomesSection />
        <WorkshopTypesSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
    </Layout>
  );
}
