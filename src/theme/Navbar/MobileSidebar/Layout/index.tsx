import React, {ComponentProps} from 'react';
import type LayoutType from '@theme/Navbar/MobileSidebar/Layout';
import Layout from '@theme-original/Navbar/MobileSidebar/Layout';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';

type Props = ComponentProps<typeof LayoutType>

// OBJECTIV
import { TrackedOverlayContext } from '@objectiv/tracker-react';
// OBJECTIV

export default function LayoutWrapper(props: Props): JSX.Element {
  const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();

  return (
    // OBJECTIV
    <TrackedOverlayContext 
      Component={'div'} 
      id={'hamburger-menu'} 
      isVisible={secondaryMenuShown} 
      className="navbar-sidebar">
    {/* END OBJECTIV */}
      <Layout {...props} />
    </TrackedOverlayContext>
  );
}
