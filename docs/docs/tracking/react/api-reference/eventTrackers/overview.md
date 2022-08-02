---
sidebar_label: Overview
title: Event Trackers
---

Tracking events manually can be done using either **Event tracking hooks** or **Event tracking functions**. 

### Which one to use?
- **Event tracking hooks** are the easiest, and recommended, way of tracking Events in React components. They fully automate the retrieval of the Tracker instance and LocationStack.
- **Event tracking functions** offer full flexibility, but are much harder to use and to make mistakes with. They require the developer to specify all the Events' attributes manually. 

## Event tracking hooks

These hooks can be used to obtain ready-to-trigger callbacks for all [Events](/taxonomy/reference/events/overview.md). They can be preconfigured with custom locations, contexts and options both at creation and when triggering them.

- [useApplicationLoadedEventTracker](/tracking/react/api-reference/eventTrackers/useApplicationLoadedEventTracker.md)
- [useFailureEventTracker](/tracking/react/api-reference/eventTrackers/useFailureEventTracker.md)
- [useHiddenEventTracker](/tracking/react/api-reference/eventTrackers/useHiddenEventTracker.md)
- [useInputChangeEventTracker](/tracking/react/api-reference/eventTrackers/useInputChangeEventTracker.md)
- [useMediaLoadEventTracker](/tracking/react/api-reference/eventTrackers/useMediaLoadEventTracker.md)
- [useMediaPauseEventTracker](/tracking/react/api-reference/eventTrackers/useMediaPauseEventTracker.md)
- [useMediaStartEventTracker](/tracking/react/api-reference/eventTrackers/useMediaStartEventTracker.md)
- [useMediaStopEventTracker](/tracking/react/api-reference/eventTrackers/useMediaStopEventTracker.md)
- [usePressEventTracker](/tracking/react/api-reference/eventTrackers/usePressEventTracker.md)
- [useSuccessEventTracker](/tracking/react/api-reference/eventTrackers/useSuccessEventTracker.md)
- [useVisibilityTracker](/tracking/react/api-reference/eventTrackers/useVisibilityTracker.md)
- [useVisibleEventTracker](/tracking/react/api-reference/eventTrackers/useVisibleEventTracker.md)

## Event tracking functions

These are the low level primitives directly exposed from Core Tracker.  
They are not really meant for inline calling, but more for building one's own hooks and components.  

Make sure you have a deep understanding of how Location Stacks are composed before using them.

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
