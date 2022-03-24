# makeReactNativeTrackerDefaultTransport

Returns the default Queue instance for ReactNativeTracker.

```typescript
makeReactNativeTrackerDefaultTransport = (ReactNativeTrackerConfig) => TrackerTransportInterface
```  

:::info
The default TrackerTransport is a Fetch API + XHR API Transport Switch.  
The default retry logic is configured for 10 retries with exponential backoff starting at 1000ms.
:::

## Returns
`TrackerTransportInterface`

## Usage

```ts
import { makeReactNativeTrackerDefaultTransport } from "@objectiv/tracker-react-native";
```

```tsx
makeReactNativeTrackerDefaultTransport(); // 'TrackerTransportRetry ...'
```

<br />

:::info See also
- [makeReactNativeTrackerDefaultPluginsList](/tracking/react-native/api-reference/common/factories/makeReactNativeTrackerDefaultPluginsList.md)
- [makeReactNativeTrackerDefaultQueue](/tracking/react-native/api-reference/common/factories/makeReactNativeTrackerDefaultQueue.md)
:::
