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
import { makeOverlayContext } from "@objectiv/tracker-react-native";
```

```ts
const overlayContextInstance = makeOverlayContext({ id: 'modal' });
```

<br/>

:::tip Did you know ?
`makeOverlayContext` internally uses [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
- [makeContentContext](/tracking/react-native/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react-native/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react-native/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react-native/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react-native/api-reference/common/factories/makeNavigationContext.md)
- [makePressableContext](/tracking/react-native/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react-native/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md)
:::
