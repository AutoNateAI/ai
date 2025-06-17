import React from 'react';
import Layout from '@theme/Layout';
import WorkshopDetail, { WorkshopData } from '../../components/WorkshopDetail';
import { workshops } from '../workshops';

export default function WorkshopPage(): JSX.Element {
  // Find the workshop with slug 'ai-fluency-next-gen-leaders'
  const workshop = workshops.find(w => w.slug === 'ai-fluency-next-gen-leaders') as WorkshopData;

  return (
    <Layout title={workshop.title} description={workshop.description}>
      <WorkshopDetail workshop={workshop} />
    </Layout>
  );
}
