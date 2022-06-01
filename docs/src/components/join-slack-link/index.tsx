import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { TrackedLink } from '../../trackedComponents/TrackedLink';

export default function JoinSlackLink({linkText='join us on Slack', trackingId}) {
  const {siteConfig} = useDocusaurusContext();
  const {slackJoinLink} = siteConfig.customFields;

  return (
    <TrackedLink 
      id={trackingId}  
      to={slackJoinLink as string}>
        {linkText}
    </TrackedLink>
  );
};
