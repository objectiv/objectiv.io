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
- [makeExpandableContext](/tracking/react/api-reference/common/factories/makeExpandableContext.md)
- [makeInputContext](/tracking/react/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md)
:::
