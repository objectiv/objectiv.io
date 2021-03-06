import React, {ComponentProps} from 'react';
import type PaginatorNavLinkType from '@theme/PaginatorNavLink';
import PaginatorNavLink from '@theme-original/PaginatorNavLink';
import { TrackedLinkContext } from '@objectiv/tracker-react';
import { makeIdFromString } from '@objectiv/tracker-core';

type Props = ComponentProps<typeof PaginatorNavLinkType>

export default function PaginatorNavLinkWrapper(props: Props): JSX.Element {
  const { title } = props;
  return (
    <TrackedLinkContext 
      Component={'div'}
      href={props.permalink}
      id={(title as string != "" ? makeIdFromString(title as string) : "[no title]")}>
        <PaginatorNavLink {...props} />
    </TrackedLinkContext>
  );
}
