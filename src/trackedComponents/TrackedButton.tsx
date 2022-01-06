/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React from 'react';
import { TrackedPressable } from "./TrackedPressable";
import { TrackedComponent } from "./trackedTypes";

export type TrackedButtonProps = TrackedComponent<React.HTMLProps<HTMLButtonElement>> & {
  id?: string;
  forwardId?: boolean;
};

export const TrackedButton = React.forwardRef<HTMLButtonElement, TrackedButtonProps>((props, ref) => (
  <TrackedPressable Component={'button'} {...props} ref={ref}/>
))
