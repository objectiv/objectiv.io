import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { tagLink, tagElement } from "@objectiv/tracker-browser";

export default function Jobs() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;
  return (
    <div {...tagElement({id: 'page-jobs'})}>
      <Layout
        title='Jobs'
        description={siteConfig?.tagline}>
        <header 
          className={clsx('hero hero--primary', styles.jobsHeader)}
          {...tagElement({id: 'header'})}
        >
          <div className={clsx('container', styles.jobsContainer)}>
            <h1>Currently Hiring: Senior Software Engineer</h1>
          </div>
        </header>
        <main {...tagElement({id: 'main'})}>
          <div className={clsx('container', styles.jobsContainer)}>
            <p>Objectiv is looking for a Senior Software Engineer to join our crew, a team of experienced 
              software engineers and data scientists on a mission to create the ultimate workflow for the 
              data scientist.</p>
            <p>After almost a year of hard work, we've just released the first public version of our data 
              collection &amp; modeling library. One of its major components is Bach, a data modeling library 
              that enables you to compose models with familiar Pandas-like dataframe operations in your 
              notebook. It uses an SQL abstraction layer that enables models to run on the full dataset, and 
              you can output models to SQL with a single command.</p>
            <p>It includes a set of operations that enable effective feature creation for datasets that 
              embrace the open taxonomy of analytics, which is our proposal for a common way to collect, 
              structure and validate data so models &amp; data can be reused, and data scientists can build 
              on the knowledge and practices of others.</p>
            <p>If that excites you, you’ll be glad to hear we have big plans for Bach, and are looking for 
              able hands to help us execute them.</p>

            <div {...tagElement({ id: 'the-project' })}>
              <h2><img width="32px" src='/img/icons/icon-cake.svg' alt='The project'/>The project</h2>
              <p>Objectiv is an open-source project. We are developing it in public under the Apache 2.0 
                License. Check out our&nbsp;
                <Link
                  to="https://github.com/objectiv/objectiv-analytics" 
                  {...tagLink({
                      id: 'github-repo', 
                      href: 'https://github.com/objectiv/objectiv-analytics', 
                      text: 'GitHub repo',
                      options: {
                        trackClicks: {
                          waitUntilTracked: true
                        }
                      }
                    })
                  }
                  target="_self"
                >
                  GitHub repo
                </Link>
                &nbsp;or the&nbsp;
                <Link 
                  to="https://objectiv.io/docs/" 
                  {...tagLink({
                      id: 'docs', 
                      href: '/docs/', 
                      text: 'Objectiv Docs',
                      options: {
                        trackClicks: {
                          waitUntilTracked: true
                        }
                      }
                    }
                  )}
                  target="_self">
                    Objectiv Docs
                </Link> for details.</p>
            </div>

            <h2><img width="32px" src='/img/icons/icon-cap.svg' alt='The team' /> The team</h2>
            <p>You will be joining an early team of 10 analytics enthusiasts that are together building a great 
              product. The lines between data science, data engineering, frontend and ops are quite blurry in 
              our team, as everyone is taking multiple parts of that.</p>

            <h2><img width="32px" src='/img/icons/icon-id-card.svg' alt='About you' /> About you</h2>
            <p>This role is at the intersection of engineering &amp; data science. What we are looking for in 
              this role:</p>
            <ul>
              <li>You have at least 5 years of working experience in a software engineering role, and are an 
                expert in Python.</li>
              <li>You have strong affinity with the data science side of things; worked actively in notebooks, 
                set up analytics pipelines, created models from scratch, etc.</li>
              <li>You get excited about data engineering tech like dbt or Meltano.</li>
              <li>You have a master’s degree in software engineering, math, physics, data science, or something 
                related.</li>
              <li>You have a can-do attitude. Even when the problem seems huge, you're able to chop it up and 
                solve the chunks.</li>
              <li>You are fluent in English.</li>
              <li>This is a remote role in EU timezone with regular team offsites in The Netherlands.</li>
            </ul>

            <h2><img width="32px" src='/img/icons/icon-video-call.svg' alt='Our work setup' /> Our work setup</h2>
            <p>We have a battle-tested remote-friendly work setup: daily video standups, and Tuesdays for all-team
              updates, syncs and making decisions on how to move forward together. We also bring the team together 
              f2f on a quarterly basis for outings.</p>
            <p>We don’t care when work is being done, we care about what is being done. So our team is used to 
              taking exercise breaks or spending family time during the day and then getting stuff done in the 
              evening. Things like that.</p>
            <p>On a regular basis we meet for a team offsite and make sure there is always something to 
              celebrate together.</p>

            <h2><img width="32px" src='/img/icons/icon-premium.svg' alt='What we offer' /> What we offer</h2>
            <p>A role in a super driven and experienced team that is on a mission. Our team has over a decade 
              of experience in analytics and has made it their core focus to build the best possible workflow 
              for data science. Thanks to the support of &nbsp; 
              <Link 
                to="https://www.fly.vc/"
                {...tagLink({ id: 'vc-fly', text: 'Fly Ventures', href: 'https://www.fly.vc/' })}>
                Fly Ventures
              </Link> &amp; &nbsp; 
              <Link 
                to="https://localglobe.vc/"
                {...tagLink({ id: 'vc-localglobe', text: 'LocalGlobe', href: 'https://localglobe.vc/' })}>
                LocalGlobe
              </Link> we can focus on the long-term and take the 
              time to get the product just right. They were also the early backers of startups like Figma, 
              Tessian and Robinhood.</p>
            <p>Early days in the product, where you will be able to leave your mark in the open-source 
              community for data science. Our goals are very ambitious and this will allow you to grow with the 
              company. </p>
            <p>Like what you have read and think you meet the mark? Then&nbsp;
            <Link
              to={'mailto:jobs@objectiv.io'}
              {...tagLink({ id: 'hear-from-you', text: "we'd love to hear from you", 
                href: 'mailto:jobs@objectiv.io' })}>
              we'd love to hear from you
            </Link>
            .</p>
          </div>
        </main>
      </Layout>
    </div>
  );
}
