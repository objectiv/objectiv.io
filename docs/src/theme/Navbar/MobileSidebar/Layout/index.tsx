import React, {ComponentProps} from 'react';
import Layout from '@theme-original/Navbar/MobileSidebar/Layout';
import type LayoutType from '@theme/Navbar/MobileSidebar/Layout';
import { TrackedOverlayContext } from '@objectiv/tracker-react';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';

type Props = ComponentProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
  return (
    <TrackedOverlayContext
      Component={'div'}
      id={'hamburger-menu'}
      isVisible={secondaryMenuShown}>
        <Layout {...props} />
    </TrackedOverlayContext>
  );
}
