---
sidebar_position: 1
slug: /tracking
title: Introduction
---
# Tracking with Objectiv
import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv comes with a set of tools that help you set up error-free user behavior tracking instrumentation:
* A Tracker for several web & mobile platforms and frameworks;
* A live debugger that provides instrumentation feedback in your IDE or console; and
* A Collector to receive, validate & store events.

<img src={useBaseUrl('/img/objectiv-pipeline-tracking.svg')} alt="Objectiv Pipeline" class="img-l" />

Instrumentation involves mapping your application to the [open taxonomy for analytics](/taxonomy) to ensure the collected data is clean, well-structured and ready for modeling. [Learn more](/tracking/core-concepts/overview.md).

## How-to Guides
A number of web & mobile platforms and frameworks are currently supported, such as JS, React, React Native, 
and Angular - with more support coming. To immediately jump into instrumenting your application, [follow the step-by-step How-to Guides](/tracking/how-to-guides/overview.md).

## Core Concepts
For more details on how our tracker works and the rationale behind it, [read about the underlying core concepts](/tracking/core-concepts/overview.md).

## API Reference
To implement low-level functionality and configuration of the Trackers, all core APIs are open and documented. [Check out the API Reference](/tracking/api-reference/overview.mdx)