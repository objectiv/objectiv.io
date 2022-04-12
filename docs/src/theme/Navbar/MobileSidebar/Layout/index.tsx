// import React, {ComponentProps} from 'react';
// import type LayoutType from '@theme/Navbar/MobileSidebar/Layout';
// import Layout from '@theme-original/Navbar/MobileSidebar/Layout';
// import {useNavbarSecondaryMenu} from '@docusaurus/theme-common';

// type Props = ComponentProps<typeof LayoutType>

// // OBJECTIV
// import { tagOverlay } from '@objectiv/tracker-browser';
// // OBJECTIV

// export default function LayoutWrapper(props: Props): JSX.Element {
//   const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();

//   return (
//     <>
//       <Layout 
//         // OBJECTIV
//         {...tagOverlay({
//           id: 'hamburger-menu',
//           options: {
//             trackVisibility: {
//               mode: 'manual',
//               isVisible: secondaryMenuShown
//             }
//           }
//         })}
//         // END OBJECTIV
//         {...props} />
//     </>
//   );
// }

import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/Navbar/MobileSidebar/Layout';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common';

// OBJECTIV
import { tagOverlay } from '@objectiv/tracker-browser';
// OBJECTIV

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: Props): JSX.Element {
  const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
  return (
    <div className="navbar-sidebar">
      {header}
      <div
        // OBJECTIV
        {...tagOverlay({
          id: 'hamburger-menu',
          options: {
            trackVisibility: {
              mode: 'manual',
              isVisible: secondaryMenuShown
            }
          }
        })}
        // END OBJECTIV
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}>
        <div className="navbar-sidebar__item menu">{primaryMenu}</div>
        <div className="navbar-sidebar__item menu">{secondaryMenu}</div>
      </div>
    </div>
  );
}
