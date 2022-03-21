# TrackedScrollView

Wraps [ScrollView](https://reactnative.dev/docs/scrollview) in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedScrollView = (props: ScrollViewProps & {
  id: string,
}) => ScrollView
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
none.

## Usage example

```jsx
import { TrackedScrollView } from '@objectiv/tracker-react-native';
```

```tsx
#TODO
```

<br />

:::tip Did you know ?
`TrackedScrollView` internally uses [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md).
:::

<br />

:::info See also
- [TrackedFlatList](/tracking/react-native/api-reference/trackedComponents/TrackedFlatList.md)
- [TrackedKeyboardAvoidingView](/tracking/react-native/api-reference/trackedComponents/TrackedKeyboardAvoidingView.md)
- [TrackedSafeAreaView](/tracking/react-native/api-reference/trackedComponents/TrackedSafeAreaView.md)
- [TrackedSectionList](/tracking/react-native/api-reference/trackedComponents/TrackedSectionList.md)
- [TrackedView](/tracking/react-native/api-reference/trackedComponents/TrackedView.md)
- [TrackedVirtualizedList](/tracking/react-native/api-reference/trackedComponents/TrackedVirtualizedList.md)
:::
