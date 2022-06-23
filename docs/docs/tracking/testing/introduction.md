---
sidebar_position: 1
slug: /tracking/testing
title: Introduction
---

Maintaining a healthy tracking instrumentation can be challenging. Application changes may break existing instrumentation, introduce data ambiguity or both. 

**Developer Tools**  
The [`developer-tools`](https://www.npmjs.com/package/@objectiv/developer-tools) package, bundled with all Objectiv SDKs, can be imported to access a number of debugging utilities both in the browser and your tests.

**Event Recorder**  
Whenever Developer Tools are imported, all Tracker instances automatically begin recording events and errors in a global interface: the [EventRecorder](/tracking/testing/event-recorder.md). 

**Recorded Events**  
Recordings can be refined with the [RecordedEvents](/tracking/testing/event-recorder.md#filtering-recordedevents) interface, to make snapshots as precise and easy to maintain as possible. 

**Automated testing**  
The next logical step is to verify Recorded Events automatically to ensure our instrumentation is in good shape. [E2E Testing with Cypress](/tracking/testing/cypress.md) allows us to evaluate recordings with snapshot-testing and automated actions.