import { useContext, useEffect } from 'react';
import { useLocation } from 'react-use';
import { ObjectivContext } from './ObjectivProvider';

export default function useTrackURLChange(tracker) {
  const { tracker: trackerFromContext } = useContext(ObjectivContext);
  const trackerToUse = tracker ?? trackerFromContext;

  const location = useLocation();

  useEffect(() => {
    trackerToUse.trackEvent({
      event: 'URLChangeEvent',
      contexts: [],
    });
  }, [location, trackerToUse]);
}
