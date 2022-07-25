/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {isRegexpStringMatch} from '@docusaurus/theme-common';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/NavbarItem/NavbarNavLink';

// OBJECTIV
import { TrackedLink } from '../../trackedComponents/TrackedLink';
// END OBJECTIV

const dropdownLinkActiveClass = 'dropdown__link--active';

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
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

  // Link content is set through html XOR label
  const linkContentProps = html
    ? {dangerouslySetInnerHTML: {__html: html}}
    : {
        children: (
          <>
            {label}
            {isExternalLink && (
              <IconExternalLink
                {...(isDropdownLink && {width: 12, height: 12})}
              />
            )}
          </>
        ),
      };

  if (href) {
    return (
      <TrackedLink
        href={prependBaseUrlToHref ? normalizedHref : href}
        {...props}
        {...linkContentProps}
      />
    );
  }

  return (
    // OBJECTIV
    <TrackedLink
      href={toUrl}
      {...{
        to: toUrl,
        isNavLink: true,
        activeClassName: !props.className?.includes(activeClassName)
          ? activeClassName
          : '',
        ...(activeBasePath || activeBaseRegex
          ? {
              isActive: (_match, location) =>
                activeBaseRegex
                  ? isRegexpStringMatch(activeBaseRegex, location.pathname)
                  : location.pathname.startsWith(activeBaseUrl),
            }
          : null),
      }}
      {...props}
      {...linkContentProps}>
    </TrackedLink>
    // END OBJECTIV
  );
}
