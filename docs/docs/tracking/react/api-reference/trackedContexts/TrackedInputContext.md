# TrackedInputContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedInputContext: (props: { 
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
- [InputChangeEvent](/taxonomy/reference/events/InputChangeEvent.md) when `onBlur` triggers and the  value changed.

## Usage example

```typescript jsx
import { TrackedInputContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedInputContext Component={'input'} type={'email'} id={'email'} />
```

<br />

:::tip Did you know ?
`TrackedInputContext` internally uses [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md).
:::

<br />

:::info See also
- [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md)
- [TrackedExpandableContext](/tracking/react/api-reference/trackedContexts/TrackedExpandableContext.md)
- [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md)
- [TrackedMediaPlayerContext](/tracking/react/api-reference/trackedContexts/TrackedMediaPlayerContext.md)
- [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md)
- [TrackedOverlayContext](/tracking/react/api-reference/trackedContexts/TrackedOverlayContext.md)
- [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md)
- [TrackedRootLocationContext](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md)
:::
