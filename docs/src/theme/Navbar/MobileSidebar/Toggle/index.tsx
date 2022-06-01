import React, {ComponentProps} from 'react';
import Toggle from '@theme-original/Navbar/MobileSidebar/Toggle';
import type ToggleType from '@theme/Navbar/MobileSidebar/Toggle';
import { TrackedPressableContext } from '@objectiv/tracker-react';

type Props = ComponentProps<typeof ToggleType>;

export default function ToggleWrapper(props: Props): JSX.Element {
  return (
    <TrackedPressableContext
      id={'navbar-toggle'}
      Component={'div'}>
      <Toggle {...props} />
    </TrackedPressableContext>
  );
}
