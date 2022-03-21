# TrackedFlatList

Wraps [FlatList](https://reactnative.dev/docs/flatlist) in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedFlatList<ItemT> = (props: FlatListProps<ItemT> & {
  id: string,
}) => FlatList<ItemT>
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
none.

## Usage example

```jsx
import { TrackedFlatList } from '@objectiv/tracker-react-native';
```

```tsx
#TODO
```

<br />

:::tip Did you know ?
`TrackedFlatList` internally uses [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md).
:::

<br />

:::info See also
- [TrackedKeyboardAvoidingView](/tracking/react-native/api-reference/trackedComponents/TrackedKeyboardAvoidingView.md)
- [TrackedSafeAreaView](/tracking/react-native/api-reference/trackedComponents/TrackedSafeAreaView.md)
- [TrackedScrollView](/tracking/react-native/api-reference/trackedComponents/TrackedScrollView.md)
- [TrackedSectionList](/tracking/react-native/api-reference/trackedComponents/TrackedSectionList.md)
- [TrackedView](/tracking/react-native/api-reference/trackedComponents/TrackedView.md)
- [TrackedVirtualizedList](/tracking/react-native/api-reference/trackedComponents/TrackedVirtualizedList.md)
:::
