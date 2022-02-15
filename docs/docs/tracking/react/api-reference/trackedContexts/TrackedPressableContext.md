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

:::caution
As a limitation of the current TypeScript definitions, Tracked Components are only compatible with HTMLElements or HTMLElement-like components.

We are currently working on improving these definitions to enable support for any React Component. Meanwhile, if you need to track Components with definitions that do not match valid HTML elements, take a look at our guide on how to write your own [Custom Tracked Components](/tracking/react/how-to-guides/custom-components.md).
:::

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
<TrackedPressableContext Component={'button'} onClick={ () => doIt() } title={'Do it'}>
  <img src="/do-it.jpg"/>
</TrackedPressableContext>

// Or just a manual `id`, either one will do the job
<TrackedPressableContext Component={'button'} onClick={ () => doIt() } id={'do-it'}>
  <img src="/do-it.jpg"/>
</TrackedPressableContext>
```

:::caution Props forwarding
All `TrackedContext` components support props forwarding,

Whenever a `TrackedContext` requires one or more props that may overlap with the given `Component`, props forwarding allows the
developer to specify which ones are needed by `Component` as well.

For an actual example, check [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md#components) usage.
:::

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
