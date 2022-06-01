import React, {ComponentProps} from 'react';
import Layout from '@theme-original/Navbar/Layout';
import type LayoutType from '@theme/Navbar/Layout';
import { TrackedNav } from '@objectiv/tracker-react';

type Props = ComponentProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <TrackedNav id={'navbar-top'}>
      <Layout {...props} />
    </TrackedNav>
  );
}
