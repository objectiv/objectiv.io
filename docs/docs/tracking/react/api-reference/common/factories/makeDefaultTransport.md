# makeDefaultTransport

Returns the default Queue instance for ReactTracker.

```typescript
makeDefaultTransport = (ReactTrackerConfig) => TrackerTransportInterface
```  

:::info
The default TrackerTransport is a [Fetch](#TODO) + [XMLHttpRequest](#TODO) Transport Switch.  
The default retry logic is configured for 10 retries with exponential backoff starting at 1000ms.
:::

## Returns
`TrackerTransportInterface`

## Usage

```ts
import { makeDefaultTransport } from "@objectiv/tracker-react";
```

```tsx
makeDefaultTransport(); // 'TrackerTransportRetry ...'
```

<br />

:::info See also
- [makeDefaultPluginsList](/tracking/react/api-reference/common/factories/makeDefaultPluginsList.md)
- [makeDefaultQueue](/tracking/react/api-reference/common/factories/makeDefaultQueue.md)
:::
