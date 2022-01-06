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
import IconHeader from '../components/icon-header';

export default function Home() {
  const context = useDocusaurusContext();
  const {url, tagline, customFields} = context.siteConfig;

  return (
    <TrackedRootDiv id={'page-home'}>
      <Layout
        title=''
        description={tagline}
        >
        
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className={clsx('container', styles.heroContainer)}>
            <img
              className={clsx(styles.heroImage)}
              src={useBaseUrl("img/logo-objectiv-home-header.svg")}
              alt="Product Analytics Pipeline" />
            <h1 className={clsx(styles.heroTitle)}>
              The day will come where you'll want <br />
              more from your product analytics data <br />
              than what your BI tools can deliver.
            </h1>
            <p className={clsx(styles.heroSubTitle)}><strong>With Objectiv, you'll be ready.</strong></p> 
          </div>
        </header>

        <main className={clsx('body-large')}>

          <div className={clsx(styles.pageSectionBlue)}>
            <TrackedDiv 
              id={'the-product'} 
              className={clsx("container", styles.contentContainer, styles.theProduct)}>
              <h2>Open-source product analytics that's ready for data science</h2>
              <p>Objectiv is a complete, self-hosted product analytics stack designed for <br />
              effective data modeling and exploration with minimal gruntwork.</p>
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
              <p>It includes everything you need to answer common product analytics questions now, while <br />
                providing a solid foundation for in-depth analysis &amp; machine learning down the road.</p>
              <TrackedLink
                to="https://github.com/objectiv/objectiv-analytics"
                external={true}
                target="_self"
                className={clsx("button", styles.ctaButton)}
              >
                <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")}  alt={'Objectiv on GitHub'}/></span>
                Objectiv on GitHub
              </TrackedLink>

              <img 
                src={useBaseUrl("img/why-objectiv-outro.svg")} 
                className={clsx(styles.whyObjectiv)}
                alt="Why Objectiv?" />
            </TrackedDiv>
          </div>

          <div className={clsx(styles.pageSection)}>
            <div className={clsx("container", styles.contentContainer, styles.betterData)}>
              <IconHeader title="Better data at the first step of the pipeline" icon="icon-better-data" />
              <div className={clsx(styles.valueRowLeft)}>
                <div>
                  <p>Events tracked with Objectiv are unusually rich, highly descriptive, and structured with 
                    effective modeling in mind.</p>
                  <p>Objectiv's tracker validates all collected events against an open analytics taxonomy at 
                    the first step of the pipeline.</p>
                  <p>The resulting dataset is error free, highly consistent, and ready for data science 
                    without additional gruntwork or transformation.</p>
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
            </div>
          </div>

          <div className={clsx(styles.pageSection, styles.pageSectionLightBlue)}>
            <div className={clsx("container", styles.contentContainer, styles.reusableModels)}>
              <IconHeader title="Fully reusable, stackable models included" icon="icon-reusable-models" />
              <div className={clsx(styles.valueRowRight)}>
                <div>
                  <img
                    src={useBaseUrl("img/value-reusable-models-example.svg")}
                    alt="Example" />
                </div>
                <div>
                  <p>You can reuse any model that was built with Objectiv's modeling library for your own 
                    project by changing a single line of code. </p>
                  <p>This is enabled by the highly consistent nature of the datasets Objectiv's tracker 
                    collects.</p>
                  <p>Objectiv includes pre-built models for a wide range of product analytics use cases that 
                    you can take, stack and run to answer common product analytics questions quickly.</p>
                  <p>You're free to or customize them (or build your own) for specific in-depth analyses.</p>
                  <img
                    className={clsx(styles.valueReusableModelsDiagram)}
                    src={useBaseUrl("img/value-reusable-models.svg")}
                    alt="Stack and run included pre-built models!" />
                </div>
              </div>
            </div>
          </div>

          <div className={clsx(styles.pageSection)}>
            <div className={clsx("container", styles.contentContainer, styles.bach)}>
              <IconHeader 
                title="Model &amp; explore with dataframe operations on the full dataset" 
                icon="icon-value-bach" />
              <p className={clsx(styles.introText)}>Objectiv's modeling library (Bach) features an SQL abstraction layer that enables you to use 
                <br /> familiar Pandas-like operations on your full dataset, straight from your notebook.</p>
              <img
                className={clsx(styles.valueBachExample)}
                src={useBaseUrl("img/value-bach-example.svg")}
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
                    On command, Objectiv converts your complete model stack to SQL and runs it on the full dataset, so feel free to try out new things at any stage.
                  </div>
                </div>
                <div className={clsx(styles.twoColumnItem)}>
                  <div className={clsx(styles.twoColumnIcon)}>
                    <img
                      src={useBaseUrl("img/icons/icon-bach-taxonomy.svg")}
                      alt="Taxonomy" />
                  </div>
                  <div>
                    <strong>Built for the open analytics taxonomy</strong><br />
                    Bach is fully optimized to enable effective exploration and modeling on datasets that embrace the open analytics taxonomy.
                  </div>
                </div>
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
                      src={useBaseUrl("img/icons/icon-pandas-compatible.svg")}
                      alt="Pandas logo" />
                  </div>
                  <div>
                    <strong>Pandas compatible, ML ready</strong><br />
                    Bach is Pandas compatible: Take your data to the next level by tapping into the rich machine learning ecosystem Pandas is well-known for.
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                to={useBaseUrl(url + "/docs/quickstart-guide/")}
                external={true}
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
            <div className={clsx("container", styles.contentContainer)}>
              <h2>Objectiv is open source and we're building it in public.</h2>
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

        </main>
      </Layout>
    </TrackedRootDiv>
  );
}
