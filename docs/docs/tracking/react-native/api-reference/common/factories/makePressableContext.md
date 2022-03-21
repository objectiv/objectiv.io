# makePressableContext

Factors a uniquely identifiable [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).

```typescript
makePressableContext = (props: { 
  id: string
}) => LocationContext<PressableContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<PressableContext>`

## Usage

```ts
import { makePressableContext } from "@objectiv/tracker-react-native";
```

```ts
const pressableContextInstance = makePressableContext({ id: 'button' });
```

<br/>

:::tip Did you know ?
`makePressableContext` internally uses [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
- [makeContentContext](/tracking/react-native/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react-native/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react-native/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react-native/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react-native/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react-native/api-reference/common/factories/makeOverlayContext.md)
- [makeRootLocationContext](/tracking/react-native/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md)
:::
