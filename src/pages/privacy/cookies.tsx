import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { CookieBannerContext } from "../../objectiv/CookieBanner";
import { TrackedLink } from "../../objectiv/TrackedLink";
import styles from './styles.module.css';

export default function Cookies() {
  const { siteConfig: { tagline } } = useDocusaurusContext();
  const { resetCookieConsent } = useContext(CookieBannerContext)

  return (
    <div>
      <Layout
        title='Cookies Policy'
        description={tagline}>
        <main className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className={clsx('container', styles.cookiesContainer)}>
            <h1>Why do we use Cookies?</h1>
            Objectiv uses cookies, web beacons and other similar technologies to:
            <ul>
              <li>Help you access and use the website;</li>
              <li>Understand how visitors use and engage with our website;</li>
              <li>Set your preferences;</li>
              <li>Deliver relevant interest-based advertising;</li>
              <li>Analyze and improve our website.</li>
            </ul>

            <h1>Who sets Cookies?</h1>
            <p>The cookies are sometimes placed by Objectiv and sometimes they are placed by our service 
              providers. When cookies are placed by service providers, they are providing a service or 
              function to Objectiv, but Objectiv cannot control how those service provider cookies are 
              used.</p>

            <h1>How do I manage my Cookies?</h1>
            <p>You have the option to opt-out and disable most cookies that we use on our website. However, 
              the disabling of cookies may cause certain features of the website not to function properly. 
              Any cookies that are considered strictly necessary, which are those that are essential for the 
              website to operate, cannot be disabled.</p>

            <a
              href={'#'}
              onClick={event => {
                event.preventDefault();
                resetCookieConsent();
                return false;
              }}
            >
              {/* TODO: make a nicer modal dialog for these cases, aside from the banner itself */}
              Reset cookie consent
            </a>

            <h1>How do I opt out of interest-based advertising through self-regulatory programs?</h1>
            <p>Service providers may participate in self-regulatory programs that provide ways to opt out of 
              analytics and interest-based advertising, which you can access at:</p>
            <ul>
              <li>
                United States: NAI (<TrackedLink to="https://optout.networkadvertising.org" waitUntilTracked={true}>
                https://optout.networkadvertising.org/</TrackedLink>) and DAA
                (<TrackedLink to="https://optout.aboutads.info/" waitUntilTracked={true}>
                  https://optout.aboutads.info/
                </TrackedLink>).
              </li>
              <li>
                Canada: Digital Advertising Alliance of Canada 
                (<TrackedLink to="https://youradchoices.ca/" waitUntilTracked={true}>
                  https://youradchoices.ca/
                </TrackedLink>).
              </li>
              <li>
                Europe: European Digital Advertising Alliance 
                (<TrackedLink to="https://www.youronlinechoices.com/" waitUntilTracked={true}>
                  https://www.youronlinechoices.com/
                </TrackedLink>).
              </li>
            </ul>

            <h1>How do I manage mobile advertising IDs?</h1>
            <p>On mobile devices, advertising IDs provided by the platform may be collected and used similar 
              to cookie IDs. You may use the controls on iOS and Android operating systems that allow you to 
              limit tracking and/or reset the advertising IDs.</p>

            <h1>How do I control email web beacons?</h1>
            <p>Most email clients have settings which allow you to prevent the automatic downloading of 
              images, which will disable web beacons in the email messages you read.</p>

          </div>
        </main>
      </Layout>
    </div>
  );
}