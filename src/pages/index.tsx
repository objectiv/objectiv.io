import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useRef } from 'react';
import GitHubStargazers from '../components/github-stargazers';
import StarUsNotification, { StarUsAnchor } from '../components/star-us';
import IconHeader from '../components/icon-header';
import { TrackedDiv, TrackedHeader } from "@objectiv/tracker-react";
import { TrackedLink } from '../objectiv/TrackedLink';
import styles from './styles.module.css';
import AnnouncementBar from '../components/announcement-bar';

export default function Home() {
  const context = useDocusaurusContext();
  const {tagline} = context.siteConfig;
  
  // reference for the 'star us' notification on top
  const starUsNotificationAnchorRef = useRef(null);
  
  return (
    <Layout
      title=' '
      description={tagline}>

      <StarUsNotification innerRef={starUsNotificationAnchorRef} />

      <TrackedHeader 
        id={'hero'} 
        className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.heroContainer)}>
          <img
            className={clsx(styles.heroImage)}
            src={useBaseUrl("img/objectiv-rainbow-pipeline.svg")}
            alt="Ready-to-use infrastructure for advanced product analytics" />
          <h1 className={clsx(styles.heroTitle)}>
            Objectiv is ready-to-use infrastructure for advanced product analytics
          </h1>
          <h2 className={clsx(styles.heroSubTitle)}>
            Self hosted, open-source &amp; built for those who like their data raw and models in code.
          </h2>
          <div className={clsx(styles.heroCtaButtons)}>
            <TrackedLink
              to={useBaseUrl("/docs/home/quickstart-guide/", {absolute: true})}
              waitUntilTracked={true}
              target="_self"
              className={clsx("button", styles.ctaButton)}>
              <span><img src={useBaseUrl("img/icons/icon-docker.svg")}  
                alt={'Objectiv Quickstart Guide'}/></span>
              Spin up the Demo
            </TrackedLink>
            <GitHubStargazers cta={'Star us on GitHub'} />
          </div>
        </div>
      </TrackedHeader>

      <main className={clsx(styles.bodyLarge)}>

        <div className={clsx(styles.pageSection, styles.pageSectionYellow)}>
          <TrackedDiv 
            id={'limitless'} 
            className={clsx("container", styles.contentContainer, styles.limitless)}>

            <IconHeader 
              title="Limitless modeling capabilities" 
              subTitle="Everything you need to unlock a whole new level of product analytics." />

            <div className={clsx(styles.thePlatform)}>
              <div className={clsx(styles.components)}>
                <img
                  src={useBaseUrl("img/icons/icon-objectiv-logo-in-circle.svg")}
                  className={clsx(styles.objectivLogoInCircle)}
                  alt="Objectiv" />
                <h3>DATA COLLECTION</h3>
                <div className={clsx(styles.component)}>
                  <div className={clsx(styles.componentDescription)}>
                    <h4>Open Analytics Taxonomy</h4>
                    <p>Give your datasets a generic &amp; strict event structure designed for modeling.</p>
                  </div>
                  <div className={clsx(styles.componentIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-component-taxonomy.svg")}
                      alt="Taxonomy" />
                  </div>
                </div>
                <img
                  src={useBaseUrl("img/lines-left.svg")}
                  className={clsx(styles.componentLinesLeft)}
                  alt="Lines left" />
                <div className={clsx(styles.component)}>
                  <div className={clsx(styles.componentIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-component-tracking.svg")}
                      alt="Tracking SDKs" />
                  </div>
                  <div className={clsx(styles.componentDescription)}>
                    <h4>Tracking SDKs</h4>
                    <p>Collect error-free user behavior data with validated instrumention.</p>
                  </div>
                </div>
                <img
                  src={useBaseUrl("img/lines-vertical.svg")}
                  className={clsx(styles.componentLinesVertical)}
                  alt="Lines vertical" />
              </div>
              <div className={clsx(styles.dataCloud)}>
                <img
                  src={useBaseUrl("img/platform-data-cloud.png")}
                  alt="Data cloud" />
                <h4>Data cloud agnostic</h4>
                <p>Run data models across data stores. Works with existing infra, no lock-in.</p>
              </div>
              <div className={clsx(styles.components)}>
                <img
                  src={useBaseUrl("img/icons/icon-objectiv-logo-in-circle.svg")}
                  className={clsx(styles.objectivLogoInCircle)}
                  alt="Objectiv" />
                <img
                  src={useBaseUrl("img/lines-vertical.svg")}
                  className={clsx(styles.componentLinesVertical)}
                  alt="Lines vertical" />
                <h3>DATA MODELING</h3>
                <div className={clsx(styles.component)}>
                  <div className={clsx(styles.componentDescription)}>
                    <h4>Open Model Hub</h4>
                    <p>Take pre-built models &amp; functions for fast &amp; efficient modeling.</p>
                  </div>
                  <div className={clsx(styles.componentIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-component-models.svg")}
                      className={clsx(styles.componentIcon)}
                      alt="Models" />
                  </div>
                </div>
                <img
                  src={useBaseUrl("img/lines-right.svg")}
                  className={clsx(styles.componentLinesRight)}
                  alt="Lines right" />
                <div className={clsx(styles.component)}>
                  <div className={clsx(styles.componentIcon, styles.componentIconBach)}>
                    <img
                      src={useBaseUrl("img/icons/icon-component-bach.svg")}
                      className={clsx(styles.componentIcon)}
                      alt="Bach" />
                  </div>
                  <div className={clsx(styles.componentDescription)}>
                    <h4>Bach (modeling library)</h4>
                    <p>Create models on your full dataset and reuse them on any project.</p>
                  </div>
                </div>
                <img
                  src={useBaseUrl("img/icons/icon-objectiv-logo-in-circle.svg")}
                  className={clsx(styles.objectivLogoInCircleBottom)}
                  alt="Objectiv" />
              </div>
              
              <p className={clsx(styles.dataCloudDescription)}>
                <strong>Data cloud agnostic</strong><br />
                Run data models across data stores. Works with existing infra, no lock-in.
              </p>
            </div>

          </TrackedDiv>
        </div>

        <div className={clsx(styles.pageSection, styles.pageSectionDarkGrey)}>
          <TrackedDiv 
              id={'data-from-saas-tools'} 
              className={clsx("container", styles.contentContainer, styles.dataFromSaaSTools)}>

            <IconHeader 
              title="Taking product analytics out of SaaS tools into your DWH <br />
              unlocks a great deal of power, but comes at a price" />

            <div className={clsx(styles.twoColumnItems)}>
              <div className={clsx(styles.twoColumnItem)}>
                <div className={clsx(styles.twoColumnIcon)}>
                  <img
                    src={useBaseUrl("img/icons/icon-crystal-ball.svg")}
                    alt="Crystal ball" />
                </div>
                <div>
                  <strong>You'll find out what data you need when it's too late.</strong> It's incredibly hard 
                  to predict your future use cases.
                </div>
              </div>
              <div className={clsx(styles.twoColumnItem)}>
                <div className={clsx(styles.twoColumnIcon)}>
                  <img
                    src={useBaseUrl("img/icons/icon-data-not-in-love.svg")}
                    alt="Data not loved" />
                </div>
                <div>
                  <strong>Data collected by SaaS tools was never designed for modeling</strong>. It lacks the 
                  required structure, depth &amp; consistency.
                </div>
              </div>
            </div>
            <div className={clsx(styles.twoColumnItems)}>
              <div className={clsx(styles.twoColumnItem)}>
                <div className={clsx(styles.twoColumnIcon)}>
                  <img
                    src={useBaseUrl("img/icons/icon-screws.svg")}
                    alt="Lots of screws" />
                </div>
                <div>
                <strong>Models all need to be built from scratch.</strong> Every tracking plan is different, 
                meaning models aren't interoperable.
                </div>
              </div>
              <div className={clsx(styles.twoColumnItem)}>
                <div className={clsx(styles.twoColumnIcon)}>
                  <img
                    src={useBaseUrl("img/icons/icon-plumbing.svg")}
                    alt="Complicated plumbing" />
                </div>
                <div>
                  <strong>Getting data to consumers takes a lot of setup and maintenance.</strong> From BI 
                  to debugging &amp; productionizing models.
                </div>
              </div>
            </div>
          </TrackedDiv>
        </div>

        <StarUsAnchor ref={starUsNotificationAnchorRef} />

        <div className={clsx(styles.pageSection, styles.solution)}>
          <TrackedDiv 
              id={'solution'} 
              className={clsx("container", styles.contentContainer, styles.solution)}>

            <IconHeader 
              title="Objectiv enables advanced product <br />analytics at a keystroke" />

            <div className={clsx(styles.pythonCodeBlock)}>
              <div className={clsx(styles.jupyterIn)}>
                In [1]:
              </div>
              <div className={clsx(styles.pythonCode)}>
                pip install objectiv-modelhub
              </div>
            </div>

            <div className={clsx(styles.solutionAreas)}>
              <div className={clsx(styles.solutionArea)}>
                <div className={clsx(styles.twoColumnItems)}>
                  <div className={clsx(styles.twoColumnItem)}>
                    <div className={clsx(styles.twoColumnIcon)}>
                      <img
                        src={useBaseUrl("img/icons/icon-solution-right-data.svg")}
                        alt="Right data" />
                    </div>
                    <div>
                      <h3>Always the right data for your projects.</h3>
                      <p>
                        No more back-and-forth on tracking plans. Objectiv prescribes how to instrument your 
                        tracking to ensure your dataset covers every analysis you may need down the road.
                      </p>
                      <TrackedLink
                        to={useBaseUrl("/docs/taxonomy/", {absolute: true})}
                        waitUntilTracked={true}
                        target="_self"
                        className={clsx("button", styles.ctaButton)}>
                        <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  
                          alt={'Docs - Taxonomy'}/></span>
                        Docs - Taxonomy
                      </TrackedLink>                    
                    </div>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.solutionArea)}>
                <div className={clsx(styles.twoColumnItems)}>
                  <div className={clsx(styles.twoColumnItem)}>
                    <div className={clsx(styles.twoColumnIcon)}>
                      <img
                        src={useBaseUrl("img/icons/icon-solution-tracking.svg")}
                        alt="Right data" />
                    </div>
                    <div>
                      <h3>Collect user behavior data designed for modeling.</h3>
                      <p>
                        Datasets collected with Objectiv are validated on multiple levels and carry an event 
                        structure that enables direct modeling without prepwork.
                      </p>
                      <TrackedLink
                        to={useBaseUrl("/docs/tracking/", {absolute: true})}
                        waitUntilTracked={true}
                        target="_self"
                        className={clsx("button", styles.ctaButton)}>
                        <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  
                          alt={'Docs - Tracking'}/></span>
                        Docs - Tracking
                      </TrackedLink>                    
                    </div>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.solutionArea)}>
                <div className={clsx(styles.twoColumnItems)}>
                  <div className={clsx(styles.twoColumnItem)}>
                    <div className={clsx(styles.twoColumnIcon)}>
                      <img
                        src={useBaseUrl("img/icons/icon-solution-reuse-models.svg")}
                        alt="Reuse models" />
                    </div>
                    <div>
                      <h3>Take pre-built models or build &amp; reuse your own.</h3>
                      <p>
                        Models built on one dataset can be deployed and run on another. Take and run what 
                        someone else made, or quickly build your own with pre-built models and functions.
                      </p>
                      <TrackedLink
                        to={useBaseUrl("/docs/modeling/open-model-hub/", {absolute: true})}
                        waitUntilTracked={true}
                        target="_self"
                        className={clsx("button", styles.ctaButton)}>
                        <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  
                          alt={'Docs - Open Model Hub'}/></span>
                        Docs - Open Model Hub
                      </TrackedLink>                    
                    </div>
                  </div>
                </div>
              </div>
            

              <div className={clsx(styles.solutionArea)}>
                <div className={clsx(styles.twoColumnItems)}>
                  <div className={clsx(styles.twoColumnItem)}>
                    <div className={clsx(styles.twoColumnIcon)}>
                      <img
                        src={useBaseUrl("img/icons/icon-feed-tools.svg")}
                        alt="Feed tools" />
                    </div>
                    <div>
                      <h3>Feed tools from one source with minimal overhead.</h3>
                      <p>
                        Objectiv's pandas-like modeling library runs SQL straight on your data store. You can 
                        use models in production directly to simplify data debugging &amp; delivery to BI 
                        tools, dbt, etc.
                      </p>
                      <TrackedLink
                        to={useBaseUrl("/docs/modeling/", {absolute: true})}
                        waitUntilTracked={true}
                        target="_self"
                        className={clsx("button", styles.ctaButton)}>
                        <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  
                          alt={'Docs - Modeling'}/></span>
                        Docs - Modeling
                      </TrackedLink>                    
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </TrackedDiv>
        </div>

        <div className={clsx(styles.pageSection, styles.pageSectionLightGrey)}>
          <TrackedDiv 
            id={'taxonomy'} 
            className={clsx("container", styles.contentContainer, styles.taxonomy)}>

            <IconHeader title="It's in the taxonomy" />
            <p>Objectiv is built around an open analytics taxonomy: a universal structure for analytics data, 
              so models built on one dataset can be deployed and run on another.</p>
            <img
              src={useBaseUrl("img/its-in-the-taxonomy.png")}
              className={clsx(styles.taxonomyOverview)}
              alt="Taxonomy overview" />
            <img
              src={useBaseUrl("img/its-in-the-taxonomy-zoomed-in.png")}
              className={clsx(styles.taxonomyOverviewZoomedIn)}
              alt="Taxonomy overview" />
            <p>It's designed and tested with UIs and analytics use cases of over 50 companies. Areas like 
              payments &amp; CRM are on the roadmap, and it's extensible to cover custom use cases.</p>
            <TrackedLink
              to={useBaseUrl("/docs/taxonomy/", {absolute: true})}
              waitUntilTracked={true}
              target="_self"
              className={clsx("button", styles.ctaButton)}>
              <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  
                alt={'Docs - Taxonomy'}/></span>
              Docs - Taxonomy
            </TrackedLink>                    
          </TrackedDiv>
        </div>

        <div className={clsx(styles.pageSection)}>
          <TrackedDiv 
            id={'supported-tech'} 
            className={clsx("container", styles.contentContainer, styles.supportedTech)}>

            <IconHeader 
              title="Supported platforms and technologies"
              subTitle="Objectiv plays nice with most popular tools in the modern data stack." />

            <div className={clsx(styles.supportedItems)}>
              <div className={clsx(styles.supportedItem)}>
                <h3>FRONTEND</h3>
                <img
                  src={useBaseUrl("img/supported-tech-frontend.svg")}
                  alt="Frontend tech" />
              </div>
              <div className={clsx(styles.supportedItem)}>
                <h3>DATA STORES / BACKEND</h3>
                <img
                  src={useBaseUrl("img/supported-tech-data-stores-backend.svg")}
                  alt="Data stores / backend tech" />                
              </div>
              <div className={clsx(styles.supportedItem)}>
                <h3>NOTEBOOKS</h3>
                <img
                  src={useBaseUrl("img/supported-tech-modeling.svg")}
                  alt="Modeling tech" />
              </div>
              <div className={clsx(styles.supportedItem)}>
                <h3>OUTPUTS TO</h3>
                <img
                  src={useBaseUrl("img/supported-tech-outputs.svg")}
                  alt="Outputs" />
              </div>
              <div className={clsx(styles.supportedItem, styles.supportedItemEmpty)}></div>
              <div className={clsx(styles.supportedItem, styles.annotationEmpty)}>
                <div className={clsx(styles.annotationOutputs)}>
                  <img
                    src={useBaseUrl("img/anything-that-takes-sql-or-pandas-as-input.svg")}
                    alt="Anything that takes SQL or pandas as input" />
                </div>
              </div>
            </div>
          </TrackedDiv>
        </div>


        <div className={clsx(styles.pageSection, styles.pageSectionYellow)}>
          <div className={clsx(styles.tryAnnouncement)}>
            <AnnouncementBar 
              title={'The Launchpad:'} 
              content={'a managed back-end and data store to simplify testing Objectiv.'} 
              ctaLink={'https://objectiv.io/docs/home/get-a-launchpad'}
              ctaText={'Learn more'} 
              icon={'icon-new-banner'}
              theme="dark" />
          </div>
          <TrackedDiv 
            id={'try-it'} 
            className={clsx("container", styles.contentContainer, styles.tryIt)}>
            <img 
              src={useBaseUrl("img/try-objectiv-product.png")} 
              className={clsx(styles.tryObjectivProduct)}
              alt="Try the product" />
            <h2>Try Objectiv on your local machine</h2>
            <p>Follow the Quickstart Guide to run a fully functional Objectiv setup locally.</p>
            <TrackedLink
              to={useBaseUrl("/docs/home/quickstart-guide/", {absolute: true})}
              waitUntilTracked={true}
              target="_self"
              className={clsx("button", styles.ctaButton)}>
              <span><img src={useBaseUrl("img/icons/icon-docker.svg")}  
                alt={'Objectiv Quickstart Guide'}/></span>
              Spin up the Demo
            </TrackedLink>
            <img 
              src={useBaseUrl("img/solution-takes-less-than-5-minutes.svg")} 
              className={clsx(styles.takesLessThan5Minutes)}
              alt="Takes less than 5 minutes" />
            <img 
              src={useBaseUrl("img/solution-takes-less-than-5-minutes-pointing-upwards.svg")} 
              className={clsx(styles.takesLessThan5MinutesPointingUpwards)}
              alt="Takes less than 5 minutes" />
          </TrackedDiv>
        </div>

        <footer className={clsx(styles.slackFooter)}>
          <TrackedDiv id={'slack'} className={clsx("container", styles.contentContainer)}>

            <h3>Objectiv is open-source and we're building it in public.</h3>
            <TrackedLink
              to="/join-slack"
              className={clsx("button", styles.ctaButton)}>
              <span><img src={useBaseUrl("img/icons/icon-slack.svg")}  alt={'Join us on Slack'}/></span>
              Join us on Slack
            </TrackedLink>

          </TrackedDiv>
        </footer>

      </main>
    </Layout>
  );
}
