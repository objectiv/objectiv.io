import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Avatar from 'react-avatar';
import { TrackedDiv } from "../trackedComponents/TrackedDiv";
import { TrackedLink } from "../trackedComponents/TrackedLink";
import styles from './styles.module.css';
import AnnouncementBar from '../components/announcement-bar';

let contributors = require('./contributors.json');

function Contributor({name, gitHubUsername}) {
  const ghProfileLink = "https://github.com/" + gitHubUsername;
  const ghProfileTitle = "Check out @" + gitHubUsername + " on GitHub";
  return (
    <TrackedDiv id={gitHubUsername} className={clsx("card", styles.contributorCard)}>
      <TrackedDiv id={'contributor-card'}>
        <div className="card__header">
          <TrackedDiv id={'avatar'} className={clsx("avatar", styles.contributorAvatar)}>
            <TrackedLink href={ghProfileLink} title={ghProfileTitle}>
              <Avatar 
                githubHandle={gitHubUsername} 
                size='64'
                round={true} 
                name={name} 
                alt={name} 
                title={name} 
              />
            </TrackedLink>
          </TrackedDiv>
          <div className="avatar__intro">
            <TrackedDiv id={'avatar-subtitle'} className={clsx(styles.contributorAvatarSubtitle)}>
              <TrackedLink href={ghProfileLink} title={ghProfileTitle}>
                @{gitHubUsername}
              </TrackedLink>
            </TrackedDiv>
            <div className={clsx(styles.contributorName)}>
              {name}
            </div>
          </div>
        </div>
        <TrackedDiv id={'card-footer'} className={clsx("card__footer", styles.contributorFooter)}>
          <TrackedLink href={ghProfileLink} title={ghProfileTitle}>
            <img src={useBaseUrl('img/icons/icon-github.svg')} alt={ghProfileTitle} />
          </TrackedLink>
        </TrackedDiv>
      </TrackedDiv>
    </TrackedDiv>
  );
}

