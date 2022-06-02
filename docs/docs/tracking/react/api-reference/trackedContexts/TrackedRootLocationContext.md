# TrackedRootLocationContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedRootLocationContext: (props: { 
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id: string,
  forwardId?: boolean,
  normalizeId?: boolean
}) => ReactElement
```

:::danger Low level api
Make sure to never use TrackedRootLocationContext while RootLocationContextFromURLPlugin is active. It will lead to multiple RootLocationContexts, which is forbidden.

For applications relying on URLs, RootLocationContext can be automatically instrumented via the `RootLocationContextFromURLPlugin`.
This is enabled by default in [ReactTracker](/tracking/react/api-reference/ReactTracker.md#plugins).

**Reconfiguring or removing RootLocationContextFromURLPlugin**   
If you need RootLocationContextFromURLPlugin to track a different url slug, search parameter or the hashtag, you can reconfigure it to do so.

When reconfiguring the RootLocationContextFromURLPlugin is not a viable option, the Plugin should be removed before using this Location Tagger to instrument roots manually.

- Check out [this guide](/tracking/react/how-to-guides/configuring-root-locations.md) for some examples.
:::

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
import { TrackedRootLocationContext } from '@objectiv/tracker-react';
```

```jsx
<TrackedRootLocationContext id={'page'}>
  <Layout>
    ...
  </Layout>
</TrackedRootLocationContext>
```

By default, all Tracked Context Components automatically normalize their Context identifiers to a kebab-cased format.

This can be disabled via the  `normalizeId` option:

```jsx
<TrackedRootLocationContext id={'Home Page'} normalizeId={false}>
  ...
</TrackedRootLocationContext>
```

:::caution Props forwarding
All `TrackedContext` components support props forwarding,

Whenever a `TrackedContext` requires one or more props that may overlap with the given `Component`, props forwarding allows the
developer to specify which ones are needed by `Component` as well.

For an actual example, check [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md#components) usage.
:::

<br />

:::tip Did you know ?
`TrackedRootLocationContext` internally uses [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md).
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
- [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md)
:::
