/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import {useNavbarMobileSidebar, useNavbarSecondaryMenu, useThemeConfig} from '@docusaurus/theme-common';

import { useLocation } from "@docusaurus/router";
import { useHistory } from "react-router-dom";
import useBaseUrl from '@docusaurus/useBaseUrl';
import objectivStyles from './objectiv.styles.module.css';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import NavbarItem, {type LinkLikeNavbarItemProps, Props as NavbarItemConfig} from '@theme/NavbarItem';

export default function NavbarMobileSidebarSecondaryMenu(): JSX.Element | null {
  const mobileSidebar = useNavbarMobileSidebar();
  const secondaryMenu = useNavbarSecondaryMenu();

    // If split links by left/right
    // if position is unspecified, fallback to right (as v1)
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

    type NavbarItemProps = {
      to: string,
      label: string,
      waitUntilTracked: boolean
    }
    function useNavbarItems() {
      // TODO temporary casting until ThemeConfig type is improved
      return useThemeConfig().navbar.items as NavbarItemConfig[];
    }
    const items = useNavbarItems();
    
    const {leftItems, rightItems} = splitNavItemsByPosition(items);
    // Add a link to the Home section at the top
    leftItems.unshift({
      label: 'Home',
      to: '/',
    });
  
    let history = useHistory();
    let location = useLocation();
    let currentNavCategory = 'Home';
  
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
      {/* OBJECTIV: use history to navigate to top-level categories via a drop-down in the mobile menu  */}
      <div className="navbar-sidebar__item menu">
      </div>
      <div className="navbar-sidebar__item menu">
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
          <ul className="menu__list">
            {rightItems.map((item:NavbarItemProps, i) => (
              <NavbarItem mobile {...item} onClick={mobileSidebar.toggle} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
