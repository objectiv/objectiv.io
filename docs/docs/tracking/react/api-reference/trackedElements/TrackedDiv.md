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
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)
:::
