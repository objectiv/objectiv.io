import React, {ComponentProps} from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import { TrackedLinkContext } from '@objectiv/tracker-react';

type Props = ComponentProps<typeof LinkType>;

export default function LinkWrapper(props: Props): JSX.Element {
  const { item } = props;
  const label = item.label;
  const href = item.href;
  return (
    <TrackedLinkContext 
      Component={'div'}
      id={label}
      href={href}>
      <Link {...props} />
    </TrackedLinkContext>
  );
}
