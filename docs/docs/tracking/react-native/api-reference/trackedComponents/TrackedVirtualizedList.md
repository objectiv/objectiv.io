# TrackedVirtualizedList

Wraps [VirtualizedList](https://reactnative.dev/docs/virtualizedlist) in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedVirtualizedList<ItemT> = (props: VirtualizedListProps<ItemT> & {
  id: string,
}) => VirtualizedList<ItemT>
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
none.

## Usage example

```jsx
import { TrackedVirtualizedList } from '@objectiv/tracker-react-native';
```

```tsx
#TODO
```

<br />

:::tip Did you know ?
`TrackedVirtualizedList` internally uses [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md).
:::

<br />

:::info See also
- [TrackedFlatList](/tracking/react-native/api-reference/trackedComponents/TrackedFlatList.md)
- [TrackedKeyboardAvoidingView](/tracking/react-native/api-reference/trackedComponents/TrackedKeyboardAvoidingView.md)
- [TrackedSafeAreaView](/tracking/react-native/api-reference/trackedComponents/TrackedSafeAreaView.md)
- [TrackedScrollView](/tracking/react-native/api-reference/trackedComponents/TrackedScrollView.md)
- [TrackedSectionList](/tracking/react-native/api-reference/trackedComponents/TrackedSectionList.md)
- [TrackedView](/tracking/react-native/api-reference/trackedComponents/TrackedView.md)
:::
