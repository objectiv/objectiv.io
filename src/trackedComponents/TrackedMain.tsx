/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { ContentContextWrapper } from "@objectiv/tracker-react";
import React from "react";

export type TrackedMainProps = React.HTMLAttributes<HTMLDivElement> & { id?: string, forwardId?: boolean };

export const TrackedMain = React.forwardRef<HTMLDivElement, TrackedMainProps>((props: TrackedMainProps, ref) => {
  const { id = 'main', forwardId = true, ...otherProps } = props;

  return (
    <ContentContextWrapper id={id} >
      <main {...otherProps} ref={ref} id={forwardId ? id: undefined} />
    </ContentContextWrapper>
  );
});
