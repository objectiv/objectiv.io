# TrackedDiv

Generates a `<div>` Element wrapped in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedDiv: (props: {
  children: ReactNode,
  id: string,
  forwardId?: boolean
}) => ReactElement
```

## Parameters
|          |               | type      | default value |
|:--------:|:--------------|:----------|:--------------|
| required | **children**  | ReactNode |               |
| required | **id**        | string    |               |
| optional | forwardId     | boolean   | `false`       |

## Returns
ReactElement.

## Automatic Events
None.

## Usage example

```typescript jsx
import { TrackedDiv } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedDiv id={'content'}>
  ...
  <TrackedDiv id={'details'}>
    ...
  </TrackedDiv>
</TrackedDiv>
```

<br />

:::tip Did you know ?
`TrackedDiv` internally uses [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md).
:::

<br />

:::info See also
#TODO
:::
