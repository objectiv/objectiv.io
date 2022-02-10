/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect} from 'react';
import clsx from 'clsx';
import {
  isActiveSidebarItem,
  usePrevious,
  Collapsible,
  useCollapsible,
  findFirstCategoryLink,
  ThemeClassNames,
  useThemeConfig,
  useDocSidebarItemsExpandedState,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import IconExternalLink from '@theme/IconExternalLink';

import DocSidebarItems from '@theme/DocSidebarItems';
import type {Props} from '@theme/DocSidebarItem';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

import {
  tagExpandable,
  tagLink,
} from "@objectiv/tracker-browser";

import styles from './styles.module.css';
import { useHistory } from "react-router-dom";

export default function DocSidebarItem({
  item,
  ...props
}: Props): JSX.Element | null {
  switch (item.type) {
    case 'category':
      if (item.items.length === 0) {
        return null;
      }
      return <DocSidebarItemCategory item={item} {...props} />;
    case 'link':
    default:
      return <DocSidebarItemLink item={item} {...props} />;
  }
}

// If we navigate to a category and it becomes active, it should automatically expand itself
function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  setCollapsed,
}: {
  isActive: boolean;
  collapsed: boolean;
  setCollapsed: (b: boolean) => void;
}) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      setCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, setCollapsed]);
}

function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props & {item: PropSidebarItemCategory}) {
  const {items, label, collapsible, className, href} = item;
  const firstCategoryLink = findFirstCategoryLink(item);

  const isActive = isActiveSidebarItem(item, activePath);

  const {collapsed, setCollapsed} = useCollapsible({
    // active categories are always initialized as expanded
    // the default (item.collapsed) is only used for non-active categories
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    },
  });

  useAutoExpandActiveCategory({isActive, collapsed, setCollapsed});
  const {expandedItem, setExpandedItem} = useDocSidebarItemsExpandedState();
  function updateCollapsed(toCollapsed: boolean = !collapsed) {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  }
  const {autoCollapseSidebarCategories} = useThemeConfig();
  useEffect(() => {
    if (
      collapsible &&
      expandedItem &&
      expandedItem !== index &&
      autoCollapseSidebarCategories
    ) {
      setCollapsed(true);
    }
  }, [
    collapsible,
    expandedItem,
    index,
    setCollapsed,
    autoCollapseSidebarCategories,
  ]);
  let history = useHistory();


  return (
    <li
      {...tagExpandable({
        id: item.label,
        options: {
          trackClicks: false,
          trackVisibility: { mode: 'manual', isVisible: !collapsed  }
        }
      })}
      className={clsx(
        ThemeClassNames.docs.docSidebarItemCategory,
        ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        'menu__list-item',
        {
          'menu__list-item--collapsed': collapsed,
        },
        className,
      )}>
      <div className="menu__list-item-collapsible">
        <Link
          className={clsx('menu__link', {
            'menu__link--sublist': collapsible && !href,
            'menu__link--active': isActive,
            [styles.menuLinkText]: !collapsible,
            [styles.hasHref]: !!firstCategoryLink,
          })}
          aria-current={isActive ? 'page' : undefined}
          onClick={
            collapsible
              ? (e) => {
                onItemClick?.(item);
                if(!collapsed && isActive) {
                  e.preventDefault();
                }
                // OBJECTIV: auto-select the first item in the category if it's a link
                if (items && items.length > 0 && items[0].type == 'link') {
                  history.push(items[0].href)
                }
                updateCollapsed();
              } : () => {
                onItemClick?.(item);
              }
          }
          href={item.type !== 'category' && collapsible ? firstCategoryLink : undefined}
          {...props}>
          {label}
        </Link>
        {href && collapsible && (
          <button
            aria-label={translate(
              {
                id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',
                message: "Toggle the collapsible sidebar category '{label}'",
                description:
                  'The ARIA label to toggle the collapsible sidebar category',
              },
              {label},
            )}
            type="button"
            className="clean-btn menu__caret"
            onClick={(e) => {
              e.preventDefault();
              updateCollapsed();
            }}
          />
        )}
      </div>

      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activePath}
          level={level + 1}
        />
      </Collapsible>
    </li>
  );
}

function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props & {item: PropSidebarItemLink}) {
  const {href, label, className} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        {...tagLink({ id: item.label, href: item.href })}
        className={clsx('menu__link', {
          'menu__link--active': isActive,
        })}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalUrl(href) && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        {isInternalUrl(href) ? (
          label
        ) : (
          <span>
            {label}
            <IconExternalLink />
          </span>
        )}
      </Link>
    </li>
  );
}
