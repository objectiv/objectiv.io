import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import AnnouncementBar from '../components/announcement-bar'
import KeepMePosted from '../components/keep-me-posted'
import styles from './styles.module.css';
import { trackElement, trackLink } from "@objectiv/tracker-browser";

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const customFields = siteConfig.customFields;

  return (
    <Layout
      title=''
      description={siteConfig.tagline}> {/*Description will go into a meta tag in <head />*/}
      <AnnouncementBar 
        title="We're Hiring!"
        content="Join our mission crew as a Senior Data Engineer."
        ctaLink='/jobs'
        ctaText='Check the vacancy'
      >
      </AnnouncementBar>
      <header 
        className={clsx('hero hero--primary', styles.heroBanner)}
        {...trackElement({id: 'header'})}
      >
        <div className={clsx('container', styles.heroContainer)}>
          <img
            className={clsx(styles.heroImage)}
            src={useBaseUrl("img/header-image.svg")}
            alt="Product Analytics Pipeline" />
          <h1 className={clsx(styles.heroTitle)}>
            We're on a mission to create<br /> the ultimate iterative workflow<br /> for data scientists
          </h1>
          <p className={clsx(styles.heroSubTitle)}>
            what we’re currently working on:
          </p>
          <div className={clsx(styles.heroUsps)}>
            <div>
              <img
                className={clsx(styles.heroUspsIcon)}
                src={useBaseUrl("img/icons/icon-taxonomy.svg")}
                alt="Taxonomy" /><br />
              <strong>A common taxonomy for analytics</strong><br />
              so models can be shared, <br />
              reused, stacked and interchanged.
              <div className={clsx(styles.heroUspsArrowUp)}>
                <img
                  src={useBaseUrl("img/usp-arrow-up.svg")}
                  alt="to" />
              </div>
            </div>
            <div>
              <img
                className={clsx(styles.heroUspsIcon)}
                src={useBaseUrl("img/icons/icon-debug.svg")}
                alt="Debugging" /><br />
              <strong>Debuggable tracking instrumentation</strong><br />
              to ensure clean, model-ready data <br />
              is being collected at entry point
              <div className={clsx(styles.heroUspsArrowDown)}>
                <img
                  src={useBaseUrl("img/usp-arrow-down.svg")}
                  alt="to" />
              </div>
            </div>
            <div>
            <img
                className={clsx(styles.heroUspsIcon)}
                src={useBaseUrl("img/icons/icon-modeling-workflow.svg")}
                alt="Workflow" /><br />
              <strong>An iterative modeling workflow</strong><br />
              that closes the gap between <br />
              experimentation and production
            </div>
          </div>
          <div className={clsx(styles.heroOutro)}>
            Objectiv is open source and we’re building it in public. Check out&nbsp; 
            <Link 
              to="https://github.com/objectiv/"
              {...trackLink({id: 'repo', href: 'https://github.com/objectiv/', text: 'GitHub'})}
            >
              GitHub
            </Link> for the latest release, or join our&nbsp;
            <Link 
              to={customFields.slackJoinLink}
              {...trackLink({id: 'slack', href: customFields.slackJoinLink, text: 'Slack channel'})}
            >
              Slack channel
            </Link> to stay in the loop.
          </div>
        </div>
      </header>

      <main 
        className={clsx('body-large')}
        {...trackElement({id: 'main'})}
      >
        <div 
          className={clsx(styles.pageSection,styles.pageSectionBlue)}
          {...trackElement({id: 'intro'})}
        >
          <div className={clsx("container", styles.intro)}>
            <img
              className={clsx(styles.introTitleIcon)}
              src={useBaseUrl("img/icons/icon-data-scientist-thinking.svg")}
              alt="Data Scientist thinking..." /><br />
            <h2>
              Data teams often have very similar goals, <br />
              yet their analytics data and models all look different...
            </h2>
            <p>
              There is no common way to do data science. There are plenty of great purpose-built analytics 
              tools, but teams are still on their own when it comes to defining how to structure, collect, 
              groom and model data. This leads to the creation of lots of proprietary taxonomies &amp; models 
              that all have the same intent.
            </p>
            <p className={clsx(styles.introTeaser)}>
              <img
                className={clsx(styles.introCaretDown)}
                src={useBaseUrl("img/caret-down.svg")}
                alt="Down" />
              Find out what we want to do about it
              <img
                className={clsx(styles.introCaretDown)}
                src={useBaseUrl("img/caret-down.svg")}
                alt="Down" />
            </p>
          </div>
        </div>

        <div 
          className={clsx(styles.pageSection)}
          {...trackElement({id: 'solution-taxonomy'})}
        >
          <div className={clsx("container", styles.contentContainer)}>
            <div className={clsx(styles.solutionTitle)}>
              <div>1.</div>
              <div>
                A common taxonomy for analytics so models <br />
                can be shared, reused, stacked and interchanged.
              </div>
            </div>
            <p>
              Models are often still built from scratch. Someone in your field has probably already written 
              a very similar analysis because their goals are similar. Teams keep reinventing the same wheel 
              because there is no common way to structure and model data, leading to isolated knowledge and 
              no meaningful way for data scientists to collaborate.
            </p>
            <img className={clsx(styles.solutionDiagram)}
                src={useBaseUrl("img/solution-taxonomy.svg")}
                alt="Solution Diagram: Taxonomy" />
            <p>
              We strive for the adoption of an open standard taxonomy for analytics that enables models to be 
              shared, reused, stacked and interchanged. Check out our repo to learn more.
            </p>
            <Link 
              to="https://github.com/objectiv/objectiv-analytics" 
              className={clsx("button", styles.ctaButton)}
              {...trackLink({id: 'github-taxonomy', href: 'https://github.com/objectiv/objectiv-analytics', 
                text: 'Taxonomy - Objectiv on GitHub'})}
            >
              <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")} /></span>
              Taxonomy - Objectiv on GitHub
            </Link>
          </div>
        </div>

        <div 
          className={clsx(styles.pageSection, styles.pageSectionLightBlue)}
          {...trackElement({id: 'solution-tracking'})}
        >
          <div className={clsx("container", styles.contentContainer)}>
            <div className={clsx(styles.solutionTitle)}>
              <div>2.</div>
              <div>
                Debuggable tracking instrumentation to ensure clean, <br />
                model-ready data is being collected at entry point
              </div>
            </div>
            <p>
              The typical workflow of a data scientist involves a significant amount of cleaning and QC 
              before they can start modeling. We believe the root cause of this to be the lack of support 
              software engineers get when instrumenting analytics tracking. Current trackers are not designed 
              to collect data that you can effectively model on and data validation is often done at a stage 
              where problems are harder to fix.
            </p>
            <img className={clsx(styles.solutionDiagram)}
                src={useBaseUrl("img/solution-tracking.svg")}
                alt="Solution Diagram: Tracking" />
            <p>
              We’re working on debuggable tracking instrumentation that enables software engineers to collect
              clean, model-ready data with validation at the first stage of the pipeline.
            </p>
            <Link 
              to="https://github.com/objectiv/objectiv-analytics" 
              className={clsx("button", styles.ctaButton)}
              {...trackLink({id: 'github-tracking', href: 'https://github.com/objectiv/objectiv-analytics', 
                text: 'Tracking - Objectiv on GitHub'})}
            >
              <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")} /></span>
              Tracking - Objectiv on GitHub
            </Link>
          </div>
        </div>

        <div 
          className={clsx(styles.pageSection, styles.pageSection)}
          {...trackElement({id: 'solution-modeling'})}
        >
          <div className={clsx("container", styles.contentContainer)}>
            <div className={clsx(styles.solutionTitle)}>
              <div>3.</div>
              <div>
                An iterative modeling workflow that closes the <br />
                gap between experimentation and production
              </div>
            </div>
            <p>
              By the time data scientists have built their models to get the answers they were looking for, 
              a significant amount of work is often required to translate that newfound knowledge to something 
              that’s usable in production. Also, models that are being used in production can’t easily be used 
              as a starting point for experimentation.
            </p>
            <img className={clsx(styles.solutionDiagram)}
                src={useBaseUrl("img/solution-modeling.svg")}
                alt="Solution Diagram: Modeling" />
            <p>
              We want to close the gap between experimentation and production by enabling data scientists to 
              run experiments on the full data set straight from their notebooks.
            </p>
            <Link  
              to="https://github.com/objectiv/objectiv-analytics" 
              className={clsx("button", styles.ctaButton)}
              {...trackLink({id: 'github-modeling', href: 'https://github.com/objectiv/objectiv-analytics', 
                text: 'Modeling - Objectiv on GitHub'})}
            >
              <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")} /></span>
              Modeling - Objectiv on GitHub
            </Link>
          </div>
        </div>

        <footer {...trackElement({id: 'footer'})}>
          <div className={clsx("container", styles.contentContainer)}>
            <h2>Objectiv is open source and we’re building it in public.</h2>
            <p>Have opinions on where we should take this or want to stay in the loop?</p>
            <Link 
              to={customFields.slackJoinLink}
              className={clsx("button", styles.ctaButton)}
              {...trackLink({id: 'slack', href: customFields.slackJoinLink, text: 'Join us on Slack'})}
            >
              <span><img src={useBaseUrl("img/icons/icon-slack.svg")} /></span>
              Join us on Slack
            </Link>
          </div>
        </footer>

      </main>
    </Layout>
  );
}
