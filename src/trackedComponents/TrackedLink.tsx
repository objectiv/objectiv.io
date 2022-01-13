/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import Link, { LinkProps } from "@docusaurus/Link";
import { TrackedLinkContext, TrackedLinkContextProps } from "@objectiv/tracker-react";
import React from 'react';

export type TrackedLinkProps = Omit<TrackedLinkContextProps, 'Component' | 'href'> & LinkProps;

export const TrackedLink = React.forwardRef<HTMLAnchorElement, TrackedLinkProps>((props, ref) => (
  <TrackedLinkContext Component={Link} {...props} href={props.href ?? props.to} ref={ref}/>
))
