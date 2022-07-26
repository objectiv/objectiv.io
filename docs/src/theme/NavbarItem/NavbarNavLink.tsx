import React, {ComponentProps} from 'react';
import NavbarNavLink from '@theme-original/NavbarItem/NavbarNavLink';
import type NavbarNavLinkType from '@theme/NavbarItem/NavbarNavLink';
import { TrackedLink } from '../../trackedComponents/TrackedLink';
import {isRegexpStringMatch} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';

type Props = ComponentProps<typeof NavbarNavLinkType>;

export default function NavbarNavLinkWrapper(props: Props): JSX.Element {
  const { label, href, to, prependBaseUrlToHref, activeBasePath, activeBaseRegex } = props;
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  const isExternalLink = label && href && !isInternalUrl(href);

  const linkTo = href ? (prependBaseUrlToHref ? normalizedHref : href) : toUrl;
  const waitUntilTracked = isExternalLink ? true : false;

  return (
    <TrackedLink 
      Component={NavbarNavLink} 
      id={label as string} 
      href={linkTo} 
      waitUntilTracked={waitUntilTracked}
      isNavLink
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl),
      })}      
      {...props} />
  );
}
