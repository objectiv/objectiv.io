# makeDefaultPluginList

Returns the default list of Plugins for ReactTracker.

```typescript
makeDefaultPluginsList = (ReactTrackerConfig) => TrackerPluginInterface[]
```  

:::info
The default TrackerQueue is configured to eagerly send max 10 events per batch, each batch is processed every 1000ms.
:::


## Returns
`TrackerPluginInterface[]`

## Usage

```ts
import { makeDefaultPluginsList } from "@objectiv/tracker-react";
```

```tsx
makeDefaultPluginsList(); // '[ApplicationContextPlugin, ...]'
```

<br />

:::info See also
- [makeDefaultQueue](/tracking/react/api-reference/common/factories/makeDefaultQueue.md)
- [makeDefaultTransport](/tracking/react/api-reference/common/factories/makeDefaultTransport.md)
:::
