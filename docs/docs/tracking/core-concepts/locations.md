---
sidebar_position: 4
title: Locations
---

## Well-defined hierarchical UI positions
Locations in Objectiv describe the exact position in an application's UI from where an Event was triggered. 
It is composed of a hierarchical stack of UI elements; the order defines the hierarchy.

An example Location Stack for an Event:
```json
  "location_stack":[
    {
      "_type":"RootLocationContext",
      "id":"test-page",
    },
    {
      "_type":"ContentContext",
      "id":"homepage"
    },
    {
      "_type":"ContentContext",
      "id":"hero"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "href":"/path"
    }
  ]
```

In this example, there is a link that lives in Section 'hero', within Section 'homepage'.

## Every Event is unique
Together with an `id`, a Location Stack makes every Event unique. For example, taking the previous example, 
another Link with the same `id` on the homepage, but in a Section called 'footer', is still unique:

```json
  "location_stack":[
    {
      "_type":"RootLocationContext",
      "id":"test-page",
    },
    {
      "_type":"ContentContext",
      "id":"homepage"
    },
    {
      "_type":"ContentContext",
      "id":"footer"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "href":"/path"
    }
  ]
```

## A contextual layer over your application's UI
Having a Location Stack for Events is like having a contextual layer over your UI that serves multiple 
purposes:
* The collected data becomes **rich and descriptive**. You can pinpoint exactly what event happened, which 
  type it was, in which context it happened and from which location in the UI it was triggered.
* Your tracking instrumentation becomes [**debuggable**](/tracking/core-concepts/validation.md). You'll be able to catch tracking 
  instrumentation errors early on because it is being validated as you’re developing it.
* The collected data **no longer requires significant cleaning and restructuring** before it can be used for 
  modeling because it was collected in a structured manner and validated at the first step of the pipeline.

