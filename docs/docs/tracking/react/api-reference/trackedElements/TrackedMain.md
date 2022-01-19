# TrackedMain

Generates a `<main>` Element wrapped in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md) identified as `main`, unless differently specified. 

```tsx
TrackedMain: (props: {
  children: ReactNode,
  id?: string,
  forwardId?: boolean
}) => ReactElement
```

## Parameters
|          |              | type      | default value |
|:--------:|:-------------|:----------|:--------------|
| required | **children** | ReactNode |               |
| optional | id           | string    | `main`        |
| optional | forwardId    | boolean   | `false`       |

## Returns
ReactElement.

## Automatic Events
None.

## Usage example

```typescript jsx
import { TrackedMain } from '@objectiv/tracker-react';
```

```typescript jsx
<div>
  <header>
    ...
  </header>
  <TrackedMain>
    ...
  </TrackedMain>
  <footer>
    ...
  </footer>
</div>
```

<br />

:::tip Did you know ?
`TrackedMain` internally uses [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md).
:::

<br />

:::info See also
#TODO
:::
