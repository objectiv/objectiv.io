# TrackedRootLocationContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedRootLocationContext: (props: { 
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
import { TrackedRootLocationContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedRootLocationContext id={'content'}>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</TrackedRootLocationContext>
```

<br />

:::tip Did you know ?
`TrackedRootLocationContext` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
