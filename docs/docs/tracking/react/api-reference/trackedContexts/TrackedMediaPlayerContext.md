# TrackedMediaPlayerContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedMediaPlayerContext: (props: { 
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
import { TrackedMediaPlayerContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedMediaPlayerContext id={'content'}>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</TrackedMediaPlayerContext>
```

<br />

:::tip Did you know ?
`TrackedMediaPlayerContext` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
