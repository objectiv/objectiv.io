/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type {Props} from '@theme/Logo';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';

// OBJECTIV
import OriginalLogo from '@theme-original/Logo';
import { TrackedLink } from "../../trackedComponents/TrackedLink";
// END OBJECTIV

export default function Logo(props: Props): JSX.Element {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo = {src: ''}},
  } = useThemeConfig();
 
  const logoLink = useBaseUrl(logo.href || '/');

  return <TrackedLink Component={OriginalLogo} id={'logo'} href={logoLink} title={navbarTitle} {...props} />
};
