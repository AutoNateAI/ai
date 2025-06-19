import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// Custom blog cards instead of default BlogPostItems
// Custom search input instead of Docusaurus SearchBar
import clsx from 'clsx';
import styles from './styles.module.css';

function BlogSidebarCard({ title, content, svg, link }) {
  return (
    <div className={styles.sidebarCard}>
      <div className={styles.sidebarCardContent}>
        {svg && (
          <div className={styles.sidebarCardSvg}>
            {svg}
          </div>
        )}
        <div className={styles.sidebarCardText}>
          <h3 className={styles.sidebarCardTitle}>{title}</h3>
          <p className={styles.sidebarCardDescription}>{content}</p>
          {link && (
            <Link to={link} className={styles.sidebarLink}>
              Learn more →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function BannerCard({ title, content, svg, link, index }) {
  return (
    <div className={styles.bannerCard}>
      <div className={styles.bannerCardInner}>
        <div className={styles.bannerCardContent}>
          <div className={styles.bannerCardHeader}>
            <span className={styles.bannerTag}>Sponsored</span>
          </div>
          <h3 className={styles.bannerCardTitle}>{title}</h3>
          <p className={styles.bannerCardDescription}>{content}</p>
          <Link to={link} className={styles.bannerLink}>
            Learn More →
          </Link>
        </div>
        {svg && (
          <div className={styles.bannerCardImage}>
            {svg}
          </div>
        )}
      </div>
    </div>
  );
}

function SearchInput({ placeholder, value, onChange }) {
  return (
    <div className={styles.searchInputContainer}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.searchInput}
      />
      {value ? (
        <button
          onClick={() => onChange('')}
          className={styles.clearButton}
          aria-label="Clear search"
        >
          ×
        </button>
      ) : (
        <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      )}
    </div>
  );
}



export default function BlogListPage(props) {
  const { metadata, items } = props;
  const { siteConfig } = useDocusaurusContext();
  const { blogTitle, blogDescription } = metadata;
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Ensure items is an array to prevent errors
  const safeItems = items || [];
  
  // Filter blog posts based on search query
  const filteredItems = searchQuery.trim() === '' 
    ? safeItems 
    : safeItems.filter(item => {
        const query = searchQuery.toLowerCase();
        
        // Check title
        const titleMatch = item.content.metadata.title?.toLowerCase().includes(query);
        
        // Check excerpt/content
        const contentMatch = item.content.metadata.description?.toLowerCase().includes(query) ||
                           item.content.metadata.formattedDate?.toLowerCase().includes(query);
        
        // Check authors
        const authors = item.content.metadata.authors || [];
        const authorMatch = authors.some(author => 
          author.name?.toLowerCase().includes(query) || 
          author.title?.toLowerCase().includes(query)
        );
        
        // Check tags
        const tags = item.content.metadata.tags || [];
        const tagMatch = tags.some(tag => 
          tag.label?.toLowerCase().includes(query)
        );
        
        return titleMatch || contentMatch || authorMatch || tagMatch;
      });
  
  // Sample sidebar content - replace with your actual content
  const leftSidebarContent = [
    {
      title: "Latest Updates",
      content: "Stay up to date with our newest features and improvements.",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#6366F1" opacity="0.8" />
          <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
        </svg>
      ),
      link: "#"
    },
    {
      title: "Community",
      content: "Join our growing community of developers and creators.",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#6366F1" opacity="0.8" />
          <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
        </svg>
      ),
      link: "#"
    }
  ];

  const rightSidebarContent = [
    {
      title: "Resources",
      content: "Explore our comprehensive guides and documentation.",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#6366F1" opacity="0.8" />
          <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
        </svg>
      ),
      link: "#"
    },
    {
      title: "Support",
      content: "Get help from our dedicated support team.",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#6366F1" opacity="0.8" />
          <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
        </svg>
      ),
      link: "#"
    }
  ];
  
  // Banner cards that will appear every 3 blog posts in single-column layout
  const bannerCards = [
    {
      title: "Premium Features",
      content: "Unlock advanced tools and capabilities with our premium plan.",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#6366F1" opacity="0.8" />
          <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
        </svg>
      ),
      link: "#premium"
    },
    {
      title: "Developer Tools",
      content: "Streamline your workflow with our powerful developer toolkit.",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#6366F1" opacity="0.8" />
          <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
        </svg>
      ),
      link: "#tools"
    },
    {
      title: "Enterprise Solutions",
      content: "Scale your business with our enterprise-grade platform.",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#6366F1" opacity="0.8" />
          <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
        </svg>
      ),
      link: "#enterprise"
    }
  ];
  
  // SVG definitions for sidebar and banner cards
  const sidebarSvgs = {
    // SVG for sidebar cards
    sidebar: (
      <svg className={styles.sidebarSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sidebar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#sidebar-gradient)" opacity="0.8" />
        <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
        <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
        <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
      </svg>
    ),
  };

  const bannerSvgs = {
    // SVG for banner cards
    banner: (
      <svg className={styles.bannerSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="banner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <rect x="40" y="40" width="120" height="120" rx="5" fill="url(#banner-gradient)" opacity="0.8" />
        <rect x="50" y="130" width="20" height="20" fill="white" />
        <rect x="80" y="110" width="20" height="40" fill="white" />
        <rect x="110" y="70" width="20" height="80" fill="white" />
        <rect x="140" y="90" width="20" height="60" fill="white" />
        <path d="M50,60 L70,40 L100,70 L130,50 L160,65" stroke="white" strokeWidth="3" fill="none" />
        <circle cx="70" cy="40" r="5" fill="white" />
        <circle cx="100" cy="70" r="5" fill="white" />
        <circle cx="130" cy="50" r="5" fill="white" />
      </svg>
    ),
  };

  // Scroll-stopping SVGs for each blog post
  const blogSvgs = {
    // AI/Psychology themed SVG - brain with circuit patterns
    ai_psychology: (
      <svg className={styles.blogSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path d="M100,20 C60,20 30,50 30,90 C30,120 50,140 70,150 C80,155 90,155 100,160 C110,155 120,155 130,150 C150,140 170,120 170,90 C170,50 140,20 100,20 Z" fill="url(#brain-gradient)" opacity="0.9" />
        <path d="M100,40 L100,60 M80,50 L120,50 M60,70 L140,70 M70,100 L130,100 M80,130 L120,130" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="70" cy="80" r="5" fill="white" />
        <circle cx="130" cy="80" r="5" fill="white" />
        <circle cx="90" cy="110" r="5" fill="white" />
        <circle cx="110" cy="110" r="5" fill="white" />
      </svg>
    ),
    
    // Social media/riots themed SVG - crowd silhouette with data visualization
    social_riots: (
      <svg className={styles.blogSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crowd-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <rect x="20" y="120" width="160" height="60" rx="5" fill="url(#crowd-gradient)" opacity="0.8" />
        <path d="M30,120 C40,100 50,110 60,120 C70,100 80,110 90,120 C100,100 110,110 120,120 C130,100 140,110 150,120 C160,100 170,110 180,120" stroke="white" strokeWidth="2" fill="none" />
        <path d="M20,80 L180,80 M20,60 L180,60 M20,40 L180,40" stroke="white" strokeWidth="1" strokeDasharray="5,3" />
        <circle cx="50" cy="80" r="8" fill="white" />
        <circle cx="90" cy="60" r="8" fill="white" />
        <circle cx="130" cy="40" r="8" fill="white" />
        <circle cx="170" cy="60" r="8" fill="white" />
      </svg>
    ),
    
    // Technology/innovation themed SVG - abstract tech pattern
    tech_innovation: (
      <svg className={styles.blogSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="140" height="140" rx="10" fill="url(#tech-gradient)" opacity="0.8" />
        <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="2" fill="none" />
        <path d="M60,60 L140,140 M60,140 L140,60" stroke="white" strokeWidth="2" />
        <circle cx="100" cy="60" r="5" fill="white" />
        <circle cx="60" cy="100" r="5" fill="white" />
        <circle cx="100" cy="140" r="5" fill="white" />
        <circle cx="140" cy="100" r="5" fill="white" />
      </svg>
    ),
    
    // Data analysis themed SVG - charts and graphs
    data_analysis: (
      <svg className={styles.blogSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="data-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect x="40" y="40" width="120" height="120" rx="5" fill="url(#data-gradient)" opacity="0.8" />
        <rect x="50" y="130" width="20" height="20" fill="white" />
        <rect x="80" y="110" width="20" height="40" fill="white" />
        <rect x="110" y="70" width="20" height="80" fill="white" />
        <rect x="140" y="90" width="20" height="60" fill="white" />
        <path d="M50,60 L70,40 L100,70 L130,50 L160,65" stroke="white" strokeWidth="3" fill="none" />
        <circle cx="70" cy="40" r="5" fill="white" />
        <circle cx="100" cy="70" r="5" fill="white" />
        <circle cx="130" cy="50" r="5" fill="white" />
      </svg>
    ),
    
    // Future trends themed SVG - futuristic abstract pattern
    future_trends: (
      <svg className={styles.blogSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="future-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="70" fill="url(#future-gradient)" opacity="0.8" />
        <path d="M100,30 L100,170 M30,100 L170,100" stroke="white" strokeWidth="2" />
        <path d="M50,50 L150,150 M50,150 L150,50" stroke="white" strokeWidth="2" />
        <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" strokeDasharray="5,3" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" strokeDasharray="2,2" fill="none" />
      </svg>
    ),
    
    // Business strategy themed SVG - chess pieces and strategy elements
    business_strategy: (
      <svg className={styles.blogSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="strategy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect x="40" y="40" width="120" height="120" fill="url(#strategy-gradient)" opacity="0.8" />
        <rect x="50" y="50" width="20" height="20" fill="white" />
        <rect x="90" y="50" width="20" height="20" fill="white" />
        <rect x="130" y="50" width="20" height="20" fill="white" />
        <rect x="50" y="90" width="20" height="20" fill="white" />
        <rect x="90" y="90" width="20" height="20" fill="white" />
        <rect x="130" y="90" width="20" height="20" fill="white" />
        <rect x="50" y="130" width="20" height="20" fill="white" />
        <rect x="90" y="130" width="20" height="20" fill="white" />
        <rect x="130" y="130" width="20" height="20" fill="white" />
        <path d="M60,40 L60,160 M100,40 L100,160 M140,40 L140,160 M40,60 L160,60 M40,100 L160,100 M40,140 L160,140" stroke="white" strokeWidth="1" />
      </svg>
    ),
    
    // Default SVG for any other blog post
    default: (
      <svg className={styles.blogSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="default-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#default-gradient)" opacity="0.8" />
        <path d="M60,100 A40,40 0 0,1 140,100 A40,40 0 0,1 60,100 Z" stroke="white" strokeWidth="2" fill="none" />
        <path d="M80,80 A20,20 0 0,1 120,80 A20,20 0 0,1 80,80 Z" stroke="white" strokeWidth="2" fill="none" />
        <path d="M100,60 L100,140 M60,100 L140,100" stroke="white" strokeWidth="2" />
      </svg>
    )
  };

  // Helper function to determine which SVG to display for a blog post based on its content
  function getSvgForBlogPost(metadata) {
    const { tags = [], title = '', description = '' } = metadata;
    const tagLabels = tags.map(tag => tag.label?.toLowerCase() || '');
    const titleLower = title.toLowerCase();
    const descLower = description.toLowerCase();
    const content = titleLower + ' ' + descLower;
    
    // Check for AI or Psychology related content
    if (tagLabels.includes('ai') || 
        tagLabels.includes('psychology') || 
        content.includes('ai') || 
        content.includes('psychology') || 
        content.includes('chatgpt') || 
        content.includes('brain')) {
      return blogSvgs.ai_psychology;
    }
    
    // Check for social media or riots related content
    if (tagLabels.includes('social') || 
        tagLabels.includes('riots') || 
        content.includes('social media') || 
        content.includes('riot') || 
        content.includes('crowd')) {
      return blogSvgs.social_riots;
    }
    
    // Check for technology or innovation related content
    if (tagLabels.includes('tech') || 
        tagLabels.includes('innovation') || 
        content.includes('technology') || 
        content.includes('innovation') || 
        content.includes('future')) {
      return blogSvgs.tech_innovation;
    }
    
    // Check for data analysis related content
    if (tagLabels.includes('data') || 
        tagLabels.includes('analysis') || 
        content.includes('data') || 
        content.includes('analysis') || 
        content.includes('statistics')) {
      return blogSvgs.data_analysis;
    }
    
    // Check for future trends related content
    if (tagLabels.includes('future') || 
        tagLabels.includes('trends') || 
        content.includes('future') || 
        content.includes('trend') || 
        content.includes('prediction')) {
      return blogSvgs.future_trends;
    }
    
    // Check for business strategy related content
    if (tagLabels.includes('business') || 
        tagLabels.includes('strategy') || 
        content.includes('business') || 
        content.includes('strategy') || 
        content.includes('management')) {
      return blogSvgs.business_strategy;
    }
    
    // Default SVG if no specific category is matched
    return blogSvgs.default;
  }

  return (
    <Layout title={blogTitle} description={blogDescription}>
      <main className={styles.blogPage}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Blog & Resources</h1>
            <p className={styles.heroSubtitle}>
              Insights, tutorials, and updates from our team
            </p>
          </div>
        </div>

        <div className={styles.blogContainer}>
          {/* Left Sidebar - Desktop Only */}
          <aside className={clsx(styles.sidebar, styles.leftSidebar)}>
            {leftSidebarContent.map((item, idx) => (
              <BlogSidebarCard key={`left-${idx}`} {...item} />
            ))}
            {/* Show right sidebar content in left sidebar on mobile/tablet */}
            <div className={styles.mobileRightSidebarContent}>
              {rightSidebarContent.map((item, idx) => (
                <BlogSidebarCard key={`right-mobile-${idx}`} {...item} />
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className={styles.mainContent}>
            <div className={styles.searchContainer}>
              <SearchInput 
                placeholder="Search articles..." 
                value={searchQuery} 
                onChange={setSearchQuery} 
              />
              {searchQuery && (
                <div className={styles.searchStats}>
                  Found {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'}
                </div>
              )}
            </div>
            
            <div className={styles.blogPosts}>
              {filteredItems.length > 0 ? (
                <div className={styles.blogGrid}>
                  {filteredItems.map((item, index) => {
                    const { content: BlogPostContent } = item;
                    const { metadata } = BlogPostContent;
                    const { permalink, title, description, date, formattedDate, authors, tags, readingTime } = metadata;
                    
                    // Get the first author if available
                    const author = authors && authors.length > 0 ? authors[0] : null;
                    
                    // Insert banner card after every 3 blog posts in single-column mode
                    // The bannerIndex cycles through available banner cards
                    const bannerIndex = Math.floor(index / 3) % bannerCards.length;
                    // Only show banners on mobile and tablet (screens < 1200px)
                    const shouldShowBanner = index > 0 && index % 3 === 0;
                    
                    return (
                      <React.Fragment key={`blog-group-${index}`}>
                        {shouldShowBanner && (
                          <div className={styles.bannerCardWrapper}>
                            <BannerCard 
                              key={`banner-${index}`}
                              {...bannerCards[bannerIndex]}
                              index={bannerIndex}
                            />
                          </div>
                        )}
                        <div key={`blog-${index}`} className={styles.blogCard}>
                          <div className={styles.blogCardInner}>
                            {/* Display appropriate SVG based on blog post tags/content */}
                            <div className={styles.blogCardSvgContainer}>
                              {getSvgForBlogPost(metadata)}
                            </div>
                            <div className={styles.blogCardContent}>
                              <div className={styles.blogCardHeader}>
                                {tags && tags.length > 0 && (
                                  <div className={styles.blogCardTags}>
                                    {tags.slice(0, 2).map((tag, tagIndex) => (
                                      <Link
                                        key={tagIndex}
                                        to={tag.permalink}
                                        className={styles.blogCardTag}
                                      >
                                        {tag.label}
                                      </Link>
                                    ))}
                                    {tags.length > 2 && (
                                      <span className={styles.blogCardTag}>
                                        +{tags.length - 2}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                              <h2 className={styles.blogCardTitle}>
                                <Link to={permalink}>{title}</Link>
                              </h2>
                              {description && (
                                <p className={styles.blogCardDescription}>{description}</p>
                              )}
                              <div className={styles.blogCardMeta}>
                                {author && (
                                  <div className={styles.blogCardAuthor}>
                                    {author.imageURL && (
                                      <img
                                        src={author.imageURL}
                                        alt={author.name}
                                        className={styles.blogCardAuthorImage}
                                      />
                                    )}
                                    <span>{author.name}</span>
                                  </div>
                                )}
                                <div className={styles.blogCardMetaInfo}>
                                  {formattedDate && (
                                    <span className={styles.blogCardDate}>{formattedDate}</span>
                                  )}
                                  {readingTime && (
                                    <span className={styles.blogCardReadingTime}>
                                      {Math.ceil(readingTime)} min read
                                    </span>
                                  )}
                                </div>
                              </div>
                              <Link to={permalink} className={styles.blogCardReadMore}>
                                Read More →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : (
                <div className={styles.noPosts}>
                  {searchQuery ? 'No matching posts found. Try a different search term.' : 'No blog posts found.'}
                </div>
              )}
            </div>
            
            {metadata.pages?.length > 0 && (
              <nav className={styles.pagination}>
                {metadata.previousPage && (
                  <Link to={metadata.previousPage} className={styles.paginationLink}>
                    ← Newer Posts
                  </Link>
                )}
                {metadata.nextPage && (
                  <Link to={metadata.nextPage} className={styles.paginationLink}>
                    Older Posts →
                  </Link>
                )}
              </nav>
            )}
          </div>

          {/* Right Sidebar - Desktop Only */}
          <aside className={clsx(styles.sidebar, styles.rightSidebar)}>
            {rightSidebarContent.map((item, idx) => (
              <BlogSidebarCard key={`right-${idx}`} {...item} />
            ))}
            {rightSidebarContent.map((item, idx) => (
              <BlogSidebarCard key={`right-${idx}`} {...item} />
            ))}
          </aside>
        </div>
      </main>
    </Layout>
  );
}
