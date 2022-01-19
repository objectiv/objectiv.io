# makeContentContext

Factors a uniquely identifiable [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```typescript
makeContentContext = (props: { 
  id: string
}) => LocationContext<ContentContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<ContentContext>`

## Usage

```ts
import { makeContentContext } from "@objectiv/tracker-react";
```

```ts
const contentContextInstance = makeContentContext({ id: 'content' });
```

<br/>

:::tip Did you know ?
`makeContentContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
#TODO
:::
