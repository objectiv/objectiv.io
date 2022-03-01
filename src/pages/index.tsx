import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { TrackedDiv } from "@objectiv/tracker-react";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import IconHeader from '../components/icon-header';
import VimeoPlayer from '../components/vimeo-player';
import { TrackedLink } from '../trackedComponents/TrackedLink';
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {url, tagline, customFields} = context.siteConfig;

  return (
    <div>
      <Layout
        title=''
        description={tagline}>
        
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className={clsx('container', styles.heroContainer)}>
            <img
              className={clsx(styles.heroImage)}
              src={useBaseUrl("img/objectiv-rainbow-pipeline.svg")}
              alt="Product Analytics Pipeline" />
            <h1 className={clsx(styles.heroTitle)}>
            Open-source product analytics <br />
            designed for data science <br />
            </h1>
            <p className={clsx(styles.heroSubTitle)}>Collect model-ready data and run your entire product analytics workflow straight from your notebook.</p>
            <div className={clsx(styles.productIntroVideo)}>
              <VimeoPlayer id="2-minute-video" videoId="670857141" />
            </div>
            <img
                className={clsx(styles.objectivIn2Minutes)}
                src={useBaseUrl("img/header-2-minutes.svg")}
                alt="Objectiv in 2 minutes" />
          </div>
        </header>

        <main className={clsx('body-large')}>

          <div className={clsx(styles.pageSectionLightBlue)}>
            <TrackedDiv 
                id={'why-objectiv'} 
                className={clsx("container", styles.contentContainer, styles.whyObjectiv)}>
              <h2>You can get a lot more from your product analytics data <br />
              when you add data science in the mix.</h2>
              <p>Being able to do advanced analyses on your product data, such as user clustering, 
                recommendations &amp; churn <br />
                prediction, unlocks a level of product opportunities that you 
                wouldn't be able to get from your BI dashboard.</p>
              <img
                className={clsx(styles.quicklyPullThisData)}
                src={useBaseUrl("img/quickly-pull-this-data.svg")}
                alt="Hey Data Scientist, can you quickly pull this data for me?"
              />              
              <p>
                <strong>The current generation of product analytics tools is not designed with data science 
                  in mind. </strong><br />
                The data they collect needs a lot of cleaning and transformation before it can be used for 
                modeling, <br />
                and models typically cannot be reused because there is no common way to structure data.</p>
              <img
                className={clsx(styles.meetObjectiv)}
                src={useBaseUrl("img/meet-objectiv.svg")}
                alt="Meet Objectiv"
              />              
            </TrackedDiv>
          </div>

          <div className={clsx(styles.pageSectionBlue)}>
            <TrackedDiv 
              id={'the-stack'} 
              className={clsx("container", styles.contentContainer, styles.theProduct)}>
              <h2>No tracking plans, data cleaning or transformations required</h2>
              <p><strong>Objectiv</strong> has completely redesigned product analytics from scratch to 
                effectively integrate data science into the workflow. It enables data scientists to skip the 
                grunt work, open their notebooks and work directly with model ready-data and pre-built models 
                to <strong>build advanced analyses in minutes, not months</strong>.</p>
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
              <p>It includes what you need to answer common product analytics questions with speed and precision, while <br/>
              providing a solid foundation for advanced modeling. You can output models to SQL queries with a single <br/>
              command, and Pandas compatability means you can tap into its rich machine learning ecosystem.</p>
              <TrackedLink
                to="https://github.com/objectiv/objectiv-analytics"
                waitUntilTracked={true}
                target="_self"
                className={clsx("button", styles.ctaButton)}
              >
                
                <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")}  alt={'Objectiv on GitHub'}/></span>
                Objectiv on GitHub
              </TrackedLink>

              <img 
                src={useBaseUrl("img/learn-more.svg")} 
                className={clsx(styles.learnMore)}
                alt="Learn More" />
            </TrackedDiv>
          </div>

          <div className={clsx(styles.pageSection)}>
            <div className={clsx("container", styles.contentContainer, styles.betterData)}>
              <IconHeader title="Model-ready data at the first step of the pipeline" icon="icon-better-data" />
              <div className={clsx(styles.valueRowLeft)}>
                <div>
                  <p>Objectiv's tracker validates all collected events against an open analytics taxonomy at 
                    the first step of the pipeline.</p>
                  <p>The resulting dataset is error free, highly consistent, and ready for data science 
                    without additional gruntwork or transformation.</p>
                  <p>Events tracked with Objectiv are unusually rich, highly descriptive, and structured with 
                    effective modeling in mind.</p>
                  
                  <img
                    src={useBaseUrl("img/value-better-data.svg")}
                    alt="Squeaky clean model-ready data through early validation!" />
                </div>
                <div>
                  <img
                    src={useBaseUrl("img/value-better-data-event-comparison.svg")}
                    alt="Objectiv Event example" />
                </div>
              </div>
              <div className={clsx(styles.outro)}>
                <p>To learn more about the open analytics taxonomy, check out the Docs.</p>
                <TrackedLink
                  to={useBaseUrl("/docs/taxonomy/", {absolute: true})}
                  waitUntilTracked={true}
                  target="_self"
                  className={clsx("button", styles.ctaButton)}
                >
                  <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  alt={'Docs - Open Analytics Taxonomy'}/></span>
                  Docs - Open Analytics Taxonomy
                </TrackedLink>
              </div>
            </div>
          </div>

          <div className={clsx(styles.pageSection, styles.pageSectionLightBlue)}>
            <div className={clsx("container", styles.contentContainer, styles.bach)}>
              <IconHeader 
                title="Pandas-like modeling on the full dataset" 
                icon="icon-value-bach" />
              <p className={clsx(styles.introText)}>Objectiv Bach is a modeling library that combines the 
                power of Pandas with the <br /> 
                scalability of SQL and includes pre-built models that you can chain together.</p>
              <img
                className={clsx(styles.valueBachExample)}
                src={useBaseUrl("img/value-bach-example@2x.png")}
                alt="These operations all run on the full dataset! Neat!" />
              <img
                className={clsx(styles.valueBachExample, styles.valueBachExampleMedium)}
                src={useBaseUrl("img/value-bach-example-medium.png")}
                alt="These operations all run on the full dataset! Neat!" />
              <img
                className={clsx(styles.valueBachExample, styles.valueBachExampleSmall)}
                src={useBaseUrl("img/value-bach-example-small.png")}
                alt="These operations all run on the full dataset! Neat!" />
              <div className={clsx(styles.twoColumnItems)}>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-experiment.svg")}
                      alt="Experiment and iterate" />
                  </div>
                  <div>
                    <strong>Experiment &amp; iterate freely</strong><br />
                    On command, Objectiv converts your complete model chain to SQL and runs it on the full 
                    dataset, so feel free to try out new things at any stage.
                  </div>
                </div>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-pandas-compatible.svg")}
                      alt="Pandas logo" />
                  </div>
                  <div>
                    <strong>Familiar Pandas-like modeling</strong><br />
                    Bach supports many common Pandas operations, combined with operations that are specific 
                    to datasets collected with the Objectiv tracker.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TrackedDiv
            id={'reusable-models'}
            className={clsx(styles.pageSection)}>
            <div className={clsx("container", styles.contentContainer, styles.reusableModels)}>
              <IconHeader title="Reuse any model and chain them together" icon="icon-reusable-models-chained" />
              <div className={clsx(styles.valueRowRight)}>
                <div>
                  <img
                    src={useBaseUrl("img/value-reusable-models-example.svg")}
                    alt="Example" />
                </div>
                <div>
                  <p>As a result of high data consistency, Objectiv models and datasets are intercompatible and can be shared and reused. </p>
                  <p>That advanced model someone from the other team built? You can reuse that for your own project by changing a single line of code.</p>
                  <p>Objectiv also includes pre-built models for a wide range of product analytics use cases. You can chain them together to answer common product analytics questions quickly.</p>
                  <p>You're free to customize them (or build your own) for specific in-depth analyses.</p>
                  <img
                    className={clsx(styles.valueReusableModelsDiagram)}
                    src={useBaseUrl("img/value-reusable-models.svg")}
                    alt="Take and chain pre-built models off the shelf!" />
                </div>
              </div>
              <div className={clsx(styles.twoColumnItems)}>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-metabase.svg")}
                      alt="Metabase logo" />
                  </div>
                  <div>
                    <strong>Output to BI with a single command</strong><br />
                    Happy with the results? Share your insights with your team by outputting your data to supported BI tools with a single command.
                  </div>
                </div>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-brain.svg")}
                      alt="Brain" />
                  </div>
                  <div>
                    <strong>Pandas compatible, ML ready</strong><br />
                    Bach is Pandas compatible: Take your data to the next level by tapping into the rich machine learning ecosystem Pandas is well-known for.
                  </div>
                </div>
              </div>
              <div className={clsx(styles.outro)}>
                <p>For an overview of all available pre-built models, check out the Docs.</p>
                <TrackedLink
                  to={useBaseUrl("/docs/modeling/Objectiv/bach_open_taxonomy.ModelHub", {absolute: true})}
                  waitUntilTracked={true}
                  target="_self"
                  className={clsx("button", styles.ctaButton)}
                >
                  <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  alt={'Docs - Open Model Hub'}/></span>
                  Docs - Open Model Hub
                </TrackedLink>
              </div>
            </div>
          </TrackedDiv>

          <div className={clsx(styles.pageSection, styles.pageSectionBlue)}>
            <TrackedDiv
              id={'quickstart'}
              className={clsx("container", styles.contentContainer, styles.quickStart)}
            >
              <h2>Try the complete Objectiv stack on your local machine</h2>
              <p className={clsx(styles.introText, styles.quickStartIntro)}>It comes with everything you 
                need, including a copy of our website as a <strong>demo app</strong>, <br /> 
                a <strong>notebook</strong> with working models and a <strong>Metabase</strong> environment 
                to output data to.</p>
              <img src={useBaseUrl("img/solution-screenshots.png")} alt="Screenshots" />
              <p className={clsx(styles.quickStartOutro)}>Follow the <strong>Quickstart Guide</strong> to 
              locally run the full Objectiv pipeline dockerized.</p>
              <TrackedLink
                to={useBaseUrl("/docs/home/quickstart-guide/", {absolute: true})}
                waitUntilTracked={true}
                target="_self"
                className={clsx("button", styles.ctaButton)}
              >
                <span><img src={useBaseUrl("img/icons/icon-docs-blue.svg")}  alt={'Objectiv Quickstart Guide'}/></span>
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
              <h2>Objectiv is open source and we're building it in public.</h2>
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
