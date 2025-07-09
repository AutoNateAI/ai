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
            <span className={styles.statusText}>Research Intelligence Suite: Active</span>
          </div>
          
          <Heading as="h1" className={styles.heroTitle}>
            Your Mind Is <span className="gradient-text-light">Maxed Out</span>
          </Heading>
          
          <p className={styles.heroSubtitle}>
            You're brilliant. But your brain is doing the work that AI should handle—leaving no space for the innovative thinking that drives groundbreaking research.
          </p>
          
          <div className={styles.heroValueProps}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🧠</div>
              <div className={styles.valueText}>Accelerate Research</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <div className={styles.valueText}>Enhance Publications</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <div className={styles.valueText}>Amplify Impact</div>
            </div>
          </div>
          
          <div className={styles.heroCTAGroup}>
            <Link
              to="/ai/courses"
              className="button button--primary button--lg">
              Explore AI Courses
            </Link>
            <Link
              to="/ai/workshops"
              className="button button--secondary button--lg">
              Request Workshop
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
              Picture This: Your Research Deadline Looms and Your Mind Won't Focus
            </Heading>
            <p className={styles.sectionSubtitle}>
              You're struggling to make progress, not because you lack expertise—but because your brilliant mind is drowning in information processing when it should be synthesizing groundbreaking insights.
            </p>
          </div>
          
          <div className={styles.clarityGrid}>
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>📊</div>
              <h3 className={styles.cardTitle}>The Literature Review Challenge</h3>
              <p className={styles.cardDescription}>
                Your brain—designed for innovative insight—spends 70% of its time sorting through papers, 
                data, and citations instead of seeing the patterns that create breakthrough discoveries.
              </p>
            </div>
            
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>🔄</div>
              <h3 className={styles.cardTitle}>The Publication Pressure Cycle</h3>
              <p className={styles.cardDescription}>
                Every administrative task drains the mental energy you need for the big ideas that 
                advance your field and secure your academic reputation.
              </p>
            </div>
            
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>⏰</div>
              <h3 className={styles.cardTitle}>The Research Time Paradox</h3>
              <p className={styles.cardDescription}>
                You have more access to research than ever, but less time to think deeply about 
                the connections that could lead to your next breakthrough publication.
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
              What If AI Handled the Literature Review, So You Could Focus on Original Insights?
            </Heading>
            <p className={styles.sectionSubtitle}>
              Think of it like having a brilliant research assistant who never sleeps—one that processes thousands of papers so your mind can focus on what only you can do: generate groundbreaking ideas.
            </p>
          </div>
          
          <div className={styles.partnershipDiagram}>
            <div className={styles.partnershipColumn}>
              <div className={styles.partnershipCard}>
                <div className={styles.partnershipIcon}>🔍</div>
                <h3 className={styles.partnershipTitle}>The Research Accelerator</h3>
                <ul className={styles.partnershipList}>
                  <li>Instead of you reading 200 papers, AI analyzes them and highlights the 5 most relevant to your research</li>
                  <li>Your brain stays fresh for the innovative thinking that advances your field</li>
                  <li><strong>Example:</strong> "AI analyzed 1,247 papers in your field. Here are 3 methodological gaps your research could address."</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.partnershipArrow}>
              <span className={styles.arrowIcon}>⚜️</span>
              <span className={styles.arrowText}>AI Partnership</span>
            </div>
            
            <div className={styles.partnershipColumn}>
              <div className={styles.partnershipCard}>
                <div className={styles.partnershipIcon}>🎯</div>
                <h3 className={styles.partnershipTitle}>Your Academic Focus</h3>
                <ul className={styles.partnershipList}>
                  <li>Novel hypothesis generation and theoretical frameworks</li>
                  <li>Creative synthesis and methodological innovation</li>
                  <li>Interdisciplinary connections and collaboration opportunities</li>
                  <li>Research agenda development and grant proposal crafting</li>
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
              Imagine Your Research Workflow Working Like This...
            </Heading>
            <p className={styles.sectionSubtitle}>
              Picture submitting a paper where you've identified connections others missed, 
              developed methodologies they haven't considered, and articulated insights while they're still processing literature reviews.
            </p>
          </div>
          
          <div className={styles.frameworkGrid}>
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>01</div>
              <h3 className={styles.phaseTitle}>Literature Review Acceleration</h3>
              <p className={styles.phaseDescription}>
                You start your research with AI-filtered papers instead of weeks of manual searching. 
                Your first day is spent on hypothesis development, not drowning in citations.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>02</div>
              <h3 className={styles.phaseTitle}>The Methodology Enhancement</h3>
              <p className={styles.phaseDescription}>
                Instead of spending weeks refining your approach, AI helps identify methodological gaps and opportunities. 
                You focus on innovation and rigor—not reinventing established protocols.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>03</div>
              <h3 className={styles.phaseTitle}>Publication Preparation</h3>
              <p className={styles.phaseDescription}>
                AI assists with formatting, citations, and language refinement. You focus on communicating 
                your groundbreaking ideas with clarity and precision for maximum impact.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>04</div>
              <h3 className={styles.phaseTitle}>The Academic Impact</h3>
              <p className={styles.phaseDescription}>
                Your mind gets back to doing what it does best: generating novel hypotheses, designing innovative studies, 
                and advancing your field—while AI handles the heavy lifting of information processing.
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
              You're Not Meant to Master AI Research Tools Alone
            </Heading>
            <p className={styles.sectionSubtitle}>
              Join other academic innovators who've discovered that the real research advantage isn't just expertise—it's leveraging AI to amplify your intellectual contributions.
            </p>
          </div>
          
          <div className={styles.libraryGrid}>
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Research Methods</div>
              <h3 className={styles.libraryTitle}>AI Research Methods</h3>
              <p className={styles.libraryPreview}>
                Proven AI workflows that help you accelerate literature reviews and data analysis. 
                No hype—just tools that work when publication deadlines loom.
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Example: "Using AI to identify research gaps in interdisciplinary fields"</span>
                <Link to="/ai/courses" className={styles.readMore}>Access Courses →</Link>
              </div>
            </div>
            
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Academic Community</div>
              <h3 className={styles.libraryTitle}>Connect with Researchers</h3>
              <p className={styles.libraryPreview}>
                Connect with other professors and researchers leveraging AI. Share methodologies without the 
                steep learning curve of figuring it out on your own.
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Monthly workshops for university departments</span>
                <Link to="/ai/workshops" className={styles.readMore}>Request Workshop →</Link>
              </div>
            </div>
            
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>AI Modules</div>
              <h3 className={styles.libraryTitle}>AI Course Modules</h3>
              <p className={styles.libraryPreview}>
                We've developed specialized modules for academic research workflows. Learn how to use 
                ChatGPT, Claude, and other AI tools specifically for research and publication.
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Example: "How to use AI to strengthen your literature review methodology"</span>
                <Link to="/ai/courses" className={styles.readMore}>Browse Modules →</Link>
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
              Here's What Happens When You Integrate AI Into Your Research
            </Heading>
            <p className={styles.sectionSubtitle}>
              Real results from academics who stopped drowning in literature reviews and started focusing on original contributions.
            </p>
          </div>
          
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>70%</div>
              </div>
              <div className={styles.showcaseCaption}>
                Less Time on Literature Reviews
              </div>
              <p className={styles.showcaseDescription}>
                Instead of spending weeks on manual citation searches, you spend days synthesizing key insights for your research.
              </p>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>3x</div>
              </div>
              <div className={styles.showcaseCaption}>
                Higher Publication Quality
              </div>
              <p className={styles.showcaseDescription}>
                When your mind isn't exhausted from administrative tasks, you develop stronger methodologies and clearer arguments.
              </p>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>85%</div>
              </div>
              <div className={styles.showcaseCaption}>
                More Research Productivity
              </div>
              <p className={styles.showcaseDescription}>
                Streamlined workflows lead to more submissions. No more getting stuck in endless literature reviews.
              </p>
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
              Picture Your Research Six Months From Now
            </Heading>
            <p className={styles.sectionSubtitle}>
              What would change in your academic output if your mind was free to focus on innovation instead of administration?
            </p>
          </div>
          
          <div className={styles.pathwaySteps}>
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Before: Research Overload</h3>
                <p className={styles.stepDescription}>
                  Weeks spent on manual literature reviews. Analysis paralysis from too many papers. 
                  Personal time sacrificed for administrative tasks. Feeling behind despite working constantly.
                </p>
              </div>
            </div>
            
            <div className={styles.pathwayArrow}>→</div>
            
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>AI handles the research grunt work</h3>
                <p className={styles.stepDescription}>
                  Literature analysis, citation management, and data visualization—leaving your mind free 
                  for theoretical innovation and methodological breakthroughs.
                </p>
              </div>
            </div>
            
            <div className={styles.pathwayArrow}>→</div>
            
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>After: Research Clarity</h3>
                <p className={styles.stepDescription}>
                  Research begins with innovative hypotheses. Confident submissions based on comprehensive analysis. 
                  Better work-life balance. Leading your field with original insights, not just keeping up. Time to pursue what really advances knowledge.
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
              Ready to Take Back Your Mental Space?
            </Heading>
            <p className={styles.sectionSubtitle}>
              Here's how we help you move from information overload to strategic clarity—starting today.
            </p>
          </div>
          
          <div className={styles.actionGrid}>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>🧠</div>
              <h3 className={styles.actionTitle}>AI Information Assistant</h3>
              <p className={styles.actionDescription}>
                We set up AI to filter your daily information flow, giving you only the insights that matter 
                for your decisions. No more drowning in reports.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                See How It Works →
              </Link>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>⚡</div>
              <h3 className={styles.actionTitle}>Decision-Making Frameworks</h3>
              <p className={styles.actionDescription}>
                Get proven mental models that help you make better choices faster. Think clearer under pressure 
                and trust your decisions more.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                Get the Tools →
              </Link>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>🎯</div>
              <h3 className={styles.actionTitle}>Legacy Planning Support</h3>
              <p className={styles.actionDescription}>
                AI tracks trends while you focus on teaching timeless principles. Bridge the gap between 
                generations without losing your core values.
              </p>
              <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.actionLink}>
                Learn More →
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
              The Choice Is Yours
            </div>
            
            <div className={styles.finalSubtitle}>
              You can keep using your brilliant mind for information processing—or you can free it up 
              to do what it was meant for: strategic thinking, creative problem-solving, and building something that lasts.
            </div>
            
            <div className={styles.finalButtons}>
              <Link
                to="/ai/knowledge-base"
                className="button button--primary button--lg">
                Start Your Transformation
              </Link>
              
              <Link
                to="/ai/workshops"
                className="button button--secondary button--lg">
                Book a Strategy Call
              </Link>
            </div>
            
            <div className={styles.finalValue}>
              <div className={styles.valueStatement}>
                <div className={styles.valueIcon}>🧠</div>
                <div className={styles.valueText}>
                  For leaders who know their mind is their most valuable asset—and want to use it like one.
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
