---
sidebar_position: 3
slug: /taxonomy/core-concepts
title: Core Concepts
---

# Taxonomy Core Concepts

import Mermaid from '@theme/Mermaid';

The open taxonomy consists of:
* Classes for each common analytics event type (e.g. a button click), called **Events**.
* The contexts in which they can happen, e.g. the device, called **Contexts**. There are two types: Location 
  Contexts, and Global Contexts.
* Their properties, requirements and relationships.


<Mermaid chart={`
	graph TD
    Event["Event&lt;AbstractEvent&gt;"]--*--> GlobalContext["GlobalContext&lt;AbstractContext&gt;"]
    Event--*--> LocationContext["LocationContext&lt;AbstractContext&gt;"]
`}
  caption="Diagram: open taxonomy Events and related Contexts" 
  baseColor="basic" 
  links={[
    { name: 'Event', to: '/taxonomy/events' }, 
    { name: 'GlobalContext', to: '/taxonomy/global-contexts' }, 
    { name: 'LocationContext', to: '/taxonomy/location-contexts' }, 
  ]}
/>

## Events
Events collect data about relevant occurrences in your application. They are either triggered directly when a 
user interacts with your application (an [InteractiveEvent](/taxonomy/reference/events/InteractiveEvent.md)), 
or automatically, e.g. when a form callback or payments completes at a later time (a 
[NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md)).

An snippet for a potential Event:
```json
{
  "_type":"ClickEvent",
  "location_stack":[{<see sections below>}],
  "global_contexts":[{<see sections below>}],
  "id":"54597df3-7db5-43cb-8c3a-115ebdb742c7",
  "time": 1636972600870
}
```

For more details about Event triggers, properties, requirements, etc., see the 
[Tracking Core Concepts](/tracking/core-concepts/events.md).

## Location Contexts
Locations in the taxonomy describe the exact position in an application's UI from where an Event was 
triggered, e.g. Sections, Menus, etc. It is composed of a hierarchical stack of UI elements, meaning that the 
order in the stack is the order in the UI as well.

A snippet of a potential stack with multiple `LocationContexts` for an Event:

```json
[
  {
    "_type":"SectionContext",
    "id":"homepage"
  },
  {
    "_type":"SectionContext",
    "id":"hero"
  },
  {
    "_type":"LinkContext",
    "id":"cta-go",
    "text":"Go!",
    "href":"/path"
  }
]
```

In this example, there is a link called `cta-go` that lives in Section `hero`, within Section `homepage`.

## Global Contexts
Global contexts add global / general information about an Event. They carry information that is not related 
to where the Event originated (which is captured in the LocationContext). Examples are device, platform or 
marketing information.

A snippet of a potential set of GlobalContexts for an Event:

```json
[
  {
    "_type":"ApplicationContext",
    "id":"my-app"
  },
  {
    "_type":"HttpContext",
    "referer":"https://my-site.com",
    "user_agent": "user-agent-string",
    "remote_address": "localhost"
  },
]
```

In this example, the Event carries `GlobalContext`s that identify the application (`my-app`) and the web 
context of the user, in this case their referer, user agent, and IP address.


## Taxonomy Mapping
In order to enable Objectiv's tracker to collect data that embraces the Open Taxonomy, you need to map your application to it. You can find step-by-step instructions on how to do that in [our Tracking instrumentation guides](/tracking/introduction.md).