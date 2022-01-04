/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { NavigationContextWrapper } from "@objectiv/tracker-react";
import React from "react";

export type TrackedNavProps = React.HTMLAttributes<HTMLDivElement> & { id?: string, forwardId?: boolean };

export const TrackedNav = React.forwardRef<HTMLDivElement, TrackedNavProps>((props: TrackedNavProps, ref) => {
  const { id = 'navigation', forwardId = false, ...otherProps } = props;

  return (
    <NavigationContextWrapper id={id}>
      <nav {...otherProps} ref={ref} id={forwardId ? id: undefined} />
    </NavigationContextWrapper>
  );
});
