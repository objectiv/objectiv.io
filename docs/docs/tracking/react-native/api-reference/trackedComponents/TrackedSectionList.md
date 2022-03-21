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
import { TrackedSectionList } from '@objectiv/tracker-react-native';
```

```tsx
#TODO
```

<br />

:::tip Did you know ?
`TrackedSectionList` internally uses [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md).
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
