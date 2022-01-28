# TrackedPressableContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedPressableContext: (props: { 
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id?: string,
  forwardId?: boolean,
  title?: string,
  forwardTitle?: boolean,
  waitUntilTracked?: boolean
}) => ReactElement
```

## Parameters
|          |                   | type                                 | default value                       |
|:--------:|:------------------|:-------------------------------------|:------------------------------------|
| required | **children**      | ReactNode                            |                                     |
| required | **Component**     | ComponentType &vert; keyof ReactHTML |                                     |
| optional | id                | string                               | inferred from `children` or `title` |
| optional | forwardId         | boolean                              | `false`                             |
| optional | title             | string                               |                                     |
| optional | forwardTitle      | boolean                              | `false`                             |
| optional | waitUntilTracked  | boolean                              | `false`                             |

## Returns
`ReactElement`

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onClick` triggers.

## Usage example

```jsx
import { TrackedPressableContext } from '@objectiv/tracker-react';
```

```jsx
<TrackedPressableContext Component={'button'} onClick={ () => doIt() }>
  Do it
</TrackedPressableContext>

// Whenever inferring 'id' is not possible, due to children not having any text, a `title` can be specified
<TrackedPressableContext Component={'a'} onClick={ () => doIt() } title={'Do it'}>
  <img src="/do-it.jpg"/>
</TrackedPressableContext>

// Or just a manual `id`, either one will do the job
<TrackedPressableContext Component={'a'} onClick={ () => doIt() } id={'do-it'}>
  <img src="/do-it.jpg"/>
</TrackedPressableContext>
```

<br />

:::tip Did you know ?
`TrackedPressableContext` internally uses [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
- [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md)
- [TrackedExpandableContext](/tracking/react/api-reference/trackedContexts/TrackedExpandableContext.md)
- [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md)
- [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md)
- [TrackedMediaPlayerContext](/tracking/react/api-reference/trackedContexts/TrackedMediaPlayerContext.md)
- [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md)
- [TrackedOverlayContext](/tracking/react/api-reference/trackedContexts/TrackedOverlayContext.md)
- [TrackedRootLocationContext](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md)
:::
