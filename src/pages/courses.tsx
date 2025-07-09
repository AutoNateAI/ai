import React, { useState } from 'react';
import type { ReactElement } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './courses.module.css';

// Course data structure
interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  releaseDate: string;
  duration: string;
  format: 'Interactive Module' | 'Video Tutorial' | 'AI Workshop' | 'Research Tool';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Graduate';
  price: number;
  originalPrice?: number;
  aiTool: 'Claude' | 'GPT-4' | 'NotebookLM' | 'Windsurf' | 'Multiple';
  moduleCount: number;
  completedCount: number;
  category: 'Literature Review' | 'Research Methods' | 'Data Analysis' | 'Academic Writing' | 'Grant Writing';
  type: 'AI Tool Training' | 'Research Workflow' | 'Publication Support' | 'Interactive Lab';
  audience: 'Faculty' | 'PhD Students' | 'Researchers' | 'All Academics';
  learningOutcomes: string[];
  creator: {
    name: string;
    title: string;
    institution: string;
    expertise: string;
    credentials: string[];
  };
  modules: {
    number: string;
    title: string;
    description: string;
    interactiveElements: string[];
  }[];
  testimonials: {
    quote: string;
    author: string;
    institution: string;
    role: string;
  }[];
  featured?: boolean;
}

