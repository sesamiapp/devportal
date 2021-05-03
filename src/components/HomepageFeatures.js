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
        Sesami works with almost any standard theme
      </>
    ),
  },
  {
    title: 'Fully customizable',
    Svg: require('../../static/img/customizable.svg').default,
    description: (
      <>
        Sesami is smart and tries to match your theme automatically,
        But that doesn't mean you don't have full control on how it looks on your store!{` `}
        
        <Link
          className=""
          to="/docs/storefront-integration/styling">
          Learn more here
        </Link>
      </>
    ),
  },
  {
    title: 'Open for contribution',
    Svg: require('../../static/img/contribution.svg').default,
    description: (
      <>
        Something is missing? whether it be a new language that we don't currently support,
        or a custom calendar view, or even a topic in the docs, Let's do it together!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
