# TrackedContentContext

Generates a clone of the given Component, forwarding all props it receives to it. The resulting component is  
also wrapped in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedContentContext: (props: {
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id: string,
  forwardId?: boolean,
  normalizeId?: boolean
}) => ReactElement
```

:::caution
As a limitation of the current TypeScript definitions, Tracked Components are only compatible with HTMLElements or HTMLElement-like components.

We are currently working on improving these definitions to enable support for any React Component. Meanwhile, if you need to track Components with definitions that do not match valid HTML elements, take a look at our guide on how to write your own [Custom Tracked Components](/tracking/react/how-to-guides/custom-components.md).
:::

## Parameters
|          |               | type                                 | default value |
|:--------:|:--------------|:-------------------------------------|:--------------|
| required | **children**  | ReactNode                            |               |
| required | **Component** | ComponentType &vert; keyof ReactHTML |               |
| required | **id**        | string                               |               |
| optional | forwardId     | boolean                              | `false`       |
| optional | normalizeId   | boolean                              | `true`        |

## Returns
`ReactElement`

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
</TrackedContentContext>
```

By default, all Tracked Context Components automatically normalize their Context identifiers to a kebab-cased format.

This can be disabled via the  `normalizeId` option:

```jsx
<TrackedContentContext Component={'p'} id={'Body Section'} normalizeId={false}>
...
</TrackedContentContext>
```

:::info Props forwarding
All `TrackedContext` components support props forwarding, 

Whenever a `TrackedContext` requires one or more props that may overlap with the given `Component`, props forwarding allows the
developer to specify which ones are needed by `Component` as well.

For an actual example, check [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md#components) usage.
:::

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
