# TrackedHeader

Generates a `<header>` Element wrapped in a [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md) identified as `header`, unless differently specified. 

```tsx
TrackedHeader: (props: {
  children: ReactNode,
  id?: string,
  forwardId?: boolean
}) => ReactElement
```

## Parameters
|          |              | type                                 | default value |
|:--------:|:-------------|:-------------------------------------|:--------------|
| required | **children** | ReactNode                            |               |
| optional | id           | string                               | `header`      |
| optional | forwardId    | boolean                              | `false`       |

## Returns
ReactElement.

## Automatic Events
None.

## Usage example

```typescript jsx
import { TrackedHeader } from '@objectiv/tracker-react';
```

```typescript jsx
<div>
  <TrackedHeader>
    ...
  </TrackedHeader>
  <main>
    ...
  </main>
  <footer>
    ...
  </footer>
</div>
```

<br />

:::tip Did you know ?
`TrackedHeader` internally uses [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md).
:::

<br />

:::info See also
#TODO
:::
