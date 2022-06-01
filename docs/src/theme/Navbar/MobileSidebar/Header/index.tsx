import React, {ComponentProps} from 'react';
import Header from '@theme-original/Navbar/MobileSidebar/Header';
import type HeaderType from '@theme/Navbar/MobileSidebar/Header';
import { TrackedPressableContext } from '@objectiv/tracker-react';

type Props = ComponentProps<typeof HeaderType>;

export default function HeaderWrapper(props: Props): JSX.Element {
  return (
    <TrackedPressableContext
      Component={'div'}
      id={'navbar-close'}>
        <Header {...props} />
    </TrackedPressableContext>
  );
}