// Sample course data with complete details
export const courses: Course[] = [
  {
    id: '1',
    slug: 'claude-research-foundations',
    title: 'Claude Research Foundations',
    subtitle: 'Master the Ultimate AI Research Assistant',
    description: 'An interactive learning portal that teaches researchers how to leverage Claude for literature analysis, hypothesis generation, and research planning through hands-on exercises and custom workflows.',
    releaseDate: '2024-08-01',
    format: 'Interactive Module',
    duration: 'Self-paced (8-10 hours)',
    level: 'Intermediate',
    price: 299,
    originalPrice: 499,
    aiTool: 'Claude',
    moduleCount: 6,
    completedCount: 0,
    category: 'Research Methods',
    type: 'AI Tool Training',
    audience: 'Researchers',
    learningOutcomes: [
      "Build custom Claude prompts specifically designed for academic research tasks",
      "Create systematic literature review workflows that extract key findings from hundreds of papers",
      "Develop hypothesis generation frameworks that combine AI insights with researcher expertise",
      "Master advanced Claude features like multi-step reasoning and citation handling"
    ],
    creator: {
      name: 'Dr. Sarah Chen',
      title: 'Associate Professor of Information Science',
      institution: 'Berkeley Research Institute',
      expertise: 'AI-Enhanced Research Methods & Systematic Reviews',
      credentials: [
        'Published 40+ papers on research methodology',
        'Developer of AI-LitReview framework',
        'Research fellowship at Stanford AI Lab',
        'Award-winning innovations in academic workflows'
      ]
    },
    modules: [
      {
        number: 'Module 1',
        title: 'Research Assistant Fundamentals',
        description: 'Interactive lessons on configuring Claude as your personal research assistant with hands-on exercises and downloadable templates.',
        interactiveElements: ['Prompt Library', 'Interactive Demo', 'Practice Exercises', 'Quiz']
      },
      {
        number: 'Module 2',
        title: 'Literature Analysis & Synthesis',
        description: 'Learn to feed research papers to Claude and extract structured insights with our custom-built paper analysis interface.',
        interactiveElements: ['Paper Analysis Tool', 'Video Tutorial', 'Synthesis Template', 'Case Study']
      },
      {
        number: 'Module 3',
        title: 'Research Question Refinement',
        description: 'Interactive workshop for using Claude to refine research questions and identify novel approaches with real-time AI feedback.',
        interactiveElements: ['Question Builder', 'AI Feedback System', 'Research Gap Analyzer', 'Peer Examples']
      },
      {
        number: 'Module 4',
        title: 'Methodology Enhancement',
        description: 'Step-by-step methodology development with Claude, including experimental design feedback and statistical approach recommendations.',
        interactiveElements: ['Method Builder', 'Study Design Simulator', 'Statistical Analysis Guide', 'Video Walkthrough']
      },
      {
        number: 'Module 5',
        title: 'Academic Writing Partner',
        description: 'Transform Claude into your academic writing assistant with custom templates and workflows for different paper sections.',
        interactiveElements: ['Section Templates', 'Style Analyzer', 'Revision Assistant', 'Before/After Examples']
      },
      {
        number: 'Module 6',
        title: 'Research Knowledge Base',
        description: 'Build your own research knowledge base with Claude that stores key findings, methodological insights, and research questions.',
        interactiveElements: ['Knowledge Base Builder', 'Integration Tutorial', 'Tagging System', 'Search Optimization']
      }
    ],
    testimonials: [
      {
        quote: 'This interactive module transformed my research process. The custom Claude prompts and workflows have saved me countless hours on literature review and helped me discover connections I would have missed.',
        author: 'Dr. James Patterson',
        institution: 'University of Michigan',
        role: 'Associate Professor of Biology'
      },
      {
        quote: 'The interactive exercises and video tutorials make complex AI concepts accessible. I\'m now using Claude daily for my dissertation research with a level of sophistication I never thought possible.',
        author: 'Maria Gonzalez',
        institution: 'Stanford University',
        role: 'PhD Candidate in Psychology'
      }
    ],
    featured: true
  },
  {
    id: '2',
    slug: 'windsurf-research-navigator',
    title: 'Windsurf Research Navigator',
    subtitle: 'Organize Your Research Like Never Before',
    description: 'A comprehensive interactive course on using Windsurf for academic research management, featuring custom tools for organizing literature, research notes, and project planning with AI assistance.',
    releaseDate: '2024-07-15',
    format: 'Research Tool',
    duration: 'Self-paced (6-8 hours)',
    level: 'Beginner',
    price: 249,
    originalPrice: 399,
    aiTool: 'Windsurf',
    moduleCount: 5,
    completedCount: 0,
    category: 'Research Methods',
    type: 'Research Workflow',
    audience: 'All Academics',
    learningOutcomes: [
      "Create a customized Windsurf workspace optimized for academic research management",
      "Build automated workflows for literature organization, annotation, and synthesis",
      "Develop a comprehensive research knowledge base with AI-powered retrieval",
      "Master project planning and collaboration features for team-based research"
    ],
    creator: {
      name: 'Dr. Michael Rivera',
      title: 'Research Professor of Information Systems',
      institution: 'MIT Media Lab',
      expertise: 'Research Knowledge Management & AI Systems',
      credentials: [
        'Pioneer in AI-augmented research management',
        'Developer of ResearchFlow methodology',
        'Published 30+ papers on knowledge systems',
        'Research efficiency consultant to major universities'
      ]
    },
    modules: [
      {
        number: 'Module 1',
        title: 'Research Workspace Setup',
        description: 'Interactive walkthrough for creating your optimal research environment in Windsurf with custom templates and organization systems.',
        interactiveElements: ['Workspace Builder', 'Template Library', 'Configuration Assistant', 'Video Tutorial']
      },
      {
        number: 'Module 2',
        title: 'Literature Management System',
        description: 'Step-by-step process for creating an automated literature organization system with AI-powered tagging and retrieval.',
        interactiveElements: ['Paper Import Tool', 'Auto-Tagging System', 'Search Builder', 'Integration Demo']
      },
      {
        number: 'Module 3',
        title: 'Research Note Networking',
        description: 'Learn how to create interconnected research notes with bi-directional linking and AI-suggested connections.',
        interactiveElements: ['Note Templates', 'Connection Mapper', 'AI Suggestion Tool', 'Knowledge Graph Visualizer']
      },
      {
        number: 'Module 4',
        title: 'Project Planning & Timeline',
        description: 'Master Windsurf\'s project management capabilities with research-specific planning tools and timeline generators.',
        interactiveElements: ['Timeline Builder', 'Milestone Creator', 'Gantt Chart Tool', 'Calendar Integration']
      },
      {
        number: 'Module 5',
        title: 'Research Collaboration Hub',
        description: 'Set up collaborative research environments with controlled sharing, feedback systems, and version control.',
        interactiveElements: ['Collaboration Setup', 'Permission Manager', 'Feedback System', 'Version History Tracker']
      }
    ],
    testimonials: [
      {
        quote: 'The interactive modules and custom tools in this course helped me build a research management system I actually use every day. My literature organization went from chaotic to crystal clear.',
        author: 'Dr. Rebecca Chen',
        institution: 'Northwestern University',
        role: 'Assistant Professor of Neuroscience'
      },
      {
        quote: 'The video tutorials and step-by-step guides made implementation easy. Our entire research lab now uses Windsurf following these exact workflows, and our productivity has increased dramatically.',
        author: 'Dr. Thomas Garcia',
        institution: 'University of California, San Diego',
        role: 'Research Director, Climate Science Initiative'
      }
    ],
    featured: true
  },
  {
    id: '3',
    slug: 'notebooklm-research-analyzer',
    title: 'NotebookLM Research Analyzer',
    subtitle: 'Dissect Papers and Generate Insights Like Never Before',
    description: 'Learn to extract maximum value from scientific papers using NotebookLM\'s AI-powered analysis tools through interactive tutorials, custom notebooks, and structured workflows.',
    releaseDate: '2024-06-20',
    format: 'AI Workshop',
    duration: 'Self-paced (5-7 hours)',
    level: 'Intermediate',
    price: 199,
    originalPrice: 299,
    aiTool: 'NotebookLM',
    moduleCount: 4,
    completedCount: 0,
    category: 'Literature Review',
    type: 'Interactive Lab',
    audience: 'Researchers',
    featured: true,
    learningOutcomes: [
      "Create custom NotebookLM templates for different types of academic papers",
      "Build automated insight extraction systems for methodology, results, and limitations",
      "Develop cross-paper analysis frameworks to identify patterns and contradictions",
      "Master advanced annotation and knowledge synthesis techniques"
    ],
    creator: {
      name: 'Dr. Sophia Washington',
      title: 'Associate Professor of Computer Science',
      institution: 'Carnegie Mellon University',
      expertise: 'AI Document Analysis & Knowledge Extraction',
      credentials: [
        'Creator of PaperInsight methodology',
        'Google Research collaborator on document AI',
        'Published 25+ papers on text analysis',
        'Developer of academic reading frameworks'
      ]
    },
    modules: [
      {
        number: 'Module 1',
        title: 'Paper Analysis Fundamentals',
        description: 'Interactive introduction to NotebookLM\'s paper analysis capabilities with custom templates and hands-on exercises.',
        interactiveElements: ['Analysis Templates', 'Interactive Demo', 'Paper Importer', 'Practice Exercises']
      },
      {
        number: 'Module 2',
        title: 'Methodological Deep Dives',
        description: 'Learn specialized techniques for extracting and evaluating research methodologies across disciplines.',
        interactiveElements: ['Methodology Extractor', 'Evaluation Framework', 'Comparison Tool', 'Case Studies']
      },
      {
        number: 'Module 3',
        title: 'Results Synthesis & Visualization',
        description: 'Master the creation of visual summaries and structured data from complex research findings.',
        interactiveElements: ['Data Extractor', 'Visual Builder', 'Synthesis Workshop', 'Interactive Examples']
      },
      {
        number: 'Module 4',
        title: 'Multi-Paper Analysis',
        description: 'Advanced techniques for analyzing relationships, contradictions, and patterns across multiple papers.',
        interactiveElements: ['Cross-Paper Analyzer', 'Pattern Detector', 'Contradiction Highlighter', 'Synthesis Builder']
      }
    ],
    testimonials: [
      {
        quote: 'The interactive exercises transformed how I read scientific papers. I now extract 3x more useful information in half the time, and the structured notebooks have become essential to my research process.',
        author: 'Dr. Elijah Torres',
        institution: 'University of Washington',
        role: 'Assistant Professor of Psychology'
      },
      {
        quote: 'The video tutorials and custom templates were immediately applicable to my research. My literature reviews are now more comprehensive and insightful than ever before.',
        author: 'Dr. Maya Patel',
        institution: 'Johns Hopkins University',
        role: 'Postdoctoral Researcher in Immunology'
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

// Academic Hero Component
function AcademicHero() {
  return (
    <section className={styles.academicHero}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          AI-Powered Academic <span className="gradient-text-light">Excellence</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          Transform your research workflow and academic output with specialized AI courses designed specifically for professors and researchers.
        </p>
        <div className={styles.heroCtas}>
          <Link to="#featured-courses" className={styles.primaryCta}>
            Explore Courses
          </Link>
          <Link to="/contact" className={styles.secondaryCta}>
            Request Custom Training
          </Link>
        </div>
      </div>
    </section>
  );
}

// Course Card Component
function CourseCard({ course }: { course: Course }) {
  return (
    <div className={styles.courseCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardBadge}>
          {course.category}
        </div>
        <h3 className={styles.cardTitle}>{course.title}</h3>
        <p className={styles.cardSubtitle}>{course.subtitle}</p>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardDescription}>
          {course.description}
        </p>
        <div className={styles.cardDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📅</span>
            <span className={styles.detailText}>Available {formatHumanDate(course.releaseDate)}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>⏱️</span>
            <span className={styles.detailText}>{course.duration}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>🎓</span>
            <span className={styles.detailText}>{course.level}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>💻</span>
            <span className={styles.detailText}>{course.format}</span>
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardPrice}>
          <span className={styles.currentPrice}>${course.price}</span>
          {course.originalPrice && (
            <span className={styles.originalPrice}>${course.originalPrice}</span>
          )}
        </div>
        <Link to={`/courses/${course.slug}`} className={styles.cardButton}>
          View Details
        </Link>
      </div>
    </div>
  );
}

// Featured Courses Section
function FeaturedCourses() {
  const featuredCourses = courses.filter(course => course.featured);
  
  return (
    <section className={styles.featuredHero} id="featured-courses">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Featured Courses
          </Heading>
          <p className={styles.sectionSubtitle}>
            Our most popular courses designed to transform your research and academic output
          </p>
        </div>
        <div className={styles.courseGrid}>
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

// All Courses Grid
function CourseGrid() {
  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Browse All Courses
          </Heading>
          <p className={styles.sectionSubtitle}>
            Comprehensive AI training for every aspect of academic research and publishing
          </p>
        </div>
        <div className={styles.courseGrid}>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Research Methods Section
function ResearchMethodsSection() {
  return (
    <section className={styles.researchSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Transform Your Research Workflow
          </Heading>
          <p className={styles.sectionSubtitle}>
            Our courses are designed to enhance every stage of the academic research process
          </p>
        </div>
        <div className={styles.researchPhases}>
          <div className={styles.researchPhase}>
            <div className={styles.phaseIcon}>🔍</div>
            <h3 className={styles.phaseTitle}>Literature Review</h3>
            <p className={styles.phaseDescription}>
              Process hundreds of papers in a fraction of the time while extracting deeper insights.
            </p>
          </div>
          <div className={styles.researchPhase}>
            <div className={styles.phaseIcon}>📊</div>
            <h3 className={styles.phaseTitle}>Data Analysis</h3>
            <p className={styles.phaseDescription}>
              Accelerate analysis and uncover patterns that traditional methods might miss.
            </p>
          </div>
          <div className={styles.researchPhase}>
            <div className={styles.phaseIcon}>📝</div>
            <h3 className={styles.phaseTitle}>Academic Writing</h3>
            <p className={styles.phaseDescription}>
              Enhance clarity, structure, and impact while maintaining your authentic voice.
            </p>
          </div>
          <div className={styles.researchPhase}>
            <div className={styles.phaseIcon}>💰</div>
            <h3 className={styles.phaseTitle}>Grant Preparation</h3>
            <p className={styles.phaseDescription}>
              Craft more compelling proposals with higher chances of funding success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Academic Benefits Section
function AcademicBenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Benefits for Academics
          </Heading>
          <p className={styles.sectionSubtitle}>
            How our courses enhance scholarly productivity and impact
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>⚡</div>
            <h3 className={styles.benefitTitle}>Research Acceleration</h3>
            <p className={styles.benefitDescription}>
              Reduce literature review and data analysis time by up to 70%, allowing more time for original thinking.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>📈</div>
            <h3 className={styles.benefitTitle}>Publication Quality</h3>
            <p className={styles.benefitDescription}>
              Enhance the clarity, structure, and impact of your academic papers for higher acceptance rates.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>💡</div>
            <h3 className={styles.benefitTitle}>Interdisciplinary Insights</h3>
            <p className={styles.benefitDescription}>
              Discover connections across disciplines that would be impossible to find manually.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🔄</div>
            <h3 className={styles.benefitTitle}>Feedback Integration</h3>
            <p className={styles.benefitDescription}>
              Process reviewer feedback more effectively and make targeted revisions to manuscripts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Faculty Testimonials Section
function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            What Academics Are Saying
          </Heading>
          <p className={styles.sectionSubtitle}>
            Feedback from faculty and researchers who have transformed their work with our courses
          </p>
        </div>
        <div className={styles.testimonialGrid}>
          {courses.flatMap(course => course.testimonials).slice(0, 4).map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorName}>{testimonial.author}</div>
                <div className={styles.authorRole}>{testimonial.role}, {testimonial.institution}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Courses Component
export default function Courses(): ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`AI Courses for Academic Excellence | ${siteConfig.title}`}
      description="Transform your research workflow and academic output with specialized AI courses designed for professors and researchers.">
      <main className={styles.coursesPage}>
        <AcademicHero />
        <FeaturedCourses />
        <ResearchMethodsSection />
        <CourseGrid />
        <AcademicBenefitsSection />
        <TestimonialsSection />
      </main>
    </Layout>
  );
}
