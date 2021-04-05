import { useContext } from 'react';
import { ObjectivContext } from './ObjectivProvider';

export default function useTrackApplicationLoad(tracker) {
  const { tracker: trackerFromContext } = useContext(ObjectivContext);

  const trackerToUse = tracker ?? trackerFromContext;

  document.addEventListener('DOMContentLoaded', () =>
    trackerToUse.trackEvent({ event: 'ApplicationLoadEvent', contexts: [] })
  );
}
