import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

import styles from './HomepageShowcase.module.css';

export default function HomepageShowcase({
  title,
  accent,
  paragraphs = [],
  buttons = [],
  codeTitle,
  codeLanguage,
  code,
  codePosition = 'right',
}) {
  const codeOnLeft = codePosition === 'left';

  return (
    <section className={styles.section}>
      <div
        className={clsx(
          'container',
          styles.inner,
          codeOnLeft && styles.codeLeft,
        )}>
        <div className={styles.copy}>
          <h2 className={styles.title}>
            {title}
            {accent && (
              <>
                {' '}
                <span className={styles.accent}>{accent}</span>
              </>
            )}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className={styles.paragraph}>
              {p}
            </p>
          ))}
          {buttons.length > 0 && (
            <div className={styles.buttons}>
              {buttons.map((b, i) => (
                <Link
                  key={i}
                  className={clsx(
                    'button button--lg',
                    b.variant === 'primary' ? 'button--primary' : 'button--secondary',
                    styles.button,
                  )}
                  to={b.href}>
                  {b.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className={styles.code}>
          <CodeBlock language={codeLanguage} title={codeTitle}>
            {code}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}
