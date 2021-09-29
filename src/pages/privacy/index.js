import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { tagElement } from '@objectiv/tracker-browser';

export default function PrivacyPolicy() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title='Privacy Policy'
      description={siteConfig.tagline}>
      <header 
        className={clsx('hero hero--primary', styles.heroBanner)}
        {...tagElement({id: 'header'})}
      >
        <div className={clsx('container', styles.cookiesContainer)}>
          <h1>Privacy Policy</h1>
          <em>Last Updated 2021-08-18</em>

          <h2>Objectiv Privacy Policy</h2>
          <p>Objectiv B.V. (together with its affiliates, including entities listed in Section 10 of this policy, "Objectiv" or "Us/We/Our") cares about the privacy of individuals who visit our website.This Privacy Policy explains how Objectiv collects, uses, processes, discloses, and safeguards information we obtain from and about our customers, visitors to our websitesSites, and business prospects and partners (collectively, "You"), including information we collect when you visit our websites (our "Services"). It also tells you about your rights and choices with respect to your information, and how you can contact us if you have any questions or concerns. Your use of the Services is subject to this Privacy Policy that can be viewed at <Link to="https://objectiv.io/privacy">https://objectiv.io/privacy</Link>.</p>

          <h2>1. How Objectiv Collects Information</h2>
          <p>
            For the purpose of this Privacy Policy, "Personal Information" means any information relating to an identified or identifiable individual. We obtain Personal Information relating to you from various sources described below.
          </p>
          <p>
            Where applicable, we indicate whether and why you must provide us with Personal Information, as well as the consequences of failing to do so. If you do not provide Personal Information when requested, you may not be able to benefit from our Services if that information is necessary to provide you with the service or if we are legally required to collect it.
          </p>

          <h3>i. Personal Information Provided by You</h3>
          <h4>Registration and Other Information You Provide</h4>
          <p>
            We collect your information, including your sign-in credentials, name, email address and phone number, when you register to use our Services, request that we contact you or provide additional information to you, or attend an event. Some of our pages (such as those accepting job applications) utilize framing techniques to serve content from our partners while preserving the look and feel of our websites. Please be aware that you are providing your Personal Information to these third parties and not to Objectiv.
          </p>
          <h4>Communications</h4>
          <p>
            If you contact us directly, such as to request information or access to the Services, or for Support, we may receive additional information about you, such as your contact information and the contents of your communication. We may receive information when you complete a form on our websites.
          </p>

          <h3>ii. Information We Collect When You Use the Services</h3>
          <h4>Device Information</h4>
          <p>
            We receive information about your device, including IP address, web browser type, operating system version, mobile device model, device manufacturer and model, language codes, your Internet Service Provider (ISP), unique device identifiers.
          </p>
          <h4>Usage Information</h4>
          <p>
            We automatically receive information about your interactions with our Services, like the pages or other content you view, the dates and times of your interactions, the searches you conduct, how often you use our Services.
          </p>
          <h4>Location Data</h4>
          <p>
            We may infer your location from information we collect (for example, your IP address indicates the general geographic region from which you are connecting to the Internet). We may use location information to provide you with features, notifications, marketing, or other content that is influenced by your location (such as showing you the Services in your local language).
          </p>
          <h4>Cookies and Related Technologies</h4>
          <p>
            A cookie is a text-only string of information that a website transfers to the cookie file of the browser on your computer or mobile device. When you use our Services, we and our third party service providers may collect information from you through cookies, web beacons, web server logs, and similar technologies. See our Cookie Policy on https://objectiv.io/privacy/cookies
          </p>
          <p>
            We partner with third parties to manage our advertising on other sites. Our third party partners may use technologies such as cookies to gather information about your activities on this website and other sites in order to provide you advertising based upon your browsing activities and interests. Some of our advertising partners are members of the <Link to="http://www.networkadvertising.org/choices/">Network Advertising Initiative</Link> or the <Link to="http://www.aboutads.info/choices/">Digital Advertising Alliance</Link>. If you do not wish to receive our personalized ads, please visit their opt-out pages to learn about how you may opt out of receiving personalized ads from member companies (or if located in the European Union, <Link to="http://www.youronlinechoices.eu/">click here</Link>). Please note this does not opt you out of being served ads. You will continue to receive generic ads.
          </p>
          <p>
            Our Services may include links, features or components supplied by third parties, such as the Facebook "Like" button or other interactive tools. Such third-parties may have information practices different than those set forth herein and their use of cookies and similar technologies is not covered by this Privacy Policy. We do not have access to or control over such third parties and encourage you to consult the privacy notices provided by those third parties.
          </p>
          <h3>iii. Information We Obtain From Third Parties</h3>
          <p>
            We may receive information about you from our third party partners, such as business or marketing partners. We may combine this information with the other information we collect about you to provide more useful information to you regarding our services. 
          </p>
          <p>
            We also receive information when you register through an Objectiv partner (e.g., a partner who co-hosts an event, webinar, or whitepaper).
          </p>

          <h2>2. How Objectiv Uses Information</h2>
          <p>Objectiv will use information, including Personal Information, for the following purposes:</p>
          <h3>Providing the Service</h3>
          <p>We use your information to provide, enhance, improve, and personalize our Services.</p>
          <h3>Analytics</h3>
          <p>We will use your information to understand and analyze how you use our Services.</p>
          <h3>Marketing and Advertising</h3>
          <p>We will use your information for marketing purposes, such as contacting you about Objectiv’s products and services, providing you with promotional materials that may be useful, relevant, valuable or otherwise of interest to you. We use Personal Information that we collect in connection with the Services, such as your location and your activities on the Services, to determine whether Objectiv may wish to contact you in order to offer you Objectiv’s services and to facilitate the delivery of advertisements. We may send you (a) information about topics or content that we think may interest you, or (b) updates about the latest developments or features on the Services. We also may send a newsletter or similar materials to the email address you provide to us in the event that you subscribe to receive such a newsletter</p>
          <h3>Communications</h3>
          <p>
            Objectiv will use your information to communicate with you, including to respond to your inquiries and to send emails to an email address you provide to us for customer-service or technical-support purposes.
          </p>
          <p>
            If you are located in the European Economic Area, we only process your Personal Information based on a valid legal ground, including when:
          </p>
          <ul>
            <li>You have consented to the use of your Personal Information, for example, to receive marketing communications. You may withdraw any consent you previously provided to us regarding the processing of your Personal Information, at any time and free of charge. We will apply your preferences going forward and this will not affect the lawfulness of the processing before your consent withdrawal;</li>
            <li>We need your Personal Information to provide you with the Services, including for account registration, or to respond to your inquiries;</li>
            <li>We have a legal obligation to use your Personal Information; and</li>
            <li>We or a third party, have a legitimate interest in using your Personal Information. In particular, we have a legitimate interest in using your Personal Information to conduct business analytics, and otherwise improve the safety, security, and performance of our Services.</li>
          </ul>

          <h2>3. How Objectiv Discloses Information</h2>
          <h3>Service Providers</h3>
          <p>
            We may share your information with our vendors, service providers, and other third parties that perform services on our behalf.
          </p>
          <h3>Advertising Partners</h3>
          <p>
            Objectiv may work with and share your Personal Information with our third party advertising partners to provide you with advertisements regarding Objectiv’s Services. For more information about our advertising and marketing practices and those of the third party advertising partners, please see the Cookies and Related Technologies section above.
          </p>
          <h3>As Required by Law and Similar Disclosures</h3>
          <p>
            We may disclose information about you: (i) if we are required to do so by law, regulation, or legal process, such as a court order or subpoena; (ii) in response to requests by government agencies, such as law enforcement authorities; (iii) when we believe disclosure is necessary or appropriate to protect against or respond to physical, financial or other harm, injury, or loss to property; or (iv) in connection with an investigation of suspected or actual unlawful activity.
          </p>
          <h3>Consent</h3>
          <p>Objectiv may further disclose your Personal Information with your consent.</p>

          <h2>4. Transfer to Other Countries</h2>
          <p>
            If you are using the Services from regions with laws governing data collection and use, then please note that we may transfer your Personal information to multiple countries throughout the world, including the United States. These countries may not have the same data protection laws as the country in which you initially provided the information. By providing your Personal Information to the Service, you consent to any transfer and processing in accordance with this Policy.
          </p>
          <p>
            If you are located in the EEA or Switzerland, we comply with applicable data protection law when transferring your Personal Information outside of this area. In particular, we may transfer your Personal Information to countries for which adequacy decisions have been issued, use contractual protections for the transfer of Personal Information to third parties, such as the European Commission’s Standard Contractual Clauses, or rely on third parties’ certification to the EU-U.S. or Swiss-U.S. Privacy Shield frameworks, where applicable. You may contact us as specified below to obtain a copy of the safeguards we use to transfer Personal Information outside of the EEA.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We take measures to delete your Personal Information or keep it in a form that does not permit identifying you when this information is no longer necessary for the purposes for which we process it, unless we are required by law to keep this information for a longer period or to, or such information is necessary to resolve disputes and enforce our agreements. When determining the retention period, we take into account various criteria, such as the type of products and services requested by or provided to you, the nature and length of our relationship with you, possible re-enrolment with our products or services, the impact on the services we provide if we delete some information from or about you, mandatory retention periods provided by law and the statute of limitations.
          </p>

          <h2>6. Our Commitment to Security</h2>
          <p>
            Objectiv employs a variety of security technologies and procedures designed to help prevent unauthorized disclosure of, access to and use of Information that Objectiv collects or receives. However, Objectiv cannot guarantee the security of your Information.
          </p>

          <h2>8. Do Not Track</h2>
          <p>
            Some web browsers incorporate a "Do Not Track" feature. Because there is not yet an accepted standard for how to respond to Do Not Track signals, our website does not currently respond to such signals.
          </p>

          <h2>9. Your Rights and Choices</h2>
          <h3>Global Rights</h3>
          <p>
            Upon request, Objectiv will provide you with information about whether we hold any of your Personal Information. You can update or correct Personal Information (e.g., your email address) by accessing your account. You can also access or rectify your information by reaching out to us at <Link to="mailto:legal@objectiv.io">legal@objectiv.io</Link> . You can delete your information by sending an email with subject ‘Forget me’ to <Link to="mailto:legal@objectiv.io">legal@objectiv.io</Link> with your first name, last name, and the respective email addresses you would like for us to delete. To opt-out of receiving our newsletters or marketing emails, you can follow the unsubscribe instructions included in the emails communications you receive, access the email preferences in your account settings page, or contact us at the above email address. Please note that we have the right to reject deletion requests that are unduly burdensome or repetitive or that cannot be honored in light of legal obligations or ongoing disputes, or where retention is necessary to enforce our agreements or protect our or another party’s rights, property, safety, or security.
          </p>
          <h3>European Rights</h3>
          <p>
            If you are located in the European Economic Area or Switzerland, you may have the right to exercise your right to data portability to easily transfer your Personal Information to another company. In addition, you may also have the right to lodge a complaint with a supervisory authority, including in your country of residence, place of work or where an incident took place.
          </p>

          <h2>10. How to Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or its implementation, you may contact Objectiv via email (<Link to="mailto:legal@objectiv.io">legal@objectiv.io</Link>) or at the following address:
          </p>
          <p>
            Objectiv B.V.<br />
            Hamburgerstraat 28a<br />
            3512NS Utrecht<br />
            The Netherlands<br />
            <Link to="mailto:legal@objectiv.io">legal@objectiv.io</Link> 
          </p>
          <p>
            Objectiv’s Data Protection Officer may be contacted via email (<a href="mailto:legal@objectiv.io">legal@objectiv.io</a>) or at the following address:
          </p>
          <p>
            Objectiv B.V.<br />
            ATTN: Tom Jansen<br />
            Hamburgerstraat 28a<br />
            3512NS Utrecht<br />
            The Netherlands<br />
            <Link to="mailto:legal@objectiv.io">legal@objectiv.io</Link> 
          </p>
          <p>
            If you are located in the EEA or Switzerland, Objectiv, B.V. is the entity responsible for the processing of your Personal Information. If you have any questions about our privacy practices, or would like to exercise your rights in relation to your Personal Information, please contact:
          </p>
          <p>
            Objectiv B.V.<br />
            Hamburgerstraat 28a<br />
            3512NS Utrecht<br />
            The Netherlands<br />
            <Link to="mailto:legal@objectiv.io">legal@objectiv.io</Link> 
          </p>

          <h2>Updates to this Privacy Policy</h2>
          <p>
            We will post any adjustments to this Privacy Policy on this page, and the revised version will be effective when it is posted. If we materially change the ways in which we use or share Personal Information previously collected from you through our Service, we will notify you through our Service, by email, or other communication.
          </p>
        </div>
      </header>
    </Layout>
  );
}
