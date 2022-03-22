# TrackedSectionList

Wraps [SectionList](https://reactnative.dev/docs/sectionlist) in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedSectionList<ItemT, SectionT = DefaultSectionT> = (
  props: SectionListProps<ItemT, SectionT> & {
    id: string,
  }
) => SectionList<ItemT, SectionT>
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
none.

## Usage example

```jsx
import { TrackedSectionList, TrackedText } from '@objectiv/tracker-react-native';
```

```tsx
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
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
<TrackedSectionList
  id="items"
  sections={DATA}
  keyExtractor={(item, index) => item + index}
  renderItem={({ item }) => <Item title={item} />}
  renderSectionHeader={({ section: { title } }) => (
    <TrackedText>{title}</TrackedText>
  )}
/>
```

<br />

:::tip Did you know ?
`TrackedSectionList` internally uses [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md).
:::

<br />

:::info See also
- [TrackedFlatList](/tracking/react-native/api-reference/trackedComponents/TrackedFlatList.md)
- [TrackedKeyboardAvoidingView](/tracking/react-native/api-reference/trackedComponents/TrackedKeyboardAvoidingView.md)
- [TrackedSafeAreaView](/tracking/react-native/api-reference/trackedComponents/TrackedSafeAreaView.md)
- [TrackedScrollView](/tracking/react-native/api-reference/trackedComponents/TrackedScrollView.md)
- [TrackedView](/tracking/react-native/api-reference/trackedComponents/TrackedView.md)
- [TrackedVirtualizedList](/tracking/react-native/api-reference/trackedComponents/TrackedVirtualizedList.md)
:::
