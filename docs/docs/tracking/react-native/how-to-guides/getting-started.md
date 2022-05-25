---
sidebar_position: 1
---

# Getting Started

Follow the step-by-step Guide below to get started with tracking on your React Native application.

## Install Tracker from NPM

```bash
yarn add @objectiv/tracker-react-native

# or 

npm install @objectiv/tracker-react-native
```

## Configure the Tracker

In this example we create a new ReactNativeTracker instance and wrap our entire App in [ObjectivProvider](/tracking/react-native/api-reference/common/providers/ObjectivProvider.md).

```ts
import { ObjectivProvider, ReactNativeTracker } from '@objectiv/tracker-react-native';
```

```tsx
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    const tracker = new ReactNativeTracker({
      endpoint: 'https://collector.app.dev',
      applicationId: 'app-id'
    });
    
    return (
      <ObjectivProvider tracker={tracker}>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </ObjectivProvider>
    );
  }
}
```

:::info
Ideally, the tracker should be configured as early as possible. Best before the Application renders or as high up as possible in the component tree.
:::

:::tip Just trying things out?
[React Native Tracker](/tracking/react-native/api-reference/ReactNativeTracker.md) is quite modular, and it's possible to set it up without having a [Collector](/tracking/collector/getting-started.md) running.

In the following example we create a new Tracker instance that simply logs all Events to console.

```tsx
const loggingTracker = new ReactNativeTracker({
  applicationId: 'test',
  transport: {
    transportName: 'TestLoggingTransport',
    isUsable: () => true,
    handle: async (payload) => console.log(payload)
  }
});
```

There's also a [DebugTransport](https://www.npmjs.com/package/@objectiv/transport-debug) available on npm with a similar functionality:

```ts
import { DebugTransport } from "@objectiv/transport-debug";
```

```tsx
const loggingTracker = new ReactNativeTracker({
  applicationId: 'test',
  transport: new DebugTransport()
});
```

This tracker instance will log all Events to `console.debug`.
:::

## Installing React Navigation Plugin
If your Application uses React Navigation we have a Plugin to ease tracking of RootLocationContext, PathContext and Screen listeners for Tabs and Drawers. 

```bash
yarn add @objectiv/plugin-react-navigation

# or 

npm install @objectiv/plugin-react-navigation
```

### Configuring the Plugin
```ts
import { ObjectivProvider, ReactNativeTracker } from '@objectiv/tracker-react-native';
import { ContextsFromReactNavigationPlugin } from "@objectiv/plugin-react-navigation";
```

The plugin uses the NavigationContainerRef to automatically infer RootLocation and Path contexts. We can create one like so: 
```tsx
const navigationContainerRef = useNavigationContainerRef();
```

Then we can simply pass the ref to both the Plugin and the NavigationContainer: 
```tsx
const tracker = new ReactNativeTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
  plugins: [
    new ContextsFromReactNavigationPlugin({ navigationContainerRef })
  ]
});

return (
  <ObjectivProvider tracker={tracker}>
    <NavigationContainer ref={navigationContainerRef}>
      <RootNavigator />
    </NavigationContainer>
  </ObjectivProvider>
);
```

### Tracking Navigation Links
If your Application uses React Navigation Links, the Plugin comes with an automatically tracked Link Component.

TrackedLinks have the same props of regular Links. Here are some usage examples:
```tsx
import { TrackedLink } from "@objectiv/plugin-react-navigation";

// LinkContext identifier is automatically inferred from the child Text
<TrackedLink to="/HomeScreen">
  Home
</TrackedLink>

// TrackedLink API is identical to Link; we can also pass location as objects
<TrackedLink to={{ screen: 'Profile', params: { id: 123 } }}>
  Profile
</TrackedLink>


// A LinkContext identifier may also be manually specified via the `id` prop 
<TrackedLink to="/HomeScreen" id="home">
  🏡
</TrackedLink>
```

### Tracking Tabs & Drawers
The plugin comes with a generic `makeLinkPressListener` factory hook. This can be used for both Tabs and Drawers.

#### Tracking Tabs tabPress listener
In the following example we:
- Wrap a BottomTab.Navigator in a `NavigationContext`.
- Add `tabPress` listeners to BottomTab.Screen components and track them via makeLinkPressListener.

```tsx
import { NavigationContextWrapper } from "@objectiv/tracker-react-native";
import { makeLinkPressListener } from "@objectiv/plugin-react-navigation";

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
```

#### Tracking Drawers drawerItemPress listener
Drawers can be tracked in a nearly identical way.  

In the following example we:
- Wrap a Drawer.Navigator in a `NavigationContext`.
- Add `drawerItemPress` listeners to Drawer.Screen components and track them via makeLinkPressListener.

```tsx
import { NavigationContextWrapper } from "@objectiv/tracker-react-native";
import { makeLinkPressListener } from "@objectiv/plugin-react-navigation";

<NavigationContextWrapper id={'drawer'}>
  {(trackingContext) => (
    
    <Drawer.Navigator>

      <Drawer.Screen
        name="Home"
        component={RootNavigator}
        listeners={({ navigation }) => ({
          drawerItemPress: makeLinkPressListener({ trackingContext, navigation })
        })}
      />

      <Drawer.Screen
        name="Notifications"
        component={RootNavigator}
        listeners={({ navigation }) => ({
          drawerItemPress: (e) => {
            makeLinkPressListener({ trackingContext, navigation })(e);
            // ... alongside other logic
            console.log(e);
          }
        })}
      />
      
    </Drawer.Navigator>
    
  )}
</NavigationContextWrapper>
```

## Enable logging and validation
While developing in a browser, or when running tests, it may be useful to enable more logging for debugging purposes.

to do so, simply require the Developer Tools package before creating the tracker. 

```ts
if (process.env.NODE_ENV.startsWith('dev')) {
  require('@objectiv/developer-tools');
}

const tracker = new ReactNativeTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
});
```

The tracker instance will automatically detect their presence and log more info to the console and perform early validation.

For more details check out [how-to configure logging](/tracking/react-native/how-to-guides/configuring-logging.md).

## Done
The tracker should now be running and auto-tracking some Events already, such as ApplicationLoaded.

Time to start [Tracking Interactions](/tracking/react-native/how-to-guides/tracking-interactions.md)!
