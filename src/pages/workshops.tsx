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
  format: 'Virtual' | 'In-Person' | 'Hybrid';
  duration: string;
  level: 'Executive' | 'Professional' | 'Advanced';
  price: number;
  originalPrice?: number;
  seatsRemaining: number;
  totalSeats: number;
  focusArea: 'Psychology' | 'AI' | 'Culture' | 'Strategy';
  type: 'Intensive' | 'Masterclass' | 'Deep Dive';
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
    slug: 'cognitive-load-optimization-executives',
    title: 'Cognitive Load Optimization for Executives',
    subtitle: 'AI-Augmented Strategic Decision Making',
    description: 'Transform your decision-making process with AI-augmented cognitive frameworks proven in Fortune 100 environments.',
    date: '2024-01-15',
    time: '2:00 PM - 6:00 PM EST',
    format: 'Virtual',
    duration: '4 hours',
    level: 'Executive',
    price: 1247,
    originalPrice: 1797,
    seatsRemaining: 3,
    totalSeats: 12,
    focusArea: 'Strategy',
    type: 'Intensive',
    outcomes: [
      'Master cognitive load theory for executive decision-making',
      'Implement AI-augmented analysis frameworks',
      'Design personalized decision-making protocols',
      'Build strategic thinking automation systems'
    ],
    instructor: {
      name: 'Dr. Sarah Chen',
      title: 'Senior AI Engineer',
      company: 'Fortune 100 Tech Corporation',
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
        time: '2:00 PM',
        title: 'Cognitive Load Assessment',
        description: 'Analyze your current decision-making patterns and identify cognitive bottlenecks affecting strategic performance.'
      },
      {
        time: '2:45 PM',
        title: 'AI-Augmented Analysis Framework',
        description: 'Learn the proprietary framework used by Fortune 100 companies to integrate AI insights with human intuition.'
      },
      {
        time: '3:30 PM',
        title: 'Strategic Decision Protocols',
        description: 'Design your personalized decision-making system for complex, high-stakes strategic choices.'
      },
      {
        time: '4:15 PM',
        title: 'Implementation Workshop',
        description: 'Apply frameworks to your real strategic challenges with expert guidance and peer collaboration.'
      },
      {
        time: '5:00 PM',
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
      },
      {
        quote: 'Finally, a structured approach to complex decision-making that actually works in high-pressure environments.',
        author: 'Lisa Thompson',
        company: 'Fortune 500 Financial Services',
        role: 'SVP Strategic Planning'
      }
    ],
    featured: true
  },
  {
    id: '2',
    slug: 'ai-human-partnership-frameworks',
    title: 'AI-Human Partnership Frameworks',
    subtitle: 'Psychology-Driven Workflow Design',
    description: 'Design workflow systems that amplify human creativity while leveraging AI capabilities for maximum strategic impact.',
    date: '2024-01-22',
    time: '1:00 PM - 5:00 PM EST',
    format: 'Virtual',
    duration: '4 hours',
    level: 'Professional',
    price: 897,
    seatsRemaining: 7,
    totalSeats: 15,
    focusArea: 'Psychology',
    type: 'Masterclass',
    outcomes: [
      'Design AI-human collaboration frameworks',
      'Optimize workflow psychology for peak performance',
      'Implement strategic automation systems',
      'Build sustainable competitive advantages'
    ],
    instructor: {
      name: 'James Mitchell',
      title: 'Director of AI Strategy',
      company: 'Fortune 100 Consulting Firm',
      expertise: 'Human-AI Collaboration & Organizational Psychology',
      credentials: [
        'Designed AI integration strategies for 50+ Fortune 500 companies',
        'PhD in Organizational Psychology from MIT',
        'Former McKinsey AI Practice Leader',
        'TEDx speaker on Human-AI Collaboration'
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
    slug: 'strategic-culture-design',
    title: 'Strategic Culture Design',
    subtitle: 'Building High-Performance Teams',
    description: 'Design organizational cultures that drive strategic execution and sustainable competitive advantages.',
    date: '2024-01-29',
    time: '10:00 AM - 2:00 PM EST',
    format: 'Virtual',
    duration: '4 hours',
    level: 'Executive',
    price: 1197,
    seatsRemaining: 5,
    totalSeats: 10,
    focusArea: 'Culture',
    type: 'Deep Dive',
    outcomes: [
      'Design culture systems for strategic execution',
      'Build high-performance team dynamics',
      'Create sustainable competitive advantages through culture',
      'Implement culture change management frameworks'
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
  }
];

// Hero Section - Featured Workshops Showcase
function FeaturedWorkshopsHero() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
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
        {/* Search Bar */}
        <div className={styles.heroSearch}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search workshops by title, focus area, or instructor..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedWorkshop(0); // Reset selection when searching
              }}
              className={styles.searchInput}
            />
            <div className={styles.searchIcon}>🔍</div>
          </div>
        </div>

        {/* Main Featured Workshop Display */}
        <div className={styles.featuredMain}>
          {/* Vertical Workshop Navigation */}
          <div className={styles.workshopNavigation}>
            <button 
              onClick={handlePrev}
              disabled={filteredWorkshops.length <= 1}
              className={styles.navButton}
            >
              <span className={styles.navIcon}>↑</span>
              Previous
            </button>
            
            <div className={styles.workshopThumbnails}>
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
                    {workshop.date}
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              disabled={filteredWorkshops.length <= 1}
              className={styles.navButton}
            >
              <span className={styles.navIcon}>↓</span>
              Next
            </button>
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
                  <div className={styles.detailValue}>{currentWorkshop.date} • {currentWorkshop.time}</div>
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
    { value: 'all', label: 'All Workshops' },
    { value: 'Psychology', label: 'Psychology' },
    { value: 'AI', label: 'AI Systems' },
    { value: 'Culture', label: 'Culture' },
    { value: 'Strategy', label: 'Strategy' },
    { value: 'Intensive', label: 'Intensives' },
    { value: 'Masterclass', label: 'Masterclasses' },
    { value: 'Deep Dive', label: 'Deep Dives' }
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
            Upcoming Strategic Intensives
          </Heading>
          <p className={styles.gridSubtitle}>
            Corporate-tested frameworks for AI-augmented strategic intelligence. 
            Each workshop includes exclusive insights, hands-on application, and ongoing support.
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
                      Only {workshop.seatsRemaining} seats left
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
                      <span className={styles.detailValue}>{workshop.date}</span>
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
                        <span className={styles.savingsLabel}>Early Bird</span>
                      </>
                    ) : (
                      <span className={styles.currentPrice}>${workshop.price}</span>
                    )}
                  </div>
                  <div className={styles.cardCTA}>
                    View Full Details →
                  </div>
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
            What Makes These Strategic Intensives Different
          </Heading>
          <p className={styles.valueSubtitle}>
            Beyond traditional training—corporate-tested intelligence amplification with AI augmentation
          </p>
        </div>
        
        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤖</div>
            <Heading as="h3" className={styles.valueCardTitle}>
              AI-Augmented Learning
            </Heading>
            <p className={styles.valueCardDescription}>
              Claude AI integration with sophisticated prompts designed for cognitive framework mastery. 
              Personalized digital assets and confusion resolution tools enhance every learning moment.
            </p>
            <div className={styles.valueFeatures}>
              <div className={styles.feature}>✓ Custom AI prompt libraries</div>
              <div className={styles.feature}>✓ Real-time skill sharpening</div>
              <div className={styles.feature}>✓ Personalized framework tools</div>
            </div>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🏢</div>
            <Heading as="h3" className={styles.valueCardTitle}>
              Corporate Expertise
            </Heading>
            <p className={styles.valueCardDescription}>
              Real Fortune 100 generative AI engineer experience—not just theory. 
              These frameworks are battle-tested in high-stakes corporate environments where results matter.
            </p>
            <div className={styles.valueFeatures}>
              <div className={styles.feature}>✓ Fortune 100 applications</div>
              <div className={styles.feature}>✓ Real-world case studies</div>
              <div className={styles.feature}>✓ Executive-level insights</div>
            </div>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌐</div>
            <Heading as="h3" className={styles.valueCardTitle}>
              Ongoing Community
            </Heading>
            <p className={styles.valueCardDescription}>
              Private professional network with continuing education, Q&A support, and peer collaboration. 
              Your strategic intelligence development continues beyond the workshop.
            </p>
            <div className={styles.valueFeatures}>
              <div className={styles.feature}>✓ Private community access</div>
              <div className={styles.feature}>✓ Ongoing framework updates</div>
              <div className={styles.feature}>✓ Peer networking opportunities</div>
            </div>
          </div>
        </div>
        
        <div className={styles.credibilityStatement}>
          <div className={styles.credibilityIcon}>🎯</div>
          <p className={styles.credibilityText}>
            Trusted by forward-thinking professionals who understand that strategic intelligence 
            is the competitive advantage in an AI-accelerated world.
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
      title="Strategic Intelligence Workshops"
      description="Corporate-tested frameworks for AI-augmented strategic intelligence. Professional workshops with Fortune 100 insights and ongoing community support.">
      <main className={styles.workshopsPage}>
        <FeaturedWorkshopsHero />
        <UpcomingWorkshops />
        <ValueProposition />
      </main>
    </Layout>
  );
}
