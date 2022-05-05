import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from "clsx";
import styles from "./styles.module.css";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { TrackedLink } from '../../trackedComponents/TrackedLink';
import useBaseUrl from '@docusaurus/useBaseUrl';

const queryClient = new QueryClient();

function Stargazers(cta) {
  const { siteConfig } = useDocusaurusContext();
  const { organizationName } = siteConfig;
  const { gitHubRepo, gitHubSecretKey } = siteConfig.customFields;
  const endpoint = "https://api.github.com/graphql";
  const STARCOUNT_QUERY = `
  query ($organization: String!, $repo: String!)  {
    repository(owner: $organization, name: $repo) {
      stargazers {
        totalCount
      }
    }
  }`;

  const { data, isLoading, error } = useQuery("stars", () => {
    return axios({
      url: endpoint,
      method: "POST",
      headers: {
        Authorization: `bearer ${gitHubSecretKey}`,
        "Content-Type": "application/json"
      },
      data: {
        query: STARCOUNT_QUERY,
        variables: {
          "organization": organizationName,
          "repo": gitHubRepo
        } 
      }
    }).then(response => response.data.data);
  });

  if (isLoading) return (<div>...</div>);
  if (error) {
    console.error(error);
    // @ts-ignore: error type is not defined
    return (<pre>{error.message}</pre>);
  }

  const count = data.repository.stargazers.totalCount.toLocaleString();

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
      <TrackedLink
        to="https://github.com/objectiv/objectiv-analytics"
        waitUntilTracked={true}
        target="_self"
        className={clsx("button", styles.ctaButton, styles.starCount)}>
        {count}
      </TrackedLink>
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
