import React from 'react';
import WorkshopDetail from '../../components/WorkshopDetail';

const workshopData = {
  id: 'advanced-ai-systems-architecture',
  slug: 'advanced-ai-systems-architecture',
  title: 'Advanced AI Systems Architecture',
  subtitle: 'Enterprise AI Implementation',
  description: 'Design and implement scalable AI systems that drive competitive advantage in enterprise environments.',
  date: 'March 5, 2024',
  time: '3:00 PM - 7:00 PM EST',
  format: 'Virtual',
  duration: '4 hours',
  level: 'Advanced',
  focusArea: 'Strategy',
  type: 'Virtual Workshop',
  price: 1397,
  originalPrice: 1897,
  seatsRemaining: 6,
  totalSeats: 12,
  outcomes: [
    'Architect enterprise-grade AI systems',
    'Design scalable machine learning pipelines', 
    'Implement AI governance frameworks',
    'Build competitive AI capabilities'
  ],
  instructor: {
    name: 'Dr. Alex Kumar',
    title: 'Chief AI Architect',
    company: 'Fortune 100 Technology Corporation',
    expertise: 'Enterprise AI Architecture & Machine Learning Systems',
    credentials: [
      'Designed AI infrastructure for $100B+ tech companies',
      'PhD in Computer Science from Carnegie Mellon', 
      'Former Google AI Research Team Lead',
      'Author of "Enterprise AI Architecture" (O\'Reilly)'
    ]
  },
  agenda: [
    {
      time: '3:00 PM',
      title: 'AI Systems Assessment',
      description: 'Evaluate current AI capabilities and identify architectural gaps in enterprise environments.'
    },
    {
      time: '3:45 PM', 
      title: 'Scalable Architecture Design',
      description: 'Learn principles for designing AI systems that scale with business growth and complexity.'
    },
    {
      time: '4:30 PM',
      title: 'Implementation Strategies', 
      description: 'Master proven approaches for deploying AI systems in large-scale enterprise environments.'
    },
    {
      time: '5:15 PM',
      title: 'Governance & Ethics Framework',
      description: 'Build comprehensive AI governance systems for responsible enterprise deployment.'
    },
    {
      time: '6:00 PM',
      title: 'Competitive Advantage Design',
      description: 'Create sustainable competitive advantages through unique AI system architecture.'
    }
  ],
  testimonials: [
    {
      quote: 'This architecture framework helped us scale our AI initiatives from pilot to enterprise-wide deployment.',
      author: 'Jennifer Walsh',
      company: 'Global Financial Services', 
      role: 'Chief Technology Officer'
    }
  ]
};

export default function AdvancedAISystemsArchitecture() {
  return <WorkshopDetail workshop={workshopData} />;
}
