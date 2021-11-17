---
sidebar_position: 1
slug: /taxonomy/reference
title: Overview
---

High level overview of all the Events & Contexts available in the open taxonomy.

## Abstract Contexts
AbstractContexts define either properties required by Collectors or internal ones, ensuring hierarchical 
uniqueness.

* [AbstractContext](./abstract-contexts/AbstractContext.md)
* [AbstractGlobalContext](./abstract-contexts/AbstractGlobalContext.md)
* [AbstractLocationContext](./abstract-contexts/AbstractLocationContext.md)


## Location Contexts
LocationContexts are used to populate a [Tracker's](/tracking/core-concepts/trackers) or 
[Event's](/tracking/core-concepts/events.md) `location_stack` properties. A Location Stack is a visual representation of the UI location a user is currently viewing when an [Event](/tracking/core-concepts/events.md) occurs.  It is composed of a hierarchical stack of UI elements, meaning that the 
order in the stack is the order in the UI as well.

* [AbstractLocationContext](./location-contexts/AbstractLocationContext.md)
* [ActionContext](./location-contexts/ActionContext.md)
* [ButtonContext](./location-contexts/ButtonContext.md)
* [ExpandableSectionContext](./location-contexts/ExpandableSectionContext.md)
* [InputContext](./location-contexts/InputContext.md)
* [ItemContext](./location-contexts/ItemContext.md)
* [LinkContext](./location-contexts/LinkContext.md)
* [MediaPlayerContext](./location-contexts/MediaPlayerContext.md)
* [NavigationContext](./location-contexts/NavigationContext.md)
* [OverlayContext](./location-contexts/OverlayContext.md)
* [ScreenContext](./location-contexts/ScreenContext.md)
* [SectionContext](./location-contexts/SectionContext.md)
* [WebDocumentContext](./location-contexts/WebDocumentContext.md)


## Global Contexts
Global contexts add global / general information about an [Event](/tracking/core-concepts/events.md). They 
carry information that is not related to where the [Event](/tracking/core-concepts/events.md) originated 
(location), such as device, platform or business data.

* [AbstractGlobalContext](./global-contexts/AbstractGlobalContext.md)
* [ApplicationContext](./global-contexts/ApplicationContext.md)
* [CookieIdContext](./global-contexts/CookieIdContext.md)
* [DeviceContext](./global-contexts/DeviceContext.md)
* [ErrorContext](./global-contexts/ErrorContext.md)
* [HttpContext](./global-contexts/HttpContext.md)
* [SessionContext](./global-contexts/SessionContext.md)


## Events
Events must provide an `id` and optionally can, but most likely will, carry a list of 
[LocationContexts](/taxonomy/reference/location-contexts/overview.md) and 
[GlobalContexts](/taxonomy/reference/global-contexts/overview.md). Additionally, every event must have an 
[ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md) to be able to distinguish from 
what application the event originated.

* [AbstractEvent](./events/AbstractEvent.md)
* [AbortedEvent](./events/AbortedEvent.md)
* [ApplicationLoadedEvent](./events/ApplicationLoadedEvent.md)
* [ClickEvent](./events/ClickEvent.md)
* [CompletedEvent](./events/CompletedEvent.md)
* [DocumentLoadedEvent](./events/DocumentLoadedEvent.md)
* [InputChangeEvent](./events/InputChangeEvent.md)
* [InteractiveEvent](./events/InteractiveEvent.md)
* [NonInteractiveEvent](./events/NonInteractiveEvent.md)
* [SectionHiddenEvent](./events/SectionHiddenEvent.md)
* [SectionVisibleEvent](./events/SectionVisibleEvent.md)
* [URLChangeEvent](./events/URLChangeEvent.md)
* [VideoEvent](./events/VideoEvent.md)
* [VideoLoadEvent](./events/VideoLoadEvent.md)
* [VideoPauseEvent](./events/VideoPauseEvent.md)
* [VideoStartEvent](./events/VideoStartEvent.md)
* [VideoStopEvent](./events/VideoStopEvent.md)
