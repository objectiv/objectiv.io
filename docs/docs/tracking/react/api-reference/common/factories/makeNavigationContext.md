# makeNavigationContext

Factors a uniquely identifiable [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md).

```typescript
makeNavigationContext = (props: { 
  id: string
}) => LocationContext<NavigationContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<NavigationContext>`

## Usage

```ts
import { makeNavigationContext } from "@objectiv/tracker-react";
```

```ts
const navigationContextInstance = makeNavigationContext({ id: 'nav' });
```

<br/>

:::tip Did you know ?
`makeNavigationContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
#TODO
:::
