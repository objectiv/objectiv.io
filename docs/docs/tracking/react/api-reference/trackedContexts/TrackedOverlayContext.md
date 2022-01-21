# TrackedOverlayContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedOverlayContext: (props: { 
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

## Returns
ReactElement.

## Automatic Events
- [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) when `isVisible` switches from `true` to `false`.
- [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) when `isVisible` switches from `false` to `true`.

:::caution
The `isVisible` state of a TrackedOverlayContext at mount is ignored. Only actual changes and tracked.
:::


## Usage example

```typescript jsx
import { TrackedOverlayContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedOverlayContext Component={'div'} id={'modal'}>
  ...
</TrackedOverlayContext>
<TrackedOverlayContext Component={Tooltip} id={'tooltip'}>
  ...
</TrackedOverlayContext>
```

<br />

:::tip Did you know ?
`TrackedOverlayContext` internally uses [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md).
:::

<br />

:::info See also
- [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md)
- [TrackedExpandableContext](/tracking/react/api-reference/trackedContexts/TrackedExpandableContext.md)
- [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md)
- [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md)
- [TrackedMediaPlayerContext](/tracking/react/api-reference/trackedContexts/TrackedMediaPlayerContext.md)
- [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md)
- [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md)
- [TrackedRootLocationContext](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md)
:::
