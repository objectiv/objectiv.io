import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import { TrackedDiv } from "../trackedComponents/TrackedDiv";
import { TrackedHeader } from "../trackedComponents/TrackedHeader";
import { TrackedMain } from "../trackedComponents/TrackedMain";
import { TrackedRootDiv } from "../trackedComponents/TrackedRootDiv";
import styles from './styles.module.css';
import { TrackedLink } from '../trackedComponents/TrackedLink';

export default function Home() {
  const context = useDocusaurusContext();
  const {url, tagline, customFields} = context.siteConfig;

  return (
    <TrackedRootDiv id={'page-home'}>
      <Layout
        title=''
        description={tagline}
        >
        
        <TrackedHeader className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className={clsx('container', styles.heroContainer)}>
            <img
              className={clsx(styles.heroImage)}
              src={useBaseUrl("img/header-image.svg")}
              alt="Product Analytics Pipeline" />
            <h1 className={clsx(styles.heroTitle)}>
              Open-source <br /> product analytics <br /> built for data science
            </h1>
            <div className={clsx(styles.heroRepoButton)}>
              <TrackedLink
                to="https://github.com/objectiv/objectiv-analytics"
                external={true}
                target="_self"
                className={clsx("button", styles.ctaButton)}
              >
                <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")}  alt={'Objectiv on GitHub'}/></span>
                Objectiv on GitHub
              </TrackedLink>
            </div>
          </div>
        </TrackedHeader>

        <TrackedMain className={clsx('body-large')}>

          <div className={clsx(styles.pageSectionBlue)}>

            <TrackedDiv id={'intro'} className={clsx("container", styles.contentContainer, styles.intro)}>
              <h2>Collect exceptionally high quality user behavior data &amp; <br />
                explore it effectively with reusable, composable model stacks.</h2>
              <p>Objectiv enables <strong>small data science teams</strong> to drive <strong>big product 
                decisions</strong>.</p>
            </TrackedDiv>

            <TrackedDiv
              id={'product-intro'}
              className={clsx("container", styles.contentContainer, styles.productIntro)}
            >

              <img 
                src={useBaseUrl("img/solution-full-flow.svg")} 
                className={clsx(styles.productFlow)}
                alt="Product flow" />
              <img 
                src={useBaseUrl("img/solution-full-flow-vertical.svg")} 
                className={clsx(styles.productFlowVertical)}
                alt="Product flow" />

              <div className={clsx(styles.twoColumnItems)}>
                <div className={clsx(styles.twoColumnItem)}>
                  <img
                    src={useBaseUrl("img/icons/icon-collector.svg")}
                    alt="Collector" />
                  <div>
                    <strong>Less gruntwork, more insights</strong><br />
                    Spend more time on the fun part: Strict validation at the first step of the pipeline 
                    ensures data is model-ready without the typical gruntwork.
                  </div>
                </div>
                <div className={clsx(styles.twoColumnItem)}>
                  <img
                    src={useBaseUrl("img/icons/icon-jupyter-notebooks.svg")}
                    alt="Jupyter Notebook" />
                  <div>
                    <strong>Pre-built models included</strong><br />
                    Don’t start from scratch: Take, stack, customize and run pre-built models that cover a 
                    wide range of common product analytics use cases.
                  </div>
                </div>
                <div className={clsx(styles.twoColumnItem)}>
                  <img
                    src={useBaseUrl("img/icons/icon-first-party-data.svg")}
                    alt="First-party data" />
                  <div>
                    <strong>Open source &amp; first party data</strong><br />
                    No fees, no lock-in: Objectiv is open source, well supported and all data is self-hosted, 
                    strictly first party and 100% under your own control.
                  </div>
                </div>
                <div className={clsx(styles.twoColumnItem)}>
                  <img
                    src={useBaseUrl("img/icons/icon-tracking-plan.svg")}
                    alt="No tracking plan" />
                  <div>
                    <strong>No tracking plan, no problem</strong><br />
                    Stop worrying about what data you may or may not need: By using Objectiv’s tracker, your 
                    dataset is compatible with all included and future models.
                  </div>
                </div>
              </div>

              <div className={clsx("container", styles.contentContainer, styles.pageSectionOutro)}>
                <TrackedLink
                  to={useBaseUrl("/how-it-works")}
                  external={true}
                  target="_self"
                  className={clsx("button", styles.ctaButton)}
                >
                  Find out how it works
                </TrackedLink>
              </div>

            </TrackedDiv>
          </div>

          <div className={clsx(styles.pageSection, styles.pageSectionLightBlue, styles.quickStart)}>
            <TrackedDiv
              id={'whats-in-the-box'}
              className={clsx("container", styles.contentContainer, styles.pageSectionIntro)}
            >
                
              <div className={clsx(styles.pageSectionIntro)}>
                <h2>Try the full Objectiv pipeline on your local machine</h2>
                <p>It comes with everything you need, including a copy of our website as a <strong>demo 
                  app</strong>, <br /> 
                  a <strong>notebook</strong> with working models and a <strong>Metabase</strong> environment 
                  to output data to.</p>
              </div>
              
              <img src={useBaseUrl("img/solution-screenshots.svg")} alt="Screenshots" />

              <div className={clsx(styles.pageSectionOutro)}>
                <p>Follow the <strong>Quickstart Guide</strong> to locally run the full Objectiv pipeline dockerized.</p>
                <div>

                  <TrackedLink
                    to={useBaseUrl(url + "/docs/quickstart-guide/")}
                    external={true}
                    target="_self"
                    className={clsx("button", styles.ctaButton)}
                  >
                    <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  alt={'Objectiv Quickstart Guide'}/></span>
                    Objectiv Quickstart Guide
                  </TrackedLink>
                  
                  <img 
                    src={useBaseUrl("img/solution-takes-less-than-5-minutes.svg")} 
                    className={clsx(styles.takesLessThan5Minutes)}
                    alt="Takes less than 5 minutes" />
                </div>
              </div>
            </TrackedDiv>
          </div>          

          <footer>
            <div className={clsx("container", styles.contentContainer)}>
              <h2>Objectiv is open source and we’re building it in public.</h2>
              <p>Have opinions on where we should take this or want to stay in the loop?</p>
              <TrackedLink
                to={customFields.slackJoinLink as string}
                external={true}
                className={clsx("button", styles.ctaButton)}
              >
                  <span><img src={useBaseUrl("img/icons/icon-slack.svg")}  alt={'Join us on Slack'}/></span>
                  Join us on Slack
                </TrackedLink>
            </div>
          </footer>

        </TrackedMain>
      </Layout>
    </TrackedRootDiv>
  );
}
