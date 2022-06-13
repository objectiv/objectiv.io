import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from './styles.module.css';
import { TrackedLink } from "../../trackedComponents/TrackedLink";
import { useSuccessEventTracker } from "@objectiv/tracker-react";

export default function JoinSlack() {
  const slackJoinLink = 
    'https://join.slack.com/t/objectiv-io/shared_invite/zt-19agzjvbn-jfIPqrYUOlrqeun2fZakCw'
    // 'https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg';
  const trackSuccessEvent = useSuccessEventTracker();

  useEffect(() => {
    trackSuccessEvent({message: 'Redirect to Slack'});
    window.location.href = slackJoinLink;
  }, []);

  return (
    <Layout title='Join Slack'>
      <header className={clsx('hero hero--primary', styles.joinSlackHeader)}>
        <div className={clsx('container')}>
          <h1>Join Slack</h1>
          <p>
            Redirecting you to our Slack channel...&nbsp;
            <TrackedLink href={slackJoinLink}>(click here if you don't get redirected)</TrackedLink>
          </p>
        </div>
      </header>
    </Layout>
  );
};
