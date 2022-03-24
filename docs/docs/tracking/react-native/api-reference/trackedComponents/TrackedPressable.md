# TrackedPressable

Wraps [Pressable](https://reactnative.dev/docs/pressable) in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md) and automatically tracks [PressEvent](/taxonomy/reference/events/PressEvent.md) for it.

```tsx
TrackedPressable: (props: PressableProps & {
  id?: string,
}) => Pressable
```

## Additional Props
|          |     | type      | default value            | 
|:--------:|:----|:----------|:-------------------------|
| optional | id  | string    | inferred from `children` |

:::info
In development mode, TrackedPressable will log an error to the console when failing to infer an identifier from `children`.
:::

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onPress` triggers.

## Usage examples

```jsx
import { TrackedPressable } from '@objectiv/tracker-react-native';
```

#### A regular Pressable
```tsx
<Pressable 
  onPress={onPressFunction}
>
  <Text>I'm pressable!</Text>
</Pressable>
```

#### Non parseable children
```tsx
<Pressable 
  onPress={onPressFunction}
  id="thumb-down"
>
  <Text>👎</Text>
</Pressable>
```

#### Custom identifier
```tsx
<Pressable
  onPress={onPressFunction}
  id="custom-analytics-id"
>
  <Text>Press me!</Text>
</Pressable>
```

<br />

:::tip Did you know ?
`TrackedPressable` internally uses [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedButton](/tracking/react-native/api-reference/trackedComponents/TrackedButton.md)
- [TrackedText](/tracking/react-native/api-reference/trackedComponents/TrackedText.md)
- [TrackedTouchableHighlight](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableHighlight.md)
- [TrackedTouchableNativeFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableNativeFeedback.md)
- [TrackedTouchableOpacity](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableOpacity.md)
- [TrackedTouchableWithoutFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableWithoutFeedback.md)
:::
