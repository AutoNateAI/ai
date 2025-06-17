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
            <span className={styles.statusText}>Private Intelligence Suite: Active</span>
          </div>
          
          <Heading as="h1" className={styles.heroTitle}>
            Curate Your <span className="gradient-text">Cognitive Advantage</span>
          </Heading>
          
          <p className={styles.heroSubtitle}>
            Private frameworks for families who don't just build businesses—but dynasties of discernment.
          </p>
          
          <div className={styles.heroValueProps}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>♟️</div>
              <div className={styles.valueText}>Decision Architecture</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚜️</div>
              <div className={styles.valueText}>Legacy Readiness</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🔍</div>
              <div className={styles.valueText}>Intergenerational Fluency</div>
            </div>
          </div>
          
          <div className={styles.heroCTAGroup}>
            <Link
              to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations/intelligence/cognitive-intelligence-foundations"
              className="button button--primary button--lg">
              Request Private Access
            </Link>
            <Link
              to="/ai/workshops"
              className="button button--secondary button--lg">
              Apply for Legacy Briefing
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
              Cognitive Architecture for Discerning Minds
            </Heading>
            <p className={styles.sectionSubtitle}>
              Custom strategies for pattern recognition, decision stability, and mental load liberation—built for families making generational choices under pressure.
            </p>
          </div>
          
          <div className={styles.clarityGrid}>
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>♟️</div>
              <h3 className={styles.cardTitle}>Bespoke Pattern Recognition</h3>
              <p className={styles.cardDescription}>
                Cultivate the discerning eye that separates signal from noise—a curated approach to 
                information filtering reserved for those who shape industries.
              </p>
            </div>
            
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>⚜️</div>
              <h3 className={styles.cardTitle}>Mental Clarity Preservation</h3>
              <p className={styles.cardDescription}>
                Safeguard your most valuable asset—cognitive bandwidth—through private systems 
                designed for those whose decisions impact generations.
              </p>
            </div>
            
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>⚖️</div>
              <h3 className={styles.cardTitle}>Legacy Decision Architecture</h3>
              <p className={styles.cardDescription}>
                Elevate family decision-making through proprietary frameworks that enhance foresight 
                and cultivate intergenerational wisdom transfer.
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
              Your Private Cognitive Concierge
            </Heading>
            <p className={styles.sectionSubtitle}>
              We engineer elite AI-human collaboration so your mind is free to do what only legacy-level intelligence can: interpret, synthesize, and shape futures.
            </p>
          </div>
          
          <div className={styles.partnershipDiagram}>
            <div className={styles.partnershipColumn}>
              <div className={styles.partnershipCard}>
                <div className={styles.partnershipIcon}>⌛</div>
                <h3 className={styles.partnershipTitle}>Discreet Automation</h3>
                <ul className={styles.partnershipList}>
                  <li>Signal filtering, decision prep</li>
                  <li>Noise reduction & curation</li>
                  <li>Pattern identification & analysis</li>
                  <li>Continuous environmental scanning</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.partnershipArrow}>
              <span className={styles.arrowIcon}>⚜️</span>
              <span className={styles.arrowText}>Bespoke Collaboration</span>
            </div>
            
            <div className={styles.partnershipColumn}>
              <div className={styles.partnershipCard}>
                <div className={styles.partnershipIcon}>♟️</div>
                <h3 className={styles.partnershipTitle}>Your Legacy Focus</h3>
                <ul className={styles.partnershipList}>
                  <li>Insight generation, vision-led decisioning</li>
                  <li>Intergenerational wisdom cultivation</li>
                  <li>Strategic foresight under complexity</li>
                  <li>Long-term synthesis & legacy planning</li>
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
              Mental Efficiency for Empire Thinkers
            </Heading>
            <p className={styles.sectionSubtitle}>
              Our proprietary four-phase methodology for transforming cognitive demands into generational advantage.
            </p>
          </div>
          
          <div className={styles.frameworkGrid}>
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>01</div>
              <h3 className={styles.phaseTitle}>Clarity Baseline Assessment</h3>
              <p className={styles.phaseDescription}>
                Identify where legacy-building mental capacity is diverted to tasks beneath your station.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>02</div>
              <h3 className={styles.phaseTitle}>Precision Delegation Matrix</h3>
              <p className={styles.phaseDescription}>
                Architect the optimal division between discreet automation and your irreplaceable strategic insight.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>03</div>
              <h3 className={styles.phaseTitle}>Cognitive Advantage Alignment</h3>
              <p className={styles.phaseDescription}>
                Channel liberated mental bandwidth toward legacy-defining decisions and intergenerational planning.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>04</div>
              <h3 className={styles.phaseTitle}>Legacy Feedback Loop</h3>
              <p className={styles.phaseDescription}>
                Continuously refine your private cognitive system based on multi-generational outcomes.
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
              Elite Briefings for Discerning Minds
            </Heading>
            <p className={styles.sectionSubtitle}>
              Private dispatches on AI, psychology, and modern mental clarity—tailored for families who think three generations ahead.
            </p>
          </div>
          
          <div className={styles.libraryGrid}>
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Mental Infrastructure</div>
              <h3 className={styles.libraryTitle}>Bespoke Pattern Recognition</h3>
              <p className={styles.libraryPreview}>
                How distinguished families cultivate the discernment to separate signal from market noise...
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Curated Insight</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>Request Access →</Link>
              </div>
            </div>
            
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Legacy Frameworks</div>
              <h3 className={styles.libraryTitle}>Intergenerational Intelligence</h3>
              <p className={styles.libraryPreview}>
                Proprietary systems for cultivating wisdom transfer across generations of leadership...
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Private Methodology</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>Inquire →</Link>
              </div>
            </div>
            
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Decision Architecture</div>
              <h3 className={styles.libraryTitle}>Navigating Complexity with Clarity</h3>
              <p className={styles.libraryPreview}>
                Discreet approaches that ensure family decisions maintain precision under uncertainty...
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Exclusive Protocol</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>Schedule Consultation →</Link>
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
              Cognitive Diagrams, Engineered for Precision
            </Heading>
            <p className={styles.sectionSubtitle}>
              Curated visual frameworks that distill complex insights into elegant representations for discerning minds.
            </p>
          </div>
          
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>♟️ ⚜️ ⚖️</div>
              </div>
              <div className={styles.showcaseCaption}>
                Strategic Intelligence Diagrams
              </div>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>🔍 ⌛ ⚖️</div>
              </div>
              <div className={styles.showcaseCaption}>
                Mental Flowcharts for Executive Clarity
              </div>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>⚔️ ♟️ ⚜️</div>
              </div>
              <div className={styles.showcaseCaption}>
                AI Partnership Maps
              </div>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>🔍 ⚖️ ⌛</div>
              </div>
              <div className={styles.showcaseCaption}>
                Legacy Culture Intelligence Visuals
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
              From Clutter to Clarity: The Legacy Mind Shift
            </Heading>
            <p className={styles.sectionSubtitle}>
              The transformation from cognitive noise to generational wisdom through bespoke mental infrastructure.
            </p>
          </div>
          
          <div className={styles.pathwaySteps}>
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Mental Noise Audit</h3>
                <p className={styles.stepDescription}>
                  Identify where your family's intellectual capital is being diluted by low-value information processing.
                </p>
              </div>
            </div>
            
            <div className={styles.pathwayArrow}>→</div>
            
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Private Framework Curation</h3>
                <p className={styles.stepDescription}>
                  Cultivate bespoke cognitive systems designed for families who shape industries and legacies.
                </p>
              </div>
            </div>
            
            <div className={styles.pathwayArrow}>→</div>
            
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Strategic Clarity Execution</h3>
                <p className={styles.stepDescription}>
                  Channel liberated cognitive bandwidth into multi-generational vision and legacy cultivation.
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
              Proprietary Cognitive Systems
            </Heading>
            <p className={styles.sectionSubtitle}>
              Bespoke frameworks that cultivate mental clarity and strategic foresight for generational advantage.
            </p>
          </div>
          
          <div className={styles.actionGrid}>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>♟️</div>
              <h3 className={styles.actionTitle}>Signal Intelligence Suite</h3>
              <p className={styles.actionDescription}>
                Discreet information curation that allows legacy-builders to identify patterns invisible to others.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                Request Private Briefing →
              </Link>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>⚜️</div>
              <h3 className={styles.actionTitle}>Cognitive Asset Allocation System</h3>
              <p className={styles.actionDescription}>
                Precision delegation of mental resources between AI assistance and your irreplaceable strategic insight.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                Schedule Consultation →
              </Link>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>⚖️</div>
              <h3 className={styles.actionTitle}>Legacy Decision Architecture Toolkit</h3>
              <p className={styles.actionDescription}>
                Bespoke frameworks that ensure family decisions maintain precision under complexity and uncertainty.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                Apply for Access →
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
              Initiate Your Legacy Intelligence Protocol
            </div>
            
            <div className={styles.finalSubtitle}>
              For families who understand that cognitive clarity is their most valuable asset—join the discreet 
              circle of legacy-builders who've embraced bespoke mental infrastructure for generational advantage.
            </div>
            
            <div className={styles.finalButtons}>
              <Link
                to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations/intelligence/cognitive-intelligence-foundations"
                className="button button--primary button--lg">
                Request Family Onboarding
              </Link>
              
              <Link
                to="/ai/workshops"
                className="button button--secondary button--lg">
                Schedule Discreet Consultation
              </Link>
            </div>
            
            <div className={styles.finalValue}>
              <div className={styles.valueStatement}>
                <div className={styles.valueIcon}>⚜️</div>
                <div className={styles.valueText}>
                  Private mental frameworks engineered for those who think in terms of legacy, not quick wins
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
