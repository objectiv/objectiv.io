# TrackedTouchableHighlight

Wraps [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight) in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md) and automatically tracks [PressEvent](/taxonomy/reference/events/PressEvent.md) for it.

```tsx
TrackedTouchableHighlight: (props: TouchableHighlightProps & {
  id?: string,
}) => TouchableHighlight
```

## Additional Props
|          |     | type      | default value            | 
|:--------:|:----|:----------|:-------------------------|
| optional | id  | string    | inferred from `children` |

:::info
In development mode, TrackedTouchableHighlight will log an error to the console when failing to infer an identifier from `children`.
:::

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onPress` triggers.

## Usage examples

```jsx
import { TrackedTouchableHighlight } from '@objectiv/tracker-react-native';
```

#### A regular TouchableHighlight
```tsx
<TouchableHighlight 
  onPress={onPressFunction}
>
  <Text>Press me!</Text>
</TouchableHighlight>
```

#### Non parseable children
```tsx
<TouchableHighlight
  onPress={onPressFunction}
  id="thumb-down"
>
  <Text>👎</Text>
</TouchableHighlight>
```

#### Custom identifier
```tsx
<TouchableHighlight
  onPress={onPressFunction}
  id="custom-analytics-id"
>
  Press me!
</TouchableHighlight>
```

<br />

:::tip Did you know ?
`TrackedTouchableHighlight` internally uses [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedButton](/tracking/react-native/api-reference/trackedComponents/TrackedButton.md)
- [TrackedPressable](/tracking/react-native/api-reference/trackedComponents/TrackedPressable.md)
- [TrackedText](/tracking/react-native/api-reference/trackedComponents/TrackedText.md)
- [TrackedTouchableNativeFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableNativeFeedback.md)
- [TrackedTouchableOpacity](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableOpacity.md)
- [TrackedTouchableWithoutFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableWithoutFeedback.md)
:::
