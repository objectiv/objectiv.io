/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';
import Translate, {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import MDXComponents from '@theme/MDXComponents';
import Seo from '@theme/Seo';
import EditThisPage from '@theme/EditThisPage';
import { TrackedArticle } from "../../trackedComponents/TrackedArticle";
import { TrackedDiv } from "../../trackedComponents/TrackedDiv";
import { TrackedFooter } from "../../trackedComponents/TrackedFooter";
import { TrackedHeader } from "../../trackedComponents/TrackedHeader";
import { TrackedLink } from "../../trackedComponents/TrackedLink";

import styles from './styles.module.css';

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

function BlogPostItem(props): JSX.Element {
  const readingTimePlural = useReadingTimePlural();
  const {
    children,
    frontMatter,
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
  } = metadata;
  const {author, image, keywords} = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

    return (
      <TrackedHeader>
        <TitleHeading className={styles.blogPostTitle}>
          {isBlogPostPage ? title : <TrackedLink to={permalink}>{title}</TrackedLink>}
        </TitleHeading>
        <div className={clsx(styles.blogPostData, 'margin-vert--md')}>
          <time dateTime={date}>{formattedDate}</time>

          {readingTime && (
            <>
              {' · '}
              {readingTimePlural(readingTime)}
            </>
          )}
        </div>
        <div className="avatar margin-vert--md">
          {authorImageURL && (
            <TrackedLink
              className="avatar__photo-link avatar__photo" 
              href={authorURL}
            >
              <img src={authorImageURL} alt={author} />
            </TrackedLink>
          )}
          <div className="avatar__intro">
            {author && (
              <>
                <div className="avatar__name">
                  <TrackedLink
                    href={authorURL}
                  >
                    {author}
                  </TrackedLink>
                </div>
                <small className="avatar__subtitle">{authorTitle}</small>
              </>
            )}
          </div>
        </div>
      </TrackedHeader>
    );
  };

  return (
    <>
      <Seo {...{keywords, image}} />

      <TrackedArticle
        className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}
      >
        {renderPostHeader()}
        <TrackedDiv id={'content'} className="markdown">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </TrackedDiv>
        {(tags.length > 0 || truncated) && (
          <TrackedFooter
            className={clsx('row docusaurus-mt-lg', {
              [styles.blogPostDetailsFull]: isBlogPostPage,
            })}>
            {tags.length > 0 && (
              <div className="col">
                <b>
                  <Translate
                    id="theme.tags.tagsListLabel"
                    description="The label alongside a tag list">
                    Tags:
                  </Translate>
                </b>
                {tags.map(({label, permalink: tagPermalink}) => (
                  <TrackedLink
                    key={tagPermalink}
                    className="margin-horiz--sm"
                    to={tagPermalink}
                  >
                    {label}
                  </TrackedLink>
                ))}
              </div>
            )}

            {isBlogPostPage && editUrl && (
              <div className="col margin-top--sm">
                <EditThisPage editUrl={editUrl} />
              </div>
            )}

            {!isBlogPostPage && truncated && (
              <TrackedDiv id={'read-more'} className="col text--right">
                <TrackedLink
                  to={metadata.permalink}
                  aria-label={`Read more about ${title}`}
                >
                  <b>
                    <Translate
                      id="theme.blog.post.readMore"
                      description="The label used in blog post item excerpts to link to full blog posts">
                      Read More
                    </Translate>
                  </b>
                </TrackedLink>
              </TrackedDiv>
            )}
          </TrackedFooter>
        )}
      </TrackedArticle>
    </>
  );
}

export default BlogPostItem;
