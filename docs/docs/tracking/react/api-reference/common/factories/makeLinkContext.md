# makeLinkContext

Factors a uniquely identifiable [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).

```typescript
makeLinkContext = (props: { 
  id: string,
  href: string
}) => LocationContext<LinkContext>
```  

## Parameters
|          |          | type    | default value |
|:--------:|:---------|:--------|:--------------|
| required | **id**   | string  |               |
| required | **href** | string  |               |

## Returns
`LocationContext<LinkContext>`

## Usage

```ts
import { makeLinkContext } from "@objectiv/tracker-react";
```

```ts
const linkContextInstance = makeLinkContext({ id: 'link', href: '/path' });
```

<br/>

:::tip Did you know ?
`makeLinkContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
- [makeContentContext](/tracking/react/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react/api-reference/common/factories/makeInputContext.md)
- [makeMediaPlayerContext](/tracking/react/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md)
:::
