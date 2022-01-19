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
- [makeContentContext](/tracking/react/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md)
:::
