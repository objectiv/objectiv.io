/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';
import Translate, {translate} from '@docusaurus/Translate';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {usePluralForm} from '@docusaurus/theme-common';
import {blogPostContainerID} from '@docusaurus/utils-common';
import MDXContent from '@theme/MDXContent';
import EditThisPage from '@theme/EditThisPage';
import type {Props} from '@theme/BlogPostItem';

import styles from './styles.module.css';
import TagsListInline from '@theme/TagsListInline';
import BlogPostAuthors from '@theme/BlogPostAuthors';

// OBJECTIV
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { makeIdFromString } from "@objectiv/tracker-core";
import {
  TrackedHeader,
  TrackedDiv,
  TrackedFooter,
  useVisibleEventTracker,
  TrackedContentContext,
} from '@objectiv/tracker-react';
import { TrackedLink } from "../../trackedComponents/TrackedLink";
// END OBJECTIV

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {readingTime},
      ),
    );
  };
}

// OBJECTIV: VisibleEvent on blog post load
function BlogPostContent(props: Props) {
  const {
    children,
    frontMatter,
    assets,
    metadata,
    isBlogPostPage = false,
  } = props;
  const {
    title,
  } = metadata;
  const image = assets.image ?? frontMatter.image;
  const {withBaseUrl} = useBaseUrlUtils();

  const blogPostId = 'post-' + makeIdFromString(title);
  const trackVisibleEvent = useVisibleEventTracker();
  useEffect(() => {
    if (isBlogPostPage) {
      trackVisibleEvent();
    }
  }, [blogPostId]);

  return (
    <>
      {image && (
        <meta itemProp="image" content={withBaseUrl(image, {absolute: true})} />
      )}

      <div
        // This ID is used for the feed generation to locate the main content
        id={isBlogPostPage ? blogPostContainerID : undefined}
        className="markdown"
        itemProp="articleBody">
        <MDXContent>{children}</MDXContent>
      </div>
    </>
  )
}
// END OBJECTIV

export default function BlogPostItem(props: Props): JSX.Element {
  const readingTimePlural = useReadingTimePlural();
  const {withBaseUrl} = useBaseUrlUtils();
  const {
    assets,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {
    date,
    formattedDate,
    permalink,
    tags,
    readingTime,
    title,
    editUrl,
    authors,
  } = metadata;

  const truncatedPost = !isBlogPostPage && truncated;
  const tagsExists = tags.length > 0;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

  // OBJECTIV
  const { siteConfig } = useDocusaurusContext();
  const { slackJoinLink } = siteConfig?.customFields ?? {};
  // END OBJECTIV
  return (
    // OBJECTIV
    <TrackedContentContext 
      Component={'article'} 
      id={`post-${makeIdFromString(title)}`}
      className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting">
      {/* OBJECTIV */}
      <TrackedContentContext id='blog-post-header' Component='header'>
      {/* END OBJECTIV */}
        <TitleHeading className={styles.blogPostTitle} itemProp="headline">
          {isBlogPostPage ? (
            title
          ) : (
            // OBJECTIV
            <TrackedLink 
              itemProp="url" 
              to={permalink}>
              {title}
            </TrackedLink>
            // END OBJECTIV
          )}
        </TitleHeading>
        <div className={clsx(styles.blogPostData, 'margin-vert--md')}>
          <time dateTime={date} itemProp="datePublished">
            {formattedDate}
          </time>

          {typeof readingTime !== 'undefined' && (
            <>
              {' · '}
              {readingTimePlural(readingTime)}
            </>
          )}
        </div>
        <BlogPostAuthors authors={authors} assets={assets} />
      </TrackedContentContext>

      <BlogPostContent {...props} />

      {/* OBJECTIV: TRY OBJECTIV SECTION */}
      {(!truncated) && (
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

      {(tagsExists || truncated) && (
        // OBJECTIV
        <TrackedFooter
          id={'blog-post-footer'}
          className={clsx('row docusaurus-mt-lg', {
            [styles.blogPostDetailsFull]: isBlogPostPage,
          })}>
        {/* END OBJECTIV */}
          {tagsExists && (
            <div className={clsx('col', {'col--9': truncatedPost})}>
              <TagsListInline tags={tags} />
            </div>
          )}

          {isBlogPostPage && editUrl && (
            <div className="col margin-top--sm">
              <EditThisPage editUrl={editUrl} />
            </div>
          )}

          {truncatedPost && (
            <div
              className={clsx('col text--right', {
                'col--3': tagsExists,
              })}>
              {/* OBJECTIV */}
              <TrackedLink
                id={'read-more'}
                to={metadata.permalink}
                aria-label={translate(
                  {
                    message: 'Read more about {title}',
                    id: 'theme.blog.post.readMoreLabel',
                    description:
                      'The ARIA label for the link to full blog posts from excerpts',
                  },
                  {title},
                )}>
                <b>
                  <Translate
                    id="theme.blog.post.readMore"
                    description="The label used in blog post item excerpts to link to full blog posts">
                    Read More
                  </Translate>
                </b>
              </TrackedLink>
              {/* END OBJECTIV */}
              </div>
          )}
        </TrackedFooter>
      )}
    </TrackedContentContext>
  );
}
