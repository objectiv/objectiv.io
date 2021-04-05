import { useContext } from 'react';
import { useMount, useUnmount } from 'react-use';
import { ObjectivContext } from './ObjectivProvider';

export default function useTrackVisibility(tracker) {
  const { tracker: trackerFromContext } = useContext(ObjectivContext);

  const trackerToUse = tracker ?? trackerFromContext;

  useMount(() => {
    trackerToUse.trackEvent({
      event: 'SectionVisibleEvent',
      contexts: [],
    });
  }, []);

  useUnmount(() => {
    trackerToUse.trackEvent({
      event: 'SectionHideEvent',
      contexts: [],
    });
  }, []);
}
