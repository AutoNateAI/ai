import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import AnimatedSection from '@site/src/components/AnimatedSection';
import FloatingCard from '@site/src/components/FloatingCard';

import styles from './landing.module.css';

// Workshop Ad Component
function WorkshopAd({ position, emoji, text, linkText, delay }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const adRef = useRef(null);

  useEffect(() => {
    // Show the ad after the specified delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Hide the ad after 15 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, delay + 15000); // 15 seconds after appearing

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [delay]);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleClick = () => {
    window.location.href = '/workshops';
  };

  const positionClass = position === 'left' ? styles.leftMargin : styles.rightMargin;

  return (
    <div 
      className={clsx(
        styles.marginAd, 
        positionClass, 
        styles.workshopTeaser,
        isVisible && styles.marginAdVisible
      )}
      ref={adRef}
      onClick={handleClick}
    >
      <div className={styles.adCard}>
        <div className={styles.closeAdBtn} onClick={handleClose}>×</div>
        <div className={styles.adEmoji}>{emoji}</div>
        <div className={styles.adText}>{text}</div>
        <div className={styles.adArrow}>{linkText}</div>
      </div>
    </div>
  );
}

// Hero Section - The Awakening
function HeroSection() {
  return (
    <section className={styles.heroAwakening}>
      <div className={styles.heroContent}>
        <div className={styles.consciousnessIndicator}>
          <span className={styles.pulseDot}></span>
          <span className={styles.statusText}>Consciousness: Expanding</span>
        </div>
        
        <Heading as="h1" className={styles.heroTitle}>
          Your Mind Deserves More Than<br/>
          <span className={styles.gradientText}>Surface-Level Thinking</span>
        </Heading>
        
        <p className={styles.heroSubtitle}>
          Join 2,170+ professionals who've discovered the hidden patterns where 
          psychology meets AI meets culture. Because your brain is capable of 
          connections others can't even see.
        </p>
        
        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Apply insights immediately</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3x</div>
            <div className={styles.statLabel}>Faster pattern recognition</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Strategic advantages gained</div>
          </div>
        </div>
        
        <div className={styles.heroCTAGroup}>
          <Link
            to="/workshops"
            className="button button--primary button--lg">
            Unlock Your Strategic Intelligence
          </Link>
          <Link
            to="/knowledge-base/intelligence/cognitive-intelligence-foundations"
            className="button button--secondary button--lg">
            See What You've Been Missing
          </Link>
        </div>
      </div>
      
      {/* Margin Ad 1 - appears after 3 seconds */}
      <WorkshopAd 
        position="left" 
        emoji="🧠⚡" 
        text="Workshops that make your neurons dance" 
        linkText="→" 
        delay={3000} 
      />
    </section>
  );
}

// Section 1 - The Recognition
function RecognitionSection() {
  return (
    <section className={styles.recognitionSection}>
      <div className={styles.contentContainer}>
        <AnimatedSection>
          <div className={styles.recognitionCard}>
            <h2>You've Felt It, Haven't You?</h2>
            
            <div className={styles.feelingGrid}>
              <div className={styles.feelingItem}>
                <div className={styles.feelingIcon}>🤔</div>
                <p>That moment when you see a trend explode and think "I could have predicted that"</p>
              </div>
              
              <div className={styles.feelingItem}>
                <div className={styles.feelingIcon}>🎯</div>
                <p>The frustration of having great ideas but missing the perfect timing</p>
              </div>
              
              <div className={styles.feelingItem}>
                <div className={styles.feelingIcon}>🔍</div>
                <p>Knowing there are patterns everywhere, but lacking the framework to see them</p>
              </div>
              
              <div className={styles.feelingItem}>
                <div className={styles.feelingIcon}>⚡</div>
                <p>That hunger for insights that actually change how you think, not just what you know</p>
              </div>
            </div>
            
            <div className={styles.recognitionInsight}>
              <blockquote>
                "Your intuition is right. The patterns ARE there. You just need the right lens to see them."
              </blockquote>
            </div>
            
            <div className={styles.naturalCta}>
              <p>This is exactly why AutoNateAI exists. <Link to="/workshops" className={styles.inlineCta}>Join the community</Link> that's mapping these invisible connections.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Margin Ad 2 - appears after 7 seconds */}
      <WorkshopAd 
        position="right" 
        emoji="🎭🤖" 
        text="Where serious meets silly (but outcomes are serious)" 
        linkText="Workshops →" 
        delay={7000} 
      />
    </section>
  );
}

// Intersection Revealed Section
function IntersectionSection() {
  return (
    <section className={styles.intersectionReveal}>
      <div className={styles.intersectionVisual}>
        <AnimatedSection>
          <div className={styles.intersectionCard}>
            <h2>The Intersection Revealed</h2>
            
            <div className={styles.vennDiagramModern}>
              <div className={clsx(styles.circle, styles.psychology)}>
                <div className={styles.circleContent}>
                  <h3>Psychology</h3>
                  <p>Human behavior, cognitive biases, and decision frameworks</p>
                </div>
              </div>
              
              <div className={clsx(styles.circle, styles.ai)}>
                <div className={styles.circleContent}>
                  <h3>AI</h3>
                  <p>Machine learning, neural networks, and algorithmic thinking</p>
                </div>
              </div>
              
              <div className={clsx(styles.circle, styles.culture)}>
                <div className={styles.circleContent}>
                  <h3>Culture</h3>
                  <p>Trends, social dynamics, and emerging patterns</p>
                </div>
              </div>
              
              <div className={styles.intersectionCenter}>
                <div className={styles.centerContent}>
                  <h3>Strategic Intelligence</h3>
                  <p>Where the magic happens</p>
                </div>
              </div>
            </div>
            
            <div className={styles.intersectionExplanation}>
              <p>
                Most people operate in silos, missing the powerful connections between these domains. 
                At AutoNateAI, we've mapped the hidden patterns where these fields converge—unlocking 
                insights that give you a strategic advantage in today's complex world.
              </p>
              
              <div className={styles.proofPoints}>
                <div className={styles.proofPoint}>
                  <p><strong>Pattern Recognition:</strong> Identify emerging trends before they become mainstream</p>
                </div>
                <div className={styles.proofPoint}>
                  <p><strong>Decision Frameworks:</strong> Make better choices with multi-disciplinary mental models</p>
                </div>
                <div className={styles.proofPoint}>
                  <p><strong>Strategic Foresight:</strong> Navigate complexity with confidence and clarity</p>
                </div>
              </div>
              
              <div className={styles.naturalCta2}>
                <Link
                  to="/knowledge-base/intersection/strategic-intelligence-framework"
                  className="button button--outline button--secondary button--lg">
                  Explore the Intersection
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Margin Ad 3 - appears after 12 seconds */}
      <WorkshopAd 
        position="left" 
        emoji="🔍🔮" 
        text="Spot patterns others miss with our Pattern Recognition workshop" 
        linkText="Learn more →" 
        delay={12000} 
      />
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Where psychology meets AI meets culture">
      <main className="homepage">
        <HeroSection />
        <RecognitionSection />
        <IntersectionSection />
        {/* Additional sections will be added here */}
      </main>
    </Layout>
  );
}
