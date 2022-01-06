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
        
        <TrackedHeader className={clsx('hero hero--primary', styles.heroBanner)}>
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
        </TrackedHeader>

        <TrackedMain className={clsx('body-large')}>

          <div className={clsx(styles.pageSectionBlue, styles.theProduct)}>

            <TrackedDiv 
              id={'the-product'} 
              className={clsx("container", styles.contentContainer, styles.intro)}>
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
            <TrackedDiv 
              id={'better-data'} 
              className={clsx("container", styles.contentContainer, styles.intro, styles.betterData)}>
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
            </TrackedDiv>
          </div>

            {/* <TrackedDiv
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

            </TrackedDiv> */}


          <div className={clsx(styles.pageSection, styles.pageSectionBlue, styles.quickStart)}>
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
