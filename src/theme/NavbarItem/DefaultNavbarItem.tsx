// noinspection JSUnusedGlobalSymbols

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TrackedLinkContext } from "@objectiv/tracker-react";
import OriginalDefaultNavbarItem from '@theme-original/NavbarItem/DefaultNavbarItem';
import OriginalNavLink from '@theme-original/NavbarItem/DefaultNavbarItem';
import React from 'react';

export default function DefaultNavbarItem({
  mobile = false,
  position: _position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}): JSX.Element {
  return (
    <TrackedLinkContext
      Component={OriginalDefaultNavbarItem}
      {...props}
      href={props.href ?? props.to}
      // NavbarItems can be Link components or <a> tags, href is harmful for the former and needed for the latter
      forwardHref={!!props.href}
      title={props.title ?? props.label}
    />
  );
}

export function NavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  activeClassName = '',
  prependBaseUrlToHref,
  ...props
}): JSX.Element {
  return (
    <OriginalNavLink 
      {...props} 
    />
  )
}
