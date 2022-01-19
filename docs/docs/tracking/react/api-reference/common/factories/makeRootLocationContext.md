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
- [makeContentContext](/tracking/react/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react/api-reference/common/factories/makePressableContext.md)
- [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md)
:::
