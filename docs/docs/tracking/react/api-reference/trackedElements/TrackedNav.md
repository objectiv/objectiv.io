# TrackedNav

Generates a `<nav>` Element wrapped in a [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md) identified as `nav`, unless differently specified. 

```tsx
TrackedNav: (props: {
  children: ReactNode,
  id?: string,
  forwardId?: boolean
}) => ReactElement
```

## Parameters
|          |              | type      | default value |
|:--------:|:-------------|:----------|:--------------|
| required | **children** | ReactNode |               |
| optional | id           | string    | `nav`         |
| optional | forwardId    | boolean   | `false`       |

## Returns
ReactElement.

## Automatic Events
None.

## Usage example

```typescript jsx
import { TrackedNav } from '@objectiv/tracker-react';
```

```typescript jsx
<div>
  <header>
    ...
  </header>
  <main>
    ...
  </main>
  <footer>
    ...
  </footer>
  <aside>
    <TrackedNav>
      <a href={'/'}>Homepage</a>
      <a href={'/privacy'}>Privacy</a>
      <a href={'/contact'}>Contact</a>
    </TrackedNav>
  </aside>
</div>
```

<br />

:::tip Did you know ?
`TrackedNav` internally uses [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md).
:::

<br />

:::info See also
#TODO
:::
