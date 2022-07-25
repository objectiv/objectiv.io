import { TrackedDiv } from "@objectiv/tracker-react";
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Avatar from 'react-avatar';
import { TrackedLink } from "../../objectiv/TrackedLink";
import styles from './styles.module.css';

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

        <header className={clsx('hero hero--primary', styles.aboutUsBanner)}>
          <div className={clsx('container', styles.contentContainer)}>
            <img
              src={useBaseUrl("img/icons/icon-database-heart-mended-lrg.svg")}
              alt="Icon: Database with a heart" />
            <h1>About us</h1>
          </div>
        </header>

        <main className={clsx(styles.aboutUsMain)}>
          
          <div className={clsx(styles.aboutUsPageSection)}>
            <div className={clsx("container", styles.contentContainer)}>
              <p>
                Team Objectiv is a tight group of dedicated data geeks that has been solving hard analytics problems for over 13 years. 
              </p>
              <p>
              With Distimo, we pioneered app store analytics by building models that predicted app store market trends. We also found 
              ways to reliably extrapolate app usage behavior from datasets that were collected from a panel of users. Distimo 
              was acquired by App Annie, now called Data.ai.
              </p>
              <p>
              With Objectiv, we're on a big mission. We want to take analytics out of closed, black-boxed SaaS tools and into an 
              open ecosystem.  We see a future where models, analyses and tools can all be shared and reused. Where data teams push 
              the boundaries by building on the collective knowledge of others instead of creating everything from scratch.
              </p>
            </div>
          </div>

          <TrackedDiv
            id={'why-us'}
            className={clsx(styles.aboutUsPageSection, styles.aboutUsPageSectionLightGrey, styles.aboutUsPageWhyUs)}
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
                  <TrackedLink to="https://www.fly.vc/" waitUntilTracked={true}>
                    Fly Ventures
                  </TrackedLink> &amp;&nbsp;
                  <TrackedLink to="https://localglobe.vc/" waitUntilTracked={true}>
                    LocalGlobe
                  </TrackedLink>. They share our vision on the future of analytics and have the right
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
            className={clsx(styles.aboutUsPageSection, styles.aboutUsPageContributors)}
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
