# makeNavigationContext

Factors a uniquely identifiable [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md).

```typescript
makeNavigationContext = (props: { 
  id: string
}) => LocationContext<NavigationContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<NavigationContext>`

## Usage

```ts
import { makeNavigationContext } from "@objectiv/tracker-react-native";
```

```ts
const navigationContextInstance = makeNavigationContext({ id: 'nav' });
```

<br/>

:::tip Did you know ?
`makeNavigationContext` internally uses [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
- [makeContentContext](/tracking/react-native/api-reference/common/factories/makeContentContext.md)
- [makeInputContext](/tracking/react-native/api-reference/common/factories/makeInputContext.md)
- [makeLinkContext](/tracking/react-native/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react-native/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeOverlayContext](/tracking/react-native/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react-native/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react-native/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react-native/api-reference/common/factories/makeLocationContext.md)
:::