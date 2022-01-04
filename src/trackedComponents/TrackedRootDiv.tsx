/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { RootLocationContextWrapper } from "@objectiv/tracker-react";
import React from "react";

export type TrackedRootDivProps = React.HTMLAttributes<HTMLDivElement> & { id: string, forwardId?: boolean };

export const TrackedRootDiv = React.forwardRef<HTMLDivElement, TrackedRootDivProps>((props: TrackedRootDivProps, ref) => {
  const { id, forwardId = true, ...otherProps } = props;

  return (
    <RootLocationContextWrapper id={id} >
      <div {...otherProps} ref={ref} id={forwardId ? id: undefined} />
    </RootLocationContextWrapper>
  );
});
