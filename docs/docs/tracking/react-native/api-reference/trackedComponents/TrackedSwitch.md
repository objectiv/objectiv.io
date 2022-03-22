# TrackedSwitch

Wraps [Switch](https://reactnative.dev/docs/switch) in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md) and automatically tracks [InputChangeEvent](/taxonomy/reference/events/VisibleEvent.md) for it.

```tsx
TrackedSwitch: (props: SwitchProps & {
  id: string,
}) => Switch
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
- [InputChangeEvent](/taxonomy/reference/events/VisibleEvent.md) when `onValueChange` triggers.

## Usage example

```jsx
import { TrackedSwitch } from '@objectiv/tracker-react-native';
```

```tsx
<TrackedSwitch
  onValueChange={toggleSwitch}
  value={isEnabled}
/>
```

<br />

:::tip Did you know ?
`TrackedSwitch` internally uses [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md).
:::

<br />

:::info See also
- [TrackedTextInput](/tracking/react-native/api-reference/trackedComponents/TrackedTextInput.md)
:::
