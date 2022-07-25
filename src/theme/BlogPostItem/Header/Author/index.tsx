import React from 'react';
import clsx from 'clsx';
import {type Props as LinkProps} from '@docusaurus/Link';

import type {Props} from '@theme/BlogPostItem/Header/Author';
import { TrackedDiv } from '@objectiv/tracker-react';
import { TrackedLink } from '../../../../trackedComponents/TrackedLink';

function MaybeLink(props: LinkProps): JSX.Element {
  if (props.href) {
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

export default function BlogPostItemHeaderAuthor({
  author,
  className,
}: Props): JSX.Element {
  const {name, title, url, imageURL, email} = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    <TrackedDiv id={'avatar'} className={clsx('avatar margin-bottom--sm', className)}>
      {imageURL && (
        <MaybeLink href={link} title={name} className="avatar__photo-link">
          <img className="avatar__photo" src={imageURL} alt={name} />
        </MaybeLink>
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
