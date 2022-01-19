# makeLocationContext

Factors a uniquely identifiable [LocationContext](/taxonomy/reference/location-contexts/overview.md). This is the underlying factory of all other Location Context factories.

```typescript
makeLocationContext = <T extends AbstractLocationContext>(T) => LocationContext<T>
```  

:::info Why not using Core Factories?
Core Tracker factories generate instances that are not uniquely identifiable at instance level.  
This factory enriches them with additional metadata, so we may compare and validate contexts across re-renders.

This may eventually become part of the Core Tracker factories, but for the moment is only needed for ReactTracker.
:::

## Parameters
|          |                     | type                                 | default value |
|:--------:|:--------------------|:-------------------------------------|:--------------|
| required | **locationContext** | Core Tracker AbstractLocationContext |               |

## Returns
`LocationContext<AbstractLocationContext>`

## Usage

```ts
import { makeContentContext, makeLinkContext } from "@objectiv/tracker-core";
import { makeLocationContext } from "@objectiv/tracker-react";
```

```ts
const contentContextInstance = makeLocationContext(makeContentContext({ id: 'content' }));
const linkContextInstance = makeLocationContext(makeLinkContext({ id: 'content', href: '/path' }));
```

<br/>

:::info See also
- [makeContentContext](/tracking/react/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react/api-reference/common/factories/makeRootLocationContext.md)
:::
