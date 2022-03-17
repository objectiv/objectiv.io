# makeReactTrackerDefaultPluginsList

Returns the default list of Plugins for ReactTracker.

```typescript
makeReactTrackerDefaultPluginsList = (ReactTrackerConfig) => TrackerPluginInterface[]
```  

:::info
The default TrackerQueue is configured to eagerly send max 10 events per batch, each batch is processed every 1000ms.
:::


## Returns
`TrackerPluginInterface[]`

## Usage

```ts
import { makeReactTrackerDefaultPluginsList } from "@objectiv/tracker-react";
```

```tsx
makeReactTrackerDefaultPluginsList(); // '[ApplicationContextPlugin, ...]'
```

<br />

:::info See also
- [makeReactTrackerDefaultQueue](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultQueue.md)
- [makeReactTrackerDefaultTransport](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultTransport.md)
:::
