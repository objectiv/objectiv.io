/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { trackPressEvent } from "@objectiv/tracker-react";

/**
 * Delays the given event, tracks PressEvent, optionally waits until tracked and then re-dispatches the original event.
 */
export const trackPressEventHandler = async (event, trackingContext, waitUntilTracked) => {
  const eventClone = new (event.nativeEvent.constructor as any)(event.type, event);
  event.preventDefault();
  const trackPressEventPayload = {...trackingContext, ...{
      options: !waitUntilTracked ? undefined : {
        waitForQueue: true,
        flushQueue: true
      }
    }
  }
  if(waitUntilTracked) {
    await trackPressEvent(trackPressEventPayload)
  } else {
    trackPressEvent(trackPressEventPayload);
  }
  event.target.dispatchEvent(eventClone);
}
