import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostItems from '@theme/BlogPostItems';
// Custom search input instead of Docusaurus SearchBar
import clsx from 'clsx';
import styles from './styles.module.css';

function BlogSidebarCard({ title, content, image, link }) {
  return (
    <div className={styles.sidebarCard}>
      {image && <img src={image} alt={title} className={styles.sidebarImage} />}
      <h3>{title}</h3>
      <p>{content}</p>
      {link && (
        <Link to={link} className={styles.sidebarLink}>
          Learn more →
        </Link>
      )}
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
      title: 'Featured',
      content: 'Discover our most popular articles and resources.',
      image: '/img/placeholder-1.jpg',
      link: '/blog/tags/featured',
    },
  ];

  const rightSidebarContent = [
    {
      title: 'Categories',
      content: 'Browse articles by category to find exactly what you need.',
      image: '/img/placeholder-2.jpg',
      link: '/blog/archive',
    },
  ];

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
            {leftSidebarContent.map((item, idx) => (
              <BlogSidebarCard key={`left-${idx}`} {...item} />
            ))}
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
                <BlogPostItems items={filteredItems} />
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
