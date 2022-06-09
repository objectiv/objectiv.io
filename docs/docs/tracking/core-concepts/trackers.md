---
sidebar_position: 3
title: Trackers
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv currently supports four trackers:
* [React Tracker](#react-tracker) for installation into React web apps.
* [React Native Tracker](#react-native-tracker) for installation into React Native apps.
* [Browser Tracker](#browser-tracker) for installation into websites and JS web apps.
* [Angular Tracker](#angular-tracker) for installation into Angular web apps.

By default, Trackers automatically track: 
- [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md)
- [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md)
- [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md)
- [PathContext](/taxonomy/reference/global-contexts/PathContext.md)
- [HttpContext](/taxonomy/reference/global-contexts/HttpContext.md) (only on web based Trackers, such as React, Browser and Angular)

And, while developing with Developer Tools, automatically validate:
- [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md)
  - must be present once in the Global Contexts of every Event
- [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md)
  - must be present once in the Location Stack of every Interactive Event
  - must be the first context in Location Stack
- [PathContext](/taxonomy/reference/global-contexts/PathContext.md)
  - must be present once in the Global Contexts of every Interactive Event

## React Tracker
The [React Tracker](/tracking/react/how-to-guides/getting-started.md) is available via npm to be directly installed into your React application.
It relies on React Context Providers for Location tracking and hooks for Event tracking. Tracking Locations with React Tracker is much easier and reliable than with BrowserTracker.

- See [How-to get started with React SDK](/tracking/react/how-to-guides/getting-started.md).
- See [How-to setup Developer Tools for React SDK](/tracking/react/how-to-guides/configuring-logging.md).

## React Native Tracker
The [React Native Tracker](/tracking/react-native/how-to-guides/getting-started.md) is available via npm to be directly installed into your React Native application.

- See [How-to get started with React Native SDK](/tracking/react-native/how-to-guides/getting-started.md).
- See [How-to setup Developer Tools for React Native SDK](/tracking/react-native/how-to-guides/configuring-logging.md).

## Browser Tracker
The [Browser Tracker](/tracking/browser/how-to-guides/getting-started.md) is available via npm to be directly installed into your JavaScript Web application. 
It relies on the DOM for Location tracking and can be used with any framework relying on HTML templates or pre-generated content.

- See [How-to get started with Browser SDK](/tracking/browser/how-to-guides/getting-started.md).
- See [How-to setup Developer Tools for Browser SDK](/tracking/browser/how-to-guides/configuring-logging.md).

## Angular Tracker
The [Angular Tracker](/tracking/angular/how-to-guides/getting-started.md) is available via npm to be directly installed into your Angular application.
It's a module built on top of Browser Tracker coming with a Directive to ease tagging in HTML templates. 

- See [How-to get started with Angular SDK](/tracking/angular/how-to-guides/getting-started.md).
- See [How-to setup Developer Tools for Angular SDK](/tracking/angular/how-to-guides/configuring-logging.md).

## Extensibility: Plugins
Trackers are extensible through plugins. Each plugin can control when it's enabled, e.g. only if a Web
environment is available. Some Plugins may be available only for a specific SDK.

These plugins are supported out of the box, and automatically enabled when the environment supports it:

### `application-context`
  * adds a Global [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md) to each Event
  * included in all SDKs
  
### `http-context`
  * adds a Global [HttpContext](/taxonomy/reference/global-contexts/HttpContext.md) to each Event
  * its `remote_address` attribute is enriched server-side by the [Collector](/tracking/collector/introduction.md)
  * included in React, Browser and Angular SDKs
  
### `path-context-from-url`
  * adds a Global [PathContext](/taxonomy/reference/global-contexts/PathContext.md) to each Event
  * further parsed server-side by the [Collector](/tracking/collector/introduction.md) to enrich events with [MarketingContext](/taxonomy/reference/global-contexts/MarketingContext.md)
  * included in React, Browser and Angular SDKs

### `react-navigation`
  * adds a Location [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md) to each Event
  * adds a Global [PathContext](/taxonomy/reference/global-contexts/PathContext.md) to each Event
  * included in React Native SDKs
  
### `root-location-context-from-url`
  * adds a Location [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md) to each Event
  * Included in React, Browser and Angular SDKs
