---
sidebar_position: 2
---

# Tracking Interactions

Now that the [Tracker is up and running](/tracking/react-native/how-to-guides/getting-started.md) we can start thinking about enriching the UX with [Location Wrappers](/tracking/react-native/api-reference/locationWrappers/overview.md) and [Tracked Components](/tracking/react-native/api-reference/trackedComponents/overview.md).

The former are generic wrapper Components while the latter can swap the original Components with an automatically wrapped and tracked version of them. Both are built on top of our [Providers](/tracking/react-native/api-reference/common/providers/overview.md).

:::info Locations?
Take a look at the [Core Concepts Introduction](/tracking/core-concepts) for more information on what Locations are and why are they so important.
:::

## Pressable and Touchable
A good rule of thumb is to start by identifying all the interactive Components in the Application and replacing them with their Tracked version. 

:::tip React Navigation
If your Application uses React Navigation we highly recommend installing or at least checking the [React Navigation Plugin](/tracking/react-native/how-to-guides/getting-started.md#installing-react-navigation-plugin).  
This will automate tracking RootLocationContext, PathContext and commonly used navigators, such as Tabs and Drawers.
:::

### List of supported pressable Components
The React Native Tracker package comes with these ready-to-use Components.  

All of them are wrapped in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md) via [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md) and have their `onPress` automatically tracked: 

- [TrackedButton](#TODO)
- [TrackedPressable](#TODO)
- [TrackedText](#TODO)
- [TrackedTouchableHighlight](#TODO)
- [TrackedTouchableNativeFeedback](#TODO)
- [TrackedTouchableOpacity](#TODO)

### Usage example
Since these components have the same API of their non-tracked counterparts, using them is as easy as replacing them.

For example, let's look at this Button:
```tsx 
import { Button } from 'react-native';

<Button
  onPress={onPressHandler}
  title="Learn More"
/>
```

And its tracked version:
```tsx
import { TrackedButton } from '@objectiv/tracker-react-native';

<TrackedButton
  onPress={onPressHandler}
  title="Learn More"
/>
```

The only difference between the two is that TrackedButton supports specifying a custom Context Identifier.  
This is useful when:
- The Button has a title we cannot infer a valid identifier from, e.g. an emoji
- The Button has a title that is not satisfactory from a tracking point of view

In the following example we have a button showing an emoji with a custom identifier specified for its PressableContext 
```tsx
import { TrackedButton } from '@objectiv/tracker-react-native';

<TrackedButton
  onPress={onPressLearnMore}
  title="🏡"
  id="home"
/>
```

And here is another example for the second scenario, where the title of the Button is not ideal for tracking analysis:
```tsx
import { TrackedButton } from '@objectiv/tracker-react-native';

<TrackedButton
  onPress={onPressLearnMore}
  title="A very long title explaining a complex story that would not result in a nice ID"
  id="home"
/>
```

## Input Change
Inputs are another type of interaction we can track. These components never track actual values, only changes. 

### List of supported input Components
The React Native Tracker package comes with these ready-to-use Components.

All of them are wrapped in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md) via [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md) and have their events automatically tracked:

- [TrackedSwitch](#TODO)
- [TrackedTextInput](#TODO)

### Usage example
These components have the same API of their non-tracked counterparts, using them is as easy as replacing them.

Let's look at an example with a TextInput:
```tsx
import { TextInput } from "react-native";

const CustomTextInput = () => {
  const [text, onChangeText] = React.useState("Some Text");

  return <TextInput onChangeText={onChangeText} value={text} />;
};
```

The tracked version is identical, we just swap TextInput with TrackedTextInput:
```tsx
import { TrackedTextInput } from "@objectiv/tracker-react-native";

const CustomTextInput = () => {
  const [text, onChangeText] = React.useState("Some Text");

  return <TrackedTextInput onChangeText={onChangeText} value={text} />;
};
```

## Next
In the [next section](/tracking/react-native/how-to-guides/tracking-locations.md) we are going to see what Locations are used for and how to avoid Collisions.    