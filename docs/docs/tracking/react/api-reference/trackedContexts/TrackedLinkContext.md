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

:::caution
As a limitation of the current TypeScript definitions, Tracked Components are only compatible with HTMLElements or HTMLElement-like components.

We are currently working on improving these definitions to enable support for any React Component. Meanwhile, if you need to track Components with definitions that do not match valid HTML elements, take a look at our guide on how to write your own [Custom Tracked Components](/tracking/react/how-to-guides/custom-components.md).
:::

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
`ReactElement`

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onClick` triggers.

## Usage example

### Elements

```jsx
import { TrackedLinkContext } from '@objectiv/tracker-react';
```

```jsx
<TrackedLinkContext Component={'a'} href={'/privacy'}>
  Privacy
</TrackedLinkContext>

// Whenever inferring 'id' is not possible, eg: children without text, a `title` can be specified
<TrackedLinkContext Component={'a'} href={'/privacy'} title={'privacy'}>
  <img src="/lock.jpg"/>
</TrackedLinkContext>

// Or just a manual `id`, either one will do the job
<TrackedLinkContext Component={'a'} href={'/privacy'} id={'privacy'}>
  <img src="/lock.jpg"/>
</TrackedLinkContext>
```

### Components

Here is an example of an actual [TrackedLink component](https://github.com/objectiv/objectiv.io/blob/main/src/trackedComponents/TrackedLink.tsx) we use on our Docusaurus based website.

```jsx
import { TrackedLinkContext } from '@objectiv/tracker-react';
```

```tsx
type TrackedLinkProps = Omit<TrackedLinkContextProps, 'Component' | 'href'> & LinkProps;
 
const TrackedLink = React.forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  (props, ref) => (
    <TrackedLinkContext
      Component={Link} 
      {...props}
      href={props.href ?? props.to}
      forwardHref={!!props.href}
      ref={ref}
    />
  )
)
```

:::caution Props forwarding
Interesting to note in the example above is the `forwardHref` prop. 
Without it, the resulting wrapped component would not receive the `href` prop, most likely resulting in a TypeScript error or crash.

**Overlapping props**  
`TrackedLinkContext` requires a set of props that may overlap with the given `Component` but it cannot know which one automatically.  

Props forwarding allows the developer to tell `TrackedLinkContext` which of the overlapping props must be forwarded to `Component` as well. These forwarders exist for most properties that are likely to collide like `id`, `href` and `title`.

By setting `forwardHref` to `true` we are telling `TrackedLinkContext` to forward the `href` value to the given Link component as well.
:::

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
