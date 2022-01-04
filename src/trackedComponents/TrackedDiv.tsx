/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { ContentContextWrapper } from "@objectiv/tracker-react";
import React from "react";

export type TrackedDivProps = React.HTMLAttributes<HTMLDivElement> & { id: string, forwardId?: boolean };

export const TrackedDiv = React.forwardRef<HTMLDivElement, TrackedDivProps>((props: TrackedDivProps, ref) => {
  const { id, forwardId = false, ...otherProps } = props;

  return (
    <ContentContextWrapper id={id} >
      <div {...otherProps} ref={ref} id={forwardId ? id: undefined} />
    </ContentContextWrapper>
  );
});
