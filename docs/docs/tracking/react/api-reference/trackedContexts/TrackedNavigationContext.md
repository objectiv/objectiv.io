# TrackedNavigationContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedNavigationContext: (props: { 
  children: ReactNode, 
  id: string
}) => ReactElement
```

## Parameters
|          |              | type      | default value |
|:--------:|:-------------|:----------|:--------------|
| required | **children** | ReactNode |               |
| required | **id**       | string    |               |

## Returns
ReactElement.

## Usage example

```typescript jsx
import { TrackedNavigationContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedNavigationContext id={'content'}>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</TrackedNavigationContext>
```

<br />

:::tip Did you know ?
`TrackedNavigationContext` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
