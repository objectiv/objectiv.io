import React, {ComponentProps} from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import { TrackedLink } from '../../../trackedComponents/TrackedLink';

type Props = ComponentProps<typeof LinkType>;

export default function LinkWrapper(props: Props): JSX.Element {
  const { item } = props;
  const label = item.label;
  return (
    <TrackedLink id={ label }>
      <Link {...props} />
    </TrackedLink>
  );
}
