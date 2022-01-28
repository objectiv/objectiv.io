# TrackedContentContext

Generates a clone of the given Component, forwarding all props it receives to it. The resulting component is  
also wrapped in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedContentContext: (props: {
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
ReactElement.

## Automatic Events
None.

## Usage example

```jsx
import { TrackedContentContext } from '@objectiv/tracker-react';
```

```jsx
<TrackedContentContext Component={'div'} id={'content'}>
  ...
  <TrackedContentContext Component={'p'} id={'intro'}>
    ...
  </TrackedContentContext>
  <TrackedContentContext Component={BoxComponent} id={'details'}>
    ...
  </TrackedContentContext>
</TrackedContentContext>
```

<br />

:::tip Did you know ?
`TrackedContentContext` internally uses [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md).
:::

<br />

:::info See also
- [TrackedExpandableContext](/tracking/react/api-reference/trackedContexts/TrackedExpandableContext.md)
- [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md)
- [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md)
- [TrackedMediaPlayerContext](/tracking/react/api-reference/trackedContexts/TrackedMediaPlayerContext.md)
- [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md)
- [TrackedOverlayContext](/tracking/react/api-reference/trackedContexts/TrackedOverlayContext.md)
- [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md)
- [TrackedRootLocationContext](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md)
:::
