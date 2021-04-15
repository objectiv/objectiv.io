import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconHeader from '@site/src/components/icon-header';
import GitHubButton from 'react-github-btn'
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}> {/*Description will go into a meta tag in <head />*/}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.heroContainer)}>
          <img 
            className={clsx(styles.heroImage)}
            src={useBaseUrl("img/header-image.svg")}
            alt="Product Analytics Pipeline" />
          <h1 className={clsx(styles.heroTitle)}>
            We're building a <br />product analytics pipeline for effective, reusable modelling
          </h1>
          <p className={clsx(styles.heroSubTitle)}>
            Collect high quality data with a standardized taxonomy.<br />
            Take, build on and run advanced models off the shelf.
          </p>
 
          <GitHubButton 
            href={"https://github.com/" + siteConfig.organizationName}
            data-size="large" 
            data-show-count="false" 
            aria-label={"Follow @" + siteConfig.organizationName + " on GitHub"}>
              View GitHub
          </GitHubButton>
        </div>
      </header>
      <main>
        <div className={clsx(styles.pageSection,styles.pageSectionPink)}>
          <div className={clsx("container", styles.contentContainer)}>
            <IconHeader 
              title="A Data-Science First Approach" 
              iconName="data-scientist">
            </IconHeader>
            <p>If you’re a data scientist and have ever developed models on existing product analytics data, you’ve probably ran into the same problems we did: the data is incomplete, lacks context and needs a lot of work to become usable, if you get there at all. We believe the main cause of this is that tracking instrumentation is not built with the data scientist in mind.</p>
            <p>We decided to build a product analytics pipeline that puts data-science first. With tracking instrumentation that ensures you collect data that you can slice and dice in any way you want. With a standardized taxonomy that enables you to take, build on and run advanced models off the shelf.</p>
          </div>
        </div>

        <div className={clsx(styles.pageSection,styles.pageSectionGreen)}>
          <div className={clsx("container", styles.contentContainer)}>
            <IconHeader 
              title="Collect well-structured, high-quality data" 
              subTitle="Tracking"
              iconName="diamond">
            </IconHeader>
            <p>In order to get the best possible data right at the beginning of the pipeline, Our tracker comes with a standardized event taxonomy. It consists of predefined properties for each common event type and carries the analysis requirements for effective modeling on the data science side.</p>
            <p>The taxonomy enables validation through the pipeline and is extensible to allow your not-so-typical events to be tracked as well. It is consistent by nature, making your tracking instrumentation less prone to errors when your product changes over time. Tools that enable you to easily set up and test your instrumentation are included.</p>
          </div>
        </div>

        <div className={clsx(styles.pageSection,styles.pageSectionPurple)}>
          <div className={clsx("container", styles.contentContainer)}>
            <IconHeader 
              title="Identify events with locations &amp; contexts" 
              subTitle="Modeling &amp; Analysis"
              iconName="bulls-eye">
            </IconHeader>
            <p>Events tracked with objectiv carry enough context to be uniquely identified, while you still maintain the ability to easily aggregate events based on shared properties. It embeds everything that’s relevant to the class of event and includes the exact location in the UI from which it was triggered.</p>
            <IconHeader 
              title="Slice and dice however you want"
              iconName="slice-dice">
            </IconHeader>
            <p>The use of our standardized taxonomy means that all events belong to a class. This enables a level of modeling that normally is only available to those who built their own taxonomy from scratch. You can aggregate your data on a very granular level without doing any gruntwork. The classes enable you to build effective, reusable models for specific parts of your product.</p>
            <IconHeader 
              title="Take, build on, and run models off the shelf"
              iconName="lego">
            </IconHeader>
            <p>We ultimately want to enable the data science community to improve the taxonomy and models they (and we) are using. Our latest build includes a set of models for common goals (increasing conversion, engagement, retention) that you can take and build on to hit the ground running.</p>
          </div>
        </div>

        <div className={clsx(styles.pageSection, styles.pageSectionYellow, styles.pageSectionNoSubHeader)}>
          <div className={clsx("container", styles.contentContainer)}>
            <IconHeader 
              title="Try the latest build"
              iconName="tools">
            </IconHeader>
            <p>Our initial release includes:</p>
            <ul>
              <li>A tracker for web &amp; native platforms with a standardized event taxonomy</li>
              <li>Tools to support front-end instrumentation &amp; maintenance</li>
              <li>Data vs taxonomy validation at runtime and in back-end</li>
              <li>Python &amp; Postgres backend to process, enrich and report data</li>
              <li>Notebook tooling to effectively explore data &amp; build models</li>
              <li>Building blocks and templates for common models</li>
            </ul>
            <GitHubButton 
              href={"https://github.com/" + siteConfig.organizationName}
              data-size="large" 
              data-show-count="false" 
              aria-label={"Follow @" + siteConfig.organizationName + " on GitHub"}>
                View source on GitHub
            </GitHubButton>
          </div>
        </div>
      </main>
    </Layout>
  );
}
