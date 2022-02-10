---
sidebar_position: 7
title: Validation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Data tracked by Objectiv adheres to an open, standardized [Taxonomy](/taxonomy/introduction.md). This means it's 
well-structured & self-descriptive, and can be validated at the first step of the pipeline. Objectiv provides 
several tools to catch errors before data starts flowing in, outlined below.

## Build-time validation
Objectiv's [Location Tagging](/tracking/angular/api-reference/locationTaggers/overview.md) & 
[BrowserTracker:Event Tracking](/tracking/browser/api-reference/eventTrackers/overview.md) functions are typed and documented.

During instrumentation, you'll get inline documentation for every function, and linting for any validation 
issues: unknown tagging/tracking calls, missing properties, or wrongly typed properties.

Example inline error in IDE:
<img alt="IDE validation: property id" src={useBaseUrl('img/docs/ide-typescript-validation.png')} />

## Run-time validation
When you run your application, any validation errors are caught by the Objectiv debugger, and displayed in the
browser console:

* **Errors**: Warnings are thrown for unknown tagging/tracking calls, missing properties, or wrongly typed 
  properties.
* **Uniqueness**: If an Event `id` and its [Location Stack](/tracking/core-concepts/locations.md) are not unique, an Error is thrown.
  In the browser console, the error can be hovered/clicked to identify the existing and colliding Elements.
  [See Locations - Solving Collisions](/tracking/core-concepts/locations.md#solving-collisions) for an example.

## Collector validation
As a final catch-all, Objectiv's [Collector](/tracking/collector/introduction.md) validates any incoming Event against the 
[Taxonomy and its properties](/taxonomy/reference/events/overview.md). 

For more background, see the [Collector docs](/tracking/collector/introduction.md).

## Logging
When you run your application, you can observe all tracking calls and other tracking events by enabling 
logging. This will print all tracking events to the chosen logger, e.g. the browser console.

Logging can be enabled in two ways:
1. When configuring the tracker. For example, to log to the browser console:
```js
ObjectivTrackerModule.forRoot({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
  console: console
})
```
:::info
Logging is automatically enabled in development mode.
:::

2. At runtime. For example, to enable logging from the browser console:
```console
objectiv.trackers.defaultTracker.console = console;
```
