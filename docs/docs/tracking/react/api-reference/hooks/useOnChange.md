# useOnChange

Monitors the given `state` and runs the given `effect` when it changes.

```ts
useOnChange = <T>(
  state: T, 
  effect: (previous: T, state: T) => void
) => void
```

:::info
State equality is performed using [fast-deep-equal](https://www.npmjs.com/package/fast-deep-equal).
:::

## Parameters
|          |            | type                            | default value |
|:--------:|:-----------|:--------------------------------|:--------------|
| required | **state**  | unknown                         |               |
| required | **effect** | (previous: T, state: T) => void |               |

## Usage
```ts
import { useOnChange } from "@objectiv/tracker-react";
```

```ts
useOnChange(state, (previousState, state) => {
  // this effect will trigger whenever `state` changes
})
```

<br />

:::info See also
- [useOnMount](/tracking/react/api-reference/hooks/useOnMount.md)
- [useOnUnmount](/tracking/react/api-reference/hooks/useOnUnmount.md)
- [useTrackOnMount](/tracking/react/api-reference/hooks/useTrackOnMount.md)
- [useTrackOnUnmount](/tracking/react/api-reference/hooks/useTrackOnUnmount.md)
- [useOnToggle](/tracking/react/api-reference/hooks/useOnToggle.md)
- [useTrackOnChange](/tracking/react/api-reference/hooks/useTrackOnChange.md)
- [useTrackOnToggle](/tracking/react/api-reference/hooks/useTrackOnToggle.md)
:::
