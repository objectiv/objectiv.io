/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { ContentContextWrapper } from "@objectiv/tracker-react";
import React from "react";

export type TrackedArticleProps = React.HTMLAttributes<HTMLDivElement> & { id?: string, forwardId?: boolean };

export const TrackedArticle = React.forwardRef<HTMLDivElement, TrackedArticleProps>((props: TrackedArticleProps, ref) => {
  const { id = 'article', forwardId = false, ...otherProps } = props;

  return (
    <ContentContextWrapper id={id} >
      <article {...otherProps} ref={ref} id={forwardId ? id: undefined} />
    </ContentContextWrapper>
  );
});
