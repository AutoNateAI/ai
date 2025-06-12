import React from 'react';
import WorkshopDetail from '../../components/WorkshopDetail';

const workshopData = {
  id: 'executive-decision-optimization',
  slug: 'executive-decision-optimization',
  title: 'Executive Decision Optimization',
  subtitle: 'Data-Driven Leadership',
  description: 'Transform executive decision-making with data science frameworks and predictive analytics for strategic advantage.',
  date: 'March 12, 2024',
  time: '11:00 AM - 3:00 PM EST',
  format: 'Hybrid',
  duration: '4 hours',
  level: 'Executive',
  focusArea: 'Strategy',
  type: 'Hybrid Workshop',
  price: 1597,
  originalPrice: 2097,
  seatsRemaining: 2,
  totalSeats: 8,
  outcomes: [
    'Master data-driven decision frameworks',
    'Implement predictive analytics for strategy',
    'Design executive intelligence systems',
    'Build evidence-based leadership practices'
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
};

export default function ExecutiveDecisionOptimization() {
  return <WorkshopDetail workshop={workshopData} />;
}
