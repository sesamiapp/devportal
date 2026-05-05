import React from 'react';
import Link from '@docusaurus/Link';
import styles from './IntroCardGrid.module.css';

const PRODUCTS = [
  {
    title: 'Sesami Experience',
    description:
      'Add booking to your storefront with a single tag — calendar UI, reservations, and Shopify integration included.',
    href: '/docs/sesami-experience/quick-start/',
    inside: [
      {label: 'Quick Start', href: '/docs/sesami-experience/quick-start/'},
      {label: 'Options', href: '/docs/sesami-experience/options/'},
      {label: 'Configurator', href: '/docs/sesami-experience/configurator/'},
      {label: 'Events', href: '/docs/sesami-experience/events/'},
      {label: 'Shopify Integration', href: '/docs/sesami-experience/shopify-integration/intro/'},
    ],
  },
  {
    title: 'Sesami SDK',
    description:
      'Build a fully custom booking UI on top of the Sesami Storefront API.',
    href: '/docs/sesami-sdk/quick-start/',
    inside: [
      {label: 'Quick Start', href: '/docs/sesami-sdk/quick-start/'},
      {label: 'Rendering a Calendar', href: '/docs/sesami-sdk/rendering-a-calendar/'},
      {label: 'Booking & Reservation', href: '/docs/sesami-sdk/booking-and-reservation/'},
      {label: 'Methods & Helpers', href: '/docs/sesami-sdk/methods-and-helpers/'},
    ],
  },
  {
    title: 'Sesami API',
    description:
      "Talk to Sesami's backend directly — programmatic access for integrations, custom workflows, and admin tools.",
    href: '/docs/sesami-api/intro/',
    inside: [
      {label: 'Personal Access Token', href: '/docs/sesami-api/personal-access-token/'},
      {label: 'Make a Request', href: '/docs/sesami-api/make-a-request/'},
      {label: 'Errors', href: '/docs/sesami-api/errors/'},
    ],
  },
  {
    title: 'Sesami Flows',
    description:
      'Automate workflows around the booking lifecycle — emails, SMS, webhooks, and scheduled reminders.',
    href: '/docs/sesami-flows/flows/',
    inside: [],
  },
  {
    title: 'Sesami Apps',
    description:
      'Extend Sesami by building public or private apps that integrate with shops in our ecosystem.',
    href: '/docs/sesami-apps/intro/',
    inside: [
      {label: 'Quick Start Boilerplate', href: '/docs/sesami-apps/quick-start-boilerplate/'},
      {label: 'App Targets', href: '/docs/sesami-apps/how-it-works/app-targets/'},
      {label: 'Register Application', href: '/docs/sesami-apps/register-application/'},
    ],
  },
];

export default function IntroCardGrid() {
  return (
    <div className={styles.grid}>
      {PRODUCTS.map((p) => (
        <div key={p.title} className={styles.card}>
          <h3 className={styles.title}>
            <Link to={p.href} className={styles.titleLink}>
              {p.title}
            </Link>
          </h3>
          <p className={styles.description}>{p.description}</p>
          {p.inside.length > 0 && (
            <>
              <p className={styles.insideLabel}>What's inside</p>
              <ul className={styles.insideList}>
                {p.inside.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link to={p.href} className={styles.cardLink}>
            Explore →
          </Link>
        </div>
      ))}
    </div>
  );
}
