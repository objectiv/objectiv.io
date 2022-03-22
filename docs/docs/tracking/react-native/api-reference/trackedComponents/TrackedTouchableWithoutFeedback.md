# TrackedTouchableWithoutFeedback

Wraps [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback) in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md) and automatically tracks [PressEvent](/taxonomy/reference/events/PressEvent.md) for it.

```tsx
TrackedTouchableWithoutFeedback: (props: TouchableWithoutFeedbackProps & {
  id?: string,
}) => TouchableWithoutFeedback
```

## Additional Props
|          |     | type      | default value            | 
|:--------:|:----|:----------|:-------------------------|
| optional | id  | string    | inferred from `children` |

:::info
In development mode, TrackedTouchableWithoutFeedback will log an error to the console when failing to infer an identifier from `children`.
:::

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onPress` triggers.

## Usage examples

```jsx
import { TrackedTouchableWithoutFeedback } from '@objectiv/tracker-react-native';
```

#### A regular TouchableWithoutFeedback
```tsx
<TouchableWithoutFeedback 
  onPress={onPressFunction}
>
  <Text>Press me!</Text>
</TouchableWithoutFeedback>
```

#### Non parseable children
```tsx
<TouchableWithoutFeedback
  onPress={onPressFunction}
  id="thumb-down"
>
  <Text>👎</Text>
</TouchableWithoutFeedback>
```

#### Custom identifier
```tsx
<TouchableWithoutFeedback
  onPress={onPressFunction}
  id="custom-analytics-id"
>
  <Text>Press me!</Text>
</TouchableWithoutFeedback>
```

<br />

:::tip Did you know ?
`TrackedTouchableWithoutFeedback` internally uses [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedButton](/tracking/react-native/api-reference/trackedComponents/TrackedButton.md)
- [TrackedPressable](/tracking/react-native/api-reference/trackedComponents/TrackedPressable.md)
- [TrackedText](/tracking/react-native/api-reference/trackedComponents/TrackedText.md)
- [TrackedTouchableHighlight](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableHighlight.md)
- [TrackedTouchableNativeFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableNativeFeedback.md)
- [TrackedTouchableOpacity](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableOpacity.md)
:::
