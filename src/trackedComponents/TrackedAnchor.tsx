/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { LinkContextWrapper, makeIdFromString, makeTitleFromChildren, trackPressEvent } from "@objectiv/tracker-react";
import React from 'react';
import { TrackedComponent } from "./trackedTypes";

export type TrackedAnchorProps = TrackedComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>> & {
  id?: string,
  title?: string,
  forwardId?: boolean,
  forwardTitle?: boolean,
  external?: boolean
};

export const TrackedAnchor = React.forwardRef<HTMLAnchorElement, TrackedAnchorProps>((props, ref) => {
  const { Component, id, title, forwardId = false, forwardTitle = false, external = false, ...otherProps } = props;

  // Gather a title to generate the Context id, either pick the given one or attempt to infer it from children
  const anchorTitle = title ?? makeTitleFromChildren(props.children);

  // Generate a Context id from the title string
  const anchorId = id ?? makeIdFromString(anchorTitle);

  // Since we dispatch the Event again after tracking, prevent looping via high order function
  const once = (f) => {
    let executed = false;
    return (...args) => {
      if (!executed) {
        executed = true;
        f(...args);
      }
    };
  };

  // The final Component or anchor Click handler
  const handleClick = once(async (event, trackingContext) => {
    const eventClone = new (event.nativeEvent.constructor as any)(event.type, event);
    event.preventDefault();
    const trackPressEventPayload = {...trackingContext, ...{
        options: !external ? undefined : {
          waitForQueue: true,
          flushQueue: true
        }
      }
    }
    if(external) {
      await trackPressEvent(trackPressEventPayload)
    } else {
      trackPressEvent(trackPressEventPayload);
    }
    event.target.dispatchEvent(eventClone);
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
      {(trackingContext) => (
        Component ?
          <Component {...componentProps} onClick={(event) => handleClick(event, trackingContext)} /> :
          <a {...componentProps} onClick={(event) => handleClick(event, trackingContext)} />
      )}
    </LinkContextWrapper>
  );
})
