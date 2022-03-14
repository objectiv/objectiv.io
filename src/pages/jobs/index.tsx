import useBaseUrl from '@docusaurus/useBaseUrl';
import { TrackedDiv } from "@objectiv/tracker-react";
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { TrackedLink } from "../../trackedComponents/TrackedLink";
import styles from './styles.module.css';

export default function Jobs() {
  const context = useDocusaurusContext();
  const {url, tagline} = context.siteConfig;

  return (
    <div>
      <Layout
        title='Jobs'
        description={tagline}>
        
        <header className={clsx('hero hero--primary', styles.jobsHeader)}>
          <div className={clsx('container', styles.jobsContainer)}>
            <h1>Currently Hiring: Data Scientist</h1>
          </div>
        </header>

        <main>
          <div className={clsx('container', styles.jobsContainer)}>
            <p>With Objectiv, we’re building open-source product analytics, designed for data science.</p>
            <p>We are looking for an experienced Data Scientist that wants to help unify the way data 
              scientists collect &amp; model product analytics data.</p>

            <h2><img width="32px" src='/img/icons/icon-startup.svg' alt='Our mission' /> Our mission</h2>
            <p>We're on a mission to unify the way data scientists collect &amp; model product analytics data.
              Every DS team in every company is defining how to collect, structure, clean and model data in a silo, while
              their modeling goals are so similar. We’d like to give data scientists what engineers already 
              had for a long time: the ability to reuse, take off-the-shelf and contribute to modeling work 
              of others.</p>

            <TrackedDiv id={'the-project'}>
              <h2><img width="32px" src='/img/icons/icon-cake.svg' alt='The project'/>The project</h2>
              <p>Objectiv just soft launched the open-source project that goes after our mission. Right now 
                we are collecting very valuable feedback from a group of experienced DS teams. We use this to 
                iterate on the short term roadmap and will shortly move more into the public, step-by-step. 
                See our&nbsp;
                <TrackedLink
                  to="/"
                  target="_self"
                >
                  site
                </TrackedLink>,&nbsp;
                <TrackedLink
                  to={useBaseUrl("/docs/", {absolute: true})}
                  waitUntilTracked={true}
                  target="_self"
                >
                  docs
                </TrackedLink> and&nbsp;
                <TrackedLink
                  to="https://github.com/objectiv/objectiv-analytics"
                  waitUntilTracked={true}
                  target="_self"
                >
                  repo
                </TrackedLink>
                &nbsp;for a rundown on where we are. You can also spin up a local docker demo of the full 
                pipeline in the quickstart.
              </p>
            </TrackedDiv>

            <h2><img width="32px" src='/img/icons/icon-cap.svg' alt='The team' /> The role</h2>
            <p>The key part of the project that is directly used by data scientists, is the&nbsp;
              <TrackedLink
                to={useBaseUrl("/docs/modeling/", {absolute: true})}
                waitUntilTracked={true}
                target="_self"
              >
                open model hub
              </TrackedLink>.
              This is a collection of pre-built models that can run out of the box on data collected using the&nbsp;
              <TrackedLink
                to={useBaseUrl("/docs/taxonomy/", {absolute: true})}
                waitUntilTracked={true}
                target="_self"
              >
                open analytics taxonomy
              </TrackedLink>.
              </p>
            <p>It is key to our strategy to make sure this model hub contains high quality models that suit
              many common analytics use cases. Think of these models as lego blocks; we want DS teams to 
              reuse, stack, and interchange them in any way and continue to build advanced ML on top of 
              it.</p> 
            <p>Right now, we have basic models for common analytics use-cases like retention, conversion, 
              duration, etc. But our ambition goes much, much further. So we are looking for someone that is 
              very experienced in building generic models and has a strong opinion on how these should work 
              and which should be usable for anyone.</p>

            <h2><img width="32px" src='/img/icons/icon-id-card.svg' alt='About you' /> About you</h2>
            <p>What we are looking for in this role:</p>
            <ul>
              <li>You are an expert in Pandas and SQL.</li>
              <li>You have hands-on experience building great machine learning models, and using libraries 
                like scikit-learn and others extensively.</li>
              <li>You have at least 5 years of working experience in a data science role working with 
                product analytics data.</li>
              <li>You have built many models for many analytics use-cases.</li>
              <li>You have a master's degree in data science, software engineering, math, physics or 
                something related.</li>
              <li>You have a can-do attitude. Even when the problem seems huge, you're able to chop it up and 
                solve the chunks.</li>
              <li>You are fluent in English.</li>
              <li>This is a remote role in EU timezone with quarterly team offsites in The Netherlands.</li>
            </ul>

            <h2><img width="32px" src='/img/icons/icon-video-call.svg' alt='Our work setup' /> Our work 
              setup</h2>
            <p>We have a battle-tested remote-friendly work setup: daily video standups, Tuesdays for 
              all-team updates, syncs and making decisions on how to move forward together, and Virtual 
              Fridays to close a week of head work together and head into the weekend. We also bring the team 
              together f2f on a quarterly basis for outings.</p>
            <p>We don't care when work is being done, we care about what is being done. So our team is used 
              to taking exercise breaks or spending family time during the day and then getting stuff done in 
              the evening. Things like that.</p>

            <TrackedDiv id={'what-we-offer'}>
              <h2><img width="32px" src='/img/icons/icon-premium.svg' alt='What we offer' /> What we offer</h2>
              <p>A role in a super motivated and experienced team that is on a mission. Our team has over a 
                decade of experience in analytics and has made it their core focus to build the best possible 
                workflow for data science. Thanks to the support of&nbsp; 
                <TrackedLink
                  to="https://www.fly.vc/"
                  waitUntilTracked={true}>
                  Fly Ventures
                </TrackedLink> &amp;&nbsp;
                <TrackedLink
                  to="https://localglobe.vc/"
                  waitUntilTracked={true}>
                  LocalGlobe
                </TrackedLink> we can focus on the long-term and take the time to get the product just right. They
                were also the early backers of startups like Figma, Tessian and Robinhood.</p>
              <p>Join us in the early days of the product, where you will be able to leave your mark in the 
                open-source community for data science. Our goals are very ambitious and this will allow you to 
                grow with the company.</p>
              <p>Like what you have read and think you meet the mark? Then&nbsp;
              <TrackedLink to={'mailto:jobs@objectiv.io'}>
                we'd love to hear from you
              </TrackedLink>
              .</p>
            </TrackedDiv>
            
          </div>
        </main>

      </Layout>
    </div>
  );
}