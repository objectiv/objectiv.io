import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { TrackedLink } from '../../objectiv/TrackedLink';

export default function JoinSlackLink({linkText='join us on Slack', trackingId='join-slack'}) {
  const {siteConfig} = useDocusaurusContext();
  const {slackJoinLink} = siteConfig.customFields;

  return <TrackedLink 
    id={trackingId}
    to={slackJoinLink as string}>
      {linkText}
  </TrackedLink>;
};
