import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { configureTracker } from "@objectiv/tracker-browser";
import React, { useEffect } from 'react';

function Root({children}) {
  const { siteConfig = {} } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint } = siteConfig.customFields;

  useEffect(
    () => {
      configureTracker({
        applicationId: trackerApplicationId,
        endpoint: trackerEndPoint
      });
    },
    [] // no dependencies => no side effects on re-render
  )
  
  return (
    <>
      {children}
    </>
  );
}

export default Root;
