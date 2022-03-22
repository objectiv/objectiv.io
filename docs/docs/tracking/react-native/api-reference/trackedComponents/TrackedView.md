# TrackedView

Wraps [View](https://reactnative.dev/docs/view) in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedView = (props: ViewProps & {
  id: string,
}) => View
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
none.

## Usage example

```jsx
import { TrackedButton, TrackedView } from '@objectiv/tracker-react-native';
```

```tsx
<View>
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
</View>
```

<br />

:::tip Did you know ?
`TrackedView` internally uses [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md).
:::

<br />

:::info See also
- [TrackedFlatList](/tracking/react-native/api-reference/trackedComponents/TrackedFlatList.md)
- [TrackedKeyboardAvoidingView](/tracking/react-native/api-reference/trackedComponents/TrackedKeyboardAvoidingView.md)
- [TrackedSafeAreaView](/tracking/react-native/api-reference/trackedComponents/TrackedSafeAreaView.md)
- [TrackedScrollView](/tracking/react-native/api-reference/trackedComponents/TrackedScrollView.md)
- [TrackedSectionList](/tracking/react-native/api-reference/trackedComponents/TrackedSectionList.md)
- [TrackedVirtualizedList](/tracking/react-native/api-reference/trackedComponents/TrackedVirtualizedList.md)
:::
