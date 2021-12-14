import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { tagElement, tagLink } from "@objectiv/tracker-browser";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Link from "@docusaurus/Link";
import React from 'react';
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {url, tagline, customFields} = context.siteConfig;

  return (
    <div {...tagElement({id: 'page-home'})}>
      <Layout
        title=''
        description={tagline}
        >
        
        <header 
          className={clsx('hero hero--primary', styles.heroBanner)}
          {...tagElement({id: 'header'})}
        >
          <div className={clsx('container', styles.heroContainer)}>
            <img
              className={clsx(styles.heroImage)}
              src={useBaseUrl("img/header-image.svg")}
              alt="Product Analytics Pipeline" />
            <h1 className={clsx(styles.heroTitle)}>
              An open-source product <br />analytics pipeline for <br />reusable modeling
            </h1>
            <div className={clsx(styles.heroRepoButton)}>
              <Link 
                to="https://github.com/objectiv/objectiv-analytics" 
                {...tagLink({
                    id: 'cta-repo-button', 
                    href: 'https://github.com/objectiv/objectiv-analytics', 
                    text: 'Objectiv on GitHub',
                    options: {
                      trackClicks: {
                        waitUntilTracked: true
                      }
                    }
                  }
                )}
                target="_self" 
                className={clsx("button", styles.ctaButton)}>
                <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")} /></span>
                Objectiv on GitHub
              </Link> 
            </div>
          </div>
        </header>

        <main 
          {...tagElement({id: 'main'})}
          className={clsx('body-large')}>

          <div className={clsx(styles.pageSectionBlue)}>

            <div 
              {...tagElement({id: 'intro'})}
              className={clsx("container", styles.contentContainer, styles.solutions, styles.intro)}>
              <h2>Objectiv enables small data science teams <br /> 
              to make big business impact.</h2>
              <p>Take, stack and run pre-built data models off the shelf to quickly build<br />
              highly specific model stacks for in-depth product analysis and exploration.</p>
            </div>

            <div 
              {...tagElement({id: 'collect'})}
              className={clsx("container", styles.contentContainer, styles.solutions, styles.collect)}>
              <div className={clsx(styles.solutionRowRight)}>
                <div>
                  <img
                    src={useBaseUrl("img/solution-collect.svg")}
                    alt="Collect clean, consistent, and well-structured data" />
                </div>
                <div>
                  <div className={clsx(styles.solutionTitle)}>
                    <div>1.</div>
                    <div>Collect consistent, model-ready data</div>
                  </div>
                  <p>While most trackers simply track everything by inserting a simple script, the data they 
                    collect typically requires significant gruntwork before it can be used for modeling.</p>
                  <p>Objectiv's tracker <strong>validates</strong> all collected data against an <strong>open 
                    analytics taxonomy</strong>. This ensures it is clean, consistent and structured with 
                    effective modeling in mind.</p>
                </div>
              </div>
            </div>

            <div 
              {...tagElement({id: 'open-model-hub'})}
              className={clsx("container", styles.contentContainer, styles.solutions, styles.openModelHub)}>
              <div className={clsx(styles.solutionRowLeft)}>
                <div>
                  <div className={clsx(styles.solutionTitle)}>
                    <div>2.</div>
                    <div>Take pre-built data models off the shelf</div>
                  </div>
                  <p>Datasets that have been validated against the open analytics taxonomy can be used by any 
                    model from an <strong>open model hub</strong> without transformation.</p>
                  <p>The open model hub includes a growing collection of pre-built data models that cover a 
                    wide range of common product analytics use cases.</p>
                </div>
                <div>
                  <img
                    src={useBaseUrl("img/solution-open-model-hub.svg")}
                    alt="Open Model Hub" />
                </div>
              </div>
            </div>

            <div 
              {...tagElement({id: 'modeling'})}
              className={clsx("container", styles.contentContainer, styles.solutions, styles.modeling)}>
              <div className={clsx(styles.solutionRowRight)}>
                <div>
                  <img
                    src={useBaseUrl("img/solution-modeling-stack-customize.svg")}
                    alt="Stack, run, and customize models" />
                </div>
                <div>
                  <div className={clsx(styles.solutionTitle)}>
                    <div>3.</div>
                    <div>Stack and run them</div>
                  </div>
                  <p>Models from the open model hub are <strong>stackable</strong>. You can combine a number 
                  of base models to quickly answer common BI questions, or to build highly specific model 
                  stacks for in-depth product analysis and exploration.</p>

                  <div className={clsx(styles.solutionTitle)}>
                    <div>4.</div>
                    <div>Customize them to make them your own</div>
                  </div>
                  <p>The source is available for all models and you're free to make any changes. You can use 
                    the included pandas-compatible <strong>Objectiv Bach</strong> modeling library to 
                    customize them or even add in advanced ML models.</p>
                </div>
              </div>
            </div>

            <div 
              {...tagElement({id: 'visualize'})}
              className={clsx("container", styles.contentContainer, styles.solutions, styles.visualize)}>
              <div className={clsx(styles.solutionRowLeft)}>
                <div>
                  <div className={clsx(styles.solutionTitle)}>
                    <div>5.</div>
                    <div>Visualize your insights with one command</div>
                  </div>
                  <p>Happy with your findings? You can output your data to a number of <strong>pre-built 
                    visualizations</strong> in Metabase with a single command.</p>
                </div>
                <div>
                  <img
                    src={useBaseUrl("img/solution-visualization.svg")}
                    alt="Visualization" />
                </div>
              </div>
            </div>

            <div
              {...tagElement({id: 'check-out-models'})}
              className={clsx("container", styles.contentContainer, styles.solutions, styles.checkOutModels)}>
              <h2>Check out the available data models</h2>
              <p>As we've just released the open model hub, it contains an initial set of models. It is our 
                goal to further expand the collection to include models for all common product analytics use 
                cases.</p>
                <Link 
                  to={useBaseUrl(url + "/docs/open-model-hub/")}
                  {...tagLink({
                      id: 'cta-docs-open-model-hub', 
                      href: '/docs/open-model-hub/',
                      text: 'Docs - Open Model Hub',
                      options: {
                        trackClicks: {
                          waitUntilTracked: true
                        }
                      }
                    }
                  )}
                  target="_self" 
                  className={clsx("button", styles.ctaButton)}>
                  <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")} /></span>
                  Docs - Open Model Hub
              </Link>
            </div>


          </div>

          <div className={clsx(styles.pageSection)}>
            <div 
              {...tagElement({id: 'whats-in-the-box'})}
              className={clsx("container", styles.contentContainer, styles.whatsInTheBox)}>
                
              <div className={clsx(styles.inTheBoxHeader)}>
                <h2>What's in the box?</h2>
                <p>Objectiv has everything you need to set up an open-source product analytics pipeline for 
                  reusable modeling.</p>
              </div>
              
              <div className={clsx(styles.inTheBoxComponents)}>
                <div className={clsx(styles.inTheBoxComponent)}>
                  <img
                    src={useBaseUrl("img/icons/icon-jupyter-notebooks.svg")}
                    alt="Jupyter Notebook" />
                  <div>
                    <strong>All models from the open model hub</strong><br />
                    A collection of ready-to-use, pre-built models that cover a wide range of common 
                    product analytics use cases.
                  </div>
                </div>
                <div className={clsx(styles.inTheBoxComponent)}>
                  <img
                    src={useBaseUrl("img/icons/icon-taxonomy-sitemap.svg")}
                    alt="Taxonomy" />
                  <div>
                    <strong>The open analytics taxonomy</strong><br />
                    Our proposal for a common set of strict rules on how to collect, structure and validate 
                    data.
                  </div>
                </div>
                <div className={clsx(styles.inTheBoxComponent)}>
                  <img
                    src={useBaseUrl("img/icons/icon-tracker.svg")}
                    alt="Objectiv Tracker" />
                  <div>
                    <strong>The Objectiv Tracker</strong><br />
                    A fully debuggable analytics tracker for various devices/frameworks. Embraces the open 
                    analytics taxonomy. 
                  </div>
                </div>
                <div className={clsx(styles.inTheBoxComponent)}>
                  <img
                    src={useBaseUrl("img/icons/icon-collector.svg")}
                    alt="Objectiv Collector" />
                  <div>
                    <strong>The Objectiv Collector</strong><br />
                    Provides an API and storage connectors for receiving, validating, and storing Events.
                  </div>
                </div>
                <div className={clsx(styles.inTheBoxComponent)}>
                  <img
                    src={useBaseUrl("img/icons/icon-bach-sunglasses.svg")}
                    alt="Bach" />
                  <div>
                    <strong>Objectiv Bach modeling library</strong><br />
                    Use pandas-like dataframe operations on your full SQL dataset &amp; model on all 
                    dimensions of the open taxonomy.
                  </div>
                </div>
                <div className={clsx(styles.inTheBoxComponent)}>
                  <img
                    src={useBaseUrl("img/icons/icon-data-store.svg")}
                    alt="Data Store" />
                  <div>
                    <strong>A PostgreSQL data store</strong><br />
                    Used by the collector to store the validated event data.
                    <img 
                      src={useBaseUrl("img/solution-data-store-coming-soon.svg")}
                      alt="Coming soon"
                      className={clsx(styles.dataStoreComingSoon)} />
                  </div>
                </div>
              </div>

              <div className={clsx(styles.inTheBoxFooter)}>
                <p>Open-Source. Future-proof. Free to use. No vendor lock-in. First party data.</p>
                <div>
                  <Link 
                    to="https://github.com/objectiv/objectiv-analytics" 
                    {...tagLink({
                        id: 'cta-repo-button', 
                        href: 'https://github.com/objectiv/objectiv-analytics',
                        text: 'Get Objectiv on GitHub',
                        options: {
                          trackClicks: {
                            waitUntilTracked: true
                          }
                        }
                      }
                    )}
                    target="_self" 
                    className={clsx("button", styles.ctaButton)}>
                    <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")} /></span>
                    Get Objectiv on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>          

          <footer>
            <div className={clsx("container", styles.contentContainer)}>
              <h2>Objectiv is open source and we’re building it in public.</h2>
              <p>Have opinions on where we should take this or want to stay in the loop?</p>
              <Link
                to={customFields.slackJoinLink}
                {...tagLink({
                    id: 'join-slack', 
                    href: customFields.slackJoinLink,
                    text: 'Join us on Slack',
                    options: {
                      trackClicks: {
                        waitUntilTracked: true
                      }
                    }
                  }
                )}
                className={clsx("button", styles.ctaButton)}>
                  <span><img src={useBaseUrl("img/icons/icon-slack.svg")} /></span>
                  Join us on Slack
                </Link>
            </div>
          </footer>

        </main>
      </Layout>
    </div>
  );
}
