import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Avatar from 'react-avatar';
import styles from './styles.module.css';
import AnnouncementBar from '../components/announcement-bar';
import { tagLink, tagElement } from "@objectiv/tracker-browser";

let contributors = require('./contributors.json');

function Contributor({name, gitHubUsername}) {
  const ghProfileLink = "https://github.com/" + gitHubUsername;
  const ghProfileTitle = "Check out @" + gitHubUsername + " on GitHub";
  return (
    <div 
      className={clsx("card", styles.contributorCard)}
      {...tagElement({id: gitHubUsername})}
    >
      <div {...tagElement({id: 'contributor-card'})}>
        <div className="card__header">
          <div 
            className={clsx("avatar", styles.contributorAvatar)}
            {...tagElement({id: 'avatar'})}
          >
            <Link 
              {...tagLink({id: gitHubUsername, text: '@'+gitHubUsername, href: ghProfileLink})}
              href={ghProfileLink} 
              title={ghProfileTitle}
            >
              <Avatar 
                githubHandle={gitHubUsername} 
                size='64'
                round={true} 
                name={name} 
                alt={name} 
                title={name} 
              />
            </Link>
          </div>
          <div className="avatar__intro">
            <div 
              className={clsx(styles.contributorAvatarSubtitle)}
              {...tagElement({id: 'avatar-subtitle'})}
            >
              <Link 
                {...tagLink({id: gitHubUsername, text: '@'+gitHubUsername, href: ghProfileLink})}
                href={ghProfileLink} 
                title={ghProfileTitle}
              >
                @{gitHubUsername}
              </Link>
            </div>
            <div className={clsx(styles.contributorName)}>
              {name}
            </div>
          </div>
        </div>
        <div 
          className={clsx("card__footer", styles.contributorFooter)}
          {...tagElement({id: 'card-footer'})}
        >
          <Link 
            {...tagLink({id: gitHubUsername, text: '@'+gitHubUsername, href: ghProfileLink})}
            href={ghProfileLink} 
            title={ghProfileTitle}
          >
            <img src={useBaseUrl('img/icons/icon-github.svg')} alt={ghProfileTitle} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;

  return (
    <div {...tagElement({id: 'page-about'})}>
      <Layout
        title={siteConfig?.title}
        description={siteConfig?.tagline}> {/*Description will go into a meta tag in <head />*/}

        <AnnouncementBar 
          title="We're Hiring!"
          content="Join our mission crew as a Data Scientist."
          ctaLink='/jobs'
          ctaText='Check the vacancy'
        />

        <header
          className={clsx('hero hero--primary', styles.aboutUsBanner)}
          {...tagElement({id: 'header'})}
        >
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

        <main
          className={clsx(styles.aboutUsMain)}
          {...tagElement({id: 'main'})}
        >
          <div
            className={clsx(styles.aboutUsPageSection, styles.pageSectionLightBlue)}
            {...tagElement({id: 'not-just-us'})}
          >
            <div className={clsx("container", styles.contentContainer)}>
              <img
                src={useBaseUrl("img/icons/icon-raised-hands.svg")}
                alt="Icon: raised hands" />
              <h2>It wasn't just us</h2>
              <p>
                We asked around how fellow data scientists were handling this. Answers varied from ‘manually’ 
                to ‘automated data ingestion pipelines with transformation workflows and automated testing’, 
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

          <div
            className={clsx(styles.aboutUsPageSection)}
            {...tagElement({id: 'we-will-take-it-on'})}
          >
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

          <div
            className={clsx(styles.aboutUsPageSection, styles.pageSectionLightBlue, styles.aboutUsPageWhyUs)}
            {...tagElement({id: 'why-us'})}
          >
            <div className={clsx("container", styles.contentContainer)}>
              <h2>Why we think we’re in the position to fix this</h2>

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
                  <Link 
                    to="https://www.fly.vc/"
                    {...tagLink({ id: 'vc-fly', text: 'Fly Ventures', href: 'https://www.fly.vc/' })}>
                    Fly Ventures
                  </Link> &amp;&nbsp; 
                  <Link 
                    to="https://localglobe.vc/"
                    {...tagLink({ id: 'vc-localglobe', text: 'LocalGlobe', href: 'https://localglobe.vc/' })}>
                    LocalGlobe
                  </Link>. They share our vision on the future of data science and have the right 
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
          </div>

          <div
            className={clsx(styles.aboutUsPageSection, styles.pageSectionYellow, 
              styles.aboutUsPageContributors)}
            {...tagElement({id: 'core-team'})}
          >
            <div className={clsx("container", styles.contentContainer)}>
              <h2>Objectiv's Core Team</h2>
              <p>
                Meet the mission crew. Also,&nbsp;
                <Link
                  to="/jobs"
                  {...tagLink({ id: 'hiring', text: "we're hiring a Data Scientist. Join us!", 
                  href: '/jobs' })}
                >
                  we're hiring a Data Scientist. Join us!
                </Link>
              </p>
            </div>
            <div 
              className={clsx("container")}

            >
              {contributors && contributors.length > 0 && (
                <div {...tagElement({id: 'contributors'})} className={clsx(styles.contributorCards)}>
                  {contributors.map((props, idx) => (
                    <Contributor key={idx} {...props} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
