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
import { makeExpandableContext } from "@objectiv/tracker-react-native";
```

```ts
const expandableContextInstance = makeExpandableContext({ id: 'tooltip' });
```

<br/>

:::tip Did you know ?
`makeExpandableContext` internally uses [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
- [makeContentContext](/tracking/react-native/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react-native/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react-native/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react-native/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react-native/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react-native/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react-native/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react-native/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md)
:::
