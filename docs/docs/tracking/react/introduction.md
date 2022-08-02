---
sidebar_position: 1
slug: /tracking/react
title: Introduction
---
# React SDK

The React SDK leverages React Context Providers for mapping JSX Elements and Components to the [open analytics taxonomy](/taxonomy/introduction.md).

## APIs
Tracking a Component means wrapping it in the correct Location Context and, if interactive, capturing its events. 

There are three ways of doing so:
- Basic HTML Semantic Elements can be swapped with [TrackedElements](/tracking/react/api-reference/trackedElements/overview.md)
- HTML-like custom Components can be swapped with [TrackedContexts](/tracking/react/api-reference/trackedContexts/overview.md)
- Complex Components can be manually instrumented with [LocationWrappers](/tracking/react/api-reference/locationWrappers/overview.md) and Event Tracking [Hooks](/tracking/react/api-reference/eventTrackers/overview.md#event-tracking-hooks) or [Functions](/tracking/react/api-reference/eventTrackers/overview.md#event-tracking-functions)  

### TrackedElements
High level Components designed to match HTML Semantic Elements. These components are the least effort to instrument; simply swap the original HTML Semantic Element with their Tracked Element counterparts.

```tsx
// Basic HTML button tag
<button onClick={handleClick}>
  Click Me!
</button>

// TrackedButton equivalent: a <button> wrapped in PressableContext tracking PressEvent on click 
<TrackedButton onClick={handleClick}>
  Click Me!
</TrackedButton>
```

### TrackedContexts
The underlying building blocks of TrackedElements. While still providing automatic Location wrapping and event tracking, they allow specifying a Component to wrap around. 

Much like Tracked Elements, swapping the original component, or HTML tag, with a Tracked Context is all that's needed to instrument it. 

Currently, only HTML-like components are supported.

```tsx
// A generic MenuItem component that renders an html-like component, eg a <li>, <button> 
<MenuItem onClick={handleMenuClick}>
  Click Me!
</MenuItem>

// TrackedContext equivalent
<TrackedPressableContext Component={MenuItem} onClick={handleMenuClick}>
  Do It!
</TrackedPressableContext>
```

:::info
Some TrackedContext may require more attributes. For example TrackedLinkContext requires a href to be specified.

Check out the [How to track interactions with Links](/tracking/react/how-to-guides/tracking-interactions.md#link) guide for more info and examples.
:::

### Location Wrappers
Wrap their children in a Location Context. Tracked Elements and Tracked Contexts internally use Location Wrappers automatically. 

Location Wrappers don't track interactions, instead they are usually used to either enrich Locations or to instrument custom or generic components in combination with Event Trackers.

```tsx
// The same interaction appears multiple times on the same page 
<div>
  <Link to={'/contact'}>Contact us</Link>
  ...
  <Link to={'/contact'}>Contact us</Link>
  ...
  <Link to={'/contact'}>Contact us</Link>
</div>

// ContentContextWrapper can be used to enrich and deduplicate the location of these interactions
<div>
  <ContentContextWrapper id={'hero'}>
    <Link to={'/contact'}>Contact us</Link>
  </ContentContextWrapper>
  ...
  <ContentContextWrapper id={'body'}>
    <Link to={'/contact'}>Contact us</Link>
  </ContentContextWrapper>
  ...
  <ContentContextWrapper id={'footer'}>
    <Link to={'/contact'}>Contact us</Link>
  </ContentContextWrapper>
</div>
```

### Event Trackers
There are two ways of tracking events. Which one to use depends on how the target Component has been wrapped and whether we have access to its internals or not.

#### Hooks
[Event tracking hooks](/tracking/react/api-reference/eventTrackers/overview.md#event-tracking-hooks) can be invoked to generate a tracking callback that's already configured with the correct TrackingContext.

#### Functions
[Event tracking functions](/tracking/react/api-reference/eventTrackers/overview.md#event-tracking-functions) are the lowest level APIs to track Events, and they require developers to specify the correct Tracking Context. 
This can be retrieved from LocationWrappers / TrackedContexts render-props, or by invoking the [useTrackingContext](/tracking/react/api-reference/hooks/useTrackingContext.md) hook. 

:::info
Check out the [Custom Components](/tracking/react/how-to-guides/custom-components.md) how to for more information and a practical example of how that works.
:::

## How-to Guides
To immediately jump into instrumenting your application, follow the step-by-step How-to Guides:
- [Getting Started](/tracking/react/how-to-guides/getting-started.md)
- [Tracking Interactions](/tracking/react/how-to-guides/tracking-interactions.md)
- [Tracking Locations](/tracking/react/how-to-guides/tracking-locations.md)
- [Custom Components](/tracking/react/how-to-guides/custom-components.md)
- [Configuring Root Locations](/tracking/react/how-to-guides/configuring-root-locations.md)
- [Configuring Logging](/tracking/react/how-to-guides/configuring-logging.md)

## API Reference 
- [React SDK API Reference](/tracking/react/api-reference/overview.md)

## Plugins
- [React SDK Plugins](/tracking/react/plugins/overview.md)

## Core Concepts
- [Best Practices](/tracking/core-concepts/react/best-practices.md)
