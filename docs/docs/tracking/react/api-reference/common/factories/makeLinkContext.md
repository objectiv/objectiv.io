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
#TODO
:::
