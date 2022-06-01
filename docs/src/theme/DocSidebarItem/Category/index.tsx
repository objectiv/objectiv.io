import React, {ComponentProps} from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import type CategoryType from '@theme/DocSidebarItem/Category';
import { 
  EventTrackerHookParameters, 
  TrackedExpandableContext, 
  trackVisibility, 
  useLocationStack, 
  useOnChange, 
  useTracker 
} from '@objectiv/tracker-react';

type Props = ComponentProps<typeof CategoryType>;

// TODO: remove this override on the next Tracker update
export const useVisibilityTracker = (parameters: EventTrackerHookParameters) => {
  const { tracker = useTracker(), locationStack = useLocationStack(), globalContexts } = parameters;

  return ({isVisible}: {isVisible: boolean}) => trackVisibility({ isVisible, tracker, locationStack, globalContexts });
};
// END TODO

export default function CategoryWrapper(props: Props): JSX.Element {
  const { item } = props;
  const label = item.label;

  const trackVisibility = useVisibilityTracker({});
  useOnChange(item.collapsed, () => trackVisibility({isVisible: !item.collapsed})); 

  return (
    <TrackedExpandableContext
      Component={'div'}
      id={label}
      isVisible={!item.collapsed}>
        <Category {...props} />
    </TrackedExpandableContext>
  );
}
