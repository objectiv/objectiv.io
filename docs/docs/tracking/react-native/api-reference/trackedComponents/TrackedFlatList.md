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
import { TrackedFlatList, TrackedText } from '@objectiv/tracker-react-native';
```

```tsx
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }
];
```

```tsx
const Item = ({ title }) => (
  <View>
    <TrackedText>{title}</TrackedText>
  </View>
);
```

```tsx
<TrackedFlatList
  id="items"
  data={DATA}
  renderItem={renderItem}
  keyExtractor={item => item.id}
/>
```

<br />

:::tip Did you know ?
`TrackedFlatList` internally uses [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md).
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
