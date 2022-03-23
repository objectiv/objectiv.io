---
sidebar_position: 1
slug: /tracking/react-native
title: Introduction
---
# React Native SDK

The React Native SDK leverages React Context Providers for mapping Native Components to the [Open Taxonomy](/taxonomy/introduction.md).

It provides generic [Wrappers](/tracking/react-native/api-reference/locationWrappers/overview.md) and automatically tracked Native [Components](/tracking/react-native/api-reference/trackedComponents/overview.md) to easily track most commonly used UI Components. 

Whenever manual instrumentation is required, the SDK comes also with a set of [Hooks](/tracking/react-native/api-reference/hooks/overview.md) and [low-level Event Trackers](/tracking/react-native/api-reference/eventTrackers/overview.md) to trigger [Events](/taxonomy/reference/events/overview.md) programmatically.

We also have a [React Navigation Plugin](/tracking/react-native/plugins/react-navigation.md) to easily track RootLocationContext, PathContext, Tabs and Drawers. Check out how to [Install React Navigation Plugin](/tracking/react-native/how-to-guides/getting-started.md#install-react-navigation-plugin).

## How-to Guides
To immediately jump into instrumenting your application, follow the step-by-step How-to Guides:
- [Getting Started](/tracking/react-native/how-to-guides/getting-started.md)
  - [React Navigation Plugin](/tracking/react-native/how-to-guides/getting-started.md#installing-react-navigation-plugin)
- [Tracking Interactions](/tracking/react-native/how-to-guides/tracking-interactions.md)
- [Tracking Locations](/tracking/react-native/how-to-guides/tracking-locations.md)
- [Custom Components](/tracking/react-native/how-to-guides/custom-components.md)
- [Configuring Logging](/tracking/react-native/how-to-guides/configuring-logging.md)

## API Reference 
- [React Native SDK API Reference](/tracking/react-native/api-reference/overview.md)

## Core Concepts
- [Best Practices](/tracking/core-concepts/react-native/best-practices.md)
