---
sidebar_label: Overview
title: Location Wrappers
sidebar_position: 1
---

These Components wrap their children in a [Context.Provider](https://reactjs.org/docs/context.html#contextprovider). This allows the ReactTracker to reconstruct their Location in the UI.

:::tip
The combination of Location Wrappers and [Low-level Event Trackers](/tracking/react/api-reference/overview.md#low-level-event-trackers) is how we build Tracked Contexts and Elements.  
Check the Render Props Usage sections for example of how to combine the two.  
:::

#### Higher-level
- [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md)

#### Low-level
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
