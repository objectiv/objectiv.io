import React from 'react';
import ReadMoreLink from '@theme-original/BlogPostItem/Footer/ReadMoreLink';
import type ReadMoreLinkType from '@theme/BlogPostItem/Footer/ReadMoreLink';
import type {WrapperProps} from '@docusaurus/types';
import { TrackedLink } from '../../../../trackedComponents/TrackedLink';

type Props = WrapperProps<typeof ReadMoreLinkType>;

export default function ReadMoreLinkWrapper(props: Props): JSX.Element {
  const {...linkProps} = props;
  const to = linkProps.to;

  return (
    <TrackedLink
      id={'read-more'}
      to={to}>
      <ReadMoreLink {...props} />
    </TrackedLink>
  );
}
