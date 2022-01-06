/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React from "react";
import { TrackedContent } from "./TrackedContent";

export type TrackedNavProps = React.HTMLAttributes<HTMLDivElement> & { id?: string, forwardId?: boolean };

export const TrackedNav = React.forwardRef<HTMLDivElement, TrackedNavProps>((props, ref) => (
  <TrackedContent id={props.id ?? 'nav'} Component={'nav'} ref={ref} {...props}/>
));
