/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';
import Translate, {translate} from '@docusaurus/Translate';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {usePluralForm} from '@docusaurus/theme-common';
import {blogPostContainerID} from '@docusaurus/utils-common';
import MDXComponents from '@theme/MDXComponents';
import EditThisPage from '@theme/EditThisPage';
import type {Props} from '@theme/BlogPostItem';

import styles from './styles.module.css';
import TagsListInline from '@theme/TagsListInline';
import BlogPostAuthors from '@theme/BlogPostAuthors';

import { 
  TrackedHeader,
  TrackedDiv,
  TrackedFooter,
  makeIdFromString, 
  useVisibleEventTracker,
  TrackedContentContext,
} from '@objectiv/tracker-react';
import { TrackedLink } from "../../trackedComponents/TrackedLink";

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

function BlogPostItem(props: Props): JSX.Element {
  const {
    metadata,
    isBlogPostPage
  } = props;
  const { title } = metadata;
  const blogPostId = 'post-' + makeIdFromString(title);
  return (
    <TrackedContentContext 
      Component={'article'} 
      id={`post-${makeIdFromString(title)}`}
      className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting">

      <BlogPostArticle blogPostId={blogPostId} {...props}>
      </BlogPostArticle>

    </TrackedContentContext>
  );
}

function BlogPostArticle(props, blogPostId): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { slackJoinLink } = siteConfig?.customFields ?? {};

  const readingTimePlural = useReadingTimePlural();
  const {withBaseUrl} = useBaseUrlUtils();
  const {
    children,
    frontMatter,
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

  const image = assets.image ?? frontMatter.image;
  const truncatedPost = !isBlogPostPage && truncated;
  const tagsExists = tags.length > 0;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

  // OBJECTIV: VisibleEvent on blog post load
  const trackVisibleEvent = useVisibleEventTracker();
  useEffect(() => {
    if (isBlogPostPage) {
      trackVisibleEvent();
    }
  }, [blogPostId]);
  // END OBJECTIV

  return (
    <>
      <TrackedHeader>
        <TitleHeading className={styles.blogPostTitle} itemProp="headline">
          {isBlogPostPage ? (
            title
          ) : (
            <TrackedLink 
              itemProp="url" 
              to={permalink}>
              {title}
            </TrackedLink>
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
      </TrackedHeader>

      {image && (
        <meta itemProp="image" content={withBaseUrl(image, {absolute: true})} />
      )}

      <div
        // This ID is used for the feed generation to locate the main content
        id={isBlogPostPage ? blogPostContainerID : undefined}
        className="markdown"
        itemProp="articleBody">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </div>

      {!truncated && (
        <TrackedDiv
          id={'blog-post-try-objectiv'}
          className={clsx(styles.blogPostFooterCta)}>
          <h2>Try Objectiv</h2>
          <p>Objectiv in its current state is ready for early adopters. We're working hard to add support for 
            more data stores and make it easier to integrate with your existing stack. We also want to expand 
            the selection of models that's included.</p>
          <p>
            <TrackedLink 
              to={withBaseUrl("/docs/home/quickstart-guide/", {absolute: true})}
              target="_self">
                Quickstart Guide
            </TrackedLink> - Try Objectiv on your local machine (takes 5 minutes)<br />
            <TrackedLink 
              to="https://github.com/objectiv/objectiv-analytics"
              target="_self">
                Objectiv on Github
              </TrackedLink> - Check out the project and star us for future reference<br />
            <TrackedLink 
              to={slackJoinLink as string}
              target="_self">
                Objectiv on Slack
            </TrackedLink> - Join the discussion or get help
          </p>
        </TrackedDiv>
      )}

      {(tagsExists || truncated) && (
        <TrackedFooter
          id={'blog-post-footer'}
          className={clsx('row docusaurus-mt-lg', {
            [styles.blogPostDetailsFull]: isBlogPostPage,
          })}>
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
              <TrackedLink
                id={'read-more'}
                to={metadata.permalink}
                aria-label={`Read more about ${title}`}>
                <b>
                  <Translate
                    id="theme.blog.post.readMore"
                    description="The label used in blog post item excerpts to link to full blog posts">
                    Read More
                  </Translate>
                </b>
              </TrackedLink>
            </div>
          )}
        </TrackedFooter>
      )}
    </>
  );
}

export default BlogPostItem;
