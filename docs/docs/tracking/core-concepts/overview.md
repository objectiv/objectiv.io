---
sidebar_position: 1
slug: /tracking/core-concepts
title: Introduction
---

# Tracking Core Concepts

While most trackers simply track everything by inserting a simple script, the data they collect is often incomplete or over-complete, unstructured and ambiguous. Significant gruntwork is typically required before it can be used for modeling. 

Objectiv asks you to map your application to the [open analytics taxonomy](/taxonomy/introduction.md).  

This is done by identifying the interactive elements in your application’s UI and assigning them [locations](/tracking/core-concepts/locations.md). It will create a contextual layer for your application that Objectiv's tracker uses to collect clean, well-structured data that is ready for modeling with minimal gruntwork. 

A few events, such as [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md), and LocationContexts, such as [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md), are tracked automatically, but even those can be configured and manually instrumented if needed. 

#### Learn more about Objectiv's tracking concepts:
- [Locations](/tracking/core-concepts/locations.md) that describe the exact UI position for an [Event](/taxonomy/reference/events/overview.md).
- [Trackers](/tracking/core-concepts/trackers.md) to instrument on various platforms.
- [Validation](/tracking/core-concepts/validation.md) of Events according to the [taxonomy](/taxonomy/introduction.md).
- [Backend](/tracking/backend/introduction.md) to receive, validate and store [Events](/taxonomy/reference/events/overview.md).

#### SDK specific
- [React SDK Core Concepts](/tracking/core-concepts/react/best-practices.md)
- [React Native SDK Core Concepts](/tracking/core-concepts/react-native/best-practices.md)
- [Browser SDK Core Concepts](/tracking/core-concepts/browser/tagging.md)
- [Angular SDK Core Concepts](/tracking/core-concepts/angular/tagging.md)
