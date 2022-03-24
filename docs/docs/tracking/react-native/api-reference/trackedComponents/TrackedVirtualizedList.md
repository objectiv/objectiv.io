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
const Item = ({ title }) => (
  <View>
    <TrackedText>{title}</TrackedText>
  </View>
);
```

```tsx
<TrackedVirtualizedList
  id="items"
  data={[]}
  initialNumToRender={4}
  renderItem={({ item }) => <Item title={item.title} />}
  keyExtractor={item => item.key}
  getItemCount={(data) => 50}
  getItem={(data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
  })}
/>
```

<br />

:::tip Did you know ?
`TrackedVirtualizedList` internally uses [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md).
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
