import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { tagContent, tagLink, tagRootLocation } from "@objectiv/tracker-browser";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Link from "@docusaurus/Link";
import React from 'react';
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {url, tagline, customFields} = context.siteConfig;

  return (
    <div {...tagRootLocation({id: 'page-home'})}>
      <Layout
        title=''
        description={tagline}
        >
        
        <header 
          className={clsx('hero hero--primary', styles.heroBanner)}
          {...tagContent({id: 'header'})}
        >
          <div className={clsx('container', styles.heroContainer)}>
            <img
              className={clsx(styles.heroImage)}
              src={useBaseUrl("img/header-image.svg")}
              alt="Product Analytics Pipeline" />
            <h1 className={clsx(styles.heroTitle)}>
              Open-source <br /> product analytics <br /> built for data science
            </h1>
            <div className={clsx(styles.heroRepoButton)}>
              <Link 
                to="https://github.com/objectiv/objectiv-analytics" 
                {...tagLink({
                    id: 'cta-repo-button', 
                    href: 'https://github.com/objectiv/objectiv-analytics', 
                    options: {
                      trackClicks: {
                        waitUntilTracked: true
                      }
                    }
                  }
                )}
                target="_self" 
                className={clsx("button", styles.ctaButton)}>
                <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")}  alt={'Objectiv on GitHub'}/></span>
                Objectiv on GitHub
              </Link> 
            </div>
          </div>
        </header>

        <main 
          {...tagContent({id: 'main'})}
          className={clsx('body-large')}>

          <div className={clsx(styles.pageSectionBlue)}>

            <div 
              {...tagContent({id: 'intro'})}
              className={clsx("container", styles.contentContainer, styles.intro)}>
              <h2>Collect exceptionally high quality user behavior data &amp; <br />
                explore it effectively with reusable, composable model stacks.</h2>
              <p>Objectiv enables <strong>small data science teams</strong> to drive <strong>big product 
                decisions</strong>.</p>
            </div>

            <div 
              {...tagContent({id: 'product-intro'})}
              className={clsx("container", styles.contentContainer, styles.productIntro)}>

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
                <Link 
                  to={useBaseUrl("/how-it-works")}
                  {...tagLink({
                      id: 'cta-how-it-works', 
                      href: '/how-it-works',
                    }
                  )}
                  target="_self" 
                  className={clsx("button", styles.ctaButton)}>
                  Find out how it works
                </Link>
              </div>

            </div>
          </div>

          <div className={clsx(styles.pageSection, styles.pageSectionLightBlue, styles.quickStart)}>
            <div 
              {...tagContent({id: 'whats-in-the-box'})}
              className={clsx("container", styles.contentContainer, styles.pageSectionIntro)}>
                
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

                  <Link 
                    to={useBaseUrl(url + "/docs/quickstart-guide/")}
                    {...tagLink({
                        id: 'cta-docs-quickstart-guide', 
                        href: '/docs/quickstart-guide/',
                      }
                    )}
                    target="_self" 
                    className={clsx("button", styles.ctaButton)}>
                    <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  alt={'Objectiv Quickstart Guide'}/></span>
                    Objectiv Quickstart Guide
                  </Link>
                  
                  <img 
                    src={useBaseUrl("img/solution-takes-less-than-5-minutes.svg")} 
                    className={clsx(styles.takesLessThan5Minutes)}
                    alt="Takes less than 5 minutes" />
                </div>
              </div>
            </div>
          </div>          

          <footer>
            <div className={clsx("container", styles.contentContainer)}>
              <h2>Objectiv is open source and we’re building it in public.</h2>
              <p>Have opinions on where we should take this or want to stay in the loop?</p>
              <Link
                to={customFields.slackJoinLink as string}
                {...tagLink({
                    id: 'join-slack', 
                    href: customFields.slackJoinLink as string,
                    options: {
                      trackClicks: {
                        waitUntilTracked: true
                      }
                    }
                  }
                )}
                className={clsx("button", styles.ctaButton)}>
                  <span><img src={useBaseUrl("img/icons/icon-slack.svg")}  alt={'Join us on Slack'}/></span>
                  Join us on Slack
                </Link>
            </div>
          </footer>

        </main>
      </Layout>
    </div>
  );
}
