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

#TODO: explain how to track visibility event programmatically
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
#TODO
:::
