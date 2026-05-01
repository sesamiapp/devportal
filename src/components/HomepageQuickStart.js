import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

import styles from './HomepageQuickStart.module.css';

const QUICK_START_CODE = `<script async src="https://cdn.sesami.co/storefront/latest/sesami-main.js"></script>

<sesami-experience
  shop-id="YOUR_SHOP_ID"
  service-id="YOUR_SERVICE_ID"
></sesami-experience>`;

export default function HomepageQuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.copy}>
          <h2 className={styles.title}>
            Add booking to your store in <span className={styles.accent}>3 lines</span>
          </h2>
          <p className={styles.subtitle}>
            Drop the Sesami Experience tag into your storefront and start taking
            reservations — no backend, no setup, just paste and ship.
          </p>
          <p className={styles.subtitle}>
            Need more control? Talk to our API or build with the SDK.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.button)}
              to="/docs/sesami-experience/quick-start/">
              Quick start
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.button)}
              to="/docs/sesami-api/intro/">
              API reference
            </Link>
          </div>
        </div>
        <div className={styles.code}>
          <CodeBlock language="html" title="index.html">
            {QUICK_START_CODE}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}
