---
title: "Release: React Native SDK"
description: "Use Objectiv's advanced modeling on your mobile app's user behavior data with the new React Native SDK. It automatically hooks into UI components that come with React Native and the React Navigation routing library. This enables you to capture how users interact with your app at specific UI locations."
slug: release-react-native-sdk/
tags: [releases]
image: /img/open-graph/og-react-native.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: React Native SDK" />
</head>


import JoinSlackLink from '@site/src/components/join-slack-link';

[modeling]: https://objectiv.io/docs/modeling/
[locations]: https://objectiv.io/docs/tracking/core-concepts/locations
[config-tracker]: https://objectiv.io/docs/tracking/react-native/how-to-guides/getting-started#configure-the-tracker
[react-native-plugin]: https://objectiv.io/docs/tracking/react-native/how-to-guides/getting-started/#installing-react-navigation-plugin
[trackedComponents]: https://objectiv.io/docs/tracking/react-native/api-reference/trackedComponents/overview/
[track-locations]: https://objectiv.io/docs/tracking/react-native/how-to-guides/tracking-locations
[tabs-drawers]: https://objectiv.io/docs/tracking/react-native/how-to-guides/getting-started#tracking-tabs--drawers
[hooks]: https://objectiv.io/docs/tracking/react-native/api-reference/hooks/overview/
[track-events]: https://objectiv.io/docs/tracking/react-native/api-reference/eventTrackers/overview/
[custom-components]: https://objectiv.io/docs/tracking/react-native/how-to-guides/custom-components

*With this release we now provide a Tracker SDK for React Native, so you can use 
[Objectiv's advanced modeling][modeling] on your mobile app's user behavior data as well.*

Analytics tracking instrumentation shouldn't cost you a lot of time. So we've put a lot of effort into 
ensuring that it's incredibly simple and quick.

<!--truncate-->

## How does it work?

One of the key aspects of Objectiv is the [Location Stack][locations], which captures the exact location 
where an Event was triggered ([more on how & why in this post](./2022-02-16%20Location%20Stack.md)). 

```json title="An example Location Stack in Objectiv"
{
 "_type": "PressEvent",
 "location_stack": [
   {
     "_type": "RootLocationContext",
     "id": "TabOne"
   },
   {
     "_type": "NavigationContext",
     "id": "drawer"
   },
   {
     "_type": "NavigationContext",
     "id": "bottom-tabs"
   },
   {
     "_type": "ContentContext",
     "id": "tab-one"
   },
   {
     "_type": "PressableContext",
     "id": "do-something"
   }
 ]
}
```

The new SDK automatically hooks into UI components that come with React Native, plus the React Navigation 
routing library that is used by many apps.

As a result, to instrument your application, simply:
1. Initialize [**the tracker**][config-tracker] & configure the 
[**React Navigation Plugin**][react-native-plugin];
2. And then **swap the respective [UI Components][trackedComponents]** with the ones provided in the new SDK, 
e.g. anything that's interactive.

User interactions are then automatically tracked, including their full [Location Stack][locations].

**Code example for 1) Initializing the tracker & configuring the React Navigation Plugin:**
```tsx
export default function Navigation() {
  const navigationContainerRef = useNavigationContainerRef();
 
  const tracker = new ReactNativeTracker({
    applicationId: 'native-react-app',
    endpoint: 'http://localhost:8081/',
    plugins: [
      new ContextsFromReactNavigationPlugin({ navigationContainerRef })
    ]
  })
 
  return (
    <ObjectivProvider tracker={tracker}>
      <NavigationContainer ref={navigationContainerRef}>
        <DrawerNavigator />
      </NavigationContainer>
    </ObjectivProvider>
  );
}
```

**Code example for 2) Swapping the respective UI Components with the ones provided in the new SDK:**

To track a Button and where it was clicked:

```tsx
import { Button } from 'react-native';

<Button
 onPress={onPressHandler}
 title="Learn More"
/>
```

...simply swap it with its Tracked version:


```tsx
import { TrackedButton } from '@objectiv/tracker-react-native';

<TrackedButton
 onPress={onPressHandler}
 title="Learn More"
/>
```

Some other examples of automatically tracked components:
* [React Navigation Links](https://objectiv.io/docs/tracking/react-native/how-to-guides/getting-started#tracking-navigation-links).
* [Inputs](https://objectiv.io/docs/tracking/react-native/how-to-guides/tracking-interactions#input-change).
* [Etc](https://objectiv.io/docs/tracking/react-native/api-reference/trackedComponents/overview).

**Optionally: further enrich Locations**
For more granular modeling you can also [further enrich your interactions' Locations][track-locations]. For 
example, you can track all [Tabs & Drawers][tabs-drawers] like this:

```tsx
const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
function BottomTabNavigator() {
  return (
    <NavigationContextWrapper id={'bottom-tabs'}>
      {(trackingContext) => (
        <BottomTab.Navigator>
             
          <BottomTab.Screen
            name="TabOne"
            component={TabOneScreen}
            listeners={({ navigation }) => ({
              // We can either assign the resulting callback directly...
              tabPress: makeLinkPressListener({ trackingContext, navigation })
            })}
          />
 
          <BottomTab.Screen
            name="TabTwo"
            component={TabTwoScreen}
            listeners={({ navigation }) => ({
              // Or call it inside an existing callback...
              tabPress: (e) => {
                makeLinkPressListener({ trackingContext, navigation })(e);
                // ... alongside other logic
                console.log(e);
              }
            })}
          />
 
        </BottomTab.Navigator>
      )}
    </NavigationContextWrapper>
  );
}
```

## Manual instrumentation
If for any reason manual instrumentation is required, the SDK comes also with a set of [Hooks][hooks] and 
[low-level Event Trackers][track-events] to trigger Events programmatically, or to create your own 
[Custom Components][custom-components].

## How to get it
The new React Native SDK can be found on [NPM](https://www.npmjs.com/org/objectiv), so just do:

```bash
yarn add @objectiv/tracker-react-native

# or

npm install @objectiv/tracker-react-native
```

Give it a try, and please do <JoinSlackLink linkText='let us know what you think on Slack' />.

Enjoy tracking your mobile apps!
