import { useContext } from 'react';
import { usePreviousDistinct } from 'react-use';
import { ObjectivContext } from './ObjectivProvider';

export default function useTrackOnToggle(track, event, context) {
  const { tracker } = useContext(ObjectivContext);
  const prevTrack = usePreviousDistinct(track);

  if (prevTrack === undefined) {
    return;
  }

  if (!track || track === prevTrack) {
    return;
  }

  tracker.trackEvent({
    event,
    contexts: [context],
  });
}
