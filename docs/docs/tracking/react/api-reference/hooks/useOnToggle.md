# useOnToggle

Monitors a boolean or predicate `state` and runs the given `trueEffect` or `maybeFalseEffect` depending on the given state value.

The second effect callback can be omitted, in which case the hook will monitor the state and always trigger the only effect provided. Effectively behaving as a `onChange` hook.

```ts
useOnToggle = (
  state: | () => boolean,
  trueEffect: (previous: boolean, state: boolean) => void,
  maybeFalseEffect?: (previous: boolean, state: boolean) => void
) => void
```

## Parameters
|          |                  | type                                        | default value |
|:--------:|:-----------------|:--------------------------------------------|:--------------|
| required | **state**        | boolean &vert; () => boolean                |               |
| required | **trueEffect**   | (previous: boolean, state: boolean) => void |               |
| optional | maybeFalseEffect | (previous: boolean, state: boolean) => void |               |

## Usage
```ts
import { useOnToggle } from "@objectiv/tracker-react";
```

```ts title="with a boolean state"
useOnToggle(
  state, 
  (previousState, state) => {
    // this effect will trigger whenever `state` changes from `false` to `true`
  },
  (previousState, state) => {
    // this effect will trigger whenever `state` changes from `true` to `false`
  },
)
```

```ts title="with a predicate state"
useOnToggle(
  () => state, 
  (previousState, state) => {
    // this effect will trigger whenever the predicate result changes from `false` to `true`
  },
  (previousState, state) => {
    // this effect will trigger whenever the predicate result changes from `true` to `false`
  },
)
```

```ts title="without second effect and a boolean state"
useOnToggle(
  state, 
  (previousState, state) => {
    // this effect will trigger whenever `state` changes
  },
)
```

```ts title="without second effect and a predicate"
useOnToggle(
  () => state, 
  (previousState, state) => {
    // this effect will trigger whenever the predicate result changes
  },
)
```

<br />

:::info See also
- [useOnMount](/tracking/react/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)
:::
