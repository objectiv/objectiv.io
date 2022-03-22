# TrackedTextInput

Wraps [TextInput](https://reactnative.dev/docs/textinput) in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md) and automatically tracks [InputChangeEvent](/taxonomy/reference/events/VisibleEvent.md) for it.

```tsx
TrackedTextInput: (props: TextInputProps & {
  id: string,
}) => TextInput
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
- [InputChangeEvent](/taxonomy/reference/events/VisibleEvent.md) when `onEndEditing` triggers.

## Usage example

```jsx
import { TrackedTextInput } from '@objectiv/tracker-react-native';
```

```tsx
<TrackedTextInput
  onChangeText={onChangeText}
  value={text}
/>
```

<br />

:::tip Did you know ?
`TrackedTextInput` internally uses [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md).
:::

<br />

:::info See also
- [TrackedSwitch](/tracking/react-native/api-reference/trackedComponents/TrackedSwitch.md)
:::
