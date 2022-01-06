/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { OverlayContextWrapper, trackVisibility, useOnChange } from "@objectiv/tracker-react";
import React, { useState } from 'react';
import { TrackedNavProps } from "./TrackedNav";
import { TrackedComponent } from "./trackedTypes";

export type TrackedOverlayProps = TrackedComponent<React.HTMLAttributes<HTMLDivElement>> & {
  id: string,
  forwardId?: boolean,
  isVisible: boolean
};

export const TrackedOverlay = React.forwardRef<HTMLDivElement, TrackedOverlayProps>((props, ref) => {
  const [wasVisible, setWasVisible] = useState<boolean>(false)
  const { Component = 'div', id, forwardId, isVisible, ...otherProps } = props;

  useOnChange(isVisible, () => setWasVisible(isVisible));

  const componentProps = {
    ...otherProps,
    ...ref ? {ref} : {},
    ...forwardId ? {id} : {},
  }

  return (
    <OverlayContextWrapper id={id}>
      {trackingContext => {
        if(wasVisible && !isVisible || !wasVisible && isVisible) {
          trackVisibility({ isVisible, ...trackingContext });
        }
        return React.createElement(Component, componentProps);
      }}

    </OverlayContextWrapper>
  );
});
