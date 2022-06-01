import React, {ComponentProps} from 'react';
import NavbarNavLink from '@theme-original/NavbarItem/NavbarNavLink';
import type NavbarNavLinkType from '@theme/NavbarItem/NavbarNavLink';
import { TrackedLink } from '../../trackedComponents/TrackedLink';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';

type Props = ComponentProps<typeof NavbarNavLinkType>;

export default function NavbarNavLinkWrapper(props: Props): JSX.Element {
  const { label, href, to, prependBaseUrlToHref } = props;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  const linkTo = href ? (prependBaseUrlToHref ? normalizedHref : href) : toUrl;
  const isExternalLink = label && href && !isInternalUrl(href);
  const waitUntilTracked = isExternalLink ? true : false;

  return (
    <TrackedLink 
      Component={NavbarNavLink} 
      id={label as string} 
      href={linkTo} 
      waitUntilTracked={waitUntilTracked}
      {...props} />
  );
}
