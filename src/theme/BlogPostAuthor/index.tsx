/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link, {type Props as LinkProps} from '@docusaurus/Link';
import type {Props} from '@theme/BlogPostAuthor';

import styles from './styles.module.css';

// OBJECTIV
import { TrackedLink } from "../../trackedComponents/TrackedLink";
import { TrackedDiv } from '@objectiv/tracker-react';
// END OBJECTIV

function MaybeLink(props: LinkProps): JSX.Element {
  if (props.href) {
    // return <Link {...props} />;
    return (
      <TrackedLink 
        id={props.title?? props.href}
        href={props.href} 
        {...props}>
      </TrackedLink>
    )
  }
  return <>{props.children}</>;
}

export default function BlogPostAuthor({author}: Props): JSX.Element {
  const {name, title, url, imageURL, email} = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    // OBJECTIV
    <TrackedDiv id={'avatar'} className="avatar margin-bottom--sm">
    {/* END OBJECTIV */}
      {imageURL && (
        <span className="avatar__photo-link avatar__photo">
          <MaybeLink href={link} title={name}>
            <img className={styles.image} src={imageURL} alt={name} />
          </MaybeLink>
        </span>
      )}

      {name && (
        <div
          className="avatar__intro"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person">
          <TrackedDiv id={'avatar-name'} className="avatar__name">
            <MaybeLink href={link} title={name} itemProp="url">
              <span itemProp="name">{name}</span>
            </MaybeLink>
            {/* <TrackedLink href={url} itemProp="url" id={title} waitUntilTracked={true}>
              <span itemProp="name">{name}</span>
            </TrackedLink> */}
          </TrackedDiv>
          {title && (
            <small className="avatar__subtitle" itemProp="description">
              {title}
            </small>
          )}
        </div>
      )}
    </TrackedDiv>
  );
}
