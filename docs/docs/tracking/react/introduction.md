---
sidebar_position: 1
slug: /tracking/react
title: Introduction
---
# React SDK

The React SDK leverages React Context Providers for mapping JSX Elements and Components to the [Open Taxonomy](/taxonomy).

It provides a number of Higher Order [Elements](/tracking/react/api-reference/trackedElements/overview.md), [Components](/tracking/react/api-reference/trackedContexts/overview.md) and [Wrappers](/tracking/react/api-reference/locationWrappers/overview.md) to easily make a regular UI Element into a Tracked one. 

The resulting components are automatically wrapped in the correct [LocationContext](/taxonomy/reference/location-contexts/overview.md) and, if applicable, event handlers are automatically instrumented under the hood.

Whenever manual instrumentation is required, the SDK comes also with a set of [Hooks](/tracking/react/api-reference/hooks/overview.md) and [low-level Event Trackers](/tracking/react/api-reference/eventTrackers/overview.md) to trigger [Events](/taxonomy/reference/events/overview.md) programmatically.

## How-to Guides
To immediately jump into instrumenting your application, follow the step-by-step How-to Guides:
- [Getting Started](/tracking/react/how-to-guides/getting-started.md)
- [Tracking Locations](/tracking/react/how-to-guides/tracking-locations.md)

## API Reference 
- [React SDK API Reference](/tracking/react/api-reference/overview.md)

## Core Concepts
- [Best Practices](/tracking/react/core-concepts/best-practices.md)
