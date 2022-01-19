# makeRootLocationContext

Factors a uniquely identifiable [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).

```typescript
makeRootLocationContext = (props: { 
  id: string
}) => LocationContext<RootLocationContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<RootLocationContext>`

## Usage

```ts
import { makeRootLocationContext } from "@objectiv/tracker-react";
```

```ts
const rootLocationContextInstance = makeRootLocationContext({ id: 'video' });
```

<br/>

:::tip Did you know ?
`makeRootLocationContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
#TODO
:::
