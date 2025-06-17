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
  {
    id: '1',
    slug: 'ai-fluency-next-gen-leaders',
    title: 'Mind-AI Partnership for Next-Gen Leaders',
    subtitle: 'Freeing Your Mental Space for Clarity and Vision',
    description: 'Learn how to offload information processing to AI so your brilliant mind can focus on what truly matters—vision, relationships, and legacy planning.',
    date: '2024-03-05',
    time: '3:00 PM - 5:30 PM EST',
    format: 'Private Estate',
    duration: '2.5 hours',
    level: 'Next-Gen',
    price: 3279,
    originalPrice: 4500,
    seatsRemaining: 4,
    totalSeats: 8,
    focusArea: 'Cognitive',
    type: 'Legacy Lab',
    audience: 'Student',
    outcomes: [
      "Reclaim 70% of your mental bandwidth currently spent on low-value information processing",
      "Create your customized AI-human partnership system for eliminating mental noise",
      "Develop practical methods for maintaining mental clarity under information overload",
      "Establish personal protocols for balancing AI data processing with human wisdom and judgment"
    ],
    instructor: {
      name: 'AutoNate',
      title: 'Generative AI Software Engineer',
      company: 'AutoNateAI',
      expertise: 'AI-Human Cognitive Augmentation & Information Architecture',
      credentials: [
        'Designed cognitive architecture systems for ultra-high-net-worth families',
        'Expert in AI-driven decision frameworks',
        'Developer of proprietary mental models for strategic clarity',
        'Pioneer in cognitive load optimization'
      ]
    },
    agenda: [
      {
        time: '3:00 PM',
        title: 'Mental Bandwidth Assessment',
        description: 'Evaluate how much of your cognitive energy is currently wasted on information processing versus high-value strategic thinking.'
      },
      {
        time: '3:30 PM',
        title: 'The Information Trap',
        description: 'Understand the psychological mechanisms that keep brilliant minds trapped in information overload.'
      },
      {
        time: '4:00 PM',
        title: 'AI-Human Partnership Design',
        description: 'Create your personalized system for delegating information processing to AI while focusing on vision and strategy.'
      },
      {
        time: '4:30 PM',
        title: 'Decision Clarity Workshop',
        description: 'Practice using AI-filtered information with human wisdom to make clearer decisions under complexity.'
      },
      {
        time: '5:00 PM',
        title: 'Your Mental Freedom Plan',
        description: 'Build your 90-day roadmap for cognitive liberation and strategic focus through AI-human collaboration.'
      }
    ],
    testimonials: [
      {
        quote: 'As someone inheriting significant responsibilities, I was feeling constantly overwhelmed by information. This workshop showed me how to partner with AI to free my mind for strategic thinking—it\'s been transformative.',
        author: 'Jennifer Walsh',
        company: 'Next-Gen Family Enterprise',
        role: 'Incoming Board Member'
      },
      {
        quote: 'The mental models we developed for balancing AI capabilities with human judgment have completely changed how I approach decision-making. I\'m thinking clearer than ever.',
        author: 'Michael Chen',
        company: 'Global Family Office',
        role: 'Next-Generation Leader'
      }
    ]
  },
  {
    id: '2',
    slug: 'raising-minds-worth-inheriting',
    title: 'Mental Clarity Across Generations',
    subtitle: 'The Family Cognitive Sovereignty System',
    description: 'Create a family environment where every generation maintains mental clarity amid information chaos. Learn how to build cognitive systems that protect young minds from digital overwhelm while fostering strategic thinking.',
    date: '2024-01-22',
    time: '1:00 PM - 4:00 PM EST',
    format: 'Private Estate',
    duration: '3 hours',
    level: 'Legacy',
    price: 5379,
    originalPrice: 7000,
    seatsRemaining: 4,
    totalSeats: 8,
    focusArea: 'Cognitive',
    type: 'Family Session',
    audience: 'Adult',
    outcomes: [
      "Design a complete family cognitive system that protects mental clarity across generations",
      "Create practical AI filtering systems that keep information noise away from developing minds",
      "Implement daily and weekly rituals that strengthen focus and strategic thinking for all family members",
      "Establish a culture of mental sovereignty where technology serves the family’s vision, not the reverse"
    ],
    instructor: {
      name: 'AutoNate',
      title: 'Generative AI Software Engineer',
      company: 'AutoNateAI',
      expertise: 'AI-Human Cognitive Augmentation & Information Architecture',
      credentials: [
        'Designed cognitive architecture systems for ultra-high-net-worth families',
        'Expert in AI-driven decision frameworks',
        'Developer of proprietary mental models for strategic clarity',
        'Pioneer in cognitive load optimization'
      ]
    },
    agenda: [
      {
        time: '1:00 PM',
        title: 'The Family Cognitive Audit',
        description: 'Assess how information overload is currently affecting each generation in your family and identify priority intervention areas.'
      },
      {
        time: '1:45 PM',
        title: 'Digital Environment Design',
        description: 'Create a family technology environment that protects developing minds from information chaos while fostering wisdom.'
      },
      {
        time: '2:30 PM',
        title: 'AI-Human Partnership for Families',
        description: 'Design age-appropriate AI-human collaboration systems that free mental bandwidth without sacrificing development.'
      },
      {
        time: '3:15 PM',
        title: 'Family Clarity Rituals',
        description: 'Establish practical daily, weekly and quarterly rituals that strengthen mental clarity for all family members.'
      },
      {
        time: '3:45 PM',
        title: 'Implementation Roadmap',
        description: 'Build your 90-day plan for transforming your family\'s relationship with information and technology.'
      }
    ],
    testimonials: [
      {
        quote: 'We implemented the family cognitive system with our three children, and the transformation has been remarkable. They\'re using technology purposefully instead of mindlessly, and our family discussions have never been deeper.',
        author: 'David Kim',
        company: 'Multi-Generation Enterprise',
        role: 'Family Principal'
      },
      {
        quote: 'As parents, we were worried about our children\'s relationship with technology. This workshop gave us a practical system for protecting their mental clarity while teaching them to use AI as a tool for thinking better, not thinking less.',
        author: 'Rachel Morgan',
        company: 'Legacy Family Office',
        role: 'Trustee & Parent'
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
    time: '11:00 AM - 12:30 PM EST',
    format: 'Private Estate',
    duration: '1.5 hours',
    level: 'Next-Gen',
    price: 1279,
    originalPrice: 2500,
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
      name: 'AutoNate',
      title: 'Generative AI Software Engineer',
      company: 'AutoNateAI',
      expertise: 'AI-Human Cognitive Augmentation & Information Architecture',
      credentials: [
        'Designed cognitive architecture systems for ultra-high-net-worth families',
        'Expert in AI-driven decision frameworks',
        'Developer of proprietary mental models for strategic clarity',
        'Pioneer in cognitive load optimization'
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
    { value: 'Family Session', label: 'Family Sessions' },
    { value: 'Cognitive', label: 'Cognitive' },
    { value: 'Legacy Lab', label: 'Legacy Labs' },
    { value: 'Cognitive Ascension', label: 'Cognitive Ascension' },
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
