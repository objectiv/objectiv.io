/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import {
  ThemeClassNames,
  useSidebarBreadcrumbs,
  useHomePageRoute,
} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

// OBJECTIV
import { TrackedLink } from '../../trackedComponents/TrackedLink';
import { TrackedNav } from '@objectiv/tracker-react';
import { useLocation } from "@docusaurus/router";
// END OBJECTIV

// TODO move to design system folder
function BreadcrumbsItemLink({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}): JSX.Element {
  const className = clsx('breadcrumbs__link', styles.breadcrumbsItemLink);
  // OBJECTIV
  const getNodeText = node => {
    if (['string', 'number'].includes(typeof node)) return node
    if (node instanceof Array) return node.map(getNodeText).join('')
    if (typeof node === 'object' && node) return getNodeText(node.props.children)
  }
  return href ? (
    <TrackedLink
      id={getNodeText(children) + "-" + href}
      href={href}
      className={className} 
      itemProp="item">
      <span itemProp="name">{children}</span>
    </TrackedLink>
  ) : (
    <span className={className} itemProp="item name">
      {children}
    </span>
  );
  // END OBJECTIV
}

// TODO move to design system folder
function BreadcrumbsItem({
  children,
  active,
  index,
}: {
  children: ReactNode;
  active?: boolean;
  index: number;
}): JSX.Element {
  return (
    <li
      itemScope
      itemProp="itemListElement"
      itemType="https://schema.org/ListItem"
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}>
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}

function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl("/");
  // OBJECTIV
  // if in a subsection (e.g. '/tracking'), add that after the 'Home' link
  const breadcrumbs = [{
    href: homeHref,
    label: '🏠'
  }];
  const sectionSlug = useLocation().pathname.split('/')[2];
  if (sectionSlug != 'home' && sectionSlug != '' && sectionSlug != 'category') {
    const subsectionHref = sectionSlug != 'home' ? useBaseUrl("/" + sectionSlug + "/") : null;
    const subsectionTitle = sectionSlug.charAt(0).toUpperCase() + sectionSlug.slice(1);
    breadcrumbs.push({
      href: subsectionHref,
      label: subsectionTitle
    })
  }
  return (
    <>
      {breadcrumbs.map((item, idx) => (
        <BreadcrumbsItem key={idx} active={idx === breadcrumbs.length - 2}>
          <BreadcrumbsItemLink href={item.href}>
            {item.label}
          </BreadcrumbsItemLink>
        </BreadcrumbsItem>
      ))}
    </>
  );
  // END OBJECTIV
}

export default function DocBreadcrumbs(): JSX.Element | null {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  return (
    // OBJECTIV
    <TrackedNav
      id={'breadcrumbs'}
      // END OBJECTIV
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer,
      )}
      aria-label="breadcrumbs">
      <ul
        className="breadcrumbs"
        itemScope
        itemType="https://schema.org/BreadcrumbList">
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbsItem 
            key={idx} 
            active={idx === breadcrumbs.length - 1}
            index={idx}>
            <BreadcrumbsItemLink 
              href={idx < breadcrumbs.length - 1 ? item.href : undefined}>
              {item.label}
            </BreadcrumbsItemLink>
          </BreadcrumbsItem>
        ))}
      </ul>
    </TrackedNav>
  );
}
