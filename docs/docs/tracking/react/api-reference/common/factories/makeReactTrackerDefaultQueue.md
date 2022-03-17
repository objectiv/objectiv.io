# makeReactTrackerDefaultQueue

Returns the default Queue instance for ReactTracker.

```typescript
makeReactTrackerDefaultQueue = (ReactTrackerConfig) => TrackerQueueInterface
```  

:::info
The default TrackerQueue stores Events in localStorage.  
Batching is configured to eagerly send max 10 events per batch with a delay of 1000ms between them.
:::

## Returns
`TrackerQueueInterface`

## Usage

```ts
import { makeReactTrackerDefaultQueue } from "@objectiv/tracker-react";
```

```tsx
makeReactTrackerDefaultQueue(); // 'TrackerQueue'
```

<br />

:::info See also
- [makeReactTrackerDefaultPluginsList](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultPluginsList.md)
- [makeReactTrackerDefaultTransport](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultTransport.md)
:::
