# TrackedModal

Wraps [ActivityIndicator](https://reactnative.dev/docs/activityindicator) in a [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md) and automatically tracks Visibility Events for it.

```tsx
TrackedModal: (props: ModalProps & {
  id: string,
}) => Modal
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
- [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) when `visible` changes from `false` to `true`.
- [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) when `visible` changes from `true` to `false`.

## Usage example

```jsx
import { TrackedModal } from '@objectiv/tracker-react-native';
```

```tsx
const ModalScreen = ({ visible }: { visible: boolean }) => (
  <TrackedModal visible={visible}>
    <View>
      Modal body
    </View>
  </TrackedModal>
);

```

<br />

:::tip Did you know ?
`TrackedModal` internally uses [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md).
:::

<br />

:::info See also
- [TrackedActivityIndicator](/tracking/react-native/api-reference/trackedComponents/TrackedActivityIndicator.md)
:::
