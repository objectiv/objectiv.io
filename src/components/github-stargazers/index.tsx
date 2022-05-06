import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from "clsx";
import styles from "./styles.module.css";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import apiClient from "./http-common";

import { TrackedLink } from '../../trackedComponents/TrackedLink';
import { useFailureEventTracker } from '@objectiv/tracker-react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 60*60*1000,
    },
  },
});

function Stargazers(cta) {
  const { siteConfig } = useDocusaurusContext();
  const { organizationName } = siteConfig;
  const { gitHubRepo } = siteConfig.customFields;

  const [getStargazersCount, setStargazersCount] = useState(null);

  const formatResponse = (result) => {
    return result.data.stargazers_count.toLocaleString();
  };

  const trackFailureEvent = useFailureEventTracker({
    message: "Could not retrieve stargazers count"
  });

  // Use REST API: https://docs.github.com/en/rest/repos/repos#get-a-repository
  const restEndpoint = '/repos/' + organizationName + '/' + gitHubRepo
  const { isLoading: isLoadingStargazers, refetch: getStargazers } = useQuery(
    "stargazers",
    async () => {
      return await apiClient.get(restEndpoint);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        setStargazersCount(formatResponse(result));
      },
      onError: (err) => {
        // @ts-ignore: error type is not defined
        console.log(err.response?.data || err);
        setStargazersCount(null);
        // track the error
        trackFailureEvent()
      },
    }
  );

  useEffect(() => {
    if (isLoadingStargazers) setStargazersCount("...");
  }, [isLoadingStargazers]);

  // load on mount
  useEffect(() => {
    getStargazers()
  }, []);

  return (
    <div className={clsx(styles.starsButtonsContainer)}>
      <TrackedLink
        to="https://github.com/objectiv/objectiv-analytics"
        waitUntilTracked={true}
        target="_self"
        className={clsx("button", styles.ctaButton)}>
        <span><img src={useBaseUrl("img/icons/icon-github-blue.svg")}  
          alt={'Objectiv on GitHub'}/></span>
        {cta.cta}
      </TrackedLink>
      {getStargazersCount && (
        <TrackedLink
          to="https://github.com/objectiv/objectiv-analytics"
          waitUntilTracked={true}
          target="_self"
          id={'starCount'}
          className={clsx("button", styles.ctaButton, styles.starCount)}>
            {getStargazersCount}
        </TrackedLink>
      )}
    </div>
  );
}

export default function GitHubStargazers(cta='GitHub') {
  return (
    <QueryClientProvider client={queryClient}>
      <Stargazers {...cta} />
    </QueryClientProvider>
  )
}
