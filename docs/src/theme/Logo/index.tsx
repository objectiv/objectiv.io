import React, {ComponentProps} from 'react';
import Logo from '@theme-original/Logo';
import type LogoType from '@theme/Logo';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TrackedLink } from '../../objectiv/TrackedLink';

type Props = ComponentProps<typeof LogoType>;

export default function LogoWrapper(props: Props): JSX.Element {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo = {src: ''}},
  } = useThemeConfig();

  const logoLink = useBaseUrl(logo.href || '/');

  return <TrackedLink Component={Logo} id={'logo'} href={logoLink} title={navbarTitle} {...props} />
}
