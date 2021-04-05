import { useCallback, useContext } from 'react';
import { ObjectivContext } from './ObjectivProvider';

export default function useTrackElementClick() {
  const { tracker } = useContext(ObjectivContext);

  return useCallback(
    (id) =>
      tracker.trackEvent({
        event: 'ClickEvent',
        contexts: [
          {
            _context_type: 'ElementContext',
            id: id,
          },
        ],
      }),
    [tracker]
  );
}
