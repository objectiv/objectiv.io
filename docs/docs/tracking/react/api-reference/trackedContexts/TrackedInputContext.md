# TrackedInputContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedInputContext: (props: { 
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id: string,
  forwardId?: boolean,
  normalizeId?: boolean,
  trackValue?: boolean,  
}) => ReactElement
```

:::caution
As a limitation of the current TypeScript definitions, Tracked Components are only compatible with HTMLElements or HTMLElement-like components.

We are currently working on improving these definitions to enable support for any React Component. Meanwhile, if you need to track Components with definitions that do not match valid HTML elements, take a look at our guide on how to write your own [Custom Tracked Components](/tracking/react/how-to-guides/custom-components.md).
:::

## Parameters
|          |                | type                                 | default value |
|:--------:|:---------------|:-------------------------------------|:--------------|
| required | **children**   | ReactNode                            |               |
| required | **Component**  | ComponentType &vert; keyof ReactHTML |               |
| required | **id**         | string                               |               |
| optional | forwardId      | boolean                              | `false`       |
| optional | normalizeId    | boolean                              | `true`        |
| optional | trackValue     | boolean                              | `false`       |

## Returns
`ReactElement`

## Automatic Events
- [InputChangeEvent](/taxonomy/reference/events/InputChangeEvent.md) when `onBlur` triggers and the  value changed.

## Global Contexts
- [InputValueContext](/taxonomy/reference/global-contexts/InputValueContext.md) with the changed value, if `trackValue` is set to `true`.

## Usage example

```jsx
import { TrackedInputContext } from '@objectiv/tracker-react';
```

```jsx title="Track InputChangeEvent whenever the email input has changed onBlur"
<TrackedInputContext Component={'input'} type={'email'} id={'email'} />
```

```jsx title="Additionally track also the value of the input, as InputValueContext"
<TrackedInputContext Component={'input'} type={'text'} id={'search'} trackValue={true} />
```

By default, all Tracked Context Components automatically normalize their Context identifiers to a kebab-cased format.

This can be disabled via the  `normalizeId` option:

```jsx
<TrackedInputContext Component={'input'} id={'First Name'} normalizeId={false} />
```

:::info Props forwarding
All `TrackedContext` components support props forwarding,

Whenever a `TrackedContext` requires one or more props that may overlap with the given `Component`, props forwarding allows the
developer to specify which ones are needed by `Component` as well.

For an actual example, check [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md#components) usage.
:::

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
