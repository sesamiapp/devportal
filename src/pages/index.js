import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageQuickStart from '../components/HomepageQuickStart';
import HomepageProducts from '../components/HomepageProducts';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroLead}>
          Sesami powers service commerce — booking, scheduling, and the lifecycle around them.
          Embed our drop-in tag, build a custom UI with the SDK, talk to the API, automate with Flows, or extend Sesami with your own apps.
        </p>
        <p className={styles.heroTagline}>{siteConfig.tagline}.</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Sesami Developers`}
      description="Sesami developers portal, Integrate your service with Sesami">
      <HomepageHeader />
      <main>
        <HomepageProducts />
        <HomepageQuickStart />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
