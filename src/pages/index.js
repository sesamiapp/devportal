import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageProducts from '../components/HomepageProducts';
import HomepageShowcase from '../components/HomepageShowcase';

const EXPERIENCE_CODE = `<script async src="https://cdn.sesami.co/storefront/latest/sesami-main.js"></script>

<sesami-experience
  shop-id="YOUR_SHOP_ID"
  service-id="YOUR_SERVICE_ID"
></sesami-experience>`;

const SDK_CODE = `const sesami = new SesamiSDK({
  shopId:    'YOUR_SHOP_ID',
  productId: 'YOUR_SERVICE_ID',
  autoLoad:  true,
})

await sesami.init()

// Render any UI you want, then book in one call
await sesami.book(slot, {
  firstName: 'Jane',
  lastName:  'Doe',
  email:     'jane@example.com',
  phone:     '+15551234567',
})`;

const API_CODE = `curl https://api.sesami.co/graphql \\
  -H "x-api-key:   $SESAMI_TOKEN" \\
  -H "x-client-id: $SESAMI_CLIENT_ID" \\
  -H "x-shop-id:   $SESAMI_SHOP_ID" \\
  -H "content-type: application/json" \\
  -d '{
    "query": "{ getAppointments(shop: \\"YOUR_SHOP_ID\\", limit: 5) { data { customer { name email } datetime status } } }"
  }'`;

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

        <HomepageShowcase
          title="Add booking to your store in"
          accent="3 lines"
          paragraphs={[
            'Drop the Sesami Experience tag into your storefront and start taking reservations — no backend, no setup, just paste and ship.',
            'Need more control? Talk to our API or build with the SDK.',
          ]}
          buttons={[
            {label: 'Quick start', href: '/docs/sesami-experience/quick-start/', variant: 'primary'},
            {label: 'API reference', href: '/docs/sesami-api/intro/'},
          ]}
          codeTitle="index.html"
          codeLanguage="html"
          code={EXPERIENCE_CODE}
          codePosition="right"
        />

        <HomepageShowcase
          title="Build your own"
          accent="booking UI"
          paragraphs={[
            'The Sesami SDK gives you availability data, reservations, and instant bookings without dictating your design.',
            'Bring your stack. Render any flow your customers will love.',
          ]}
          buttons={[
            {label: 'SDK quick start', href: '/docs/sesami-sdk/quick-start/', variant: 'primary'},
            {label: 'Methods & helpers', href: '/docs/sesami-sdk/methods-and-helpers/'},
          ]}
          codeTitle="booking.ts"
          codeLanguage="ts"
          code={SDK_CODE}
          codePosition="left"
        />

        <HomepageShowcase
          title="Sesami in any language, from"
          accent="any service"
          paragraphs={[
            'A complete GraphQL API for every Sesami operation — bookings, availability, customers, and more. REST is there too, if you prefer.',
            'Integrate from your backend, your CLI, or any tool that speaks HTTP.',
          ]}
          buttons={[
            {label: 'API reference', href: '/docs/sesami-api/intro/', variant: 'primary'},
            {label: 'Get a token', href: '/docs/sesami-api/personal-access-token/'},
          ]}
          codeTitle="fetch.sh"
          codeLanguage="bash"
          code={API_CODE}
          codePosition="right"
        />

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
