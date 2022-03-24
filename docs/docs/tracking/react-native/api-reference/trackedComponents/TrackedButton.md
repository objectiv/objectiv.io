# TrackedButton

Wraps [Button](https://reactnative.dev/docs/button) in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md) and automatically tracks [PressEvent](/taxonomy/reference/events/PressEvent.md) for it.

```tsx
TrackedButton: (props: ButtonProps & {
  id?: string,
}) => Button
```

## Additional Props
|          |     | type      | default value         | 
|:--------:|:----|:----------|:----------------------|
| optional | id  | string    | inferred from `title` |

:::info
In development mode, TrackedButton will log an error to the console when failing toi infer an identifier from `title`.
:::

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onPress` triggers.

## Usage examples

```jsx
import { TrackedButton } from '@objectiv/tracker-react-native';
```

#### A regular Button
```tsx
<TrackedButton
  onPress={doSomethingHandler}
  title="Do something"
/>
```

#### Non parseable title 
```tsx
<TrackedButton
  onPress={dislikeHandler}
  title="👎"
  id="thumb-down"
/>
```

#### Custom identifier
```tsx
<TrackedButton
  onPress={onPressHandler}
  title="Press me!"
  id="custom-analytics-id"
/>
```

<br />

:::tip Did you know ?
`TrackedButton` internally uses [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedPressable](/tracking/react-native/api-reference/trackedComponents/TrackedPressable.md)
- [TrackedText](/tracking/react-native/api-reference/trackedComponents/TrackedText.md)
- [TrackedTouchableHighlight](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableHighlight.md)
- [TrackedTouchableNativeFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableNativeFeedback.md)
- [TrackedTouchableOpacity](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableOpacity.md)
- [TrackedTouchableWithoutFeedback](/tracking/react-native/api-reference/trackedComponents/TrackedTouchableWithoutFeedback.md)
:::
