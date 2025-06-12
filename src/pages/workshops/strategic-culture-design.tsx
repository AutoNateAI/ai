import React from 'react';
import Layout from '@theme/Layout';
import WorkshopDetail from '@site/src/components/WorkshopDetail';

// Workshop data for Strategic Culture Design
const workshopData = {
  id: '3',
  slug: 'strategic-culture-design',
  title: 'Strategic Culture Design',
  subtitle: 'Building High-Performance Teams',
  description: 'Design organizational cultures that drive strategic execution and sustainable competitive advantages.',
  date: '2024-01-29',
  time: '10:00 AM - 2:00 PM EST',
  format: 'Virtual' as const,
  duration: '4 hours',
  level: 'Executive' as const,
  price: 1197,
  seatsRemaining: 5,
  totalSeats: 10,
  focusArea: 'Culture' as const,
  type: 'Deep Dive' as const,
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
    },
    {
      quote: 'The most practical and actionable culture design workshop I\'ve attended. Results were immediate.',
      author: 'Jennifer Walsh',
      company: 'Fortune 500 Healthcare',
      role: 'Chief People Officer'
    }
  ]
};

export default function StrategicCultureDesign(): JSX.Element {
  return (
    <Layout
      title={workshopData.title}
      description={workshopData.description}
    >
      <WorkshopDetail workshop={workshopData} />
    </Layout>
  );
}
