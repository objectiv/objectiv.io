/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React from "react";
import { TrackedContent } from "./TrackedContent";

export type TrackedDivProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  forwardId?: boolean;
};

export const TrackedDiv = React.forwardRef<HTMLDivElement, TrackedDivProps>((props, ref) => (
  <TrackedContent Component={'div'} ref={ref} {...props}/>
));