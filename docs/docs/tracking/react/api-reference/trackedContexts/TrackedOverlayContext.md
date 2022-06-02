# TrackedOverlayContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedOverlayContext: (props: { 
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id: string,
  forwardId?: boolean,
  isVisible?: boolean,
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
- [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) when `isVisible` switches from `true` to `false`.
- [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) when `isVisible` switches from `false` to `true`.

:::caution
The `isVisible` state of a TrackedOverlayContext is ignored on mount. Only actual changes and tracked.
:::


## Usage example

```jsx
import { TrackedOverlayContext } from '@objectiv/tracker-react';
```

```jsx
<TrackedOverlayContext Component={'div'} id={'modal'}>
  ...
</TrackedOverlayContext>
```

By default, all Tracked Context Components automatically normalize their Context identifiers to a kebab-cased format.

This can be disabled via the  `normalizeId` option:

```jsx
<TrackedOverlayContext Component={'div'} id={'Login Modal'} normalizeId={false}>
  ...
</TrackedOverlayContext>
```

:::caution Props forwarding
All `TrackedContext` components support props forwarding,

Whenever a `TrackedContext` requires one or more props that may overlap with the given `Component`, props forwarding allows the
developer to specify which ones are needed by `Component` as well.

For an actual example, check [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md#components) usage.
:::

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
