import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ObjectivProvider, ReactTracker } from "@objectiv/tracker-react";
import React from 'react';

export const windowExists = () => typeof window !== 'undefined';

function Root({children}) {
  const { siteConfig } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  // Configure DeveloperTools based on `trackerConsoleEnabled` from siteConfig
  if (trackerConsoleEnabled && windowExists()) {
    require('@objectiv/developer-tools');
  }

  // Create React Tracker instance
  const tracker = new ReactTracker({
    endpoint: trackerEndPoint as string,
    applicationId: trackerApplicationId as string,
    active: true,
  })

  return (
    <ObjectivProvider tracker={tracker}>
      {children}
    </ObjectivProvider>
  );
}

export default Root;