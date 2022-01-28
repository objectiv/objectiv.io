# TrackedExpandableContext

Generates a clone of the given Component, forwarding all props it receives to it. The resulting component is  
also wrapped in an [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md). If `isVisible` is provided, visibility Events will be tracked when it changes.

```tsx
TrackedExpandableContext: (props: {
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id: string,
  forwardId?: boolean,
  isVisible?: boolean
}) => ReactElement
```

## Parameters
|          |               | type                                 | default value |
|:--------:|:--------------|:-------------------------------------|:--------------|
| required | **children**  | ReactNode                            |               |
| required | **Component** | ComponentType &vert; keyof ReactHTML |               |
| required | **id**        | string                               |               |
| optional | forwardId     | boolean                              | `false`       |
| optional | isVisible     | boolean                              | `undefined`   |

## Returns
ReactElement.

## Automatic Events
- [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) when `isVisible` switches from `true` to `false`. 
- [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) when `isVisible` switches from `false` to `true`.

:::caution
The `isVisible` state of a TrackedExpandableContext at mount is ignored. Only actual changes and tracked.
:::

## Usage example

```jsx
import { TrackedExpandableContext } from '@objectiv/tracker-react';
```

```jsx
<TrackedExpandableContext Component={Tooltip} id={'tooltip'}>
  ...
</TrackedExpandableContext>
```

<br />

:::tip Did you know ?
`TrackedExpandableContext` internally uses [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md)
- [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md)
- [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md)
- [TrackedMediaPlayerContext](/tracking/react/api-reference/trackedContexts/TrackedMediaPlayerContext.md)
- [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md)
- [TrackedOverlayContext](/tracking/react/api-reference/trackedContexts/TrackedOverlayContext.md)
- [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md)
- [TrackedRootLocationContext](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md)
:::
