# LinkContextWrapper

Wraps its children in a [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).

```tsx
LinkContextWrapper: (props: { 
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
import { LinkContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<LinkContextWrapper id={'privacy'}>
  <a href={'/privacy'}>Privacy</a>
</LinkContextWrapper>
```

<br />

:::tip Did you know ?
`LinkContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
