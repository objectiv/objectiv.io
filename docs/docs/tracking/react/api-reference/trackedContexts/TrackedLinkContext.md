# TrackedLinkContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedLinkContext: (props: { 
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id?: string,
  forwardId?: boolean,
  href: string,
  forwardHref?: boolean
  title?: string,
  forwardTitle?: boolean,
  waitUntilTracked?: boolean
}) => ReactElement
```

## Parameters
|          |                  | type                                 | default value                       |
|:--------:|:-----------------|:-------------------------------------|:------------------------------------|
| required | **children**     | ReactNode                            |                                     |
| required | **Component**    | ComponentType &vert; keyof ReactHTML |                                     |
| optional | id               | string                               | inferred from `children` or `title` |
| optional | forwardId        | boolean                              | `false`                             |
| required | **href**         | string                               |                                     |
| optional | forwardHref      | boolean                              | `false`                             |
| optional | title            | string                               |                                     |
| optional | forwardTitle     | boolean                              | `false`                             |
| optional | waitUntilTracked | boolean                              | `false`                             |

## Returns
ReactElement.

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onClick` triggers.

## Usage example

```typescript jsx
import { TrackedLinkContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedLinkContext Component={'a'} href={'/privacy'}>
  Privacy
</TrackedLinkContext>

// Whenever inferring 'id' is not possible, due to children not having any text, a `title` can be specified
<TrackedLinkContext Component={'a'} href={'/privacy'} title={'privacy'}>
  <img src="/lock.jpg"/>
</TrackedLinkContext>

// Or just a manual `id`, either one will do the job
<TrackedLinkContext Component={'a'} href={'/privacy'} id={'privacy'}>
  <img src="/lock.jpg"/>
</TrackedLinkContext>
```

<br />

:::tip Did you know ?
`TrackedLinkContext` internally uses [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md).
:::

<br />

:::info See also
- [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md)
- [TrackedExpandableContext](/tracking/react/api-reference/trackedContexts/TrackedExpandableContext.md)
- [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md)
- [TrackedMediaPlayerContext](/tracking/react/api-reference/trackedContexts/TrackedMediaPlayerContext.md)
- [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md)
- [TrackedOverlayContext](/tracking/react/api-reference/trackedContexts/TrackedOverlayContext.md)
- [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md)
- [TrackedRootLocationContext](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md)
:::
