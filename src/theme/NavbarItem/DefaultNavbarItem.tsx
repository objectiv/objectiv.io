/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useRef, useEffect} from 'react';
import OriginalDefaultNavbarItem from '@theme-original/NavbarItem/DefaultNavbarItem';
import OriginalNavLink from '@theme-original/NavbarItem/DefaultNavbarItem';
import type { NavLinkProps } from '@theme-original/NavbarItem/DefaultNavbarItem';
import { trackLink } from "@objectiv/tracker-browser";

export function DefaultNavbarItem({mobile = false, ...props}: Props): JSX.Element {
  return (
    <OriginalDefaultNavbarItem 
      {...props} 
    />
  )
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
}: NavLinkProps): JSX.Element {
  return (
    <OriginalNavLink 
      {...props} 
      {...trackLink({ id: label, text: label, href: href ? href : to })}
    />
  )
}

export default DefaultNavbarItem;
