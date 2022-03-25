# TrackedText

Wraps [Text](https://reactnative.dev/docs/text) in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md) and automatically tracks [PressEvent](/taxonomy/reference/events/PressEvent.md) for it.

```tsx
TrackedText: (props: TextProps & {
  id?: string,
}) => Text
```

## Additional Props
|          |     | type      | default value            | 
|:--------:|:----|:----------|:-------------------------|
| optional | id  | string    | inferred from `children` |

:::info
In development mode, TrackedText will log an error to the console when failing to infer an identifier from `children`.
:::

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onPress` triggers.

## Usage examples

```jsx
import { TrackedText } from '@objectiv/tracker-react-native';
```

#### A regular Text
```tsx
<TrackedText 
  onPress={onPressFunction}
>
  I'm a pressable text!
</TrackedText>
```

#### Non parseable children
```tsx
<TrackedText
  onPress={onPressFunction}
  id="thumb-down"
>
  👎
</TrackedText>
```

#### Custom identifier
```tsx
<TrackedText
  onPress={onPressFunction}
  id="custom-analytics-id"
>
  Press me!
</TrackedText>
```

<br />

:::tip Did you know ?
`TrackedText` internally uses [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedButton](/tracking/react-native/api-reference/trackedComponents/TrackedButton.md)
- [TrackedPressable](/tracking/react-native/api-reference/trackedComponents/TrackedPressable.md)
- [TrackedTouchableHighlight](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableHighlight.md)
- [TrackedTouchableNativeFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableNativeFeedback.md)
- [TrackedTouchableOpacity](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableOpacity.md)
- [TrackedTouchableWithoutFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableWithoutFeedback.md)
:::
