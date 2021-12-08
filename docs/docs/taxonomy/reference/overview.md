---
sidebar_position: 1
slug: /taxonomy/reference
title: Overview
---

# Taxonomy Reference

High level overview of all the Events & Contexts available in the open taxonomy.

## Abstract Contexts
AbstractContexts define either properties required by Collectors or internal ones, ensuring hierarchical 
uniqueness.

* [AbstractContext](./abstract-contexts/AbstractContext.md)
* [AbstractGlobalContext](./abstract-contexts/AbstractGlobalContext.md)
* [AbstractLocationContext](./abstract-contexts/AbstractLocationContext.md)


## Location Contexts
Used to populate the `location_stack` properties of an event. A Location Stack is meant to describe accurately where an event originated in the UI.

* [AbstractLocationContext](./location-contexts/AbstractLocationContext.md)
* [ExpandableSectionContext](./location-contexts/ExpandableSectionContext.md)
* [InputContext](./location-contexts/InputContext.md)
* [LinkContext](./location-contexts/LinkContext.md)
* [MediaPlayerContext](./location-contexts/MediaPlayerContext.md)
* [NavigationContext](./location-contexts/NavigationContext.md)
* [OverlayContext](./location-contexts/OverlayContext.md)
* [PressableContext](./location-contexts/PressableContext.md)
* [SectionContext](./location-contexts/SectionContext.md)


## Global Contexts
Global contexts add general information to an event.

* [AbstractGlobalContext](./global-contexts/AbstractGlobalContext.md)
* [ApplicationContext](./global-contexts/ApplicationContext.md)
* [CookieIdContext](./global-contexts/CookieIdContext.md)
* [DeviceContext](./global-contexts/DeviceContext.md)
* [HttpContext](./global-contexts/HttpContext.md)
* [PathContext](./global-contexts/PathContext.md)
* [SessionContext](./global-contexts/SessionContext.md)


## Events
Used to describe interactive and non-interactive events.

* [AbstractEvent](./events/AbstractEvent.md)
* [ApplicationLoadedEvent](./events/ApplicationLoadedEvent.md)
* [FailureEvent](./events/FailureEvent.md)
* [InputChangeEvent](./events/InputChangeEvent.md)
* [InteractiveEvent](./events/InteractiveEvent.md)
* [NonInteractiveEvent](./events/NonInteractiveEvent.md)
* [PressEvent](./events/PressEvent.md)
* [SectionHiddenEvent](./events/SectionHiddenEvent.md)
* [SectionVisibleEvent](./events/SectionVisibleEvent.md)
* [SuccessEvent](./events/SuccessEvent.md)
* [VideoEvent](./events/VideoEvent.md)
* [VideoLoadEvent](./events/VideoLoadEvent.md)
* [VideoPauseEvent](./events/VideoPauseEvent.md)
* [VideoStartEvent](./events/VideoStartEvent.md)
* [VideoStopEvent](./events/VideoStopEvent.md)
