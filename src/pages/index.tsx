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
              We're on a mission to create<br /> the ultimate workflow<br /> for data scientists
            </h1>
            <div className={clsx(styles.heroSubTitleWrapper)}>
              <p className={clsx(styles.heroSubTitle)}>
                Objectiv is a data collection &amp; modeling library that puts the data scientist first. <br />
              </p>
            </div>
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
            <div className={clsx(styles.heroOutro)}>
              Objectiv is open source and we’re building it in public.
            </div>
          </div>
        </header>

        <main 
          {...tagElement({id: 'main'})}
          className={clsx('body-large')}>

          <div className={clsx(styles.pageSection,styles.pageSectionBlue)}>
            <div 
              {...tagElement({id: 'intro'})}
              className={clsx("container", styles.intro)}>
              <h2 className={clsx(styles.introHeading)}>
                Objectiv proposes the adoption of an open, common taxonomy for analytics <br />
                to unify the way data scientists collect &amp; model data.
              </h2>
              <img 
                className={clsx(styles.introDiagram)}
                src={useBaseUrl("img/objectiv-open-taxonomy-for-analytics.svg")}
                alt="The open taxonomy for analytics" />
              {/* Show below diagram with larger font instead on smaller devices */}
              <img 
                className={clsx(styles.introDiagramLargeFont)}
                src={useBaseUrl("img/objectiv-open-taxonomy-for-analytics-large-font.svg")}
                alt="The open taxonomy for analytics" />
              <p>
                It enables a shared way to collect <strong>well-structured</strong>,&nbsp;
                <strong>pre-validated</strong> data that is ready to model on without significant gruntwork. 
                Models &amp; datasets become <strong>reusable</strong> and <strong>interchangeable</strong>, 
                enabling data scientists to build on knowledge &amp; practises of others.
              </p>
              <p className={clsx(styles.introTeaser)}>
                <img
                  className={clsx(styles.introCaretDown)}
                  src={useBaseUrl("img/caret-down.svg")}
                  alt="Down" />
                How it works
                <img
                  className={clsx(styles.introCaretDown)}
                  src={useBaseUrl("img/caret-down.svg")}
                  alt="Down" />
              </p>
            </div>
          </div>

          <div className={clsx(styles.pageSection)}>
            <div 
              {...tagElement({id: 'taxonomy'})}
              className={clsx("container", styles.contentContainer, styles.solutions, styles.mapToTaxonomy)}>
              <div className={clsx(styles.solutionTitle)}>
                <div>1.</div>
                <div>Map your application to the open taxonomy</div>
              </div>
              <div className={clsx(styles.solutionRowLeft)}>
                <div>
                  <p>
                    <strong><em>The open taxonomy of analytics</em></strong> is our proposal for a common 
                    way to collect, structure and validate data.
                  </p>
                  <p>It defines <strong>classes for each common event type</strong> and the contexts in which 
                    they can happen. It describes their properties, requirements and their relationships with 
                    other classes.</p>
                </div>
                <div>
                  <img
                    src={useBaseUrl("img/solution-taxonomy-hierarchy.svg")}
                    alt="A class for each event type" />
                </div>
              </div>
              <div className={clsx(styles.solutionRowRight)}>
                <div>
                  <img
                      src={useBaseUrl("img/solution-taxonomy-mapping.svg")}
                      alt="Map your application to the open taxonomy" />
                </div>
                <div>
                  <p>With Objectiv, you <strong>map your application to this taxonomy</strong>, creating a 
                    contextual layer that's used for data collection &amp; validation.
                  </p>
                  <p>In most cases you can <strong>skip the discussion on what to track</strong>, because the 
                    taxonomy is designed to ensure the collected data covers a wide range of common analytics 
                    use cases. 
                  </p>
                  <div className={clsx(styles.solutionRowCta)}>
                    <Link 
                      to={useBaseUrl(url + "/docs/taxonomy/")}
                      {...tagLink({
                          id: 'cta-docs-taxonomy', 
                          href: '/docs/taxonomy/',
                          text: 'Docs - Taxonomy',
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
                      Docs - Taxonomy
                    </Link>
                  </div>
                </div>
              </div>
              <p className={clsx(styles.footnote)}>
                The initial version of the taxonomy is built for product analytics. We have plans to support other fields as well.
              </p>
            </div>
          </div>

          <div className={clsx(styles.pageSection, styles.pageSectionLightBlue)}>
            <div 
              {...tagElement({id: 'tracking'})}
              className={clsx("container", styles.contentContainer, styles.solutions)}>
              <div className={clsx(styles.solutionTitle)}>
                <div>2.</div>
                <div>Debug your instrumentation on the fly</div>
              </div>

              <div className={clsx(styles.solutionRowLeft)}>
                <div>
                  <p>Objectiv comes with a set of tools that help you set up error-free tracking 
                    instrumentation.</p>
                  <p>For instance, you can <strong>validate your instrumentation against the 
                    taxonomy</strong> and get live feedback in your IDE and console while developing, enabling 
                    you to catch errors before data starts flowing in.</p>
                  <div className={clsx(styles.solutionRowCta)}>
                    <Link 
                      to={useBaseUrl(url + "/docs/tracking/")}
                      {...tagLink({
                          id: 'cta-docs-tracking', 
                          href: '/docs/tracking/', 
                          text: 'Docs - Tracking',
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
                      Docs - Tracking
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src={useBaseUrl("img/solution-tracking.svg")}
                    alt="Live debugging feedback on your instrumentation" />
                </div>
              </div>
            </div>
          </div>

          <div className={clsx(styles.pageSection, styles.pageSection)}>
            <div 
              {...tagElement({id: 'location-stack'})}
              className={clsx("container", styles.contentContainer, styles.solutions)}>
              <div className={clsx(styles.solutionTitle)}>
                <div>3.</div>
                <div>Collect rich &amp; descriptive data that’s ready for modeling</div>
              </div>

              <div className={clsx(styles.solutionRowRight)}>
                <div>
                  <img
                    src={useBaseUrl("img/solution-location-stack.svg")}
                    alt="Validated, rich, descriptive + well-structured" />
                </div>
                <div>
                  <p>Objectiv’s tracker collects data that is unusually rich. Events can carry multiple 
                    contexts, including the <strong>exact location in the UI</strong> from where they were 
                    triggered.</p>
                  <p>All data is <strong>well-structured, self-descriptive</strong> and has 
                    been <strong>validated</strong> at the first step of the pipeline, so you can use it for 
                    modeling with minimal additional gruntwork.</p>
                  <div className={clsx(styles.solutionRowCta)}>
                    <Link 
                      to={useBaseUrl(url + "/docs/tracking/core-concepts/locations")} 
                      {...tagLink({
                          id: 'cta-docs-location-stack', 
                          href: '/docs/taxonomy', 
                          text: 'Docs - Location Stack',
                          options: {
                            trackClicks: {
                              waitUntilTracked: true
                            }
                          }
                        })
                      }
                      target="_self" 
                      className={clsx("button", styles.ctaButton)}>
                      <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")} /></span>
                      Docs - Location Stack
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx(styles.pageSection, styles.pageSectionLightBlue)}>
            <div 
              {...tagElement({id: 'modeling'})}
              className={clsx("container", styles.contentContainer, styles.solutions)}>
              <div className={clsx(styles.solutionTitle)}>
                <div>4.</div>
                <div>Use Pandas-like operations on your full data set</div>
              </div>

              <div className={clsx(styles.solutionRowLeft)}>
                <div>
                  <p>Objectiv features an SQL abstraction layer for modeling that enables you to 
                    use <strong>familiar dataframe operations</strong> on your <strong>full data set</strong>, 
                    straight from your notebook.</p>
                  <p>You can <strong>output your models to SQL queries with a single command</strong>, 
                    effectively closing the gap between experimentation and production.</p>
                  <div className={clsx(styles.solutionRowCta)}>
                    <Link 
                      to="https://notebook.objectiv.io/lab?path=product_analytics.ipynb" 
                      {...tagLink({
                          id: 'demo-notebook', 
                          href: 'https://notebook.objectiv.io/lab?path=product_analytics.ipynb', 
                          text: 'Live Demo Notebook',
                          options: {
                            trackClicks: {
                              waitUntilTracked: true
                            }
                          }
                        }
                      )}
                      target="_self" 
                      className={clsx("button", styles.ctaButton)}>
                      <span><img src={useBaseUrl("img/icons/icon-jupyter-notebook.svg")} /></span>
                      Live Demo Notebook
                    </Link>
                    <img
                      src={useBaseUrl("img/try-it-here.svg")}
                      className={clsx(styles.tryItHere)}
                      alt="Try it here" />
                  </div>
                </div>
                <div>
                  <img
                    src={useBaseUrl("img/solution-modeling.svg")}
                    alt="Talk Pandas, get SQL" />
                </div>
              </div>
            </div>
          </div>

          <div className={clsx(styles.pageSection, styles.pageSection)}>
            <div 
              {...tagElement({id: 'reuse-models'})}
              className={clsx("container", styles.contentContainer, styles.solutions)}>
              <div className={clsx(styles.solutionTitle)}>
                <div>5.</div>
                <div>Reuse parts of any model</div>
              </div>

              <div className={clsx(styles.solutionRowRight)}>
                <div>
                  <img
                    src={useBaseUrl("img/solution-reuse.svg")}
                    alt="Quickly build models by reusing what others have made" />
                </div>
                <div>
                  <p>By embracing the open taxonomy, you can <strong>reuse your own models</strong> for other 
                    projects and <strong>quickly build models</strong> reusing parts of others.</p>
                  <p>That retention model you’ve built for your campaign site? You can likely reuse that for 
                    your main site by changing a single line of code.</p>
                  <div className={clsx(styles.solutionRowCta)}>
                    <Link 
                      to={useBaseUrl(url + "/docs/modeling/")} 
                      {...tagLink({
                          id: 'cta-docs-reuse', 
                          href: '/docs/modeling/', 
                          text: 'Docs - Modeling',
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
                      Docs - Modeling
                    </Link>
                  </div>
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
