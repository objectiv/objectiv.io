import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { tagLink, tagElement } from "@objectiv/tracker-browser";

export default function Jobs() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title='Jobs'
      description={siteConfig.tagline}>
      <header 
        className={clsx('hero hero--primary', styles.jobsHeader)}
        {...tagElement({id: 'header'})}
      >
        <div className={clsx('container', styles.jobsContainer)}>
          <h1>Currently Hiring: Senior Data Scientist / Engineer</h1>
        </div>
      </header>
      <main {...tagElement({id: 'main'})}>
        <div className={clsx('container', styles.jobsContainer)}>
          <h2> <img width="32px" src='/img/startup.svg' />  Our mission</h2>
          <p>It’s our dream to create the ultimate iterative workflow for data science that talks SQL. Let’s break that down.</p>

          <p>Building a great model as a data scientist happens in experimental iterations. That’s why so many of us live in Notebooks. The analytics data that you work on clearly does not fit a local machine, so it’s either working with samples, or spinning up complex data lakes. We believe there is so much development going on in the SQL space, that today it’s possible to create a single interactive &amp; experimental environment for the data scientist to build models, while iterating on the full dataset.</p>

          <p>We are building a workflow where the data scientist can perform any operation or basic model on a full SQL stored dataset, and get interactive results in a dataframe in a Notebook. Then, easily go back a few steps to any point in the DAG, apply some other operations or models again, and with a single click get the results back in a dataframe. From that point, have the full freedom to add any machine learning model on that.</p>

          <p>To make this all happen, we have started our journey in the space of product analytics. Creating a standardized taxonomy and validation that carries through a whole pipeline that ends all the way in the notebook. We see product analytics as a stepping stone in a much larger ambition. To create the dream experimental modelling workflow for data science.</p>

          <h2> <img width="32px" src='/img/cake.svg' />  So, where is the product?</h2>
          In a repository near you this fall. Our team is working hard to get the initial version ready. Then we will continue to develop in public.

          <h2> <img width="32px" src='/img/cap.svg' />  About the role</h2>
          <p>You will be joining an early team of 10 analytics enthusiasts that are together building a great product. The lines between data science, data engineering, frontend and ops are quite blurry in our team, as everyone is taking multiple parts of that.</p>

          <h2> <img width="32px" src='/img/id-card.svg' />  About you</h2>
          <p>This role is at the intersection of data science and data engineering. What we are looking for in this role:</p>
          <ul>
            <li>You speak Python and SQL fluently, and get excited about data engineering tech like dbt.</li>
            <li>You have at least 3 years of working experience in a data science or engineering role and ideally worked with analytics data.</li>
            <li>You have a master's degree in software engineering, math or something related.</li>
            <li>You have a can-do attitude. Even when the problem seems huge, you're able to chop it up and solve the chunks.</li>
            <li>You are fluent in English.</li>
            <li>This is a remote role in EU timezone with regular team offsites in The Netherlands.</li>
          </ul>

          <h2> <img width="32px" src='/img/premium.svg' />  What we offer</h2>
          <p>A role in a super driven and experienced team that is on a mission. Our team has over a decade of experience in analytics and has made it their core focus to build the best possible workflow for data science. Thanks to the support of Fly Ventures &amp; LocalGlobe we can focus on the long-term and take the time to get the product just right. They were also the early backers of startups like Figma, Tessian and Robinhood.</p>

          <p>Early days in the product, where you will be able to leave your mark in the open-source community for data science. Our goals are very ambitious and this will allow you to grow with the company.</p>

          <p>Like what you have read and think you meet the mark? Then&nbsp;
          <Link
            to={'mailto:jobs@objectiv.io'}
            {...tagLink({ id: 'hear-from-you', text: "we'd love to hear from you", href: 'mailto:jobs@objectiv.io' })}
          >
            we'd love to hear from you
          </Link>
          .</p>
        </div>
      </main>
    </Layout>
  );
}
