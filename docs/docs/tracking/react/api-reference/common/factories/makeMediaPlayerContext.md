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
import { makeMediaPlayerContext } from "@objectiv/tracker-react";
```

```ts
const mediaPlayerContextInstance = makeMediaPlayerContext({ id: 'video' });
```

<br/>

:::tip Did you know ?
`makeMediaPlayerContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
#TODO
:::
