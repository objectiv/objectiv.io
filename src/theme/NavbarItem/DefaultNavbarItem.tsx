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
import { tagLink } from "@objectiv/tracker-browser";

export default function DefaultNavbarItem({
  mobile = false,
  position: _position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: Props): JSX.Element {
  return (
    <OriginalDefaultNavbarItem 
      {...props}
      {...tagLink({ id: props.label, text: props.label, href: props.href ? props.href : props.to })}
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
}: NavLinkProps): JSX.Element {
  return (
    <OriginalNavLink 
      {...props} 
    />
  )
}
