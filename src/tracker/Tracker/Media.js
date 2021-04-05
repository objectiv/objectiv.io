import { useContext } from 'react';
import { ObjectivContext, ObjectivProvider } from '../ObjectivProvider';
import useTrackVisibility from '../useTrackVisibility';

export default function Media({ children, video }) {
  const { tracker } = useContext(ObjectivContext);

  const mediaTracker = tracker.withStack([
    {
      _context_type: 'MediaContext',
      ...video,
    },
  ]);

  useTrackVisibility(mediaTracker);

  return <ObjectivProvider tracker={mediaTracker}>{children}</ObjectivProvider>;
}
