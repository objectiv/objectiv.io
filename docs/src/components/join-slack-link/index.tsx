import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { tagLink } from '@objectiv/tracker-browser';

export default function JoinSlackLink({linkText='join us on Slack', trackingId='join-slack'}) {
  const {siteConfig} = useDocusaurusContext();
  const {slackJoinLink} = siteConfig.customFields;

  return <Link 
    {...tagLink({id: trackingId, href: slackJoinLink as string}) }
    to={slackJoinLink as string}>
      {linkText}
  </Link>;
};

