# NavigationContextWrapper

Wraps its children in a [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md).

```tsx
NavigationContextWrapper: (props: { 
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
import { NavigationContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<NavigationContextWrapper id={'content'}>
  <nav>
    <a href={'/'}>Homepage</a>
    <a href={'/privacy'}>Privacy</a>
    <a href={'/contact'}>Contact</a>
  </nav>
</NavigationContextWrapper>
```

<br />

:::tip Did you know ?
`NavigationContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
