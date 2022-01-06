/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React from "react";
import { TrackedContent } from "./TrackedContent";

export type TrackedHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  forwardId?: boolean;
};

export const TrackedHeader = React.forwardRef<HTMLDivElement, TrackedHeaderProps>((props, ref) => (
  <TrackedContent id={props.id ?? 'header'} Component={'header'} ref={ref} {...props}/>
));
