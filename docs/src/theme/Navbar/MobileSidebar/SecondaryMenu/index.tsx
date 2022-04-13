/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// OBJECTIV: Nearly all code below is custom for our mobile navigation

import React from 'react';
import clsx from 'clsx';
import {
  useNavbarMobileSidebar, 
  useNavbarSecondaryMenu, 
  useThemeConfig,
  ThemeClassNames
} from '@docusaurus/theme-common';
import { useLocation } from "@docusaurus/router";
import { useHistory } from "react-router-dom";
import useBaseUrl from '@docusaurus/useBaseUrl';
import objectivStyles from './objectiv.styles.module.css';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import NavbarItem, {type LinkLikeNavbarItemProps, Props as NavbarItemConfig} from '@theme/NavbarItem';
import { tagNavigation } from '@objectiv/tracker-browser';

export default function NavbarMobileSidebarSecondaryMenu(): JSX.Element | null {
  const mobileSidebar = useNavbarMobileSidebar();
  const secondaryMenu = useNavbarSecondaryMenu();

  // Split navigation links into left/right
  function splitNavItemsByPosition(items: NavbarItemConfig[]) {
    const leftItems = items.filter(
      (item) => item.position === 'left',
    );
    const rightItems = items.filter(
      (item) => item.position === 'right',
    );
    return {
      leftItems,
      rightItems,
    };
  }

  const items = useThemeConfig().navbar.items as NavbarItemConfig[];
  const {leftItems, rightItems} = splitNavItemsByPosition(items);

  // Add a link to the Home section at the top
  leftItems.unshift({
    label: 'Home',
    to: '/',
  });

  // create top-level categories in a dropdown, and use history to navigate to them in the mobile menu
  let history = useHistory();
  let location = useLocation();
  let currentNavCategory = 'Home';

  type NavbarItemProps = {
    to: string,
    label: string,
    waitUntilTracked: boolean
  }
  function getDropDownItems(): LinkLikeNavbarItemProps[] {
    const dropDownLinks = leftItems.map((item:NavbarItemProps) => {
      const itemTo = item.to;
      const urlSlug = "/" +location.pathname.split('/')[2] + "/";
      if (itemTo == urlSlug) {
        currentNavCategory = item.label;
      }

      return {
        isNavLink: true,
        label: item.label,
        to: item.to,
        isActive: () => item.label == currentNavCategory,
        onClick: () => {
          history.push(item.to);
          mobileSidebar.toggle();
        },
      };
    });

    return [...[], ...dropDownLinks, ...[]];
  }

  const dropDownItems = getDropDownItems();  

  return (
    <>
      <div className="navbar-sidebar__item menu">
      </div>
      <div className="navbar-sidebar__item menu" {...tagNavigation({ id: 'docs-sidebar' })}>
        <div className={clsx(objectivStyles.objectivNavCategories)}>
          <span className={clsx(objectivStyles.objectivSelectIcon)}><img src={useBaseUrl('/img/icons/icon-bookmark.svg')} /></span>
          <ul className={clsx("menu__list", objectivStyles.objectivNavCategoriesDropDown)}>
            <DropdownNavbarItem
              mobile={false}
              label={currentNavCategory}
              items={dropDownItems}
              onClick={mobileSidebar.toggle}
              onKeyDown={mobileSidebar.toggle}
            />
          </ul>        
        </div>
        {secondaryMenu.content}
        <div className={clsx(objectivStyles.tertiaryMenu)}>
          <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
            {rightItems.map((item:NavbarItemProps, i) => (
              <NavbarItem mobile {...item} onClick={mobileSidebar.toggle} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
