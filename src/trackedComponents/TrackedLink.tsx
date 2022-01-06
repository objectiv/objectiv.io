/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import Link, { LinkProps } from "@docusaurus/Link";
import React from 'react';
import { TrackedAnchor, TrackedAnchorProps } from "./TrackedAnchor";
import { TrackedComponent } from "./trackedTypes";

export type TrackedLinkProps = TrackedComponent<LinkProps> & Omit<TrackedAnchorProps, 'Component'>;

export const TrackedLink = React.forwardRef<HTMLAnchorElement, TrackedLinkProps>((props, ref) => (
  <TrackedAnchor Component={Link} {...props} ref={ref}/>
))
