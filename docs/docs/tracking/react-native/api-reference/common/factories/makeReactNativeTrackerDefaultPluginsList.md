# makeReactNativeTrackerDefaultPluginsList

Returns the default list of Plugins for ReactNativeTracker.

```typescript
makeReactNativeTrackerDefaultPluginsList = (ReactNativeTrackerConfig) => TrackerPluginInterface[]
```  

:::info
The default TrackerQueue is configured to eagerly send max 10 events per batch, each batch is processed every 1000ms.
:::


## Returns
`TrackerPluginInterface[]`

## Usage

```ts
import { makeReactNativeTrackerDefaultPluginsList } from "@objectiv/tracker-react-native";
```

```tsx
makeReactNativeTrackerDefaultPluginsList(); // '[ApplicationContextPlugin, ...]'
```

<br />

:::info See also
- [makeReactNativeTrackerDefaultQueue](/tracking/react-native/api-reference/common/factories/makeReactNativeTrackerDefaultQueue.md)
- [makeReactNativeTrackerDefaultTransport](/tracking/react-native/api-reference/common/factories/makeReactNativeTrackerDefaultTransport.md)
:::
