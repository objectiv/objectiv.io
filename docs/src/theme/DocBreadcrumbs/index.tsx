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
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { tagLink, makeIdFromString, tagNavigation } from '@objectiv/tracker-browser';

// OBJECTIV
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
    <Link
      {...tagLink({ id: makeIdFromString(getNodeText(children) + "-" + href), href: href })}
      className={className} href={href}>
      {children}
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
  // END OBJECTIV
}

// TODO move to design system folder
function BreadcrumbsItem({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}): JSX.Element {
  return (
    <li
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}>
      {children}
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
    <nav
      // OBJECTIV
      {...tagNavigation({ id: 'breadcrumbs' })}
      // END OBJECTIV
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer,
      )}
      aria-label="breadcrumbs">
      <ul className="breadcrumbs">
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbsItem key={idx} active={idx === breadcrumbs.length - 1}>
            <BreadcrumbsItemLink href={item.href}>
              {item.label}
            </BreadcrumbsItemLink>
          </BreadcrumbsItem>
        ))}
      </ul>
    </nav>
  );
}
