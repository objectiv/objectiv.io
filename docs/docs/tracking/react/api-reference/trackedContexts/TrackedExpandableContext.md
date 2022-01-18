# TrackedExpandableContext

Generates a clone of the given Component, forwarding all props it receives to it. The resulting component is  
also wrapped in an [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md). If `isVisible` is provided, visibility Events will be tracked when it changes.

```tsx
TrackedExpandableContext: (props: {
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id: string,
  forwardId?: boolean,
  isVisible?: boolean;
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

## Events
[HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) and [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) based on the `isVisible` prop.

:::caution
The `isVisible` state of a TrackedExpandableContext at mount is ignored. Only actual changes and tracked.

#TODO: explain how to track visibility event programmatically
:::

## Usage example

```typescript jsx
import { TrackedExpandableContext } from '@objectiv/tracker-react';
```

```typescript jsx
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
#TODO
:::
