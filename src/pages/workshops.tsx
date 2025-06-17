import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './workshops.module.css';

// Workshop data structure
interface Workshop {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  time: string;
  format: 'Virtual' | 'In-Person' | 'Hybrid' | 'Private Estate';
  duration: string;
  level: 'Executive' | 'Professional' | 'Advanced' | 'Legacy' | 'Next-Gen';
  price: number;
  originalPrice?: number;
  seatsRemaining: number;
  totalSeats: number;
  focusArea: 'Legacy' | 'Decision' | 'Cognitive' | 'Strategic';
  type: 'Private Briefing' | 'Legacy Lab' | 'Cognitive Ascension' | 'Family Session';
  audience: 'Adult' | 'Student';
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
  featured?: boolean;
}

// Sample workshop data with complete details
const workshops: Workshop[] = [
  // ADULT WORKSHOPS
  {
    id: '1',
    slug: 'ai-fluency-next-gen-leaders',
    title: 'AI Fluency for Next-Gen Leaders',
    subtitle: 'Strategic Intelligence for Inheritors',
    description: 'Equip young heirs with strategic AI understanding—from prompt engineering to agent design—through the lens of power and responsibility.',
    date: '2024-03-05',
    time: '3:00 PM - 5:00 PM EST',
    format: 'Private Estate',
    duration: '2 hours',
    level: 'Next-Gen',
    price: 3800,
    originalPrice: 4500,
    seatsRemaining: 4,
    totalSeats: 8,
    focusArea: 'Strategic',
    type: 'Legacy Lab',
    audience: 'Student',
    outcomes: [
      "Master the strategic deployment of AI as a cognitive extension rather than mere convenience",
      "Develop sophisticated mental models for evaluating AI capabilities against family or enterprise needs",
      "Create private intelligence systems that maintain discretion while amplifying decision quality",
      "Establish personal protocols for leveraging AI while preserving independent judgment"
    ],
    instructor: {
      name: 'Dr. Alex Kumar',
      title: 'Chief AI Architect',
      company: 'Fortune 100 Technology Corporation',
      expertise: 'Enterprise AI Architecture & Machine Learning Systems',
      credentials: [
        'Designed AI infrastructure for $100B+ tech companies',
        'PhD in Computer Science from Carnegie Mellon',
        'Former Google AI Research Team Lead',
        'Author of "Enterprise AI Architecture" (O\'Reilly)'
      ]
    },
    agenda: [
      {
        time: '3:00 PM',
        title: 'AI Systems Assessment',
        description: 'Evaluate current AI capabilities and identify architectural gaps in enterprise environments.'
      },
      {
        time: '3:45 PM',
        title: 'Scalable Architecture Design',
        description: 'Learn principles for designing AI systems that scale with business growth and complexity.'
      },
      {
        time: '4:30 PM',
        title: 'Implementation Strategies',
        description: 'Master proven approaches for deploying AI systems in large-scale enterprise environments.'
      },
      {
        time: '5:15 PM',
        title: 'Governance & Ethics Framework',
        description: 'Build comprehensive AI governance systems for responsible enterprise deployment.'
      },
      {
        time: '6:00 PM',
        title: 'Competitive Advantage Design',
        description: 'Create sustainable competitive advantages through unique AI system architecture.'
      }
    ],
    testimonials: [
      {
        quote: 'This architecture framework helped us scale our AI initiatives from pilot to enterprise-wide deployment.',
        author: 'Jennifer Walsh',
        company: 'Global Financial Services',
        role: 'Chief Technology Officer'
      }
    ]
  },
  {
    id: '2',
    slug: 'raising-minds-worth-inheriting',
    title: 'Raising Minds Worth Inheriting',
    subtitle: 'Generational Intelligence Cultivation',
    description: 'A guided strategy session for parents who want to instill mental clarity, creative discipline, and digital literacy in their children.',
    date: '2024-01-22',
    time: '1:00 PM - 3:30 PM EST',
    format: 'Private Estate',
    duration: '2.5 hours',
    level: 'Legacy',
    price: 5500,
    originalPrice: 7000,
    seatsRemaining: 4,
    totalSeats: 8,
    focusArea: 'Legacy',
    type: 'Family Session',
    audience: 'Adult',
    outcomes: [
      "Design a bespoke cognitive development framework for your family's next generation",
      "Implement psychology-backed protocols for cultivating discernment and judgment",
      "Create private systems for balancing technological fluency with deep thinking",
      "Establish family traditions that transfer wisdom across generations"
    ],
    instructor: {
      name: 'Dr. James Wilson',
      title: 'Director of Intergenerational Intelligence',
      company: 'Legacy Mind Institute',
      expertise: 'Family Cognitive Systems & Next-Gen Development',
      credentials: [
        'Advised multi-generational families with combined assets exceeding $50B',
        'PhD in Developmental Psychology from Yale',
        'Former advisor to three royal families on next-generation education',
        'Author of "The Inheritor\'s Mind: Cultivating Judgment in Wealth\'s Shadow"'
      ]
    },
    agenda: [
      {
        time: '1:00 PM',
        title: 'Psychology of AI Collaboration',
        description: 'Understand the cognitive principles that make human-AI partnerships successful in strategic environments.'
      },
      {
        time: '1:45 PM',
        title: 'Workflow Design Principles',
        description: 'Learn the framework for designing workflows that amplify human creativity while leveraging AI capabilities.'
      },
      {
        time: '2:30 PM',
        title: 'Strategic Automation',
        description: 'Identify which strategic processes should be automated vs. enhanced vs. preserved as human-only.'
      },
      {
        time: '3:15 PM',
        title: 'Implementation Strategy',
        description: 'Create your personalized AI integration roadmap with change management considerations.'
      },
      {
        time: '4:00 PM',
        title: 'Competitive Advantage Design',
        description: 'Build sustainable advantages through unique human-AI collaboration patterns.'
      }
    ],
    testimonials: [
      {
        quote: 'This approach to AI integration is brilliant. It actually enhances human potential rather than replacing it.',
        author: 'David Kim',
        company: 'Tech Innovation Corp',
        role: 'Chief Innovation Officer'
      }
    ]
  },
  {
    id: '3',
    slug: 'mental-models-for-inheritors',
    title: 'Mental Models for Inheritors',
    subtitle: 'Cognitive Architecture for Next-Generation Leaders',
    description: 'Teach second-gen family members how to think, not what to think. Covers frameworks for clarity, ethics, and future-mapping.',
    date: '2024-03-12',
    time: '11:00 AM - 1:30 PM EST',
    format: 'Private Estate',
    duration: '2.5 hours',
    level: 'Next-Gen',
    price: 4200,
    originalPrice: 5000,
    seatsRemaining: 3,
    totalSeats: 6,
    focusArea: 'Cognitive',
    type: 'Cognitive Ascension',
    audience: 'Student',
    outcomes: [
      "Master the mental models used by multi-generational wealth stewards and legacy builders",
      "Develop sophisticated frameworks for ethical decision-making in complex inheritance scenarios",
      "Create personal systems for maintaining clarity and purpose amid privilege",
      "Establish cognitive protocols for balancing tradition with innovation in family enterprises"
    ],
    instructor: {
      name: 'Dr. Rachel Thompson',
      title: 'Executive Strategy Consultant',
      company: 'Fortune 100 Strategy Firm',
      expertise: 'Executive Decision Science & Predictive Analytics',
      credentials: [
        'Advised C-suite leaders at 25+ Fortune 500 companies',
        'PhD in Decision Science from Stanford',
        'Former BCG Principal and McKinsey Partner',
        'Harvard Business Review Strategy Contributor'
      ]
    },
    agenda: [
      {
        time: '11:00 AM',
        title: 'Decision Quality Assessment',
        description: 'Analyze current decision-making processes and identify opportunities for optimization.'
      },
      {
        time: '11:45 AM',
        title: 'Predictive Analytics Framework',
        description: 'Learn to integrate predictive models into strategic decision-making workflows.'
      },
      {
        time: '12:30 PM',
        title: 'Executive Intelligence Design',
        description: 'Build personalized intelligence systems that enhance executive decision quality.'
      },
      {
        time: '1:15 PM',
        title: 'Implementation Workshop',
        description: 'Apply frameworks to real executive challenges with expert guidance and peer collaboration.'
      },
      {
        time: '2:00 PM',
        title: 'Leadership System Design',
        description: 'Create sustainable systems for evidence-based leadership and strategic execution.'
      }
    ],
    testimonials: [
      {
        quote: 'These decision frameworks transformed our strategic planning process. We\'re making better decisions faster.',
        author: 'Mark Stevens',
        company: 'Global Manufacturing Corp',
        role: 'Chief Executive Officer'
      }
    ]
  },
  {
    id: '5',
    slug: 'ai-strategic-insight-legacy-edition',
    title: 'AI for Strategic Insight: Legacy Edition',
    subtitle: 'Private Intelligence Architecture for Family Offices',
    description: 'A 90-minute immersive to reframe AI not as threat, but as force multiplier—tailored to family office leaders, advisors, and tech-averse founders.',
    date: '2024-01-15',
    time: '2:00 PM - 3:30 PM EST',
    format: 'Private Estate',
    duration: '90 minutes',
    level: 'Legacy',
    price: 4800,
    originalPrice: 6000,
    seatsRemaining: 3,
    totalSeats: 8,
    focusArea: 'Strategic',
    type: 'Private Briefing',
    audience: 'Adult',
    outcomes: [
      'Cultivate a private intelligence architecture for multi-generational advantage',
      'Establish discreet AI systems that preserve family privacy while amplifying insight',
      'Design bespoke decision protocols for complex legacy considerations',
      'Develop strategic foresight capabilities through curated AI partnerships'
    ],
    instructor: {
      name: 'Dr. Sarah Chen',
      title: 'Director of Private Intelligence Systems',
      company: 'Global Family Office Advisory',
      expertise: 'Legacy Intelligence Architecture & Strategic Foresight',
      credentials: [
        'Designed intelligence systems for three of the world\'s largest family offices',
        'PhD in Cognitive Science from Stanford',
        'Former advisor to ultra-high-net-worth families across three continents',
        'Author of "The Private Intelligence Advantage" (Oxford University Press)'
      ]
    },
    agenda: [
      {
        time: '2:00 PM',
        title: 'Private Intelligence Assessment',
        description: 'Discreet evaluation of your family office\'s current intelligence architecture and identification of legacy-critical blind spots.'
      },
      {
        time: '2:20 PM',
        title: 'Bespoke AI Integration Framework',
        description: 'Introduction to the proprietary methodology used by select family offices to enhance multi-generational decision quality.'
      },
      {
        time: '2:40 PM',
        title: 'Legacy Decision Architecture',
        description: 'Design of customized intelligence protocols for complex, high-stakes family office decisions with generational implications.'
      },
      {
        time: '3:00 PM',
        title: 'Private Implementation Consultation',
        description: 'Confidential application of frameworks to your specific family office challenges with discreet expert guidance.'
      },
      {
        time: '3:20 PM',
        title: 'Intergenerational Intelligence Systems',
        description: 'Establishment of private systems for strategic foresight that compound your family\'s cognitive advantage across generations.'
      }
    ],
    testimonials: [
      {
        quote: 'This private intelligence framework has transformed how our family office approaches multi-generational decisions. The discretion and precision are unparalleled.',
        author: 'J.W.',
        company: 'European Legacy Family Office',
        role: 'Family Principal'
      },
      {
        quote: 'After three generations of wealth creation, we finally have a structured approach to legacy intelligence that preserves our family\'s cognitive advantage.',
        author: 'E.R.',
        company: 'Multi-Continental Family Enterprise',
        role: 'Trustee & Next-Gen Advisor'
      }
    ],
    featured: true
  },
  
  {
    id: '3',
    slug: 'mental-clarity-under-complexity',
    title: 'Mental Clarity Under Complexity',
    subtitle: 'Decision Architecture for Legacy Leaders',
    description: 'High-stakes decision enhancement through AI–psychology frameworks, designed for those leading businesses, trusts, or multi-gen estates.',
    date: '2024-01-29',
    time: '10:00 AM - 12:30 PM EST',
    format: 'Private Estate',
    duration: '2.5 hours',
    level: 'Legacy',
    price: 6200,
    originalPrice: 7500,
    seatsRemaining: 3,
    totalSeats: 6,
    focusArea: 'Decision',
    type: 'Private Briefing',
    audience: 'Adult',
    outcomes: [
      "Master proprietary frameworks for maintaining mental clarity during high-stakes decisions",
      "Implement bespoke cognitive protocols for navigating complexity without cognitive overwhelm",
      "Design private decision architecture systems tailored to your family office or enterprise",
      "Establish legacy-preserving decision processes that maintain clarity across generations"
    ],
    instructor: {
      name: 'Dr. Maria Santos',
      title: 'Chief Culture Officer',
      company: 'Fortune 100 Technology Company',
      expertise: 'Organizational Design & Strategic Culture Architecture',
      credentials: [
        'Transformed culture at 3 Fortune 100 companies',
        'PhD in Organizational Behavior from Wharton',
        '20+ years executive leadership experience',
        'Featured in Harvard Business Review Culture Series'
      ]
    },
    agenda: [
      {
        time: '10:00 AM',
        title: 'Culture Assessment Framework',
        description: 'Evaluate your current organizational culture and identify strategic alignment gaps.'
      },
      {
        time: '10:45 AM',
        title: 'Strategic Culture Design',
        description: 'Learn the methodology for designing cultures that drive specific strategic outcomes.'
      },
      {
        time: '11:30 AM',
        title: 'Implementation Strategy',
        description: 'Create your culture transformation roadmap with change management best practices.'
      },
      {
        time: '12:15 PM',
        title: 'Performance Systems',
        description: 'Design systems that reinforce desired cultural behaviors and strategic execution.'
      },
      {
        time: '1:00 PM',
        title: 'Sustainability Framework',
        description: 'Build mechanisms to maintain and evolve your strategic culture over time.'
      }
    ],
    testimonials: [
      {
        quote: 'Our culture transformation using these frameworks led to 40% improvement in strategic initiative success rates.',
        author: 'Robert Chen',
        company: 'Global Technology Corp',
        role: 'Chief Executive Officer'
      }
    ]
  },
  {
    id: '4',
    slug: 'household-cognitive-systems',
    title: 'Household Cognitive Systems',
    subtitle: 'Private Intelligence Architecture for Family Offices',
    description: 'Design custom mind-management systems for your family—leveraging frameworks for calendars, reflections, assistants, and communication clarity.',
    date: '2024-02-25',
    time: '9:00 AM - 11:30 AM EST',
    format: 'Private Estate',
    duration: '2.5 hours',
    level: 'Legacy',
    price: 5800,
    originalPrice: 7200,
    seatsRemaining: 2,
    totalSeats: 6,
    focusArea: 'Cognitive',
    type: 'Family Session',
    audience: 'Adult',
    outcomes: [
      "Design bespoke cognitive systems tailored to your family's unique dynamics and legacy goals",
      "Implement private intelligence protocols that enhance clarity across generations",
      "Create discreet AI-augmented frameworks for family communication and decision-making",
      "Establish household mental models that preserve wisdom while adapting to changing circumstances"
    ],
    instructor: {
      name: 'Dr. James Patterson',
      title: 'Cognitive Systems Researcher',
      company: 'Advanced Intelligence Institute',
      expertise: 'Cognitive AI Systems & Strategic Decision Architecture',
      credentials: [
        'Led AI strategy implementation for $50B+ revenue division',
        'PhD in Cognitive Science from Stanford',
        '15+ years Fortune 100 AI leadership',
        'Author of "Strategic AI Integration" (Harvard Business Review)'
      ]
    },
    agenda: [
      {
        time: '9:00 AM',
        title: 'Cognitive Load Assessment',
        description: 'Analyze your current decision-making patterns and identify cognitive bottlenecks affecting strategic performance.'
      },
      {
        time: '9:45 AM',
        title: 'AI-Augmented Analysis Framework',
        description: 'Learn the proprietary framework used by Fortune 100 companies to integrate AI insights with human intuition.'
      },
      {
        time: '10:30 AM',
        title: 'Strategic Decision Protocols',
        description: 'Design your personalized decision-making system for complex, high-stakes strategic choices.'
      },
      {
        time: '11:15 AM',
        title: 'Implementation Workshop',
        description: 'Apply frameworks to your real strategic challenges with expert guidance and peer collaboration.'
      },
      {
        time: '12:00 PM',
        title: 'Automation & Systems Design',
        description: 'Build repeatable systems for strategic thinking that compound your cognitive performance over time.'
      }
    ],
    testimonials: [
      {
        quote: 'This framework transformed how I approach strategic decisions. The AI integration is game-changing.',
        author: 'Michael Rodriguez',
        company: 'Global Manufacturing Corp',
        role: 'Chief Strategy Officer'
      }
    ]
  }
];

