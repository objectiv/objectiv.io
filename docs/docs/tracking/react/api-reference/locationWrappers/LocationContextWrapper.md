# LocationContextWrapper

Wraps its children in the given [LocationContext](/taxonomy/reference/location-contexts/overview.md) instance.

```tsx
LocationContextWrapper: (props: { 
  children: ReactNode, 
  locationContext: LocationContext
}) => ReactElement
```

:::caution
`LocationContextWrapper` is a lower-level Component. Unless really needed, it's easier to use specific [Location Wrappers](/tracking/react/api-reference/locationWrappers/overview.md).
:::

## Parameters
|          |                     | type            | default value |
|:--------:|:--------------------|:----------------|:--------------|
| required | **children**        | ReactNode       |               |
| required | **locationContext** | LocationContext |               |

## Returns
ReactElement.

## Usage example

```typescript jsx
import { LocationContextWrapper, makeContentContext } from '@objectiv/tracker-react';
```

```typescript jsx
<LocationContextWrapper locationContext={ makeContentContext({ id: 'content' }) }>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</LocationContextWrapper>
```

<br />

<br />

:::info See also
#TODO
:::
