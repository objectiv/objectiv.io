/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';
import OriginalLogo from '@theme-original/Logo';
import { tagLink } from "@objectiv/tracker-browser";

const Logo = (props): JSX.Element  => {
  const {
    navbar: {logo = {src: ''}},
  } = useThemeConfig();
  const logoLink = useBaseUrl(logo.href || '/');

  return <OriginalLogo
    {...tagLink({ id: 'logo', href: logoLink })}
    {...props} 
  />
};

export default Logo;
