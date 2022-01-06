/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React from "react";
import { TrackedContent } from "./TrackedContent";

export type TrackedSectionProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  forwardId?: boolean;
};

export const TrackedDiv = React.forwardRef<HTMLDivElement, TrackedSectionProps>((props, ref) => (
  <TrackedContent Component={'div'} ref={ref} {...props}/>
));
