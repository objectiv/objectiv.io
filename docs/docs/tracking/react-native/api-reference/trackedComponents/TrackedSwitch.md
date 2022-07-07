# TrackedSwitch

Wraps [Switch](https://reactnative.dev/docs/switch) in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md) and automatically tracks [InputChangeEvent](/taxonomy/reference/events/VisibleEvent.md) for it.

```tsx
TrackedSwitch: (props: SwitchProps & {
  id: string,
  trackValue?: boolean,
}) => Switch
```

## Additional Props
|              |            | type    | default value | 
|:------------:|:-----------|:--------|:--------------|
| **required** | **id**     | string  |               |
|   optional   | trackValue | boolean | `false`       |

## Automatic Events
- [InputChangeEvent](/taxonomy/reference/events/VisibleEvent.md) when `onValueChange` triggers.

## Global Contexts
- [InputValueContext](/taxonomy/reference/global-contexts/InputValueContext.md) with the changed value, if `trackValue` is set to `true`.

## Usage examples

```jsx
import { TrackedSwitch } from '@objectiv/tracker-react-native';
```

```tsx
<TrackedSwitch
  id="on-off"
  onValueChange={toggleSwitch}
  value={isEnabled}
/>
```

To track also the changed value and attach it to Event's GlobalContexts as [InputValueContext](/taxonomy/reference/global-contexts/InputValueContext.md):

```tsx
<TrackedSwitch
  id="on-off"
  onValueChange={toggleSwitch}
  value={isEnabled}
  trackValue={true}
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
