import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

import { Octokit } from "@octokit/rest"
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";
import { useAsync } from "react-async";
import clsx from 'clsx';

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

const getNumberOfStarGazers = async ({octokit, organization, repo}) => {
  const res = await octokit.rest.activity.listStargazersForRepo({
    owner: organization,
    repo: repo
  });
  if (res.status != 200) throw new Error(res);
  return res.data.length;
}

function GitHubStargazers({children}) {
  const {siteConfig} = useDocusaurusContext();
  const {organizationName, projectName} = siteConfig;
  const {gitHubSecretKey} = siteConfig.customFields;

  const octo = createOctokit(gitHubSecretKey);

  const { data, error, isPending } = useAsync({ 
    promiseFn: getNumberOfStarGazers, 
    octokit: octo,
    organization: organizationName,
    repo: projectName
  })

  if (isPending) return "";
  if (error) {
    console.error(error);
    return `Something went wrong: ${error.message}`;
  }
  if (data) {
    const stars = data.toLocaleString();
    return (
      <div className={clsx(styles.gitHubButtons, styles.gitHubButton, styles.gitHubButtonLarge)}>
        <a className={styles.ghBtn}>
          <span className={styles.ghIco}></span>
          <span className={styles.ghText}>
            Star
          </span>
        </a>
        <a className={styles.ghCount}>
          {stars}
        </a>
      </div>
    );
  }
}

export default GitHubStargazers;
