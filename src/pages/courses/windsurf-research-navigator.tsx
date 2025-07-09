import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CourseDetail from '@site/src/components/CourseDetail';
import { courses } from '../courses';

export default function WindsurfResearchNavigatorCourse(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  // Find this specific course by slug
  const course = courses.find(course => course.slug === 'windsurf-research-navigator');

  return (
    <Layout
      title={`${course.title} | ${siteConfig.title}`}
      description={course.description}>
      <main>
        {course && <CourseDetail course={course} />}
      </main>
    </Layout>
  );
}
