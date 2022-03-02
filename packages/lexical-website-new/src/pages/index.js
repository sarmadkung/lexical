import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import HomepageExamples from '../components/homepage-examples/HomepageExamples';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <img
            className={styles.logo}
            src="/img/logo-dark.svg"
            alt="Lexical Logo: containing an icon of a text editor glyph containing a text cursor on the left, with the text of 'Lexical' on the right."
          />
        </h1>
        <p className={clsx('hero__subtitle', styles.tagline)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary margin-right--sm"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--outline margin-left--sm"
            to="/docs/intro">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageExamples />
      </main>
    </Layout>
  );
}
