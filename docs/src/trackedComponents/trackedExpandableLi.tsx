/*
 * Copyright 2022 Objectiv B.V.
 */

import {
  EventTrackerHookParameters,
  ExpandableContextWrapper,
  trackVisibility,
  useLocationStack,
  useOnChange,
  useTracker
} from "@objectiv/tracker-react";
import { makeIdFromString } from '@objectiv/tracker-core';
import React, { useState } from "react";

// TODO: remove this override on the next Tracker update
export const useVisibilityTracker = (parameters: EventTrackerHookParameters = {}) => {
  const { tracker = useTracker(), locationStack = useLocationStack(), globalContexts } = parameters;

  return ({isVisible}: {isVisible: boolean}) => trackVisibility({ isVisible, tracker, locationStack, globalContexts });
};
// END TODO

export type LiProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export type TrackedLiProps = LiProps & {
  isVisible: boolean;
}

const TrackedLi = ({ isVisible, ...props }: TrackedLiProps) => {
  const trackVisibility = useVisibilityTracker();
  const [wasVisible, setWasVisible] = useState<boolean>(isVisible);

  useOnChange(isVisible, () => {
    if ((wasVisible && !isVisible) || (!wasVisible && isVisible)) {
      trackVisibility({ isVisible });
      setWasVisible(isVisible);
    }
  })

  return <li {...props}/>
}

export type TrackedExpandableLiProps = LiProps & {
  id: string;
  isVisible: boolean;
}

export const TrackedExpandableLi = ({ id, ...props }: TrackedExpandableLiProps) => (
  <ExpandableContextWrapper id={makeIdFromString(id)}>
    <TrackedLi {...props} />
  </ExpandableContextWrapper>
);
