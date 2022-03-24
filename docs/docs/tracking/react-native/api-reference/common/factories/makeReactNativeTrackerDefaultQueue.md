# makeReactNativeTrackerDefaultQueue

Returns the default Queue instance for ReactNativeTracker.

```typescript
makeReactNativeTrackerDefaultQueue = (ReactNativeTrackerConfig) => TrackerQueueInterface
```  

:::info
The default TrackerQueue stores Events in localStorage.  
Batching is configured to eagerly send max 10 events per batch with a delay of 1000ms between them.
:::

## Returns
`TrackerQueueInterface`

## Usage

```ts
import { makeReactNativeTrackerDefaultQueue } from "@objectiv/tracker-react-native";
```

```tsx
makeReactNativeTrackerDefaultQueue(); // 'TrackerQueue'
```

<br />

:::info See also
- [makeReactNativeTrackerDefaultPluginsList](/tracking/react-native/api-reference/common/factories/makeReactNativeTrackerDefaultPluginsList.md)
- [makeReactNativeTrackerDefaultTransport](/tracking/react-native/api-reference/common/factories/makeReactNativeTrackerDefaultTransport.md)
:::
