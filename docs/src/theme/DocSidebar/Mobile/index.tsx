import React, {ComponentProps} from 'react';
import type MobileType from '@theme/DocSidebar/Mobile';
import Mobile from '@theme-original/DocSidebar/Mobile';

type Props = ComponentProps<typeof MobileType>

// OBJECTIV
import { tagNavigation } from '@objectiv/tracker-browser';
// END OBJECTIV

export default function MobileWrapper(props: Props): JSX.Element {
  return (
    // OBJECTIV
    <div {...tagNavigation({ id: 'docs-sidebar' })}>
    {/* END OBJECTIV */}
      <Mobile {...props} />
    </div>
  );
}
