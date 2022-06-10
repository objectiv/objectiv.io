# TrackedFooter

Generates a `<footer>` Element wrapped in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md) identified as `footer`, unless differently specified. 

```tsx
TrackedFooter: (props: {
  children: ReactNode,
  id?: string,
  forwardId?: boolean,
  normalizeId?: boolean
}) => ReactElement
```

## Parameters
|          |              | type      | default value |
|:--------:|:-------------|:----------|:--------------|
| required | **children** | ReactNode |               |
| optional | id           | string    | `footer`      |
| optional | forwardId    | boolean   | `false`       |
| optional | normalizeId  | boolean   | `true`        |

## Returns
`ReactElement`

## Automatic Events
None.

## Usage example

```jsx
import { TrackedFooter } from '@objectiv/tracker-react';
```

```jsx
<div>
  <header>
    ...
  </header>
  <main>
    ...
  </main>
  <TrackedFooter>
    ...
  </TrackedFooter>
  
  <TrackedFooter id={'Secondary Footer'}>
    ...
  </TrackedFooter>
</div>
```

By default, all Tracked Elements automatically normalize their Context identifiers to a kebab-cased format.

This can be disabled via the  `normalizeId` option:

```jsx
<div>
  <TrackedFooter id={'Main Footer'} normalizeId={false}>
    ...
  </TrackedFooter>
</div>
```

<br />

:::tip Did you know ?
`TrackedFooter` internally uses [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md).
:::

<br />

:::info See also
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)
:::
