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
            to="/knowledge-base"
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

// Brain's Potential Section
function BrainPotentialSection() {
  return (
    <section className={styles.brainPotential}>
      <div className={styles.brainContent}>
        <AnimatedSection>
          <div className={styles.brainCard}>
            <h2>Your Brain's Untapped Potential</h2>
            
            <div className={styles.brainGrid}>
              <div className={styles.brainVisual}>
                <img 
                  src="/img/brain-connections.svg" 
                  alt="Neural connections in the brain" 
                  className={styles.brainImage} 
                />
              </div>
              
              <div className={styles.brainCapabilities}>
                <div className={styles.capabilityCard}>
                  <div className={styles.capabilityTitle}>Pattern Recognition</div>
                  <div className={styles.capabilityDescription}>
                    Your brain is wired to spot patterns, but most people never train this 
                    capability. Our workshops activate your natural pattern recognition 
                    abilities across disciplines.
                  </div>
                </div>
                
                <div className={styles.capabilityCard}>
                  <div className={styles.capabilityTitle}>Mental Models</div>
                  <div className={styles.capabilityDescription}>
                    Powerful frameworks for decision-making that combine insights from 
                    psychology, AI, and cultural analysis—giving you an edge in any situation.
                  </div>
                </div>
                
                <div className={styles.capabilityCard}>
                  <div className={styles.capabilityTitle}>Strategic Foresight</div>
                  <div className={styles.capabilityDescription}>
                    Develop the ability to anticipate trends and changes before they happen, 
                    positioning yourself ahead of the curve in your career and personal growth.
                  </div>
                </div>
                
                <div className={styles.capabilityCard}>
                  <div className={styles.capabilityTitle}>Cognitive Flexibility</div>
                  <div className={styles.capabilityDescription}>
                    Learn to rapidly switch between different thinking modes and perspectives, 
                    adapting to new information and complex situations with ease.
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.brainCta}>
              <Link
                to="/knowledge-base/intelligence/unlock-cognitive-potential"
                className="button button--outline button--primary button--lg">
                Unlock Your Full Potential
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Margin Ad 4 - appears after 15 seconds */}
      <WorkshopAd 
        position="right" 
        emoji="🧠🔥" 
        text="Mental Models Workshop: Build your strategic toolkit" 
        linkText="Reserve your spot →" 
        delay={15000} 
      />
    </section>
  );
}

// Community Experience Section
function CommunitySection() {
  return (
    <section className={styles.communityExperience}>
      <div className={styles.communityContent}>
        <AnimatedSection>
          <div className={styles.communityCard}>
            <h2>The Community Experience</h2>
            
            <div className={styles.communityFeatures}>
              <div className={styles.communityFeature}>
                <div className={styles.featureIcon}>🔥</div>
                <div className={styles.featureTitle}>Live Workshops</div>
                <div className={styles.featureDescription}>
                  Interactive sessions where theory meets practice. Engage with experts and 
                  peers in a collaborative environment designed for breakthrough insights.
                </div>
              </div>
              
              <div className={styles.communityFeature}>
                <div className={styles.featureIcon}>👥</div>
                <div className={styles.featureTitle}>Peer Network</div>
                <div className={styles.featureDescription}>
                  Connect with forward-thinking professionals across industries who share 
                  your curiosity and drive for intellectual growth.
                </div>
              </div>
              
              <div className={styles.communityFeature}>
                <div className={styles.featureIcon}>📖</div>
                <div className={styles.featureTitle}>Knowledge Base</div>
                <div className={styles.featureDescription}>
                  Access our curated library of resources, frameworks, and case studies 
                  that bridge psychology, AI, and cultural analysis.
                </div>
              </div>
            </div>
            
            <div className={styles.communityStats}>
              <div className={styles.communityStat}>
                <div className={styles.statValue}>2,170+</div>
                <div className={styles.statLabel}>Community Members</div>
              </div>
              
              <div className={styles.communityStat}>
                <div className={styles.statValue}>87%</div>
                <div className={styles.statLabel}>Report Expanded Network</div>
              </div>
              
              <div className={styles.communityStat}>
                <div className={styles.statValue}>24</div>
                <div className={styles.statLabel}>Industries Represented</div>
              </div>
            </div>
            
            <div className={styles.communityCta}>
              <Link
                to="/community"
                className="button button--outline button--secondary button--lg">
                Join Our Community
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Margin Ad 5 - appears after 10 seconds */}
      <WorkshopAd 
        position="left" 
        emoji="🌐👥" 
        text="Connect with forward-thinking professionals in our community" 
        linkText="Learn more →" 
        delay={10000} 
      />
    </section>
  );
}

