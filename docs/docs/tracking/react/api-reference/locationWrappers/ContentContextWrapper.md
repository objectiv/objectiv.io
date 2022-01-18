# ContentContextWrapper

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
ContentContextWrapper: (props: { 
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
import { ContentContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<ContentContextWrapper id={'content'}>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</ContentContextWrapper>
```

<br />

:::tip Did you know ?
`ContentContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
