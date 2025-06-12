import React from 'react';
import Layout from '@theme/Layout';
import WorkshopDetail from '../../components/WorkshopDetail';

const workshopData = {
  id: '4',
  slug: 'cognitive-intelligence-frameworks',
  title: 'Cognitive Intelligence Frameworks',
  subtitle: 'Next-Level Strategic Thinking',
  description: 'Develop advanced cognitive frameworks that combine human intuition with AI-powered strategic analysis.',
  date: '2024-02-25',
  time: '9:00 AM - 1:00 PM EST',
  format: 'Virtual',
  duration: '4 hours',
  level: 'Executive',
  price: 747,
  seatsRemaining: 4,
  totalSeats: 10,
  focusArea: 'Intelligence',
  type: 'Intensive',
  outcomes: [
    'Master cognitive load theory for executive decision-making',
    'Implement AI-augmented analysis frameworks',
    'Design personalized decision-making protocols',
    'Build strategic thinking automation systems'
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
    },
    {
      quote: 'Dr. Patterson\'s methodology helped us reduce decision fatigue while improving strategic outcomes by 40%.',
      author: 'Sarah Kim',
      company: 'Tech Innovation Labs',
      role: 'Chief Executive Officer'
    }
  ]
};

export default function CognitiveIntelligenceFrameworks(): JSX.Element {
  return (
    <Layout
      title={workshopData.title}
      description={workshopData.description}
    >
      <WorkshopDetail workshop={workshopData} />
    </Layout>
  );
}
