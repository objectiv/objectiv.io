# makeMediaPlayerContext

Factors a uniquely identifiable [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md).

```typescript
makeMediaPlayerContext = (props: { 
  id: string
}) => LocationContext<MediaPlayerContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<MediaPlayerContext>`

## Usage

```ts
import { makeMediaPlayerContext } from "@objectiv/tracker-react-native";
```

```ts
const mediaPlayerContextInstance = makeMediaPlayerContext({ id: 'video' });
```

<br/>

:::tip Did you know ?
`makeMediaPlayerContext` internally uses [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
- [makeContentContext](/tracking/react-native/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react-native/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react-native/api-reference/common/factories/makeLinkContext.md)
- [makeNavigationContext](/tracking/react-native/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react-native/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react-native/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react-native/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md)
:::
