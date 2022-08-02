# useOnContextChange

Monitors the given [Context](/taxonomy/reference/overview.md) and runs the given `effect` when it changes.

```ts
useOnContextChange = <T extends AbstractContext>(
  context: T, 
  effect: (previousState: T, state: T) => void,
) => void
```

## Parameters
|          |                 | type                                       | default value |
|:--------:|:----------------|:-------------------------------------------|:--------------|
| required | **context**     | [Context](/taxonomy/reference/overview.md) |               |
| required | **effect**      | (previousState: T, state: T) => void       |               |

## Usage
```ts
import { useOnContextChange } from "@objectiv/tracker-react";
```

```ts
useOnContextChange(
  context, 
  (previousContextInstance, currentContextInstance) => {
    // this effect will trigger whenever `context` changes
  }
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
