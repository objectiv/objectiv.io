import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconHeader from '@site/src/components/icon-header';
import styles from './styles.module.css';

const contributors = [
  {
    name: 'Michael Niblett',
    contributorImage: 'mike.svg',
    gitHubUsername: 'mniblett',
  },
  {
    name: 'Michael Niblett',
    contributorImage: 'mike.svg',
    gitHubUsername: 'mniblett',
  },
  {
    name: 'Michael Niblett',
    contributorImage: 'mike.svg',
    gitHubUsername: 'mniblett',
  },
  {
    name: 'Michael Niblett',
    contributorImage: 'mike.svg',
    gitHubUsername: 'mniblett',
  },
  {
    name: 'Michael Niblett',
    contributorImage: 'mike.svg',
    gitHubUsername: 'mniblett',
  },
  {
    name: 'Michael Niblett',
    contributorImage: 'mike.svg',
    gitHubUsername: 'mniblett',
  },
];

function Contributor({name, contributorImage, gitHubUsername}) {
  const imgUrl = useBaseUrl('img/contributors/' + contributorImage);
  return (
    <div className={clsx("card", styles.contributorCard)}>
      <div class="card__header">
        <div class="avatar">
          <img
            class="avatar__photo"
            src={imgUrl}
          />
          <div class="avatar__intro">
            <h4 class="avatar__name">{name}</h4>
            <small class="avatar__subtitle">
              @{gitHubUsername}
            </small>
          </div>
        </div>
      </div>
      <div class="card__footer">
        @{gitHubUsername}
      </div>
    </div>
  );
}

export default function AboutUs() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}> {/*Description will go into a meta tag in <head />*/}
      <header className={clsx('hero hero--primary', styles.aboutUsBanner)}>
        <div className={clsx('container', styles.contentContainer)}>
          <h1 className={clsx(styles.pageTitle)}>About Us</h1>
          <img
            src={useBaseUrl("img/icons/icon-database.svg")}
            alt="Database icon" />
          <h4 className={clsx(styles.aboutUsHeading4)}>
            We needed better data
          </h4>
          <p className={clsx('body-large')}>
            Objectiv started as a product analytics suite for enterprise that ran models on existing product analytics data (Google analytics, Adobe Analytics, Mixpanel, etc.). We found out that for the modeling that we wanted to do, we needed significantly better data. 
          </p>
          <p className={clsx('body-large')}>
            Early 2021, we pivoted and started building an open-source product analytics pipeline that puts the data scientist first. With tracking instrumentation that ensures you collect data that you can slice and dice in any way you want. With a standardized taxonomy that enables you to take, build on and run advanced models off the shelf.  
          </p>
        </div>
      </header>
      <main className={clsx(styles.aboutUsMain)}>
        <div className={clsx(styles.aboutUsPageSection, styles.pageSectionYellow)}>
          <div className={clsx("container", styles.contentContainer)}>
            <IconHeader 
              title="Contributors"
              iconName="astronaut"
              description="Meet the core crew that’s building the pipeline.">
            </IconHeader>
            {contributors && contributors.length > 0 && (
              <div className={clsx(styles.contributorCards)}>
                {contributors.map((props, idx) => (
                  <Contributor key={idx} {...props} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
