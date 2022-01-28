---
sidebar_label: Overview
title: Event Trackers
---

:::caution
Using low-level event trackers directly requires extra attention to the LocationStack and its composition.  
It's easy to instrument a callback and forget to wrap the triggering Component in a LocationContext.  
Make sure to always use Render Props when wrapping and tracking inline in the same JSX.
:::

:::tip
These APIs work best in combination with [LocationWrappers](/tracking/react/api-reference/overview.md#location-wrappers) Render Props.  
Check the Render Props Usage section in any of them for examples on how to combine the two.  
:::

- [trackApplicationLoadedEvent](/tracking/react/api-reference/eventTrackers/trackApplicationLoadedEvent.md)
- [trackPressEvent](/tracking/react/api-reference/eventTrackers/trackPressEvent.md)
- [trackInputChangeEvent](/tracking/react/api-reference/eventTrackers/trackInputChangeEvent.md)
- [trackMediaLoadEvent](/tracking/react/api-reference/eventTrackers/trackMediaLoadEvent.md)
- [trackMediaPauseEvent](/tracking/react/api-reference/eventTrackers/trackMediaPauseEvent.md)
- [trackMediaStartEvent](/tracking/react/api-reference/eventTrackers/trackMediaStartEvent.md)
- [trackMediaStopEvent](/tracking/react/api-reference/eventTrackers/trackMediaStopEvent.md)
- [trackFailureEvent](/tracking/react/api-reference/eventTrackers/trackFailureEvent.md)
- [trackSuccessEvent](/tracking/react/api-reference/eventTrackers/trackSuccessEvent.md)
- [trackHiddenEvent](/tracking/react/api-reference/eventTrackers/trackHiddenEvent.md)
- [trackVisibility](/tracking/react/api-reference/eventTrackers/trackVisibility.md)
- [trackVisibleEvent](/tracking/react/api-reference/eventTrackers/trackVisibleEvent.md)
