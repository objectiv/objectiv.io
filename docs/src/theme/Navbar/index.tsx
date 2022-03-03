/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useCallback, useState, useEffect} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import SearchBar from '@theme/SearchBar';
import Toggle from '@theme/Toggle';
import {
  useThemeConfig,
  useMobileSecondaryMenuRenderer,
  usePrevious,
  useHistoryPopHandler,
  useHideableNavbar,
  useLockBodyScroll,
  useWindowSize,
  useColorMode,
} from '@docusaurus/theme-common';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import IconMenu from '@theme/IconMenu';
import IconClose from '@theme/IconClose';

import { tagInput, tagLink, tagNavigation, tagOverlay, tagPressable } from "@objectiv/tracker-browser";
// OBJECTIV: use history to navigate to top-level categories via a drop-down in the mobile menu 
import { useLocation } from "@docusaurus/router";
import { useHistory } from "react-router-dom";
import useBaseUrl from '@docusaurus/useBaseUrl';
import objectivStyles from './objectiv.styles.module.css';
// OBJECTIV END

import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

// retrocompatible with v1
const DefaultNavItemPosition = 'right';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items: NavbarItemConfig[]) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'left',
  );
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'right',
  );
  return {
    leftItems,
    rightItems,
  };
}

function useMobileSidebar() {
  const windowSize = useWindowSize();

  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRender = windowSize === 'mobile'; // || windowSize === 'ssr';

  const [shown, setShown] = useState(false);

  // Close mobile sidebar on navigation pop
  // Most likely firing when using the Android back button (but not only)
  useHistoryPopHandler(() => {
    if (shown) {
      setShown(false);
      // Should we prevent the navigation here?
      // See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
      return false; // prevent pop navigation
    }
    return undefined;
  });

  const toggle = useCallback(() => {
    setShown((s) => !s);
  }, []);

  useEffect(() => {
    if (windowSize === 'desktop') {
      setShown(false);
    }
  }, [windowSize]);

  return {shouldRender, toggle, shown};
}

function useColorModeToggle() {
  const {
    colorMode: {disableSwitch},
  } = useThemeConfig();
  const {isDarkTheme, setLightTheme, setDarkTheme} = useColorMode();
  const toggle = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme],
  );
  return {isDarkTheme, toggle, disabled: disableSwitch};
}

function useSecondaryMenu({
  sidebarShown,
  toggleSidebar,
}: NavbarMobileSidebarProps) {
  const content = useMobileSecondaryMenuRenderer()?.({
    toggleSidebar,
  });
  const previousContent = usePrevious(content);

  const [shown, setShown] = useState<boolean>(
    () =>
      // /!\ content is set with useEffect,
      // so it's not available on mount anyway
      // "return !!content" => always returns false
      false,
  );

  // When content is become available for the first time (set in useEffect)
  // we set this content to be shown!
  useEffect(() => {
    const contentBecameAvailable = content && !previousContent;
    if (contentBecameAvailable) {
      setShown(true);
    }
  }, [content, previousContent]);

  const hasContent = !!content;

  // On sidebar close, secondary menu is set to be shown on next re-opening
  // (if any secondary menu content available)
  useEffect(() => {
    if (!hasContent) {
      setShown(false);
      return;
    }
    if (!sidebarShown) {
      setShown(true);
    }
  }, [sidebarShown, hasContent]);

  const hide = useCallback(() => {
    setShown(false);
  }, []);

  return {shown, hide, content};
}

type NavbarMobileSidebarProps = {
  sidebarShown: boolean;
  toggleSidebar: () => void;
};

