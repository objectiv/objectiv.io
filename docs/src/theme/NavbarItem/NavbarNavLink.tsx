/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {Props} from '@theme/NavbarItem/NavbarNavLink';
import IconExternalLink from '@theme/IconExternalLink';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {isRegexpStringMatch} from '@docusaurus/theme-common';

// OBJECTIV
import { tagLink, TagLocationOptions } from "@objectiv/tracker-browser";
// END OBJECTIV

const dropdownLinkActiveClass = 'dropdown__link--active';

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  activeClassName = '',
  prependBaseUrlToHref,
  ...props
}: Props): JSX.Element {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  const isExternalLink = label && href && !isInternalUrl(href);
  const isDropdownLink = activeClassName === dropdownLinkActiveClass;

  // OBJECTIV
  const linkTo = href ? (prependBaseUrlToHref ? normalizedHref : href) : toUrl;
  const tagLinkOptions: TagLocationOptions = isExternalLink
    ? { trackClicks: { waitUntilTracked: true } }
    : { trackClicks: true };
  // END OBJECTIV
  return (
    <Link
      // OBJECTIV
      {...tagLink({id: label as string, href: linkTo, options: tagLinkOptions}) }
      // END OBJECTIV
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            isNavLink: true,
            activeClassName: !props.className?.includes(activeClassName)
              ? activeClassName
              : '',
            to: toUrl,
            ...(activeBasePath || activeBaseRegex
              ? {
                  isActive: (_match, location) =>
                    activeBaseRegex
                      ? isRegexpStringMatch(activeBaseRegex, location.pathname)
                      : location.pathname.startsWith(activeBaseUrl),
                }
              : null),
          })}
      {...props}>
      {isExternalLink ? (
        <span>
          {label}
          <IconExternalLink {...(isDropdownLink && {width: 12, height: 12})} />
        </span>
      ) : (
        label
      )}
    </Link>
  );
}
