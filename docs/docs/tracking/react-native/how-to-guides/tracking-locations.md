---
sidebar_position: 3
---

# Tracking Locations

import useBaseUrl from '@docusaurus/useBaseUrl';

## Collisions
If you started [instrumenting your Interactions](/tracking/react-native/how-to-guides/tracking-interactions.md), chances are you already ran into some Collisions.

Example of a collision of a hypothetical `footer` components in the browser's console:

<img alt="Collision: duplicated footer" src={useBaseUrl('img/docs/tracking-collision-react.png')} style={{ border: '1px solid lightgrey'}} />

### Unique Locations

To make modeling easier it's important to ensure all Tracked interactive Components are uniquely identifiable. Assigning a unique identifier to each of them is not always possible and most often impractical. Think of reusable components. 

This is where our LocationStack comes in handy with Tracked Location Components.

## Tracked Location Components

Our [taxonomy](/taxonomy/introduction.md) comes with a number of [LocationContexts](/taxonomy/reference/location-contexts/overview.md) aimed at describing the UI unambiguously.

Here is how we mapped React Native Components to our LocationContexts:

#### ContentContext
- [TrackedFlatList](/tracking/react-native/api-reference/trackedComponents/TrackedFlatList.md)
- [TrackedKeyboardAvoidingView](/tracking/react-native/api-reference/trackedComponents/TrackedKeyboardAvoidingView.md)
- [TrackedSafeAreaView](/tracking/react-native/api-reference/trackedComponents/TrackedSafeAreaView.md)
- [TrackedScrollView](/tracking/react-native/api-reference/trackedComponents/TrackedScrollView.md)
- [TrackedSectionList](/tracking/react-native/api-reference/trackedComponents/TrackedSectionList.md)
- [TrackedView](/tracking/react-native/api-reference/trackedComponents/TrackedView.md)
- [TrackedVirtualizedList](/tracking/react-native/api-reference/trackedComponents/TrackedVirtualizedList.md)

#### OverlayContext
- [TrackedActivityIndicator](/tracking/react-native/api-reference/trackedComponents/TrackedActivityIndicator.md)
- [TrackedModal](/tracking/react-native/api-reference/trackedComponents/TrackedModal.md)

:::info Visibility Events
While ContentContexts are purely used for enriching the Locations of their children components, OverlayContexts can also automatically track Visible and Hidden Events. 
:::

## Example of collision
Let's see how these Components can help us in making all Interactions uniquely identifiable in the UI.

Here is an example Screen with a collision:
```tsx
import { TrackedButton } from '@objectiv/tracker-react-native';

<View>
  <View>
    <Text>Introductory text</Text>
    <TrackedButton onPress={onPressLearnMore} title="Learn More"/>
  </View>
  <Separator />
  <View>
    <Text>More text</Text>
    <TrackedButton onPress={onPressLearnMore} title="Learn More"/>
  </View>
</View>
```

There are two TrackedButtons on the same screen and, because they have the same title, their identifiers will be the same. This is not allowed as it makes identifying which Button has been pressed impossible.

React Native Tracker will notify of the collision of the second Button with the first one.

### Solving a collision
To solve the issue, we can simply make the Location of one or both of these Components richer:


#### Either by wrapping components
```tsx
import { ContentContextWrapper, TrackedButton } from '@objectiv/tracker-react-native';

<View>
  <View>
    <ContentContextWrapper id="top">
      <Text>Introductory text</Text>
      <TrackedButton onPress={onPressLearnMore} title="Learn More" />
    </ContentContextWrapper>    
  </View>
  <Separator />
  <View>
    <Text>More text</Text>
    <TrackedButton onPress={onPressLearnMore} title="Learn More"/>
  </View>
</View>
```

#### Or, even better, by swapping parents with their Tracked counterparts
```tsx
import { TrackedButton, TrackedView } from '@objectiv/tracker-react-native';

<View>
  <TrackedView id="top">
    <Text>Introductory text</Text>
    <TrackedButton onPress={onPressLearnMore} title="Learn More" />
  </TrackedView>
  <Separator />
  <TrackedView id="bottom">
    <Text>More text</Text>
    <TrackedButton onPress={onPressLearnMore} title="Learn More"/>
  </TrackedView>
</View>
```

:::tip
You may have noticed that the second TrackedView in the example above is not strictly necessary to solve the collision. So, why did we add it?

More on that in our [best practices](/tracking/core-concepts/react-native/best-practices.md) around what to track and why.
:::

## Best practices
Solving Collisions should not be an issue to deal with frequently.    
[Check out how to avoid them](/tracking/core-concepts/react-native/best-practices.md) in the first place by reading what we think are good practices around tracking Locations.

## What's next?
This is pretty much it for the basics of tracking with React SDK.  
Check out the [API Reference](/tracking/react-native/api-reference/overview.md) and its examples for more details about all the available Components, Hooks and APIs.  
