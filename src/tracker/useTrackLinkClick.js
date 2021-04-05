import { useCallback, useContext } from 'react';
import { ObjectivContext } from './ObjectivProvider';

export default function useTrackLinkClick() {
  const { tracker } = useContext(ObjectivContext);

  return useCallback(
    (id, href) =>
      tracker.trackEvent({
        event: 'ClickEvent',
        contexts: [
          {
            _context_type: 'LinkContext',
            id: id,
            href: href,
          },
        ],
      }),
    [tracker]
  );
}
