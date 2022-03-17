# makeReactTrackerDefaultTransport

Returns the default Queue instance for ReactTracker.

```typescript
makeReactTrackerDefaultTransport = (ReactTrackerConfig) => TrackerTransportInterface
```  

:::info
The default TrackerTransport is a Fetch API + XHR API Transport Switch.  
The default retry logic is configured for 10 retries with exponential backoff starting at 1000ms.
:::

## Returns
`TrackerTransportInterface`

## Usage

```ts
import { makeReactTrackerDefaultTransport } from "@objectiv/tracker-react";
```

```tsx
makeReactTrackerDefaultTransport(); // 'TrackerTransportRetry ...'
```

<br />

:::info See also
- [makeReactTrackerDefaultPluginsList](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultPluginsList.md)
- [makeReactTrackerDefaultQueue](/tracking/react/api-reference/common/factories/makeReactTrackerDefaultQueue.md)
:::
