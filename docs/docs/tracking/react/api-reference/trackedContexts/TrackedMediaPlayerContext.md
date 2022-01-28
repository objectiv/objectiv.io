# TrackedMediaPlayerContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedMediaPlayerContext: (props: { 
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id: string,
  forwardId?: boolean
}) => ReactElement
```

## Parameters
|          |               | type                                 | default value |
|:--------:|:--------------|:-------------------------------------|:--------------|
| required | **children**  | ReactNode                            |               |
| required | **Component** | ComponentType &vert; keyof ReactHTML |               |
| required | **id**        | string                               |               |
| optional | forwardId     | boolean                              | `false`       |

## Returns
`ReactElement`

## Automatic Events
None.

## Usage example

```jsx
import { TrackedMediaPlayerContext } from '@objectiv/tracker-react';
```

```jsx
<TrackedMediaPlayerContext Component={'video'} id={'content'} />
```

<br />

:::tip Did you know ?
`TrackedMediaPlayerContext` internally uses [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md).
:::

<br />

:::info See also
- [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md)
- [TrackedExpandableContext](/tracking/react/api-reference/trackedContexts/TrackedExpandableContext.md)
- [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md)
- [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md)
- [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md)
- [TrackedOverlayContext](/tracking/react/api-reference/trackedContexts/TrackedOverlayContext.md)
- [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md)
- [TrackedRootLocationContext](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md)
:::
