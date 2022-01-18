# TrackedNavigationContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedNavigationContext: (props: { 
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
None.

## Usage example

```typescript jsx
import { TrackedNavigationContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedNavigationContext Component={'nav'} id={'top-nav'}>
  <a href={'/'}>Homepage</a>
  <a href={'/privacy'}>Privacy</a>
  <a href={'/contact'}>Contact</a>
</TrackedNavigationContext>
```

<br />

:::tip Did you know ?
`TrackedNavigationContext` internally uses [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
