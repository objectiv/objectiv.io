# ReactNavigation

Optional plugin, for anyone using ReactNavigation, providing automatic tracking of RootLocationContext, PathContext, Screen listeners for Tabs and Drawers and an automatically tracked Link components.  

## Installation
```sh
yarn add @objectiv/plugin-react-navigation
```

#### or
```sh
npm install @objectiv/plugin-react-navigation
```

## Configuring the Plugin
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
makeTracker({
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

## TrackedLink
`TrackedLink` is designed to be drop-in replacement of the original one.  
This allows, if desired, to swap components at import level:

```ts
import { TrackedLink as Link } from "@objectiv/plugin-react-navigation";
```

It basically performs two main tasks:
1. Wraps the original implementation in a [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).
2. Automatically attaches an onPress handler to track [PressEvents](/taxonomy/reference/events/PressEvent.md).

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

## Tracking Tabs & Drawers
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
