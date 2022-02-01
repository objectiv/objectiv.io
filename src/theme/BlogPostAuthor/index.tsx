/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type {Props} from '@theme/BlogPostAuthor';

import styles from './styles.module.css';

import { TrackedLink } from "../../trackedComponents/TrackedLink";
import { TrackedDiv } from '@objectiv/tracker-react';

function BlogPostAuthor({author}: Props): JSX.Element {
  const {name, title, url, imageURL} = author;
  return (
    <TrackedDiv id={'avatar'} className="avatar margin-bottom--sm">
      {imageURL && (
        <TrackedLink className="avatar__photo-link avatar__photo" href={url} id={title} waitUntilTracked={true}>
          <img className={styles.image} src={imageURL} alt={name} />
        </TrackedLink>
      )}

      {
        // Note: only legacy author frontmatter allow empty name (not frontMatter.authors)
        name && (
          <div
            className="avatar__intro"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person">
            <TrackedDiv id={'avatar-name'} className="avatar__name">
              <TrackedLink href={url} itemProp="url" id={title} waitUntilTracked={true}>
                <span itemProp="name">{name}</span>
              </TrackedLink>
            </TrackedDiv>
            {title && (
              <small className="avatar__subtitle" itemProp="description">
                {title}
              </small>
            )}
          </div>
        )
      }
    </TrackedDiv>
  );
}

export default BlogPostAuthor;
