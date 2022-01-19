# makeDefaultQueue

Returns the default Queue instance for ReactTracker.

```typescript
makeDefaultQueue = (ReactTrackerConfig) => TrackerQueueInterface
```  

:::info
The default TrackerQueue stores Events in [LocalStorage](/tracking/api-reference/queues/TrackerQueueLocalStorage.md).  
Batching is configured to eagerly send max 10 events per batch with a delay of 1000ms between them.
:::

## Returns
`TrackerQueueInterface`

## Usage

```ts
import { makeDefaultQueue } from "@objectiv/tracker-react";
```

```tsx
makeDefaultQueue(); // 'TrackerQueue'
```

<br />

:::info See also
- [makeDefaultPluginList](/tracking/react/api-reference/common/factories/makeDefaultPluginList.md)
- [makeDefaultTransport](/tracking/react/api-reference/common/factories/makeDefaultTransport.md)
:::
