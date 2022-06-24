---
sidebar_position: 1
slug: /tracking/testing
title: Introduction
---

import VimeoPlayer from '@site/src/components/vimeo-player';

Maintaining a healthy tracking instrumentation can be challenging. Application changes may break existing 
instrumentation, introduce data ambiguity or both. As a result, your data team needs to update their models, 
or find out where & when they broke unexpectedly.

The Objectiv SDKs come with functionality to enable end-to-end testing of your tracking instrumentation, in 
order to catch any instrumentation changes early, before data is even collected.


## Developer Tools
The [`developer-tools`](https://www.npmjs.com/package/@objectiv/developer-tools) package, bundled with all 
Objectiv SDKs, can be imported to access a number of debugging utilities both in the browser and your tests.

## Event Recorder
Whenever Developer Tools are imported, all Tracker instances automatically begin recording events and errors 
in a global interface: the [EventRecorder](/tracking/testing/event-recorder.md). 

## Recorded Events
Recordings can be refined with the 
[RecordedEvents](/tracking/testing/event-recorder.md#filtering-recordedevents) interface, to make snapshots 
as precise and easy to maintain as possible. 

## Automated testing
The next logical step is to verify Recorded Events automatically to ensure our instrumentation is in good 
shape. [CI frameworks](/tracking/testing/ci-frameworks/introduction.md) allow us to evaluate recordings with 
e.g. snapshot-testing and automated actions.

See this video where we show how to enable end-to-end testing with the Objectiv SDKs, with examples:

<VimeoPlayer id="product-demo-validation" videoId="722917146" paddingBottom="45%" />
