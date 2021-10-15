import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Octokit } from "@octokit/rest"
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";
import { useAsync } from "react-async";

const createOctokit = ({gitHubSecretKey}) => {
  const ObOctokit = Octokit.plugin(retry, throttling);
  const octo = new ObOctokit({
    auth: gitHubSecretKey,
    userAgent: 'Objectiv Documentation',
    log: {
      debug: console.debug,
      warn: console.warn,
      error: console.error,
    },
    throttle: {
      onRateLimit: (retryAfter, options) => {
        console.warn(
          `GitHub API: Request quota exhausted for request ${options.method} ${options.url}`
        );
  
        // Retry twice after hitting a rate limit error, then give up
        if (options.request.retryCount <= 2) {
          console.log(`GitHub API: Retrying after ${retryAfter} seconds!`);
          return true;
        }
      },
      onAbuseLimit: (retryAfter, options) => {
        // Do not retry, only log a warning
        console.warn(
          `GitHub API: Abuse detected for request ${options.method} ${options.url}`
        );
      },
    },
  });
  return octo;
}

const getReleases = async ({octokit, organization, repo}) => {
  const res = await octokit.rest.repos.listReleases({
    owner: organization,
    repo: repo
  });
  if (res.status != 200) throw new Error(res);
  return res.data;
}

const getLatestRelease = async ({octokit, organization, repo}) => {
  const res = await octokit.rest.repos.getLatestRelease({
    owner: organization,
    repo: repo
  });
  if (res.status != 200) throw new Error(res);
  return [res.data];
}

function Releases({children, limit}) {
  const {siteConfig} = useDocusaurusContext();
  const {organizationName, projectName} = siteConfig;
  const {gitHubSecretKey} = siteConfig.customFields;

  const octo = createOctokit(gitHubSecretKey);

  var releaseFunction = (limit == 1) ? getLatestRelease : getReleases;
  const { data, error, isPending } = useAsync({ 
    promiseFn: releaseFunction,
    octokit: octo,
    organization: organizationName,
    repo: projectName
  })

  if (isPending) return "Loading...";
  if (error) {
    console.error(error);
    return `Something went wrong: ${error.message}`;
  }
  if (data) {
    return (
      <div>
          {data.map(release => <details><summary>{release.name}</summary>{release.body} </details>)} 
      </div>
    );
  }
}

export default Releases;
