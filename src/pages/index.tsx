import React, { useEffect, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './landing.module.css';

// Hero Section - Strategic Intelligence Hub
function HeroSection() {
  return (
    <section className={styles.heroStrategic}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.cognitiveIndicator}>
            <span className={styles.pulseDot}></span>
            <span className={styles.statusText}>Cognitive Intelligence: Active</span>
          </div>
          
          <Heading as="h1" className={styles.heroTitle}>
            Where Psychology Meets AI<br/>
            <span className="gradient-text">Meets Strategic Thinking</span>
          </Heading>
          
          <p className={styles.heroSubtitle}>
            Trusted by forward-thinking professionals who optimize their cognitive approach 
            through frameworks that enhance mental bandwidth and strategic performance.
          </p>
          
          <div className={styles.heroValueProps}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🧠</div>
              <div className={styles.valueText}>Cognitive Frameworks</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <div className={styles.valueText}>Mental Models</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <div className={styles.valueText}>Strategic Insights</div>
            </div>
          </div>
          
          <div className={styles.heroCTAGroup}>
            <Link
              to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations/intelligence/cognitive-intelligence-foundations"
              className="button button--primary button--lg">
              Explore the Frameworks
            </Link>
            <Link
              to="/ai/workshops"
              className="button button--secondary button--lg">
              Discover Strategic Insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 1 - Light Recognition of Mental Clarity
function RecognitionSection() {
  return (
    <section className={clsx(styles.recognitionLight, 'section bg-light')}>
      <div className="container">
        <div className={styles.sectionContent}>
          <div className={styles.lightHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Frameworks That Optimize Cognitive Performance
            </Heading>
            <p className={styles.sectionSubtitle}>
              Professional cognitive optimization through strategic intelligence and mental model mastery.
            </p>
          </div>
          
          <div className={styles.clarityGrid}>
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>🔍</div>
              <h3 className={styles.cardTitle}>Pattern Recognition</h3>
              <p className={styles.cardDescription}>
                Transform from information processor to strategic pattern recognizer through 
                AI-enhanced cognitive frameworks.
              </p>
            </div>
            
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>💡</div>
              <h3 className={styles.cardTitle}>Mental Bandwidth</h3>
              <p className={styles.cardDescription}>
                Recover cognitive capacity for high-value strategic activities by optimizing 
                how your mind processes information.
              </p>
            </div>
            
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>🚀</div>
              <h3 className={styles.cardTitle}>Strategic Decision-Making</h3>
              <p className={styles.cardDescription}>
                Enhance decision-making under uncertainty through psychology-backed AI collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 2 - Gentle AI-Human Partnership Visualization
function IntersectionSection() {
  return (
    <section className={clsx(styles.intersectionGentle, 'section')}>
      <div className="container">
        <div className={styles.partnershipContent}>
          <div className={styles.partnershipHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              AI as Cognitive Enhancement, Not Replacement
            </Heading>
            <p className={styles.sectionSubtitle}>
              Distributed cognition where AI handles processing, humans provide strategic interpretation.
            </p>
          </div>
          
          <div className={styles.partnershipDiagram}>
            <div className={styles.partnershipColumn}>
              <div className={styles.partnershipCard}>
                <div className={styles.partnershipIcon}>🤖</div>
                <h3 className={styles.partnershipTitle}>AI Handles</h3>
                <ul className={styles.partnershipList}>
                  <li>Information filtering & sorting</li>
                  <li>Pattern highlighting</li>
                  <li>Data processing & validation</li>
                  <li>Real-time monitoring</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.partnershipArrow}>
              <span className={styles.arrowIcon}>⚡</span>
              <span className={styles.arrowText}>Enhanced Collaboration</span>
            </div>
            
            <div className={styles.partnershipColumn}>
              <div className={styles.partnershipCard}>
                <div className={styles.partnershipIcon}>🧠</div>
                <h3 className={styles.partnershipTitle}>You Focus On</h3>
                <ul className={styles.partnershipList}>
                  <li>Strategic interpretation</li>
                  <li>Creative problem-solving</li>
                  <li>Decision-making under uncertainty</li>
                  <li>Innovation & insight generation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 3 - Light Cognitive Framework Presentation
function BrainPotentialSection() {
  return (
    <section className={clsx(styles.frameworkLight, 'section bg-soft')}>
      <div className="container">
        <div className={styles.frameworkContent}>
          <div className={styles.frameworkHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              The Cognitive Load Optimization Method
            </Heading>
            <p className={styles.sectionSubtitle}>
              Four-phase approach to transforming cognitive overload into strategic advantage.
            </p>
          </div>
          
          <div className={styles.frameworkGrid}>
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>01</div>
              <h3 className={styles.phaseTitle}>Cognitive Audit</h3>
              <p className={styles.phaseDescription}>
                Identify where mental energy is wasted on low-value processing tasks.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>02</div>
              <h3 className={styles.phaseTitle}>AI-Human Task Allocation</h3>
              <p className={styles.phaseDescription}>
                Design optimal division of cognitive labor between AI and human intelligence.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>03</div>
              <h3 className={styles.phaseTitle}>Strategic Thinking Amplification</h3>
              <p className={styles.phaseDescription}>
                Channel recovered cognitive capacity toward high-value strategic activities.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>04</div>
              <h3 className={styles.phaseTitle}>Continuous Optimization</h3>
              <p className={styles.phaseDescription}>
                Monitor and adjust AI-human collaboration based on strategic outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 4 - Cognitive Intelligence Library
function CommunitySection() {
  return (
    <section className={clsx(styles.intelligenceLibrary, 'section')}>
      <div className="container">
        <div className={styles.libraryContent}>
          <div className={styles.libraryHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Strategic Intelligence in Your Inbox
            </Heading>
            <p className={styles.sectionSubtitle}>
              Explore frameworks that optimize cognitive performance through Psychology × AI × Culture insights.
            </p>
          </div>
          
          <div className={styles.libraryGrid}>
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Cognitive Frameworks</div>
              <h3 className={styles.libraryTitle}>Pattern Recognition Systems</h3>
              <p className={styles.libraryPreview}>
                How to transform your brain from data processor to strategic pattern recognizer...
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>8 min read</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>Read →</Link>
              </div>
            </div>
            
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Mental Models</div>
              <h3 className={styles.libraryTitle}>Cognitive Load Distribution</h3>
              <p className={styles.libraryPreview}>
                Frameworks for optimal AI-human task allocation in strategic thinking...
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>12 min read</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>Read →</Link>
              </div>
            </div>
            
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Strategic Intelligence</div>
              <h3 className={styles.libraryTitle}>Decision-Making Under Uncertainty</h3>
              <p className={styles.libraryPreview}>
                Psychology-backed approaches to enhance strategic decision-making capabilities...
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>10 min read</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>Read →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 5 - Visual Intelligence Showcase
function SocialProofSection() {
  return (
    <section className={clsx(styles.visualShowcase, 'section bg-light')}>
      <div className="container">
        <div className={styles.showcaseContent}>
          <div className={styles.showcaseHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Visual Intelligence That Enhances Understanding
            </Heading>
            <p className={styles.sectionSubtitle}>
              High-quality visual content that represents the Psychology × AI × Culture intersection.
            </p>
          </div>
          
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>🧠⚡🎯</div>
              </div>
              <div className={styles.showcaseCaption}>
                Cognitive Framework Visualizations
              </div>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>📊🔍💡</div>
              </div>
              <div className={styles.showcaseCaption}>
                Strategic Intelligence Diagrams
              </div>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>🤖🧠🚀</div>
              </div>
              <div className={styles.showcaseCaption}>
                AI-Human Partnership Models
              </div>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>🎨📈⚡</div>
              </div>
              <div className={styles.showcaseCaption}>
                Cultural Intelligence Infographics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 6 - Your Cognitive Evolution Pathway
function FutureYouSection() {
  return (
    <section className={clsx(styles.evolutionPathway, 'section')}>
      <div className="container">
        <div className={styles.pathwayContent}>
          <div className={styles.pathwayHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Your Cognitive Evolution Journey
            </Heading>
            <p className={styles.sectionSubtitle}>
              The transformation from cognitive overload to strategic clarity through expert guidance.
            </p>
          </div>
          
          <div className={styles.pathwaySteps}>
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Cognitive Overload</h3>
                <p className={styles.stepDescription}>
                  Information processing consumes mental bandwidth meant for strategic thinking.
                </p>
              </div>
            </div>
            
            <div className={styles.pathwayArrow}>→</div>
            
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Framework Discovery</h3>
                <p className={styles.stepDescription}>
                  Learn cognitive optimization techniques through Psychology × AI × Culture insights.
                </p>
              </div>
            </div>
            
            <div className={styles.pathwayArrow}>→</div>
            
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Strategic Clarity</h3>
                <p className={styles.stepDescription}>
                  Mental energy flows toward high-value pattern recognition and decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 7 - Strategic Intelligence in Action
function StrategicIntelligenceSection() {
  return (
    <section className={clsx(styles.strategicAction, 'section bg-soft')}>
      <div className="container">
        <div className={styles.actionContent}>
          <div className={styles.actionHeader}>
            <Heading as="h2" className={styles.sectionTitle}>
              Strategic Intelligence in Action
            </Heading>
            <p className={styles.sectionSubtitle}>
              Real frameworks and insights that demonstrate cognitive performance optimization.
            </p>
          </div>
          
          <div className={styles.actionGrid}>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>🎯</div>
              <h3 className={styles.actionTitle}>Pattern Synthesis Framework</h3>
              <p className={styles.actionDescription}>
                AI gathers information dots, humans connect them strategically for competitive advantage.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                Explore Framework →
              </Link>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>🧠</div>
              <h3 className={styles.actionTitle}>Cognitive Load Distribution</h3>
              <p className={styles.actionDescription}>
                Optimal division of mental tasks between AI processing and human strategic thinking.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                Learn Method →
              </Link>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>⚡</div>
              <h3 className={styles.actionTitle}>Decision Enhancement Systems</h3>
              <p className={styles.actionDescription}>
                Psychology-backed approaches to improve strategic decision-making under uncertainty.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                Access System →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section - Begin Your Cognitive Optimization
function FinalCtaSection() {
  return (
    <section className={clsx(styles.finalOptimization, 'section')}>
      <div className="container">
        <div className={styles.finalContent}>
          <div className={styles.finalCard}>
            <div className={styles.finalTitle}>
              Begin Your Cognitive Optimization
            </div>
            
            <div className={styles.finalSubtitle}>
              Ready to optimize how your mind processes information? Join strategic thinkers 
              who've discovered frameworks that enhance cognitive performance and mental bandwidth.
            </div>
            
            <div className={styles.finalButtons}>
              <Link
                to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations/intelligence/cognitive-intelligence-foundations"
                className="button button--primary button--lg">
                Access the Mental Models
              </Link>
              
              <Link
                to="/ai/workshops"
                className="button button--secondary button--lg">
                Begin Strategic Thinking Journey
              </Link>
            </div>
            
            <div className={styles.finalValue}>
              <div className={styles.valueStatement}>
                <div className={styles.valueIcon}>✨</div>
                <div className={styles.valueText}>
                  Frameworks that optimize cognitive approach through Psychology × AI × Culture insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Where psychology meets AI meets strategic thinking - Frameworks that optimize cognitive performance">
      <main className="homepage">
        <HeroSection />
        <RecognitionSection />
        <IntersectionSection />
        <BrainPotentialSection />
        <CommunitySection />
        <SocialProofSection />
        <FutureYouSection />
        <StrategicIntelligenceSection />
        <FinalCtaSection />
      </main>
    </Layout>
  );
}