// Social Proof Section
function SocialProofSection() {
  return (
    <section className={styles.socialProof}>
      <div className={styles.socialContent}>
        <AnimatedSection>
          <div className={styles.socialCard}>
            <h2>Transformation Stories</h2>
            
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "The mental models I learned at AutoNateAI's workshops have completely 
                  transformed how I approach complex problems. I'm seeing connections 
                  that were invisible to me before."
                </div>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src="/img/testimonials/sarah-j.jpg" 
                    alt="Sarah J." 
                    className={styles.authorAvatar} 
                  />
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Sarah J.</div>
                    <div className={styles.authorRole}>Product Strategy Director</div>
                  </div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "I've attended dozens of professional workshops, but none have had the 
                  lasting impact of AutoNateAI's programs. The intersection of psychology, 
                  AI, and culture is where the real magic happens."
                </div>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src="/img/testimonials/michael-t.jpg" 
                    alt="Michael T." 
                    className={styles.authorAvatar} 
                  />
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Michael T.</div>
                    <div className={styles.authorRole}>Innovation Lead</div>
                  </div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "The strategic intelligence framework has given me a competitive edge 
                  in my industry. I'm now able to anticipate trends months before my 
                  colleagues even notice them."
                </div>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src="/img/testimonials/elena-r.jpg" 
                    alt="Elena R." 
                    className={styles.authorAvatar} 
                  />
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Elena R.</div>
                    <div className={styles.authorRole}>Strategic Foresight Consultant</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.socialCta}>
              <Link
                to="/workshops"
                className="button button--outline button--primary button--lg">
                Join Them in Transformation
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Margin Ad 6 - appears after 8 seconds */}
      <WorkshopAd 
        position="right" 
        emoji="💡🔮" 
        text="Strategic Foresight Workshop: See what others miss" 
        linkText="Reserve now →" 
        delay={8000} 
      />
    </section>
  );
}

// Future You Section
function FutureYouSection() {
  return (
    <section className={styles.futureYou}>
      <div className={styles.futureContent}>
        <AnimatedSection>
          <div className={styles.futureCard}>
            <h2>The Future You</h2>
            
            <div className={styles.futureGrid}>
              <div className={styles.futureImage}>
                <img 
                  src="/img/future-you.jpg" 
                  alt="Future version of yourself" 
                  className={styles.futureVisual} 
                />
              </div>
              
              <div className={styles.futureTransformation}>
                <div className={styles.transformationTitle}>
                  Transform Your Strategic Intelligence
                </div>
                
                <div className={styles.transformationDescription}>
                  The difference between where you are now and where you could be is simply a 
                  matter of activating your brain's natural pattern recognition abilities across 
                  disciplines that most people keep separate.
                </div>
                
                <div className={styles.beforeAfter}>
                  <div className={styles.beforeColumn}>
                    <div className={styles.columnTitle}>Before AutoNateAI</div>
                    <ul className={styles.columnList}>
                      <li>Overwhelmed by complexity</li>
                      <li>Missing critical connections</li>
                      <li>Reacting to trends too late</li>
                      <li>Trapped in conventional thinking</li>
                      <li>Limited by single-discipline approaches</li>
                    </ul>
                  </div>
                  
                  <div className={styles.afterColumn}>
                    <div className={styles.columnTitle}>After AutoNateAI</div>
                    <ul className={styles.columnList}>
                      <li>Confidently navigate complexity</li>
                      <li>Spot patterns others miss</li>
                      <li>Anticipate trends before they emerge</li>
                      <li>Think in innovative frameworks</li>
                      <li>Leverage cross-disciplinary insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.futureCta}>
              <Link
                to="/workshops"
                className="button button--primary button--lg">
                Become Your Future Self
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Margin Ad 7 - appears after 13 seconds */}
      <WorkshopAd 
        position="left" 
        emoji="🚀💫" 
        text="Future Self Workshop: Activate your strategic potential" 
        linkText="Join now →" 
        delay={13000} 
      />
    </section>
  );
}

// Final CTA Section
function FinalCtaSection() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.finalContent}>
        <AnimatedSection>
          <div className={styles.finalCard}>
            <div className={styles.finalTitle}>
              Ready to Unlock Your Strategic Intelligence?
            </div>
            
            <div className={styles.finalSubtitle}>
              Join 2,170+ professionals who've discovered the hidden patterns where 
              psychology meets AI meets culture. Your brain is capable of connections 
              others can't even see.
            </div>
            
            <div className={styles.finalButtons}>
              <Link
                to="/workshops"
                className="button button--primary button--lg">
                Explore Our Workshops
              </Link>
              
              <Link
                to="/knowledge-base"
                className="button button--secondary button--lg">
                Browse Knowledge Base
              </Link>
            </div>
            
            <div className={styles.finalUrgency}>
              <div className={styles.urgencyText}>
                Next workshop starts in 3 days. Limited to 12 participants per session.
              </div>
            </div>
            
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeIcon}>✔️</div>
              <div className={styles.guaranteeText}>
                100% Satisfaction Guarantee: If you don't find value in your first workshop, 
                we'll refund your investment completely.
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Margin Ad 8 - appears after 5 seconds */}
      <WorkshopAd 
        position="right" 
        emoji="⏰🔥" 
        text="Limited spots available! Reserve your workshop seat now" 
        linkText="Secure your spot →" 
        delay={5000} 
      />
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Where psychology meets AI meets culture">
      <main className="homepage">
        <HeroSection />
        <RecognitionSection />
        <IntersectionSection />
        <BrainPotentialSection />
        <CommunitySection />
        <SocialProofSection />
        <FutureYouSection />
        <FinalCtaSection />
      </main>
    </Layout>
  );
}