export default function AboutUs() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;

  return (
    <div>
      <Layout
        title={siteConfig?.title}
        description={siteConfig?.tagline}> {/*Description will go into a meta tag in <head />*/}

        <AnnouncementBar 
          title="We're Hiring!"
          content="Join our mission crew as a Data Scientist."
          ctaLink='/jobs'
          ctaText='Check the vacancy'
        />

        <header className={clsx('hero hero--primary', styles.aboutUsBanner)}>
          <div className={clsx('container', styles.contentContainer)}>
            <img
              src={useBaseUrl("img/icons/icon-data-heart-broken.svg")}
              alt="Icon: Database with a broken heart" />
            <h1>We needed better data</h1>
            <h2>
              About Objectiv and why we're here
            </h2>
            <p className={clsx('body-large')}>
              Objectiv started as a product analytics suite for enterprise that ran on existing analytics data 
              (from Google Analytics, Adobe Analytics, Mixpanel, etc.). We spent a significant amount of time 
              cleaning and reorganizing that data to get it to a point where we could use it for modeling. The 
              process was tedious and inefficient, so we started looking for better ways.
            </p>
          </div>
        </header>

        <main className={clsx(styles.aboutUsMain)}>
          <div className={clsx(styles.aboutUsPageSection, styles.pageSectionLightBlue)}>
            <div className={clsx("container", styles.contentContainer)}>
              <img
                src={useBaseUrl("img/icons/icon-raised-hands.svg")}
                alt="Icon: raised hands" />
              <h2>It wasn't just us</h2>
              <p>
                We asked around how fellow data scientists were handling this. Answers varied from 'manually' 
                to 'automated data ingestion pipelines with transformation workflows and automated testing', 
                but in all cases, significant data wrangling was involved and everyone had their own way of 
                doing it.
              </p>
              <p>
                There is a big gap between what data scientists want their data to look like for modeling and 
                what data actually looks like when it comes from the tracker. It often lacks the essential 
                context and structure required for effective feature creation and validation is done at a stage 
                where problems are hard to fix.
              </p>
              <p>
                Perhaps even more importantly, there is no common way to collect &amp; model data. Data teams 
                all have similar goals, but everyone builds their own schemas and models from scratch.
              </p>
            </div>
          </div>

          <div className={clsx(styles.aboutUsPageSection)}>
            <div className={clsx("container", styles.contentContainer)}>
              <img
                src={useBaseUrl("img/icons/icon-astronaut-dancing.svg")}
                alt="Icon: dancing astronaut" />
              <h2>We decided to take it on</h2>
              <p>
                We ultimately didn't succeed in significantly reducing data wrangling time with existing tech 
                and started thinking of building our own. It led to discussions about what the ultimate 
                workflow of data scientists would look like. Many of these discussions revolved around the 
                concept of a common taxonomy for analytics.
              </p>
              <p>
                We think data scientists could be much more efficient if there was a shared way to collect, 
                structure and label data. No longer would you have to define your schemas and models from 
                scratch; you could take what others have already made and build on that. You could jump into 
                other data projects and understand how the data was collected and what it means. You could get 
                to modeling quicker because the data has been validated at tracker level and collected with 
                modeling in mind.
              </p>
              <p>
                Establishing such a common taxonomy isn't trivial. Requirements vary and widespread adoption is 
                critical for success. Since early 2021, our team has worked tirelessly on what we think could 
                be the foundation of an open standard taxonomy for analytics, along with the required tools to 
                enable data scientists to use it effectively.
              </p>
            </div>
          </div>

          <TrackedDiv
            id={'why-us'}
            className={clsx(styles.aboutUsPageSection, styles.pageSectionLightBlue, styles.aboutUsPageWhyUs)}
          >
            <div className={clsx("container", styles.contentContainer)}>
              <h2>Why we think we're in the position to fix this</h2>

              <div className={clsx(styles.whyUsReason)}>
                <div>
                  <img
                    src={useBaseUrl("img/icons/icon-database-heart-mended.svg")}
                    alt="Icon: database heart mended" />
                </div>
                <div>
                  <strong>We care about this space</strong><br />
                  We know this space well and have grown to care about it after building analytics tools for 
                  over a decade. We've experienced its problems first hand and have a personal incentive to 
                  fix them.
                </div>
              </div>
              <div className={clsx(styles.whyUsReason)}>
                <div>
                  <img
                    src={useBaseUrl("img/icons/icon-rocket.svg")}
                    alt="Icon: rocket in flight" />
                </div>
                <div>
                  <strong>We have the right backing</strong><br />
                  We're backed by&nbsp;
                  <TrackedLink to="https://www.fly.vc/" external={true}>
                    Fly Ventures
                  </TrackedLink> &amp;&nbsp;
                  <TrackedLink to="https://localglobe.vc/" external={true}>
                    LocalGlobe
                  </TrackedLink>. They share our vision on the future of data science and have the right
                  experience &amp; network to help us execute our mission.
                </div>
              </div>
              <div className={clsx(styles.whyUsReason)}>
                <div>
                  <img
                    src={useBaseUrl("img/icons/icon-lego-blocks-stacked.svg")}
                    alt="Icon: lego blocks stacked" />
                </div>
                <div>
                  <strong>The playbook already exists</strong><br />
                  Reusing parts of what others have already built is common practise amongst software 
                  engineers, enabling them to build quality software much faster. The same can also be applied 
                  to data science.
                </div>
              </div>

            </div>
          </TrackedDiv>

          <TrackedDiv
            id={'core-team'}
            className={clsx(styles.aboutUsPageSection, styles.pageSectionYellow, styles.aboutUsPageContributors)}
          >
            <div className={clsx("container", styles.contentContainer)}>
              <h2>Objectiv's Core Team</h2>
              <p>
                Meet the mission crew. Also,&nbsp;
                <TrackedLink to="/jobs">
                  we're hiring a Data Scientist. Join us!
                </TrackedLink>
              </p>
            </div>
            <div className={clsx("container")}>
              {contributors && contributors.length > 0 && (
                <TrackedDiv id={'contributors'} className={clsx(styles.contributorCards)}>
                  {contributors.map((props, idx) => (
                    <Contributor key={idx} {...props} />
                  ))}
                </TrackedDiv>
              )}
            </div>
          </TrackedDiv>
        
        </main>
      </Layout>
    </div>
  );
}
