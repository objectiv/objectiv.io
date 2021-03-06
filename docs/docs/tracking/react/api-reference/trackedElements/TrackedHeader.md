# TrackedHeader

Generates a `<header>` Element wrapped in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md) identified as `header`, unless differently specified. 

```tsx
TrackedHeader: (props: {
  children: ReactNode,
  id?: string,
  forwardId?: boolean,
  normalizeId?: boolean
}) => ReactElement
```

## Parameters
|          |              | type       | default value |
|:--------:|:-------------|:-----------|:--------------|
| required | **children** | ReactNode  |               |
| optional | id           | string     | `header`      |
| optional | forwardId    | boolean    | `false`       |
| optional | normalizeId  | boolean    | `true`        |

## Returns
`ReactElement`

## Automatic Events
None.

## Usage example

```jsx
import { TrackedHeader } from '@objectiv/tracker-react';
```

```jsx
<div>
  <TrackedHeader>
    ...
  </TrackedHeader>
  <TrackedHeader id={'Secondary Header'}>
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

By default, all Tracked Elements automatically normalize their Context identifiers to a kebab-cased format.

This can be disabled via the  `normalizeId` option:

```jsx
<div>
  <TrackedHeader id={'Main Header'} normalizeId={false}>
    ...
  </TrackedHeader>
</div>
```

<br />

:::tip Did you know ?
`TrackedHeader` internally uses [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md).
:::

<br />

:::info See also
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)
:::
