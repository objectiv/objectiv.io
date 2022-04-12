import React, {ComponentProps} from 'react';
import type LayoutType from '@theme/Footer/Layout';
import Layout from '@theme-original/Footer/Layout';

type Props = ComponentProps<typeof LayoutType>

// OBJECTIV
import { TrackedNav } from "@objectiv/tracker-react";
// END OBJECTIV

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    // OBJECTIV
    <TrackedNav id={'footer'}>
      <Layout {...props} />
    </TrackedNav>
  );
}
