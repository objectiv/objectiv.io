import React, {ComponentProps} from 'react';
import Layout from '@theme-original/Footer/Layout';
import type LayoutType from '@theme/Footer/Layout';
import { TrackedNav } from "@objectiv/tracker-react";

type Props = ComponentProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <TrackedNav id={'footer'}>
      <Layout {...props} />
    </TrackedNav>
  );
}
