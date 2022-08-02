# useOnToggle

Monitors a boolean `state` and runs the given `trueEffect` or `falseEffect` depending on the given state value.

```ts
useOnToggle = (
  state: boolean,
  trueEffect: (previous: boolean, state: boolean) => void,
  falseEffect: (previous: boolean, state: boolean) => void
) => void
```

## Parameters
|          |                 | type                                        | default value |
|:--------:|:----------------|:--------------------------------------------|:--------------|
| required | **state**       | boolean                                     |               |
| required | **trueEffect**  | (previous: boolean, state: boolean) => void |               |
| required | **falseEffect** | (previous: boolean, state: boolean) => void |               |

## Usage
```ts
import { useOnToggle } from "@objectiv/tracker-react";
```

```ts
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

<br />

:::info See also
- [useOnMount](/tracking/react/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)
:::
