# makeOverlayContext

Factors a uniquely identifiable [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md).

```typescript
makeOverlayContext = (props: { 
  id: string
}) => LocationContext<OverlayContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<OverlayContext>`

## Usage

```ts
import { makeOverlayContext } from "@objectiv/tracker-react";
```

```ts
const overlayContextInstance = makeOverlayContext({ id: 'modal' });
```

<br/>

:::tip Did you know ?
`makeOverlayContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
#TODO
:::
