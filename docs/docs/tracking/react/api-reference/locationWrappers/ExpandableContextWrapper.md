# ExpandableContextWrapper

Wraps its children in a [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md).

```tsx
ExpandableContextWrapper: (props: { 
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
import { ExpandableContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<ExpandableContextWrapper id={'tooltip'}>
  <Tooltip>
    ...
  </Tooltip>
</ExpandableContextWrapper>
```

<br />

:::tip Did you know ?
`ExpandableContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
