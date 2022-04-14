import React, {ComponentProps} from 'react';
import type LayoutType from '@theme/Navbar/Layout';
import Layout from '@theme-original/Navbar/Layout';

type Props = ComponentProps<typeof LayoutType>

// OBJECTIV
import { TrackedNavigationContext } from "@objectiv/tracker-react";
// END OBJECTIV

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    // OBJECTIV
    <TrackedNavigationContext id={'navbar-top'} Component={Layout} {...props} />
    // OBJECTIV
  );
}
