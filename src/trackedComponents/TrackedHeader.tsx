/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { ContentContextWrapper } from "@objectiv/tracker-react";
import React from "react";

export type TrackedHeaderProps = React.HTMLAttributes<HTMLDivElement> & { id?: string, forwardId?: boolean };

export const TrackedHeader = React.forwardRef<HTMLDivElement, TrackedHeaderProps>((props: TrackedHeaderProps, ref) => {
  const { id = 'header', forwardId = false, ...otherProps } = props;

  return (
    <ContentContextWrapper id={id} >
      <header {...otherProps} ref={ref} id={forwardId ? id: undefined} />
    </ContentContextWrapper>
  );
});