// Helper function to format dates in human-readable format
function formatHumanDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

// Featured Workshops Hero Component
function FeaturedWorkshopsHero() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'details', 'instructor', 'pricing'
  
  // Filter workshops based on search query
  const filteredWorkshops = workshops.filter(workshop =>
    workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workshop.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workshop.focusArea.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workshop.instructor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const currentWorkshop = filteredWorkshops[selectedWorkshop] || workshops[0];
  
  const handleNext = () => {
    setSelectedWorkshop((prev) => (prev + 1) % filteredWorkshops.length);
  };
  
  const handlePrev = () => {
    setSelectedWorkshop((prev) => (prev - 1 + filteredWorkshops.length) % filteredWorkshops.length);
  };
  
  const handleWorkshopSelect = (index: number) => {
    setSelectedWorkshop(index);
  };

  return (
    <section className={styles.featuredHero}>
      <div className="container">
        {/* Mobile Context Section - Only visible on mobile */}
        <div className={styles.mobileHeroContext}>
          <div className={styles.mobileHeroBadge}>
            <span className={styles.mobileHeroBadgeIcon}>⚜️</span>
            Private Briefing
          </div>
          <Heading as="h1" className={styles.mobileHeroTitle}>
            {currentWorkshop.title}
          </Heading>
          <p className={styles.mobileHeroSubtitle}>
            {currentWorkshop.subtitle} — {currentWorkshop.description}
          </p>
          <div className={styles.mobileStatsGrid}>
            <div className={styles.mobileStat}>
              <span className={styles.mobileStatNumber}>{currentWorkshop.seatsRemaining}</span>
              <span className={styles.mobileStatLabel}>Seats Left</span>
            </div>
            <div className={styles.mobileStat}>
              <span className={styles.mobileStatNumber}>${currentWorkshop.price}</span>
              <span className={styles.mobileStatLabel}>Price</span>
            </div>
          </div>
          {/* Mobile Workshop Navigation Buttons - Only visible on mobile */}
          <div className={styles.mobileNavButtons}>
            <button 
              className={styles.mobileNavButton} 
              onClick={handlePrev}
              aria-label="Previous workshop"
            >
              ← Previous
            </button>
            <button 
              className={styles.mobileNavButton} 
              onClick={handleNext}
              aria-label="Next workshop"
            >
              Next →
            </button>
          </div>
        </div>
        
        {/* Mobile Tab Navigation - Only visible on mobile */}
        <div className={styles.mobileTabNavigation}>
          <div 
            className={clsx(styles.mobileTab, activeTab === 'overview' && styles.mobileTabActive)}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </div>
          <div 
            className={clsx(styles.mobileTab, activeTab === 'details' && styles.mobileTabActive)}
            onClick={() => setActiveTab('details')}
          >
            Details
          </div>
          <div 
            className={clsx(styles.mobileTab, activeTab === 'instructor' && styles.mobileTabActive)}
            onClick={() => setActiveTab('instructor')}
          >
            Instructor
          </div>
          <div 
            className={clsx(styles.mobileTab, activeTab === 'pricing' && styles.mobileTabActive)}
            onClick={() => setActiveTab('pricing')}
          >
            Pricing
          </div>
        </div>
        
        {/* Mobile Tab Content Sections - Only visible on mobile */}
        <div className={styles.mobileTabSection}>
          {/* Overview Tab */}
          <div className={clsx(styles.mobileTabContent, styles.mobileOverviewTab, activeTab === 'overview' && styles.mobileTabContentActive)}>
            <h3>What You'll Learn</h3>
            <div className={styles.mobileFeatureList}>
              {currentWorkshop.outcomes.map((outcome, index) => (
                <div key={index} className={styles.mobileFeatureItem}>
                  <div className={styles.mobileFeatureIcon}>✓</div>
                  <div className={styles.mobileFeatureText}>{outcome}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Details Tab */}
          <div className={clsx(styles.mobileTabContent, styles.mobileDetailsTab, activeTab === 'details' && styles.mobileTabContentActive)}>
            <div className={styles.mobileDetailsList}>
              <div className={styles.mobileDetailItem}>
                <div className={styles.mobileDetailLabel}>Date & Time</div>
                <div className={styles.mobileDetailValue}>{formatHumanDate(currentWorkshop.date)} • {currentWorkshop.time}</div>
              </div>
              <div className={styles.mobileDetailItem}>
                <div className={styles.mobileDetailLabel}>Format</div>
                <div className={styles.mobileDetailValue}>{currentWorkshop.format} • {currentWorkshop.duration}</div>
              </div>
              <div className={styles.mobileDetailItem}>
                <div className={styles.mobileDetailLabel}>Seats Remaining</div>
                <div className={styles.mobileDetailValue}>{currentWorkshop.seatsRemaining} of {currentWorkshop.totalSeats}</div>
              </div>
              <div className={styles.mobileDetailItem}>
                <div className={styles.mobileDetailLabel}>Level</div>
                <div className={styles.mobileDetailValue}>{currentWorkshop.level}</div>
              </div>
              <div className={styles.mobileDetailItem}>
                <div className={styles.mobileDetailLabel}>Focus Area</div>
                <div className={styles.mobileDetailValue}>{currentWorkshop.focusArea}</div>
              </div>
            </div>
          </div>
          
          {/* Instructor Tab */}
          <div className={clsx(styles.mobileTabContent, styles.mobileInstructorTab, activeTab === 'instructor' && styles.mobileTabContentActive)}>
            <div className={styles.mobileInstructorHeader}>
              <div className={styles.mobileInstructorAvatar}>
                {currentWorkshop.instructor.name.charAt(0)}
              </div>
              <div className={styles.mobileInstructorInfo}>
                <div className={styles.mobileInstructorName}>{currentWorkshop.instructor.name}</div>
                <div className={styles.mobileInstructorTitle}>{currentWorkshop.instructor.title}</div>
                <div className={styles.mobileInstructorCompany}>{currentWorkshop.instructor.company}</div>
              </div>
            </div>
            
            <h3>Expertise</h3>
            <p>{currentWorkshop.instructor.expertise}</p>
            
            <h3>Credentials</h3>
            <div className={styles.mobileCredentialsList}>
              {currentWorkshop.instructor.credentials.map((credential, index) => (
                <div key={index} className={styles.mobileCredentialItem}>
                  <div className={styles.mobileCredentialIcon}>✓</div>
                  <div className={styles.mobileCredentialText}>{credential}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pricing Tab */}
          <div className={clsx(styles.mobileTabContent, styles.mobilePricingTab, activeTab === 'pricing' && styles.mobileTabContentActive)}>
            <div className={styles.mobilePriceDisplay}>
              {currentWorkshop.originalPrice && (
                <div className={styles.mobileOriginalPrice}>${currentWorkshop.originalPrice}</div>
              )}
              <div className={styles.mobileCurrentPrice}>${currentWorkshop.price}</div>
              {currentWorkshop.originalPrice && (
                <div className={styles.mobileSavingsLabel}>Save ${currentWorkshop.originalPrice - currentWorkshop.price}</div>
              )}
            </div>
            
            <h3>What's Included</h3>
            <div className={styles.mobilePricingFeatures}>
              <div className={styles.mobilePricingFeatureItem}>
                <div className={styles.mobilePricingFeatureIcon}>✓</div>
                <div className={styles.mobilePricingFeatureText}>100% Money-Back Guarantee</div>
              </div>
              <div className={styles.mobilePricingFeatureItem}>
                <div className={styles.mobilePricingFeatureIcon}>✓</div>
                <div className={styles.mobilePricingFeatureText}>Lifetime Community Access</div>
              </div>
              <div className={styles.mobilePricingFeatureItem}>
                <div className={styles.mobilePricingFeatureIcon}>✓</div>
                <div className={styles.mobilePricingFeatureText}>AI Prompt Library Included</div>
              </div>
              <div className={styles.mobilePricingFeatureItem}>
                <div className={styles.mobilePricingFeatureIcon}>✓</div>
                <div className={styles.mobilePricingFeatureText}>Certificate of Completion</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Action Button - Only visible on mobile */}
        <Link to="#" className={styles.mobileFab}>
          ↑
        </Link>

        {/* Main Featured Workshop Display */}
        <div className={styles.featuredMain}>
          {/* Vertical Workshop Navigation */}
          <div className={styles.workshopNavigation}>
            <div className={styles.navHeader}>
              <h3 className={styles.navTitle}>Workshop Selection</h3>
              <p className={styles.navSubtitle}>Browse our upcoming professional workshops</p>
            </div>
            
            <div className={`${styles.workshopThumbnails} ${styles.workshopNavContainer}`}>
              {filteredWorkshops.map((workshop, index) => (
                <div 
                  key={workshop.id}
                  onClick={() => handleWorkshopSelect(index)}
                  className={`${styles.thumbnailCard} ${index === selectedWorkshop ? styles.thumbnailActive : ''}`}
                >
                  <div className={styles.thumbnailBadge}>
                    {workshop.focusArea}
                  </div>
                  <div className={styles.thumbnailTitle}>
                    {workshop.title}
                  </div>
                  <div className={styles.thumbnailDate}>
                    {formatHumanDate(workshop.date)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.navButtonsContainer}>
              <button 
                onClick={handlePrev}
                disabled={filteredWorkshops.length <= 1}
                className={styles.navButton}
              >
                <span className={styles.navIcon}>←</span>
                Previous
              </button>
              
              <button 
                onClick={handleNext}
                disabled={filteredWorkshops.length <= 1}
                className={styles.navButton}
              >
                Next
                <span className={styles.navIcon}>→</span>
              </button>
            </div>
          </div>

          <div className={styles.featuredContent}>
            <div className={styles.featuredBadge}>
              <span className={styles.badgeIcon}>⚡</span>
              Next {currentWorkshop.type}
            </div>
            
            <Heading as="h1" className={styles.featuredTitle}>
              {currentWorkshop.title}
            </Heading>
            
            <p className={styles.featuredSubtitle}>
              {currentWorkshop.subtitle} — {currentWorkshop.description}
            </p>
            
            <div className={styles.featuredDetails}>
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>📅</div>
                <div className={styles.detailContent}>
                  <div className={styles.detailLabel}>DATE & TIME</div>
                  <div className={styles.detailValue}>{formatHumanDate(currentWorkshop.date)} • {currentWorkshop.time}</div>
                </div>
              </div>
              
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>💻</div>
                <div className={styles.detailContent}>
                  <div className={styles.detailLabel}>FORMAT</div>
                  <div className={styles.detailValue}>{currentWorkshop.format} • {currentWorkshop.duration}</div>
                </div>
              </div>
              
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>👥</div>
                <div className={styles.detailContent}>
                  <div className={styles.detailLabel}>SEATS REMAINING</div>
                  <div className={styles.detailValue}>{currentWorkshop.seatsRemaining} of {currentWorkshop.totalSeats}</div>
                </div>
              </div>
            </div>
            
            <div className={styles.instructorHighlight}>
              <div className={styles.instructorIcon}>🎯</div>
              <div className={styles.instructorInfo}>
                <span className={styles.instructorName}>Led by {currentWorkshop.instructor.name}</span>
                <span className={styles.instructorTitle}>{currentWorkshop.instructor.title} at {currentWorkshop.instructor.company}</span>
              </div>
            </div>
            
            <div className={styles.featuredCTAs}>
              <Link 
                to={`/workshops/${currentWorkshop.slug}`}
                className={styles.primaryCTA}
              >
                Reserve Your Strategic Advantage
              </Link>
              <Link 
                to={`/workshops/${currentWorkshop.slug}`}
                className={styles.secondaryCTA}
              >
                View Full Details
              </Link>
            </div>
          </div>
          
          <div className={styles.featuredPricing}>
            
            <div className={styles.pricingCard}>
              <div className={styles.urgencyBadge}>
                Only {currentWorkshop.seatsRemaining} seats left
              </div>
              
              <div className={styles.priceDisplay}>
                {currentWorkshop.originalPrice && (
                  <div className={styles.originalPrice}>${currentWorkshop.originalPrice}</div>
                )}
                <div className={styles.currentPrice}>${currentWorkshop.price}</div>
                {currentWorkshop.originalPrice && (
                  <div className={styles.savingsLabel}>
                    Save ${currentWorkshop.originalPrice - currentWorkshop.price}
                  </div>
                )}
              </div>
              
              <div className={styles.pricingFeatures}>
                <div className={styles.feature}>✓ 100% Money-Back Guarantee</div>
                <div className={styles.feature}>✓ Lifetime Community Access</div>
                <div className={styles.feature}>✓ AI Prompt Library Included</div>
                <div className={styles.feature}>✓ Certificate of Completion</div>
              </div>
              
              <Link 
                to={`/workshops/${currentWorkshop.slug}`}
                className={styles.reserveButton}
              >
                Reserve Your Strategic Advantage
              </Link>
            </div>
            {/* Search Bar - Positioned at the far right */}
            <div className={styles.searchRightContainer}>
              <div className={styles.searchAfterContainer}>
                <input
                  type="text"
                  placeholder="Search workshops by title, focus area, or instructor..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedWorkshop(0); // Reset selection when searching
                  }}
                  className={styles.searchAfterInput}
                />
                <div className={styles.searchAfterIcon}>🔍</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroFooter}>
          <div className={styles.workshopCounter}>
            Showing {selectedWorkshop + 1} of {filteredWorkshops.length} workshops
            {searchQuery && ` (filtered by "${searchQuery}")`}
          </div>
        </div>
      </div>
    </section>
  );
}

// Workshop Grid Section
function UpcomingWorkshops() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredWorkshops, setFilteredWorkshops] = useState(workshops);
  
  const filterOptions = [
    { value: 'all', label: 'All Offerings' },
    { value: 'Legacy', label: 'Legacy' },
    { value: 'Cognitive', label: 'Cognitive' },
    { value: 'Decision', label: 'Decision' },
    { value: 'Strategic', label: 'Strategic' },
    { value: 'Private Briefing', label: 'Private Briefings' },
    { value: 'Legacy Lab', label: 'Legacy Labs' },
    { value: 'Cognitive Ascension', label: 'Cognitive Ascension' },
    { value: 'Family Session', label: 'Family Sessions' },
    { value: 'Adult', label: 'For Adults' },
    { value: 'Student', label: 'For Next Generation' }
  ];
  
  const handleFilter = (filterValue: string) => {
    setActiveFilter(filterValue);
    if (filterValue === 'all') {
      setFilteredWorkshops(workshops);
    } else {
      setFilteredWorkshops(workshops.filter(w => 
        w.focusArea === filterValue || w.type === filterValue
      ));
    }
  };
  
  return (
    <section className={styles.workshopGrid}>
      <div className="container">
        <div className={styles.gridHeader}>
          <Heading as="h2" className={styles.gridTitle}>
            Private Cognitive Briefings & Legacy Labs
          </Heading>
          <p className={styles.gridSubtitle}>
            These private learning experiences are built for those navigating complexity—whether raising the next generation or stewarding an empire.
            Each session blends AI fluency, cognitive precision, and psychology-backed tools to optimize clarity across generations.
          </p>
        </div>
        
        <div className={styles.filterTabs}>
          {filterOptions.map(option => (
            <button
              key={option.value}
              className={clsx(styles.filterTab, {
                [styles.filterTabActive]: activeFilter === option.value
              })}
              onClick={() => handleFilter(option.value)}>
              {option.label}
            </button>
          ))}
        </div>
        
        <div className={styles.workshopCards}>
          {filteredWorkshops.map(workshop => (
            <Link 
              key={workshop.id} 
              to={`/workshops/${workshop.slug}`}
              className={styles.workshopCardLink}
            >
              <div className={styles.workshopCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardBadges}>
                    <span className={clsx(styles.badge, styles.focusBadge)}>
                      {workshop.focusArea}
                    </span>
                    <span className={clsx(styles.badge, styles.typeBadge)}>
                      {workshop.type}
                    </span>
                  </div>
                  {workshop.seatsRemaining <= 3 && (
                    <div className={styles.urgencyBadge}>
                      Limited Access: {workshop.seatsRemaining} positions remaining
                    </div>
                  )}
                </div>
                
                <div className={styles.cardContent}>
                  <Heading as="h3" className={styles.cardTitle}>
                    {workshop.title}
                  </Heading>
                  <p className={styles.cardSubtitle}>
                    {workshop.subtitle}
                  </p>
                  
                  <div className={styles.cardDetails}>
                    <div className={styles.cardDetailRow}>
                      <span className={styles.detailLabel}>Date:</span>
                      <span className={styles.detailValue}>{formatHumanDate(workshop.date)}</span>
                    </div>
                    <div className={styles.cardDetailRow}>
                      <span className={styles.detailLabel}>Time:</span>
                      <span className={styles.detailValue}>{workshop.time}</span>
                    </div>
                    <div className={styles.cardDetailRow}>
                      <span className={styles.detailLabel}>Format:</span>
                      <span className={styles.detailValue}>{workshop.format}</span>
                    </div>
                    <div className={styles.cardDetailRow}>
                      <span className={styles.detailLabel}>Level:</span>
                      <span className={styles.detailValue}>{workshop.level}</span>
                    </div>
                  </div>
                  
                  <div className={styles.outcomePromise}>
                    <div className={styles.promiseIcon}>🎯</div>
                    <span className={styles.promiseText}>{workshop.outcomes[0]}</span>
                  </div>
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.pricing}>
                    {workshop.originalPrice ? (
                      <>
                        <span className={styles.originalPrice}>${workshop.originalPrice}</span>
                        <span className={styles.currentPrice}>${workshop.price}</span>
                        <span className={styles.savingsLabel}>Private Access</span>
                      </>
                    ) : (
                      <span className={styles.currentPrice}>${workshop.price}</span>
                    )}
                  </div>
                  <Link to={`/workshops/${workshop.slug}`} className={styles.viewDetailsButton}>
                    Request Private Access →
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Value Proposition Section
function ValueProposition() {
  return (
    <section className={styles.valueProposition}>
      <div className="container">
        <div className={styles.valueHeader}>
          <Heading as="h2" className={styles.valueTitle}>
            The Distinguished Approach to Cognitive Excellence
          </Heading>
          <p className={styles.valueSubtitle}>
            Beyond conventional education—bespoke intelligence architecture designed for those who lead legacies, not merely lives
          </p>
        </div>
        
        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>♟️</div>
            <Heading as="h3" className={styles.valueCardTitle}>
              Bespoke Intelligence Architecture
            </Heading>
            <p className={styles.valueCardDescription}>
              Proprietary AI integration with discreet protocols designed for multi-generational cognitive advantage. 
              Custom-crafted mental models and precision-calibrated frameworks enhance your family's strategic clarity.
            </p>
            <div className={styles.valueFeatures}>
              <div className={styles.feature}>✓ Private intelligence protocols</div>
              <div className={styles.feature}>✓ Generational wisdom transfer</div>
              <div className={styles.feature}>✓ Bespoke cognitive frameworks</div>
            </div>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>⚖️</div>
            <Heading as="h3" className={styles.valueCardTitle}>
              Legacy Stewardship Mastery
            </Heading>
            <p className={styles.valueCardDescription}>
              Refined insights from advisors to the world's most distinguished family offices—not mere theory. 
              These frameworks are discreetly tested in high-stakes legacy environments where generational impact matters.
            </p>
            <div className={styles.valueFeatures}>
              <div className={styles.feature}>✓ Multi-generational applications</div>
              <div className={styles.feature}>✓ Private case studies</div>
              <div className={styles.feature}>✓ Legacy-preserving insights</div>
            </div>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>⌛</div>
            <Heading as="h3" className={styles.valueCardTitle}>
              Discreet Cognitive Circle
            </Heading>
            <p className={styles.valueCardDescription}>
              Exclusive access to a curated network of legacy stewards, with private consultation, discreet Q&A support, and confidential peer insights. 
              Your family's cognitive advantage continues to compound well beyond the initial session.
            </p>
            <div className={styles.valueFeatures}>
              <div className={styles.feature}>✓ Private circle membership</div>
              <div className={styles.feature}>✓ Bespoke framework refinements</div>
              <div className={styles.feature}>✓ Legacy peer connections</div>
            </div>
          </div>
        </div>
        
        <div className={styles.credibilityStatement}>
          <div className={styles.credibilityIcon}>⚜️</div>
          <p className={styles.credibilityText}>
            Discreetly trusted by legacy-minded families who understand that generational intelligence 
            is the enduring advantage in an increasingly complex world.
          </p>
        </div>
      </div>
    </section>
  );
}

// Main Workshops Component
export default function Workshops() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Private Cognitive Briefings & Legacy Labs"
      description="Bespoke learning experiences designed for families who lead legacies, not just lives. Private cognitive frameworks for multi-generational advantage.">
      <main className={styles.workshopsPage}>
        <FeaturedWorkshopsHero />
        <UpcomingWorkshops />
        <ValueProposition />
      </main>
    </Layout>
  );
}
