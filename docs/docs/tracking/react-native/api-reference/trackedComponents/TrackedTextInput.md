# TrackedTextInput

Wraps [TextInput](https://reactnative.dev/docs/textinput) in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md) and automatically tracks [InputChangeEvent](/taxonomy/reference/events/VisibleEvent.md) for it.

```tsx
TrackedTextInput: (props: TextInputProps & {
  id: string,
  trackValue?: boolean,
}) => TextInput
```

## Additional Props
|              |            | type    | default value | 
|:------------:|:-----------|:--------|:--------------|
| **required** | **id**     | string  |               |
|   optional   | trackValue | boolean | `false`       |

## Automatic Events
- [InputChangeEvent](/taxonomy/reference/events/VisibleEvent.md) when `onEndEditing` triggers. 

## Global Contexts
- [InputValueContext](/taxonomy/reference/global-contexts/InputValueContext.md) with the changed value, if `trackValue` is set to `true`.

## Usage example

```jsx
import { TrackedTextInput } from '@objectiv/tracker-react-native';
```

```tsx
<TrackedTextInput
  id="input-id"
  onChangeText={onChangeText}
  value={text}
/>
```

To track also the changed value and attach it to Event's Global Contexts as [InputValueContext](/taxonomy/reference/global-contexts/InputValueContext.md):

```tsx
<TrackedTextInput
  id="input-id"
  onChangeText={onChangeText}
  value={text}
  trackValue={true}
/>
```


<br />

:::tip Did you know ?
`TrackedTextInput` internally uses [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md).
:::

<br />

:::info See also
- [TrackedSwitch](/tracking/react-native/api-reference/trackedComponents/TrackedSwitch.md)
:::
