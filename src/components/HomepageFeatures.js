import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Seamless integration',
    Svg: require('../../static/img/integration.svg').default,
    description: (
      <>
        Add booking to any website, Shopify theme, or headless storefront —
        embed the tag, call the API, or automate with Flows.
      </>
    ),
    link: {to: '/docs/intro/', label: 'Explore the docs'},
  },
  {
    title: 'Fully customizable',
    Svg: require('../../static/img/customizable.svg').default,
    description: (
      <>
        Style the Experience to match your brand, build your own UI with the SDK,
        and tailor every touchpoint — from emails to flows.
      </>
    ),
    link: {to: '/docs/sesami-sdk/quick-start/', label: 'Try the SDK'},
  },
  {
    title: 'Open for contribution',
    Svg: require('../../static/img/contribution.svg').default,
    description: (
      <>
        Something missing — a language we don't support, a custom calendar view,
        or a topic in the docs? Let's build it together.
      </>
    ),
    link: {href: 'https://github.com/sesamiapp', label: 'Contribute on GitHub'},
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
        {link && (
          <Link
            className={styles.featureLink}
            to={link.to}
            href={link.href}>
            {link.label} →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
