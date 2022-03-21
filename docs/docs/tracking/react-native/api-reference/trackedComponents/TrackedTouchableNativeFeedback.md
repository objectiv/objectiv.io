# TrackedTouchableNativeFeedback

Wraps [TouchableNativeFeedback](https://reactnative.dev/docs/touchablenativefeedback) in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md) and automatically tracks [PressEvent](/taxonomy/reference/events/PressEvent.md) for it.

```tsx
TrackedTouchableNativeFeedback: (props: TouchableNativeFeedbackProps & {
  id?: string,
}) => TouchableNativeFeedback
```

## Additional Props
|          |     | type      | default value            | 
|:--------:|:----|:----------|:-------------------------|
| optional | id  | string    | inferred from `children` |

:::info
In development mode, TrackedTouchableNativeFeedback will log an error to the console when failing to infer an identifier from `children`.
:::

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onPress` triggers.

## Usage examples

```jsx
import { TrackedTouchableNativeFeedback } from '@objectiv/tracker-react-native';
```

#### A regular TouchableNativeFeedback
```tsx
<TouchableNativeFeedback 
  onPress={onPressFunction}
>
  <View>
    <Text>Press me!</Text>
  </View>
</TouchableNativeFeedback>
```

#### Non parseable children
```tsx
<TouchableNativeFeedback
  onPress={onPressFunction}
  id="thumb-down"
>
  <View>
    <Text>👎</Text>
  </View>
</TouchableNativeFeedback>
```

#### Custom identifier
```tsx
<TouchableNativeFeedback
  onPress={onPressFunction}
  id="custom-analytics-id"
>
  <View>
    <Text>Press me!</Text>
  </View>
</TouchableNativeFeedback>
```

<br />

:::tip Did you know ?
`TrackedTouchableNativeFeedback` internally uses [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedButton](/tracking/react-native/api-reference/trackedComponents/TrackedButton.md)
- [TrackedPressable](/tracking/react-native/api-reference/trackedComponents/TrackedPressable.md)
- [TrackedText](/tracking/react-native/api-reference/trackedComponents/TrackedText.md)
- [TrackedTouchableHighlight](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableHighlight.md)
- [TrackedTouchableOpacity](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableOpacity.md)
- [TrackedTouchableWithoutFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableWithoutFeedback.md)
:::
