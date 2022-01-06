/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React from "react";
import { TrackedContent } from "./TrackedContent";

export type TrackedFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  forwardId?: boolean;
};

export const TrackedFooter = React.forwardRef<HTMLDivElement, TrackedFooterProps>((props, ref) => (
  <TrackedContent id={props.id ?? 'footer'} Component={'footer'} ref={ref} {...props}/>
));
