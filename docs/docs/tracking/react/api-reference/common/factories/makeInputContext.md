# makeInputContext

Factors a uniquely identifiable [InputContext](/taxonomy/reference/location-contexts/InputContext.md).

```typescript
makeInputContext = (props: { 
  id: string
}) => LocationContext<InputContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<InputContext>`

## Usage

```ts
import { makeInputContext } from "@objectiv/tracker-react";
```

```ts
const inputContextInstance = makeInputContext({ id: 'email' });
```

<br/>

:::tip Did you know ?
`makeInputContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
#TODO
:::
