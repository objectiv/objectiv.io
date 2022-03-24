# TrackedTouchableOpacity

Wraps [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md) and automatically tracks [PressEvent](/taxonomy/reference/events/PressEvent.md) for it.

```tsx
TrackedTouchableOpacity: (props: TouchableOpacityProps & {
  id?: string,
}) => TouchableOpacity
```

## Additional Props
|          |     | type      | default value            | 
|:--------:|:----|:----------|:-------------------------|
| optional | id  | string    | inferred from `children` |

:::info
In development mode, TrackedTouchableOpacity will log an error to the console when failing to infer an identifier from `children`.
:::

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onPress` triggers.

## Usage examples

```jsx
import { TrackedTouchableOpacity } from '@objectiv/tracker-react-native';
```

#### A regular TouchableOpacity
```tsx
<TouchableOpacity 
  onPress={onPressFunction}
>
  <View>
    <Text>Press me!</Text>
  </View>
</TouchableOpacity>
```

#### Non parseable children
```tsx
<TouchableOpacity
  onPress={onPressFunction}
  id="thumb-down"
>
  <View>
    <Text>👎</Text>
  </View>
</TouchableOpacity>
```

#### Custom identifier
```tsx
<TouchableOpacity
  onPress={onPressFunction}
  id="custom-analytics-id"
>
  <View>
    <Text>Press me!</Text>
  </View>
</TouchableOpacity>
```

<br />

:::tip Did you know ?
`TrackedTouchableOpacity` internally uses [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedButton](/tracking/react-native/api-reference/trackedComponents/TrackedButton.md)
- [TrackedPressable](/tracking/react-native/api-reference/trackedComponents/TrackedPressable.md)
- [TrackedText](/tracking/react-native/api-reference/trackedComponents/TrackedText.md)
- [TrackedTouchableHighlight](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableHighlight.md)
- [TrackedTouchableNativeFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableNativeFeedback.md)
- [TrackedTouchableWithoutFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableWithoutFeedback.md)
:::
