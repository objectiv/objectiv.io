---
sidebar_position: 1
slug: /tracking/
title: Introduction
---
# Tracking with Objectiv
import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv comes with a set of tools that help you set up error-free user behavior tracking instrumentation:
* A Tracker for several web & mobile platforms and frameworks;
* A live debugger that provides instrumentation feedback in your IDE or console; and
* A Collector to receive, validate & store events.

<img src={useBaseUrl('/img/objectiv-pipeline-tracking.svg')} alt="Objectiv Pipeline" className="img-l" />

Instrumentation involves an opt-in process of mapping your application to the [open taxonomy for analytics](/taxonomy/introduction.md) to ensure the collected data is clean, well-structured and ready for modeling. [Learn more](/tracking/core-concepts/overview.md).

## How-to Guides
A number of web platforms and frameworks are currently supported, such as JS, React, and Angular - with more support coming. To immediately jump into instrumenting your application, follow the step-by-step How-to Guides:
- [Getting Started with React SDK](/tracking/react/how-to-guides/getting-started.md)
- [Getting Started with React Native SDK](/tracking/react-native/how-to-guides/getting-started.md)
- [Getting Started with Browser SDK](/tracking/browser/how-to-guides/getting-started.md)
- [Getting Started with Angular SDK](/tracking/angular/how-to-guides/getting-started.md)

## API Reference
To implement low-level functionality and configuration of the Trackers, all core APIs are open and documented. Check out the API References:
- [React SDK API Reference](/tracking/react/api-reference/overview.md)
- [React Native SDK API Reference](/tracking/react-native/api-reference/overview.md)
- [Browser SDK API Reference](/tracking/browser/api-reference/overview.md)
- [Angular SDK API Reference](/tracking/angular/api-reference/overview.md)

## Core Concepts
For more details on how our tracker works and the rationale behind it, [read about the underlying core concepts](/tracking/core-concepts/overview.md).
