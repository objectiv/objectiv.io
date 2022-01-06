/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React from "react";
import { TrackedContent } from "./TrackedContent";

export type TrackedArticleProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  forwardId?: boolean;
};

export const TrackedArticle = React.forwardRef<HTMLDivElement, TrackedArticleProps>((props, ref) => (
  <TrackedContent id={props.id ?? 'article'} Component={'article'} ref={ref} {...props}/>
));
