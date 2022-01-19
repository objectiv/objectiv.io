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
  title?: string;
  forwardTitle?: boolean;
}) => ReactElement
```

## Parameters
|          |               | type                                 | default value                       |
|:--------:|:--------------|:-------------------------------------|:------------------------------------|
| required | **children**  | ReactNode                            |                                     |
| required | **Component** | ComponentType &vert; keyof ReactHTML |                                     |
| optional | id            | string                               | inferred from `children` or `title` |
| optional | forwardId     | boolean                              | `false`                             |
| required | **href**      | string                               |                                     |
| optional | forwardHref   | boolean                              | `false`                             |
| optional | title         | string                               |                                     |
| optional | forwardTitle  | boolean                              | `false`                             |

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
#TODO
:::
