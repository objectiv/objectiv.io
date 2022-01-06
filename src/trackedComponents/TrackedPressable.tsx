/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { makeIdFromString, makeTitleFromChildren, PressableContextWrapper } from "@objectiv/tracker-react";
import React from 'react';
import { executeOnce } from "./executeOnce";
import { TrackedComponent } from "./trackedTypes";
import { trackPressEventHandler } from "./trackPressEventHandler";

export type TrackedPressableProps = TrackedComponent<React.AnchorHTMLAttributes<HTMLButtonElement>> & {
  id?: string,
  title?: string,
  forwardId?: boolean,
  forwardTitle?: boolean,
  external?: boolean
};

export const TrackedPressable = React.forwardRef<HTMLButtonElement, TrackedPressableProps>((props, ref) => {
  const { Component, id, title, forwardId = false, forwardTitle = false, external = false, ...otherProps } = props;

  // Gather a title to generate the Context id, either pick the given one or attempt to infer it from children
  const pressableTitle = title ?? makeTitleFromChildren(props.children);

  // Generate a Context id from the title string
  const pressableId = id ?? makeIdFromString(pressableTitle);

  // The final Component or button Click handler
  const handleClick = executeOnce(async (event, trackingContext) => {
    await trackPressEventHandler(event, trackingContext, external);
    props.onClick && props.onClick(event);
  })

  // The final set of props for the Component or button
  const componentProps = {
    ...otherProps,
    ...ref ? {ref} : {},
    ...forwardId ? {id} : {},
    ...forwardTitle ? {title} : {}
  }

  // The actual component
  return (
    <PressableContextWrapper id={pressableId}>
      {(trackingContext) => React.createElement(Component, {
        ...componentProps,
        onClick:(event) => handleClick(event, trackingContext)
      })}
    </PressableContextWrapper>
  );
})
