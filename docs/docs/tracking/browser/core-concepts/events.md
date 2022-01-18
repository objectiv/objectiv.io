---
sidebar_position: 3
title: Events
slug: events
---

Events collect data about relevant occurrences in your application. They are either triggered directly when a 
user interacts with your application (an [InteractiveEvent](/taxonomy/reference/events/InteractiveEvent.md)), or 
automatically, e.g. when a form callback or payments completes at a later time (a 
[NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md)).

### Properties
Next to specifying its `_type`, [Events](/taxonomy/reference/events/overview.md) must provide a unique `id`. Together 
with its [Location](/tracking/core-concepts/locations.md) Stack, every Event in an application should be unique - Trackers 
[help to enforce this](validation.md).

Additionally, every Event must have [GlobalContexts](taxonomy/reference/global-contexts/overview.md), with at least an 
[`ApplicationContext`](/taxonomy/reference/global-contexts/ApplicationContext.md), to be able to distinguish from what application the event originated.

Every Event optionally can, but most likely will, carry a list of 
[LocationContexts](taxonomy/reference/location-contexts/overview.md) that describe where the event happened

An example event with `location_stack` and `global_context` properties:

```json
{
  "_type":"PressEvent",
  "id":"211d778b-20ea-4a12-be56-77d5b8fe3cd0",
  "location_stack":[
    {
      "_type":"RootLocationContext",
      "id":"home"
    },
    {
      "_type":"ContentContext",
      "id":"homepage"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "href":"/path"
    }
  ],
  "global_contexts":[
    {
      "_type":"ApplicationContext",
      "id":"example-website"
    },
    {
      "_type":"PathContext",
      "id":"https://example.com/"
    }
  ]
}
```

## Triggers
For tagged Elements, most Events will be 
[triggered automatically](/tracking/api-reference/locationTaggers/tagLocation.md#events), based on the 
LocationContext bound to the Tagged Element. To do so, internally, the Web tracker uses a Mutation Observer 
to monitor the DOM. When existing nodes change or get removed, or if subtrees get added, it traverses the 
Nodes and scouts for Elements that have been enriched with Tracking Attributes. For those Elements it 
attaches Event listeners, which will automatically handle their tracking.

However, sometimes it may be preferable, or necessary, to 
[trigger Events programmatically](/tracking/api-reference/eventTrackers/overview.md).

## Out-of-the-box Events
The Tracker uses the same Observer described above to trigger the events below by default.

### ApplicationLoaded
An [ApplicationLoaded](/taxonomy/reference/events/ApplicationLoadedEvent.md) Event (by default enabled, configurable)
triggers once on application load.
