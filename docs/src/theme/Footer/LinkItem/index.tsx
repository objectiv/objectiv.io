import React, {ComponentProps} from 'react';
import LinkItem from '@theme-original/Footer/LinkItem';
import type LinkItemType from '@theme/Footer/LinkItem';
import { TrackedLinkContext } from '@objectiv/tracker-react';
import { makeIdFromString } from '@objectiv/tracker-core';

type Props = ComponentProps<typeof LinkItemType>;

export default function LinkItemWrapper(props: Props): JSX.Element {
  const {item} = props;
  const label = makeIdFromString(item.label);
  const href = item.href;
  return (
    <TrackedLinkContext
      Component={'div'}
      id={label}
      href={href}>
        <LinkItem {...props} />
    </TrackedLinkContext>
  );
}
