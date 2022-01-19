# makeDefaultTransport

Returns the default Queue instance for ReactTracker.

```typescript
makeDefaultTransport = (ReactTrackerConfig) => TrackerTransportInterface
```  

:::info
The default TrackerTransport is a [Fetch](/tracking/api-reference/transports/FetchAPITransport.md) + [XMLHttpRequest](/tracking/api-reference/transports/XMLHttpRequestTransport.md) Transport Switch.  
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
#TODO
:::
