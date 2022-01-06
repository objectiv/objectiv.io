/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { ContentContextWrapper } from "@objectiv/tracker-react";
import React from "react";
import { TrackedContent } from "./TrackedContent";

export type TrackedMainProps = React.HTMLAttributes<HTMLDivElement> & { id?: string, forwardId?: boolean };

export const TrackedMain = React.forwardRef<HTMLDivElement, TrackedMainProps>((props, ref) => (
  <TrackedContent id={props.id ?? 'main'} Component={'main'} ref={ref} {...props}/>
));
