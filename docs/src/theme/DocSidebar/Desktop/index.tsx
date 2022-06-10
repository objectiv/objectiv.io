import React, {ComponentProps} from 'react';
import type DesktopType from '@theme/DocSidebar/Desktop';
import Desktop from '@theme-original/DocSidebar/Desktop';
import { TrackedNav } from '@objectiv/tracker-react';

type Props = ComponentProps<typeof DesktopType>

export default function DesktopWrapper(props: Props): JSX.Element {
  return (
    <TrackedNav id={'docs-sidebar'}>
      <Desktop {...props} />
    </TrackedNav>
  );
}
