import React from 'react';
import Layout from '@theme/Layout';
import WorkshopDetail from '@site/src/components/WorkshopDetail';

// Workshop data for AI-Human Partnership Frameworks
const workshopData = {
  id: '2',
  slug: 'ai-human-partnership-frameworks',
  title: 'AI-Human Partnership Frameworks',
  subtitle: 'Psychology-Driven Workflow Design',
  description: 'Design workflow systems that amplify human creativity while leveraging AI capabilities for maximum strategic impact.',
  date: '2024-01-22',
  time: '1:00 PM - 5:00 PM EST',
  format: 'Virtual' as const,
  duration: '4 hours',
  level: 'Professional' as const,
  price: 897,
  seatsRemaining: 7,
  totalSeats: 15,
  focusArea: 'Psychology' as const,
  type: 'Masterclass' as const,
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
    },
    {
      quote: 'The psychology-driven framework helped us achieve 50% productivity gains while maintaining creative quality.',
      author: 'Sarah Martinez',
      company: 'Digital Strategy Consultancy',
      role: 'Managing Partner'
    }
  ]
};

export default function AIHumanPartnershipFrameworks(): JSX.Element {
  return (
    <Layout
      title={workshopData.title}
      description={workshopData.description}
    >
      <WorkshopDetail workshop={workshopData} />
    </Layout>
  );
}
