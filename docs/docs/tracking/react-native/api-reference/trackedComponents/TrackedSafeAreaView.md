# TrackedSafeAreaView

Wraps [SafeAreaView](https://reactnative.dev/docs/safeareaview) in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedSafeAreaView = (props: SafeAreaViewProps & {
  id: string,
}) => SafeAreaView
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
none.

## Usage example

```jsx
import { TrackedButton, TrackedSafeAreaView, TrackedView } from '@objectiv/tracker-react-native';
```

```tsx
<TrackedSafeAreaView id="view-name">
  <TrackedView id="hero">
    Welcome back!
    <TrackedButton
      onPress={doSomethingHandler}
      title="Do something!"
    />
  </TrackedView>
  <Separator />
  <TrackedView id="screen-body">
    More content here
    <TrackedButton
      onPress={doSomethingHandler}
      title="Do something!"
    />
  </TrackedView>
</TrackedSafeAreaView>
```

<br />

:::tip Did you know ?
`TrackedSafeAreaView` internally uses [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md).
:::

<br />

:::info See also
- [TrackedFlatList](/tracking/react-native/api-reference/trackedComponents/TrackedFlatList.md)
- [TrackedKeyboardAvoidingView](/tracking/react-native/api-reference/trackedComponents/TrackedKeyboardAvoidingView.md)
- [TrackedScrollView](/tracking/react-native/api-reference/trackedComponents/TrackedScrollView.md)
- [TrackedSectionList](/tracking/react-native/api-reference/trackedComponents/TrackedSectionList.md)
- [TrackedView](/tracking/react-native/api-reference/trackedComponents/TrackedView.md)
- [TrackedVirtualizedList](/tracking/react-native/api-reference/trackedComponents/TrackedVirtualizedList.md)
:::
