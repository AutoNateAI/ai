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
            Your Mind Is <span className="gradient-text">Maxed Out</span>
          </Heading>
          
          <p className={styles.heroSubtitle}>
            You're brilliant. But your brain is doing the work that AI should handle—leaving no space for the strategic thinking that built your family's success.
          </p>
          
          <div className={styles.heroValueProps}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🧠</div>
              <div className={styles.valueText}>Free Your Mind</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <div className={styles.valueText}>Think Strategically</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <div className={styles.valueText}>Lead With Clarity</div>
            </div>
          </div>
          
          <div className={styles.heroCTAGroup}>
            <Link
              to="/ai/knowledge-base"
              className="button button--primary button--lg">
              See How It Works
            </Link>
            <Link
              to="/ai/workshops"
              className="button button--secondary button--lg">
              Book a Private Call
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
              Picture This: It's 2 AM and Your Mind Won't Stop
            </Heading>
            <p className={styles.sectionSubtitle}>
              You're lying awake, not because you lack intelligence—but because your brilliant mind is drowning in information processing when it should be pattern-making.
            </p>
          </div>
          
          <div className={styles.clarityGrid}>
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>📊</div>
              <h3 className={styles.cardTitle}>The Information Trap</h3>
              <p className={styles.cardDescription}>
                Your brain—designed for strategic insight—spends 70% of its time sorting through data, 
                reports, and noise instead of seeing the patterns that create opportunities.
              </p>
            </div>
            
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>🔄</div>
              <h3 className={styles.cardTitle}>The Decision Fatigue Cycle</h3>
              <p className={styles.cardDescription}>
                Every small choice drains the mental energy you need for the big decisions that 
                shape your business, family, and legacy.
              </p>
            </div>
            
            <div className={styles.clarityCard}>
              <div className={styles.cardIcon}>⏰</div>
              <h3 className={styles.cardTitle}>The Time Paradox</h3>
              <p className={styles.cardDescription}>
                You have more access to information than ever, but less time to think deeply about 
                what actually matters for long-term success.
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
              What If AI Handled the Noise, So You Could Hear the Signal?
            </Heading>
            <p className={styles.sectionSubtitle}>
              Think of it like having a brilliant research assistant who never sleeps—one that filters everything so your mind can focus on what only you can do.
            </p>
          </div>
          
          <div className={styles.partnershipDiagram}>
            <div className={styles.partnershipColumn}>
              <div className={styles.partnershipCard}>
                <div className={styles.partnershipIcon}>🔍</div>
                <h3 className={styles.partnershipTitle}>The Information Filter</h3>
                <ul className={styles.partnershipList}>
                  <li>Instead of you reading 50 reports, AI reads them and shows you the 3 insights that matter</li>
                  <li>Your brain stays fresh for the strategic thinking that creates value</li>
                  <li><strong>Example:</strong> "AI scanned 847 market reports. Here are the 2 patterns that could impact your Q4 strategy."</li>
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
                <h3 className={styles.partnershipTitle}>Your Strategic Focus</h3>
                <ul className={styles.partnershipList}>
                  <li>Pattern recognition and strategic interpretation</li>
                  <li>Creative synthesis and decision-making</li>
                  <li>Relationship building and legacy planning</li>
                  <li>Vision-led leadership and timing decisions</li>
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
              Imagine Your Mind Working Like This...
            </Heading>
            <p className={styles.sectionSubtitle}>
              Picture walking into a board meeting where you've already seen the patterns others missed, 
              considered scenarios they haven't thought of, and arrived at clarity while they're still processing data.
            </p>
          </div>
          
          <div className={styles.frameworkGrid}>
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>01</div>
              <h3 className={styles.phaseTitle}>Monday Morning Clarity</h3>
              <p className={styles.phaseDescription}>
                You start the week with AI-filtered insights instead of a mountain of emails. 
                Your first hour is spent on strategy, not catching up on noise.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>02</div>
              <h3 className={styles.phaseTitle}>The Investment Decision</h3>
              <p className={styles.phaseDescription}>
                Instead of spending weeks analyzing market data, AI presents you with three clear options. 
                You focus on intuition, values, and long-term vision—not spreadsheets.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>03</div>
              <h3 className={styles.phaseTitle}>Family Legacy Planning</h3>
              <p className={styles.phaseDescription}>
                AI tracks cultural shifts and generational trends. You focus on teaching your children 
                timeless principles while staying relevant to their world.
              </p>
            </div>
            
            <div className={styles.frameworkPhase}>
              <div className={styles.phaseNumber}>04</div>
              <h3 className={styles.phaseTitle}>The Bottom Line</h3>
              <p className={styles.phaseDescription}>
                Your mind gets back to doing what it does best: seeing connections, making judgment calls, 
                and thinking three moves ahead—while AI handles the heavy lifting of information processing.
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
              You're Not Meant to Figure This Out Alone
            </Heading>
            <p className={styles.sectionSubtitle}>
              Join other high-achievers who've discovered that the real competitive advantage isn't working harder—it's thinking clearer.
            </p>
          </div>
          
          <div className={styles.libraryGrid}>
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Mental Models</div>
              <h3 className={styles.libraryTitle}>Mental Models Library</h3>
              <p className={styles.libraryPreview}>
                Proven thinking frameworks that help you make better decisions under pressure. 
                No theory—just tools that work when stakes are high.
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Example: "The 10-10-10 Rule for family business decisions"</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>Access Library →</Link>
              </div>
            </div>
            
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>Private Circle</div>
              <h3 className={styles.libraryTitle}>Connect with Peers</h3>
              <p className={styles.libraryPreview}>
                Connect with other leaders facing similar challenges. Share insights without the noise 
                of typical networking events or social media.
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Monthly case studies from real family offices</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>Join Circle →</Link>
              </div>
            </div>
            
            <div className={styles.libraryCard}>
              <div className={styles.categoryTag}>AI Tools</div>
              <h3 className={styles.libraryTitle}>AI Tool Reviews</h3>
              <p className={styles.libraryPreview}>
                We test the latest AI tools so you don't waste time on hype. Get recommendations 
                that actually save mental energy instead of creating more complexity.
              </p>
              <div className={styles.libraryMeta}>
                <span className={styles.readTime}>Example: "Which AI assistant works best for strategic planning?"</span>
                <Link to="/ai/knowledge-base/intelligence/cognitive-intelligence-foundations" className={styles.readMore}>See Reviews →</Link>
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
              Here's What Happens When You Get Your Mind Back
            </Heading>
            <p className={styles.sectionSubtitle}>
              Real results from leaders who stopped drowning in information and started swimming in clarity.
            </p>
          </div>
          
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>70%</div>
              </div>
              <div className={styles.showcaseCaption}>
                Less Time on Information Processing
              </div>
              <p className={styles.showcaseDescription}>
                Instead of spending mornings catching up on reports, you spend them thinking about strategy.
              </p>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>3x</div>
              </div>
              <div className={styles.showcaseCaption}>
                Better Strategic Decisions
              </div>
              <p className={styles.showcaseDescription}>
                When your mind isn't cluttered with noise, you see patterns and opportunities others miss.
              </p>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <div className={styles.imagePreview}>85%</div>
              </div>
              <div className={styles.showcaseCaption}>
                More Confidence in Choices
              </div>
              <p className={styles.showcaseDescription}>
                Clear thinking leads to clear decisions. No more second-guessing yourself into paralysis.
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
              Picture Yourself Six Months From Now
            </Heading>
            <p className={styles.sectionSubtitle}>
              What would change in your life if your mind was free to focus on vision instead of overwhelm?
            </p>
          </div>
          
          <div className={styles.pathwaySteps}>
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Before: Mental Overload</h3>
                <p className={styles.stepDescription}>
                  Mornings spent catching up on endless reports. Decision paralysis from too much information. 
                  Family time interrupted by work thoughts. Feeling behind despite working constantly.
                </p>
              </div>
            </div>
            
            <div className={styles.pathwayArrow}>→</div>
            
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>AI handles the noise</h3>
                <p className={styles.stepDescription}>
                  Information filtering, pattern recognition, and data processing—leaving your mind free 
                  for strategic thinking and creative problem-solving.
                </p>
              </div>
            </div>
            
            <div className={styles.pathwayArrow}>→</div>
            
            <div className={styles.pathwayStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>After: Mental Clarity</h3>
                <p className={styles.stepDescription}>
                  Mornings start with strategic thinking. Confident decisions based on clear insights. 
                  Present during family moments. Leading from vision, not reaction. Time to consider what really matters.
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
