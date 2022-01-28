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

```jsx
import { TrackedMain } from '@objectiv/tracker-react';
```

```jsx
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
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)
:::
