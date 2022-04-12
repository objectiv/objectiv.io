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
            },
          }
        })}
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}>
        <div className="navbar-sidebar__item menu"></div>
        {/* END OBJECTIV */}
        <div className="navbar-sidebar__item menu">{secondaryMenu}</div>
      </div>
    </div>
  );
}