function NavbarMobileSidebar({
  sidebarShown,
  toggleSidebar,
}: NavbarMobileSidebarProps) {
  useLockBodyScroll(sidebarShown);

  // OBJECTIV: use history to navigate to top-level categories via a drop-down in the mobile menu 
  type NavbarItemProps = {
    to: string;
    label: string;
  }
  let items = useNavbarItems();

  let history = useHistory();
  let location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const homepageUrl = siteConfig.url;
  let currentNavCategory = 'Home';
  // remove the homepage URL from the dropdown
  items = items.filter(function (el:NavbarItemProps) {
    return el.to != homepageUrl;
  });
  items.forEach((item:NavbarItemProps, index) => {
    let itemTo = useBaseUrl(item.to);
    if (itemTo == location.pathname) {
      currentNavCategory = item.label;
    }
  });

  function goToTopNavCategory(e) {
    const linkTo = e.target.value;
    history.push(linkTo);
    toggleSidebar();
  }
  // END OBJECTIV

  const colorModeToggle = useColorModeToggle();

  const secondaryMenu = useSecondaryMenu({
    sidebarShown,
    toggleSidebar,
  });

  return (
    <div className="navbar-sidebar"
      {...tagOverlay({
        id: 'hamburger-menu',
        options: {
          trackVisibility: {
            mode: 'manual',
            isVisible: sidebarShown
          }
        }
      })}
    >
      <div className="navbar-sidebar__brand">
        <Logo
          className="navbar__brand"
          imageClassName="navbar__logo"
          titleClassName="navbar__title"
        />
        {!colorModeToggle.disabled && (
          <Toggle
            className={styles.navbarSidebarToggle}
            checked={colorModeToggle.isDarkTheme}
            onChange={colorModeToggle.toggle}
          />
        )}
        <button
          {...tagPressable({ id: 'navbar-close' })}
          type="button"
          className="clean-btn navbar-sidebar__close"
          onClick={toggleSidebar}>
          <IconClose
            color="var(--ifm-color-emphasis-600)"
            className={styles.navbarSidebarCloseSvg}
          />
        </button>
      </div>

      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenu.shown,
        })}>
        <div className="navbar-sidebar__item menu">
          <ul className="menu__list">
            {items.map((item, i) => (
              <NavbarItem mobile {...item} onClick={toggleSidebar} key={i} />
            ))}
          </ul>
        </div>

        {/* OBJECTIV: use history to navigate to top-level categories via a drop-down in the mobile menu  */}
        <div className="navbar-sidebar__item menu">
          {/* {items.length > 0 && (
            <button
              {...tagPressable({ id: 'navbar-back' })}
              type="button"
              className="clean-btn navbar-sidebar__back"
              onClick={secondaryMenu.hide}>
              <Translate
                id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
                description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)">
                ← All Categories
              </Translate>
            </button>
          )} */}
          <div className={clsx(objectivStyles.objectivNavCategories)}>
            <span className={clsx(objectivStyles.objectivSelectNavbarCategoryGoTo)}>Section:</span>
            <select {...tagInput({id: 'navbar-categories'})} onChange={goToTopNavCategory} name="nav-categories" id="nav-categories">
              <option value={useBaseUrl('/')}>Home</option>
              {items.map((item:NavbarItemProps, i) => (
                item.label && <option value={useBaseUrl(item.to)} key={i}>{item.label}</option>
              ))}
            </select>
            <h2>{currentNavCategory}</h2>

            {/* <ul className="menu__list">
              {items.map((item, i) => (
                <NavbarItem mobile {...item} onClick={toggleSidebar} key={i} />
              ))}
            </ul> */}
          </div>
          {secondaryMenu.content}
          <div className={clsx(objectivStyles.objectivNavHomepageLink)}>
            <Link 
              {...tagLink({ id: 'homepage', href: homepageUrl })}
              className="menu__link" to={homepageUrl}>⧉ objectiv.io</Link>
          </div>
          {/* END OBJECTIV */}
        </div>
      </div>
    </div>
  );

  
}

function Navbar(): JSX.Element {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig();

  const mobileSidebar = useMobileSidebar();
  const colorModeToggle = useColorModeToggle();
  const activeDocPlugin = useActivePlugin();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  const items = useNavbarItems();
  const hasSearchNavbarItem = items.some((item) => item.type === 'search');
  const {leftItems, rightItems} = splitNavItemsByPosition(items);

  return (
    <nav
      {...tagNavigation({id: 'navbar-top'})}
      ref={navbarRef}
      className={clsx('navbar', 'navbar--fixed-top', {
        'navbar--dark': style === 'dark',
        'navbar--primary': style === 'primary',
        'navbar-sidebar--show': mobileSidebar.shown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
      })}>
      <div className="navbar__inner">
        <div className="navbar__items">
          {(items?.length > 0 || activeDocPlugin) && (
            <button
              {...tagPressable({ id: 'navbar-toggle' })}
              aria-label="Navigation bar toggle"
              className="navbar__toggle clean-btn"
              type="button"
              tabIndex={0}
              onClick={mobileSidebar.toggle}
              onKeyDown={mobileSidebar.toggle}>
              <IconMenu />
            </button>
          )}
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
          />
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          {!colorModeToggle.disabled && (
            <Toggle
              className={styles.toggle}
              checked={colorModeToggle.isDarkTheme}
              onChange={colorModeToggle.toggle}
            />
          )}
          {!hasSearchNavbarItem && <SearchBar />}
        </div>
      </div>

      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />

      {mobileSidebar.shouldRender && (
        <NavbarMobileSidebar
          sidebarShown={mobileSidebar.shown}
          toggleSidebar={mobileSidebar.toggle}
        />
      )}
    </nav>
  );
}

export default Navbar;
