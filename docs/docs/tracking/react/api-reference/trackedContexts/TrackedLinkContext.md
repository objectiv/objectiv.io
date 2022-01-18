# TrackedLinkContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedLinkContext: (props: { 
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
import { TrackedLinkContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedLinkContext id={'content'}>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</TrackedLinkContext>
```

<br />

:::tip Did you know ?
`TrackedLinkContext` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
