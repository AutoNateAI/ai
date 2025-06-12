import React from 'react';
import Layout from '@theme/Layout';
import WorkshopDetail from '@site/src/components/WorkshopDetail';

// Workshop data for Cognitive Load Optimization for Executives
const workshopData = {
  id: '1',
  slug: 'cognitive-load-optimization-executives',
  title: 'Cognitive Load Optimization for Executives',
  subtitle: 'AI-Augmented Strategic Decision Making',
  description: 'Transform your decision-making process with AI-augmented cognitive frameworks proven in Fortune 100 environments.',
  date: '2024-01-15',
  time: '2:00 PM - 6:00 PM EST',
  format: 'Virtual' as const,
  duration: '4 hours',
  level: 'Executive' as const,
  price: 1247,
  originalPrice: 1797,
  seatsRemaining: 3,
  totalSeats: 12,
  focusArea: 'Strategy' as const,
  type: 'Intensive' as const,
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
  ]
};

export default function CognitiveLoadOptimizationExecutives(): JSX.Element {
  return (
    <Layout
      title={workshopData.title}
      description={workshopData.description}
    >
      <WorkshopDetail workshop={workshopData} />
    </Layout>
  );
}
