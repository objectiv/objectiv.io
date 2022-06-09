---
sidebar_position: 1
slug: /tracking/react-native
title: Introduction
---
# React Native SDK

## APIs
Tracking a Component means wrapping it in the correct Location Context and, if interactive, capturing its events. 

There are two ways of doing so:
- Native-like custom Components can be swapped with [TrackedComponents](/tracking/react-native/api-reference/trackedComponents/overview.md)
- Complex Components can be manually instrumented with [LocationWrappers](/tracking/react-native/api-reference/locationWrappers/overview.md) and Event Tracking [Hooks](/tracking/react-native/api-reference/hooks/eventTrackers/overview.md) or [Functions](/tracking/react-native/api-reference/eventTrackers/overview.md)  

### TrackedComponents
High level Components designed to match the native ones. These components are the least effort to instrument; simply swap the originals with their Tracked Component counterparts.

```tsx
// React Native Button
<Button
  onPress={onPressHandler}
  title="Learn More"
/>

// TrackedButton equivalent: a <Button> wrapped in PressableContext tracking PressEvent on press 
<TrackedButton
  onPress={onPressHandler}
  title="Learn More"
/>
```

### Location Wrappers
Wrap their children in a Location Context. Tracked Components internally use Location Wrappers automatically. 

Location Wrappers don't track interactions, instead they are usually used to either enrich Locations or to instrument custom or generic components in combination with Event Trackers.

```tsx
// The same interaction appears multiple times on the same screen 
<View>
  <Button onPress={handlePress}>Contact us</Button>
  ...
  <Button onPress={handlePress}>Contact us</Button>
  ...
  <Button onPress={handlePress}>Contact us</Button>
</View>

// ContentContextWrapper can be used to enrich and deduplicate the location of these interactions
<View>
  <ContentContextWrapper id={'top'}>
    <Button onPress={handlePress}>Contact us</Button>
  </ContentContextWrapper>
  ...
  <ContentContextWrapper id={'body'}>
    <Button onPress={handlePress}>Contact us</Button>
  </ContentContextWrapper>
  ...
  <ContentContextWrapper id={'bottom'}>
    <Button onPress={handlePress}>Contact us</Button>
  </ContentContextWrapper>
</View>
```

### Event Trackers
There are two ways of tracking events. Which one to use depends on how the target Component has been wrapped and whether we have access to its internals or not.

#### Hooks
[EventTrackers hooks](/tracking/react-native/api-reference/hooks/eventTrackers/overview.md) can be invoked to generate a tracking callback that's already configured with the correct TrackingContext.

#### Functions
[EventTrackers functions](/tracking/react-native/api-reference/eventTrackers/overview.md) are the lowest level APIs to track Events, and they require developers to specify the correct Tracking Context. 
This can be retrieved from LocationWrappers / TrackedContexts render-props, or by invoking the [useTrackingContext](/tracking/react-native/api-reference/hooks/consumers/useTrackingContext.md) hook. 

:::info
Check out the [Custom Components](/tracking/react-native/how-to-guides/custom-components.md) how to for more information and a practical example of how that works.
:::

## How-to Guides
To immediately jump into instrumenting your application, follow the step-by-step How-to Guides:
- [Getting Started](/tracking/react-native/how-to-guides/getting-started.md)
  - [React Navigation Plugin](/tracking/react-native/how-to-guides/getting-started.md#installing-react-navigation)
- [Tracking Interactions](/tracking/react-native/how-to-guides/tracking-interactions.md)
- [Tracking Locations](/tracking/react-native/how-to-guides/tracking-locations.md)
- [Custom Components](/tracking/react-native/how-to-guides/custom-components.md)
- [Configuring Logging](/tracking/react-native/how-to-guides/configuring-logging.md)

## API Reference 
- [React Native SDK API Reference](/tracking/react-native/api-reference/overview.md)

## Plugins
- [React Native SDK Plugins](/tracking/react-native/plugins/overview.md)

## Core Concepts
- [Best Practices](/tracking/core-concepts/react-native/best-practices.md)
