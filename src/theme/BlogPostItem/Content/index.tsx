import React, { useEffect } from 'react';
import Content from '@theme-original/BlogPostItem/Content';
import type ContentType from '@theme/BlogPostItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import {useBlogPost} from '@docusaurus/theme-common/internal';

import { TrackedDiv, useVisibleEventTracker } from '@objectiv/tracker-react';
import { TrackedLink } from '../../../trackedComponents/TrackedLink';
import { makeIdFromString } from '@objectiv/tracker-core';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): JSX.Element {
  // OBJECTIV
  const { siteConfig } = useDocusaurusContext();
  const { slackJoinLink } = siteConfig?.customFields ?? {};
  const {withBaseUrl} = useBaseUrlUtils();
  const {isBlogPostPage, frontMatter} = useBlogPost();

  const title = frontMatter.title;
  const blogPostId = 'post-' + makeIdFromString(title);
  const trackVisibleEvent = useVisibleEventTracker();
  useEffect(() => {
    if (isBlogPostPage) {
      trackVisibleEvent();
    }
  }, [blogPostId]);

  // END OBJECTIV
  return (
    <>
      <Content {...props} />
      {/* OBJECTIV: TRY OBJECTIV SECTION */}
      {(isBlogPostPage) && (
        <TrackedDiv
          id={'blog-post-try-objectiv'}
          className={clsx(styles.blogPostFooterCta)}>
          <h2>Try Objectiv</h2>
          <p>
            <TrackedLink 
              to={withBaseUrl("/docs/home/quickstart-guide/", {absolute: true})}
              target="_self">
                Spin up the Demo
            </TrackedLink> - Try Objectiv on your local machine (takes 5 minutes)<br />
            <TrackedLink 
              to="https://github.com/objectiv/objectiv-analytics"
              target="_self">
                Objectiv on GitHub
              </TrackedLink> - Check out the project and star us for future reference<br />
            <TrackedLink 
              to={slackJoinLink as string}
              target="_self">
                Objectiv on Slack
            </TrackedLink> - Join the discussion or get help
          </p>
        </TrackedDiv>
      )}
      {/* END OBJECTIV */}
    </>
  );
}
