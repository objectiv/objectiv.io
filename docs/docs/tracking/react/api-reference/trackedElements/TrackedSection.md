# TrackedSection

Generates a `<section>` Element wrapped in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedSection: (props: {
  children: ReactNode,
  id: string,
  forwardId?: boolean
}) => ReactElement
```

## Parameters
|          |               | type                                 | default value |
|:--------:|:--------------|:-------------------------------------|:--------------|
| required | **children**  | ReactNode                            |               |
| required | **id**        | string                               |               |
| optional | forwardId     | boolean                              | `false`       |

## Returns
ReactElement.

## Automatic Events
None.

## Usage example

```jsx
import { TrackedSection } from '@objectiv/tracker-react';
```

```jsx
<TrackedSection id={'content'}>
  ...
  <TrackedSection id={'sub-section'}>
    ...
  </TrackedSection>
</TrackedSection>
```

<br />

:::tip Did you know ?
`TrackedSection` internally uses [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md).
:::

<br />

:::info See also
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)
:::
