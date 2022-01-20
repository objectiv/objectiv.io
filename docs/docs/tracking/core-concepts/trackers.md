---
sidebar_position: 6
title: Trackers
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv currently supports three trackers:
* [Browser Tracker](#browser-tracker) for installation into websites and JS web apps via npm.
* [React Tracker](#react-tracker) for installation into React web apps.
* [Angular Tracker](#angular-tracker) for installation into Angular web apps.

## React Tracker
The [React Tracker](/tracking/react/how-to-guides/getting-started.md) is available via npm to be directly installed into your React application.
It relies on React Context Providers for Location tracking and hooks for Event tracking.  
Tracking Locations with React Tracker is much easier and reliable than with BrowserTracker.

See the [How-to Guide for React](/tracking/react/how-to-guides/getting-started.md) to get started.

By default, the React Tracker automatically tracks the
[ApplicationLoaded](/tracking/react/api-reference/eventTrackers/trackApplicationLoadedEvent.md) event.

## Browser Tracker
The [Browser Tracker](/tracking/browser/how-to-guides/getting-started.md) is available via npm. 
It relies on the DOM for Location tracking and can be used with any framework relying on HTML templates.

By default, the Browser Tracker automatically tracks the 
[ApplicationLoaded](/tracking/browser/api-reference/eventTrackers/trackApplicationLoadedEvent.md) event.

## Angular Tracker
The Angular Tracker is a module built on top of Browser Tracker coming with a Directive to ease tagging in HTML templates. 

See the [How-to Guide for Angular](#TODO) to get started.

By default, the Angular Tracker automatically tracks the 
[ApplicationLoaded](#TODO) event.

## Extensibility: Plugins
The Core Tracker is extensible through plugins. Each plugin can control when it's enabled, e.g. only if a Web
environment is available.

These plugins are supported out of the box, and automatically enabled when the environment supports it:
* `application-context`: adds a Global [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md) 
  to each Event;
* `path-context-from-url`: adds a Global [PathContext](/taxonomy/reference/global-contexts/PathContext.md)
  to each Event;
* `root-location-context-from-url`: adds a Location [PathContext](/taxonomy/reference/location-contexts/RootLocationContext.md)
  to each Event;
