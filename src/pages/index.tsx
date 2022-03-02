import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import IconHeader from '../components/icon-header';
import VimeoPlayer from '../components/vimeo-player';
import { TrackedDiv, TrackedHeader } from "@objectiv/tracker-react";
import { TrackedLink } from '../trackedComponents/TrackedLink';
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {tagline, customFields} = context.siteConfig;

  return (
    <div>
      <Layout
        title=''
        description={tagline}>
        
        <TrackedHeader 
          id={'hero'} 
          className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className={clsx('container', styles.heroContainer)}>
            <img
              className={clsx(styles.heroImage)}
              src={useBaseUrl("img/header-applications.svg")}
              alt="Product Analytics Pipeline" />
            <h1 className={clsx(styles.heroTitle)}>
            You can do a lot more with user behavior data <br />
            when you add data science into the mix
            </h1>
            <p className={clsx(styles.heroSubTitle)}>
              Objectiv is open-source product analytics <strong>designed for effective data science</strong>.
            </p>
            <TrackedLink
              to="https://github.com/objectiv/objectiv-analytics"
              waitUntilTracked={true}
              target="_self"
              className={clsx("button", styles.ctaButton)}>
              <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")}  
                alt={'Objectiv on GitHub'}/></span>
              Star us on GitHub
            </TrackedLink>
          </div>
        </TrackedHeader>

        <main className={clsx('body-large')}>

          <div className={clsx(styles.pageSection, styles.pageSectionDarkGrey)}>
            <TrackedDiv 
              id={'why-objectiv'} 
              className={clsx("container", styles.contentContainer, styles.whyObjectiv)}>
              <IconHeader 
                title="Effectively integrate data science into <br />your product analytics workflow with 
                  Objectiv" 
                subTitle="Objectiv enables data teams to pull in-depth insights with unparalleled speed and 
                  fidelity." 
                icon="icon-objectiv-logo-negative" />
              <div className={clsx(styles.valueRowLeft, styles.whyObjectivSummary)}>
                <div>
                  <img
                    src={useBaseUrl("img/objectiv-notebook.svg")}
                    alt="Run your product analtyics workflow from a notebook" />
                </div>
                <div>
                  <div className={clsx(styles.whyItems)}>
                    <div className={clsx(styles.whyItem)}>
                      <div className={clsx(styles.iconIcon)}>
                        <img
                          src={useBaseUrl("img/icons/icon-accelerate.svg")}
                          alt="Accelerate" />
                      </div>
                      <div>
                        <strong>Skip the typical gruntwork</strong><br />
                        Build in-depth analyses in minutes with model-ready data and pre-built models.
                      </div>
                    </div>
                  </div>
                  <div className={clsx(styles.whyItems)}>
                    <div className={clsx(styles.whyItem)}>
                      <div className={clsx(styles.iconIcon)}>
                        <img
                          src={useBaseUrl("img/icons/icon-diamond-yellow.svg")}
                          alt="Diamond" />
                      </div>
                      <div>
                        <strong>Granular control over the full dataset</strong><br />
                        Use a powerful modeling library on data that's structured for effective data science.
                      </div>
                    </div>
                  </div>
                  <div className={clsx(styles.whyItems)}>
                    <div className={clsx(styles.whyItem)}>
                      <div className={clsx(styles.iconIcon)}>
                        <img
                          src={useBaseUrl("img/icons/icon-abc.svg")}
                          alt="A-B-C blocks" />
                      </div>
                      <div>
                        <strong>Cut down stack complexity</strong><br />
                        Make the notebook the headquarters of all your product analytics operations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TrackedDiv>
          </div>

          <div className={clsx(styles.pageSection)}>
            <TrackedDiv 
                id={'skip-the-gruntwork'} 
                className={clsx("container", styles.contentContainer, styles.skipTheGruntWork)}>
              <IconHeader 
                title="Skip the grunt work and use pre-built models <br />to run in-depth analyses in 
                  minutes, not months" 
                subTitle="No tracking plans, data cleaning or transformations required." 
                icon="icon-accelerate" />
              <div className={clsx(styles.skipTheGruntWorkUSPs)}>
                <div className={clsx(styles.valueRowRight)}>
                  <div>
                    <img
                      src={useBaseUrl("img/value-better-data.svg")}
                      alt="Squeaky clean model-ready data through early validation!" />
                  </div>
                  <div>
                    <p>
                      <strong>A taxonomy for model-ready data</strong> <br />
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
                  </div>
                </div>
                <div className={clsx(styles.valueRowLeft)}>
                  <div>
                    <p>
                      <strong>Reuse anyone's models</strong> <br />
                      Objectiv datasets are highly consistent. As a result, models and datasets are 
                      intercompatible and can be shared and reused.
                    </p>
                    <p>That advanced model someone from the other team built? You can reuse that for your own 
                      project by changing a single line of code.</p>
                  </div>
                  <div>
                  <img
                    src={useBaseUrl("img/value-reusable-models-churn-prediction.svg")}
                    alt="Churn Prediction" />
                  </div>
                </div>
              </div>
              <div className={clsx(styles.valueRowRight)}>
                  <div>
                    <img
                      src={useBaseUrl("img/value-reusable-models.svg")}
                      alt="Take pre-built models off the shelf" />
                  </div>
                  <div>
                    <p>
                      <strong>Take pre-built models off the shelf</strong> <br />
                      Objectiv also includes pre-built models for a wide range of product analytics use 
                      cases. You can chain them together to answer common product analytics questions quickly.
                    </p>
                    <p>You're free to customize them (or build your own) for specific in-depth analyses.</p>
                  </div>
                </div>
            </TrackedDiv>
          </div>


          <div className={clsx(styles.pageSection, styles.pageSectionLightGrey)}>
            <TrackedDiv 
                id={'granular-control'} 
                className={clsx("container", styles.contentContainer, styles.granularControl)}>
              <IconHeader 
                title="Take granular control over <br />data that's designed for modeling" 
                subTitle="Tap into a level of insights that simply isn't available from the dashboards of BI 
                  tools." 
                icon="icon-diamond-yellow" />
              <div className={clsx(styles.granularControlUSPs)}>
                <div className={clsx(styles.valueRowLeft)}>
                  <div>
                    <p>
                      <strong>Slice data without manual mapping</strong><br />
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
                      src={useBaseUrl("img/value-better-data-event.svg")}
                      alt="Objectiv Event example" />
                  </div>  
                </div>
              </div>
              <TrackedDiv 
                  id={'modeling-bach'} 
                  className={clsx(styles.modelingBach)}>
                <IconHeader 
                  title="Powerful modeling on the full dataset" 
                  subTitle="Meet Objectiv Bach - a modeling library that combines the power of Pandas with 
                    the scalability of SQL." 
                  icon="icon-bach-sunglasses" />
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
                        src={useBaseUrl("img/icons/icon-bach-sunglasses.svg")}
                        alt="Bach" />
                    </div>
                    <div>
                      <strong>Run models on the full SQL dataset</strong><br />
                      Build models using dataframes and pandas-like operations and run them on the full 
                      dataset as SQL
                    </div>
                  </div>
                  <div className={clsx(styles.twoColumnItem)}>
                    <div className={clsx(styles.twoColumnIcon)}>
                      <img
                        src={useBaseUrl("img/icons/icon-pandas-compatible.svg")}
                        alt="Pandas logo" />
                    </div>
                    <div>
                      <strong>Pandas compatible</strong><br />
                      Pandas compatibility enables you to tap into the rich ecosystem Pandas is well-know 
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
                      <strong>Works with the open taxonomy</strong><br />
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
                      <strong>Optimized for machine learning</strong><br />
                      A number of built-in optimizations for popular libraries, like scikit-learn, will 
                      enable you to incorporate ML into your analyses faster.
                    </div>
                  </div>
                </div>
              </TrackedDiv>
            </TrackedDiv>
          </div>

          <div className={clsx(styles.pageSection)}>
            <TrackedDiv 
                id={'eliminate-complexity'} 
                className={clsx("container", styles.contentContainer, styles.eliminateComplexity)}>
              <IconHeader 
                title="Cut down delivery times by eliminating <br />complexity in your analytics stack" 
                subTitle="Run your entire product analytics workflow from a notebook." 
                icon="icon-abc" />
              <div className={clsx(styles.granularControlUSPs)}>
                <div className={clsx(styles.valueRowLeft)}>
                  <div>
                    <p>
                      <strong>The notebook as your headquarters</strong><br />
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
                    <div className={clsx(styles.twoColumnItems, styles.metabaseIntegrationDesktop)}>
                      <div className={clsx(styles.twoColumnItem)}>
                        <div className={clsx(styles.twoColumnIcon)}>
                          <img
                            src={useBaseUrl("img/icons/icon-metabase.svg")}
                            alt="Bach" />
                        </div>
                        <div>
                          <strong>Built-in Metabase integration </strong><br />
                          To simplify sharing insights with the rest of your team, Objectiv comes with 
                          built-in integration for the open-source BI platform Metabase.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={useBaseUrl("img/value-notebook-as-headquarters.svg")}
                      alt="The notebook as your headquarters" />
                  </div>  
                  <div className={clsx(styles.twoColumnItems, styles.metabaseIntegrationMobile)}>
                      <div className={clsx(styles.twoColumnItem)}>
                        <div className={clsx(styles.twoColumnIcon)}>
                          <img
                            src={useBaseUrl("img/icons/icon-metabase.svg")}
                            alt="Bach" />
                        </div>
                        <div>
                          <strong>Built-in Metabase integration </strong><br />
                          To simplify sharing insights with the rest of your team, Objectiv comes with 
                          built-in integration for the open-source BI platform Metabase.
                        </div>
                      </div>
                    </div>
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
                subTitle="Objectiv is self-hosted. It includes what you need to answer common product 
                analytics <br /> questions fast and accurately, while providing a solid foundation for 
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
              <p><strong>Want to try Objectiv?</strong> Follow the Quickstart Guide to run a fully functional 
                Objectiv setup locally.</p>
              <TrackedLink
                to={useBaseUrl("/docs/home/quickstart-guide/", {absolute: true})}
                waitUntilTracked={true}
                target="_self"
                className={clsx("button", styles.ctaButton)}>
                <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  
                  alt={'Objectiv Quickstart Guide'}/></span>
                Objectiv Quickstart Guide
              </TrackedLink>
              <img 
                src={useBaseUrl("img/solution-takes-less-than-5-minutes-white.svg")} 
                className={clsx(styles.takesLessThan5Minutes)}
                alt="Takes less than 5 minutes" />
            </TrackedDiv>
          </div>

          <footer>
            <TrackedDiv id={'slack'} className={clsx("container", styles.contentContainer)}>
              <h2>Objectiv is open-source and we're building it in public.</h2>
              <p>Have opinions on where we should take this or want to stay in the loop?</p>
              <TrackedLink
                to={customFields.slackJoinLink as string}
                waitUntilTracked={true}
                className={clsx("button", styles.ctaButton)}
              >
                  <span><img src={useBaseUrl("img/icons/icon-slack.svg")}  alt={'Join us on Slack'}/></span>
                  Join us on Slack
                </TrackedLink>
            </TrackedDiv>
          </footer>

        </main>
      </Layout>
    </div>
  );
}
