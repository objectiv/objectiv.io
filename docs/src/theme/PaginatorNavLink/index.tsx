import React, {ComponentProps} from 'react';
import type PaginatorNavLinkType from '@theme/PaginatorNavLink';
import PaginatorNavLink from '@theme-original/PaginatorNavLink';
import { TrackedLink } from '../../trackedComponents/TrackedLink';

type Props = ComponentProps<typeof PaginatorNavLinkType>

export default function PaginatorNavLinkWrapper(props: Props): JSX.Element {
  const { title } = props;
  return (
    <TrackedLink id={(title as string != "" ? title as string : "[no title]")}>
      <PaginatorNavLink {...props} />
    </TrackedLink>
  );
}
