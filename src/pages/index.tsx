import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useRef } from 'react';
import GitHubStargazers from '../components/github-stargazers';
import IconHeader from '../components/icon-header';
import BeforeAfterImage from '../components/before-after-image';
import VimeoPlayer from '../components/vimeo-player';
import AnimatedGif from '../components/animated-gif';
import StarUsNotification, { StarUsAnchor } from '../components/star-us';
import { TrackedDiv, TrackedHeader } from "@objectiv/tracker-react";
import { TrackedLink } from '../trackedComponents/TrackedLink';
import styles from './styles.module.css';

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
            alt="Open-source infrastructure for product analytics" />
          <h1 className={clsx(styles.heroTitle)}>
            Open-source product analytics infrastructure with a generic event taxonomy
          </h1>
          <h2 className={clsx(styles.heroSubTitle)}>
            Use Objectiv to capture validated user behavior data straight into your data warehouse, 
            <br /> and speed up product analytics projects with pre-built &amp; reusable models.
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
            <GitHubStargazers cta='Star us on GitHub' />
          </div>
        </div>
      </TrackedHeader>

      <main className={clsx(styles.bodyLarge)}>

        <div className={clsx(styles.pageSection, styles.pageSectionDarkGrey)}>
          <TrackedDiv 
            id={'capture-data'} 
            className={clsx("container", styles.contentContainer, styles.stackCaptureData)}>

            <IconHeader 
              title="Capture validated user behavior data &amp;<br /> feed it straight into your data 
                warehouse" 
              subTitle="Eliminate complexity with a tracker that feeds high quality user behavior data 
                directly into the
                <br /> heart of your product analytics stack. No cleaning, transformations or tracking plans 
                required." 
              icon="icon-diamond-yellow" />

            <div className={clsx(styles.stackCaptureDataBeforeAfter)}>
              <BeforeAfterImage 
                id='data-capture-workflow'
                beforeImageUrl='img/stack-capture-before.svg'
                afterImageUrl='img/stack-capture-after.svg'
                beforeImageMobileUrl='img/stack-capture-before-vertical.svg'
                afterImageMobileUrl='img/stack-capture-after-vertical.svg'
                captionBefore='A typical data collection workflow before using Objectiv'
                captionAfter='A typical data collection workflow after using Objectiv' />
            </div>

            <div className={clsx(styles.valueRowRight)}>
              <div>
                <img
                  src={useBaseUrl("img/solution-taxonomy-dark.svg")}
                  alt="The open analytics taxonomy" />
              </div>
              <div>
                <h3>A taxonomy to ensure quality &amp; consistency</h3>
                <p>
                  Objectiv's tracker validates all incoming events against an&nbsp;
                  <TrackedLink
                    to={useBaseUrl("/docs/taxonomy/", {absolute: true})} 
                    waitUntilTracked={true}
                    target="_self">
                    open analytics taxonomy
                  </TrackedLink>. This ensures it is well-structured, clean and ready for modeling.
                </p>
                <p>It describes classes for common user interactions and their contexts. A tracking plan 
                  is no longer needed as the requirements for effective analysis are carried by the 
                  design of the taxonomy.</p>
                <img
                  src={useBaseUrl("img/value-squeaky-clean-model-ready-data.svg")}
                  alt="The result: squeaky clean model-ready data" />                      
              </div>
            </div>

            <div className={clsx(styles.valueRowLeft)}>
              <div>
                <h3>Get the full context</h3>
                <p>
                  Objectiv's tracker captures the structure of your product's UI inside the dataset. 
                  Events contain the exact location where they were triggered in a hierarchical stack of 
                  locations.
                </p>
                <p>
                  This not only makes events easily identifiable, it also enables data slicing on a very 
                  granular level without doing a ton of manual mapping first.
                </p>
                <img
                  src={useBaseUrl("img/value-fine-grained-slicing-control.svg")}
                  alt="Fine-grained slicing control" />
              </div>
              <div>
                <img
                  src={useBaseUrl("img/value-better-data-event-dark.svg")}
                  alt="Objectiv Event example" />
              </div>  
            </div>

          </TrackedDiv>
        </div>

        <div className={clsx(styles.pageSection, styles.pageSectionLightGrey)}>
          <TrackedDiv 
              id={'modeling'} 
              className={clsx("container", styles.contentContainer, styles.modeling)}>

            <IconHeader 
              title="Speed up product analytics projects <br /> with pre-built &amp; reusable models" 
              subTitle="Take granular control over your data with pre-built models that run on the full 
                dataset. <br /> Share &amp; reuse any model and convert them to SQL with a single command." 
              icon="icon-accelerate" />

            <StarUsAnchor ref={starUsNotificationAnchorRef} />

            <div className={clsx(styles.modelingBeforeAfter)}>
              <BeforeAfterImage 
                id='modeling-workflow'
                beforeImageUrl='img/modeling-before.svg'
                afterImageUrl='img/modeling-after.svg'
                beforeImageMobileUrl='img/modeling-before-vertical.svg'
                afterImageMobileUrl='img/modeling-after-vertical.svg'
                tabColorsInverted={true}
                captionBefore='A typical modeling &amp; analysis workflow before using Objectiv'
                captionAfter='A typical modeling &amp; analysis workflow after using Objectiv' />
            </div>


            <div className={clsx(styles.modelingUSPs)}>
              <div className={clsx(styles.valueRowLeft)}>
                <div>
                  <h3>Pandas-like modeling on the full SQL dataset</h3>
                  <p>
                    The Objectiv Bach modeling library combines the scalability of SQL with the agility of 
                    Pandas.
                  </p>
                  <p>
                    You can build models using dataframes and pandas-like operations and run them on the 
                    full dataset as SQL. If you know Pandas, you'll feel right at home.
                  </p>
                </div>
                <div>
                  <img
                    src={useBaseUrl("img/value-pandas-like-operations-on-full-dataset.svg")}
                    alt="Pandas-like operations on the full dataset" />
                </div>
              </div>

              <div className={clsx(styles.valueRowFull)}>
                <AnimatedGif
                  url={useBaseUrl("img/examples/example-call-models-in-model-hub.gif")}
                  alt='Example animation of how to call models from the model hub' />
              </div>

              <div className={clsx(styles.valueRowRight)}>
                <div>
                  <img
                    src={useBaseUrl("img/value-reusable-models.svg")}
                    alt="Take pre-built models off the shelf" />
                </div>
                <div>
                  <h3>Take pre-built models off the shelf</h3>
                  <p>
                    Objectiv&nbsp;
                    <TrackedLink
                      to={useBaseUrl("/docs/modeling/open-model-hub/", {absolute: true})}
                      waitUntilTracked={true}
                      target="_self">
                      includes pre-built models
                    </TrackedLink> for a wide range of product analytics use cases. You can chain them 
                    together to answer common product analytics questions quickly.
                  </p>
                  <p>You're free to customize them (or build your own) for specific in-depth analyses.</p>
                </div>
              </div>

              <div className={clsx(styles.bachIntroVideo)}>
                <img
                  className={clsx(styles.objectivIn2Minutes)}
                  src={useBaseUrl("img/bach-in-2-minutes.svg")}
                  alt="Objectiv Bach for Data Scientists - 2 minutes" />
                <div className={clsx(styles.video)}>
                  <VimeoPlayer id="2-minute-video" videoId="670857141" />
                </div>
              </div>

              <div className={clsx(styles.twoColumnItems)}>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-recycling.svg")}
                      alt="Reuse" />
                  </div>
                  <div>
                    <h3>Reuse anyone's models</h3>
                    High data consistency means models and datasets are intercompatible and can be shared 
                    and reused.
                  </div>
                </div>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-pandas-compatible.svg")}
                      alt="Pandas logo" />
                  </div>
                  <div>
                    <h3>Pandas compatible</h3>
                    Pandas compatibility enables you to tap into the rich ecosystem Pandas is well-known 
                    for, including all ML libraries.
                  </div>
                </div>
              </div>
              <div className={clsx(styles.twoColumnItems)}>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-taxonomy-sitemap.svg")}
                      alt="Bach" />
                  </div>
                  <div>
                    <h3>Works with the open taxonomy</h3>
                    Bach includes operations that are specifically designed to effectively work with 
                    datasets that embrace the&nbsp;
                    <TrackedLink
                      to={useBaseUrl("/docs/taxonomy/", {absolute: true})}
                      waitUntilTracked={true}
                      target="_self">
                      open analytics taxonomy
                    </TrackedLink>.
                  </div>
                </div>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-brain.svg")}
                      alt="Brain" />
                  </div>
                  <div>
                    <h3>Optimized for machine learning</h3>
                    A number of built-in optimizations for popular libraries, like scikit-learn, will 
                    enable you to incorporate ML into your analyses faster.
                  </div>
                </div>
              </div> 
            </div>

          </TrackedDiv>
        </div>

        <div className={clsx(styles.pageSection)}>
          <TrackedDiv 
              id={'eliminate-complexity'} 
              className={clsx("container", styles.contentContainer, styles.eliminateComplexity)}>
            <IconHeader 
              title="Run your entire product analytics <br />workflow from a notebook" 
              subTitle="Make your notebook the headquarters of your product analytics operations." 
              icon="icon-jupyter-notebook-in-browser" />
            <div className={clsx(styles.eliminateComplexityUSPs)}>
              <div className={clsx(styles.valueRowLeft)}>
                <div>
                  <h3>Convert models to SQL with a single command</h3>
                  <p>
                    On command, Objectiv converts your entire model to a production-ready SQL query, which 
                    you can directly use to feed into your tools and products.
                  </p>
                  <p>
                    Combine this with the fact that raw Objectiv data is model-ready straight from the 
                    tracker, and you have a very efficient workflow that enables you to experiment freely 
                    without the typical overhead.
                  </p>
                  <p>
                    As a result, you can adapt to changing product questions much faster and keep all your 
                    product analytics projects in one place.
                  </p>
                </div>
                <div>
                  <img
                    src={useBaseUrl("img/value-notebook-as-headquarters.svg")}
                    alt="The notebook as your headquarters" />
                </div>  
              </div>
              <div className={clsx(styles.valueRowFull)}>
                <AnimatedGif
                  url={useBaseUrl("img/examples/example-output-to-metabase.gif")}
                  alt='Example animation of output to Metabase' />
              </div>
              <div className={clsx(styles.combineExport)}>
                <img
                  src={useBaseUrl("img/value-combine-export.svg")}
                  className={clsx(styles.valueCombineExportHorizontal)}
                  alt="Combine or export in several ways" />
                <img
                  src={useBaseUrl("img/value-combine-export-vertical.svg")}
                  className={clsx(styles.valueCombineExportVertical)}
                  alt="Combine or export in several ways" />
                <p>To simplify sharing insights with other team members, Objectiv comes with <br />
                built-in integration for the open-source BI platform <strong>Metabase</strong>.</p>
              </div>
            </div>

          </TrackedDiv>
        </div>

        <div className={clsx(styles.pageSection, styles.pageSectionDarkGrey)}>
          <TrackedDiv 
            id={'the-stack-quickstart'} 
            className={clsx("container", styles.contentContainer, styles.theProduct, styles.quickStart)}>

            <IconHeader 
              title="What's in the box?" 
              subTitle="Objectiv is open-source and self-hosted. It includes what you need to answer common 
              product <br /> analytics questions fast and accurately, while providing a solid foundation for 
              advanced modeling." />

            <img 
              src={useBaseUrl("img/the-stack.svg")} 
              className={clsx(styles.theStack)}
              alt="The Objectiv stack" />
            <img 
              src={useBaseUrl("img/the-stack-horizontal-vertical.svg")} 
              className={clsx(styles.theStackHorizontalVertical)}
              alt="The Objectiv stack" />
            <img 
              src={useBaseUrl("img/the-stack-vertical.svg")} 
              className={clsx(styles.theStackVertical)}
              alt="The Objectiv stack" />

            <div className={clsx(styles.twoColumnItems)}>
              <div className={clsx(styles.twoColumnItem)}>
                <div className={clsx(styles.twoColumnIcon)}>
                  <img
                    src={useBaseUrl("img/icons/icon-postgresql.png")}
                    alt="PostgreSQL" />
                </div>
                <div>
                  <strong>PostgreSQL support</strong><br />
                  Run it locally or in the cloud for reliable event handling.
                </div>
              </div>
              <div className={clsx(styles.twoColumnItem)}>
                <div className={clsx(styles.twoColumnIcon)}>
                  <img
                    src={useBaseUrl("img/icons/icon-bigquery-snowplow.png")}
                    alt="BigQuery through Snowplow" />
                </div>
                <div>
                  <strong>BigQuery support</strong><br />
                  Plugs into your Snowplow backend for event handling at scale with BigQuery.<br />
                  <img src={useBaseUrl("img/coming-soon.svg")} 
                    className={clsx(styles.stackBQComingSoon)}
                    alt="Coming soon" />
                </div>
              </div>
            </div>

            <h2>Try the Objectiv local demo</h2>
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
              src={useBaseUrl("img/solution-takes-less-than-5-minutes-white.svg")} 
              className={clsx(styles.takesLessThan5Minutes)}
              alt="Takes less than 5 minutes" />

          </TrackedDiv>
        </div>

        <footer className={clsx(styles.slackFooter)}>
          <TrackedDiv id={'slack'} className={clsx("container", styles.contentContainer)}>

            <h3>Objectiv is open-source and we're building it in public.</h3>
            <p>Have opinions on where we should take this or want to stay in the loop?</p>
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
