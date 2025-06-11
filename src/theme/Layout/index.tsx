import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import type {Props} from '@theme/Layout';

export default function Layout(props: Props): JSX.Element {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <OriginalLayout {...props} />
    </>
  );
}
