import { useContext } from 'react';
import { ObjectivProvider, ObjectivContext } from '../ObjectivProvider';
import useTrackVisibility from '../useTrackVisibility';

export default function Section({ children, id }) {
  const { tracker } = useContext(ObjectivContext);

  const sectionTracker = tracker.withStack([
    {
      _context_type: 'SectionContext',
      id,
    },
  ]);

  useTrackVisibility(sectionTracker);

  return <ObjectivProvider tracker={sectionTracker}>{children}</ObjectivProvider>;
}
