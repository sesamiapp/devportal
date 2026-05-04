import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './HomepageProducts.module.css';

const PRODUCTS = [
  {
    key: 'experience',
    title: 'Experience',
    description:
      'Add booking to your storefront with a single tag. Drop-in calendar UI, reservations, and Shopify integration included.',
    cta: 'Embed the Experience',
    href: '/docs/sesami-experience/quick-start/',
  },
  {
    key: 'sdk',
    title: 'SDK',
    description:
      'Build your own custom booking UI on top of the Sesami Storefront API. Full control, your design, your stack.',
    cta: 'Build with the SDK',
    href: '/docs/sesami-sdk/quick-start/',
  },
  {
    key: 'api',
    title: 'API',
    description:
      "Talk to Sesami's backend directly. Programmatic access for integrations, custom workflows, and admin tools.",
    cta: 'Explore the API',
    href: '/docs/sesami-api/intro/',
  },
  {
    key: 'flows',
    title: 'Flows',
    description:
      'Automate workflows around the booking lifecycle — emails, SMS, webhooks, and scheduled reminders, triggered by any event.',
    cta: 'See Flows',
    href: '/docs/sesami-flows/flows/',
  },
  {
    key: 'apps',
    title: 'Apps',
    description:
      'Extend Sesami by building public or private apps that integrate with shops in our ecosystem — your own clients, your own business.',
    cta: 'Build an app',
    href: '/docs/sesami-apps/intro/',
  },
];

export default function HomepageProducts() {
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.grid}>
          {PRODUCTS.map((p) => (
            <div
              key={p.key}
              className={clsx(styles.card, styles[`card_${p.key}`])}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDescription}>{p.description}</p>
              </div>
              <Link className={styles.cardCTA} to={p.href}>
                {p.cta} <span className={styles.cardArrow}>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
