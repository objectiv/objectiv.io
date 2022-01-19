# makeExpandableContext

Factors a uniquely identifiable [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md).

```typescript
makeExpandableContext = (props: { 
  id: string
}) => LocationContext<ExpandableContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<ExpandableContext>`

## Usage

```ts
import { makeExpandableContext } from "@objectiv/tracker-react";
```

```ts
const expandableContextInstance = makeExpandableContext({ id: 'tooltip' });
```

<br/>

:::tip Did you know ?
`makeExpandableContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
#TODO
:::
