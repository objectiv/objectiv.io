---
sidebar_position: 1
slug: /tracking/browser
title: Introduction
---
# Browser SDK

The Browser SDK is designed to work without a specific UI Kit, or framework, with a preference for a ES6/TypeScript applications. This is not a strict requirements though. At the core it's just JavaScript and all it needs is a browser.

[Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) can be used to enrich DOM elements with [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md).  
These are later used to reconstruct the Location of where an Event originated by traversing the DOM.

Most events are [triggered automatically](/tracking/browser/api-reference/locationTaggers/tagLocation.md#events), although all the automation is configurable. For special cases [Event Trackers](/tracking/browser/api-reference/eventTrackers/overview.md) are provided for manually triggering any of the [Open Taxonomy events](/taxonomy/reference/events/overview.md).

Browser Tracker can [traverse and tag the DOM](/tracking/browser/api-reference/locationTaggers/tagChildren.md) for you, making it ideal for instrumenting static or pre-generated content.

## How-to Guides
To immediately jump into instrumenting your application, follow the step-by-step How-to Guides:
- [Getting Started](/tracking/browser/how-to-guides/getting-started.md)
- [Tagging Locations](/tracking/browser/how-to-guides/tagging-locations.md)
- [Troubleshooting](/tracking/browser/how-to-guides/troubleshooting.md)

## API References
- [Browser SDK API Reference](/tracking/browser/api-reference/overview.md)
- [React SDK API Reference](/tracking/react/api-reference/overview.md)

## Core Concepts
For more details on how our tracker works and the rationale behind it, [read about the underlying core concepts](/tracking/core-concepts/overview.md).

- [Tagging](/tracking/core-concepts/browser/tagging.md)
- [Validation](/tracking/core-concepts/browser/validation.md)
