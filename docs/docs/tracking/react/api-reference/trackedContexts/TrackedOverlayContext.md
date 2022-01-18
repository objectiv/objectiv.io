# TrackedOverlayContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedOverlayContext: (props: { 
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
import { TrackedOverlayContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedOverlayContext id={'content'}>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</TrackedOverlayContext>
```

<br />

:::tip Did you know ?
`TrackedOverlayContext` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
