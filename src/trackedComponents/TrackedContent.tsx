/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { ContentContextWrapper } from "@objectiv/tracker-react";
import React from "react";
import { TrackedComponent } from "./trackedTypes";

export type TrackedContentProps = TrackedComponent<React.HTMLAttributes<HTMLElement>> & { id: string, forwardId?: boolean };

export const TrackedContent = React.forwardRef<HTMLElement, TrackedContentProps>((props, ref) => {
  const { id, Component, forwardId = false, ...otherProps } = props;

  const componentProps = {
    ...otherProps,
    ...ref ? {ref} : {},
    ...forwardId ? {id} : {},
  }

  return (
    <ContentContextWrapper id={id} >
      {React.createElement(Component, componentProps)}
    </ContentContextWrapper>
  );
});
