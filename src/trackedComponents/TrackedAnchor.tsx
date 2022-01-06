/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { LinkContextWrapper, makeIdFromString, makeTitleFromChildren } from "@objectiv/tracker-react";
import React from 'react';
import { executeOnce } from "./executeOnce";
import { TrackedComponent } from "./trackedTypes";
import { trackPressEventHandler } from "./trackPressEventHandler";

export type TrackedAnchorProps = TrackedComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>> & {
  id?: string,
  title?: string,
  forwardId?: boolean,
  forwardTitle?: boolean,
  external?: boolean
};

export const TrackedAnchor = React.forwardRef<HTMLAnchorElement, TrackedAnchorProps>((props, ref) => {
  const { Component = 'a', id, title, forwardId = false, forwardTitle = false, external = false, ...otherProps } = props;

  // Gather a title to generate the Context id, either pick the given one or attempt to infer it from children
  const anchorTitle = title ?? makeTitleFromChildren(props.children);

  // Generate a Context id from the title string
  const anchorId = id ?? makeIdFromString(anchorTitle);

  // The final Component or anchor Click handler
  const handleClick = executeOnce(async (event, trackingContext) => {
    await trackPressEventHandler(event, trackingContext, external);
    props.onClick && props.onClick(event);
  })

  // The final set of props for the Component or anchor
  const componentProps = {
    ...otherProps,
    ...ref ? {ref} : {},
    ...forwardId ? {id} : {},
    ...forwardTitle ? {title} : {}
  }

  // The actual component
  return (
    <LinkContextWrapper id={anchorId} href={props.href}>
      {(trackingContext) => React.createElement(Component, {
        ...componentProps,
        onClick:(event) => handleClick(event, trackingContext)
      })}
    </LinkContextWrapper>
  );
})