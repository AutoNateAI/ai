import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Knowledge Base sidebar with 7 main categories
  knowledgeBaseSidebar: [
    {
      type: 'category',
      label: 'Intelligence',
      items: ['intelligence/cognitive-intelligence-foundations', 'intelligence/artificial-vs-human-intelligence', 'intelligence/intelligence-amplification-frameworks'],
    },
    {
      type: 'category',
      label: 'Mental Models',
      items: ['mental-models/core-thinking-frameworks', 'mental-models/decision-making-models', 'mental-models/cognitive-bias-toolkit'],
    },
    {
      type: 'category',
      label: 'Graph Theory',
      items: ['graph-theory/network-analysis-basics', 'graph-theory/influence-mapping-systems', 'graph-theory/connection-pattern-recognition'],
    },
    {
      type: 'category',
      label: 'Systemic Structures',
      items: ['systemic-structures/complex-systems-fundamentals', 'systemic-structures/feedback-loop-dynamics', 'systemic-structures/emergent-behavior-patterns'],
    },
    {
      type: 'category',
      label: 'Data Analytics',
      items: ['data-analytics/data-interpretation-methods', 'data-analytics/statistical-insight-extraction', 'data-analytics/predictive-pattern-analysis'],
    },
    {
      type: 'category',
      label: 'Digital Tooling',
      items: ['digital-tooling/ai-tool-ecosystem', 'digital-tooling/automation-workflow-design', 'digital-tooling/digital-productivity-systems'],
    },
    {
      type: 'category',
      label: 'Evergreen Frameworks',
      items: ['evergreen-frameworks/timeless-strategic-models', 'evergreen-frameworks/foundational-psychology-frameworks', 'evergreen-frameworks/enduring-cultural-analysis-tools'],
    },
  ]
};

export default sidebars;
