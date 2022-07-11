# TrackingContext

A utility React Context combining TrackerProviderContext and LocationProviderContext.

```ts
type TrackingContext = TrackerProviderContext & LocationProviderContext;
```

:::tip
Use the [useTrackingContext](/tracking/react-native/api-reference/hooks/consumers/useTrackingContext.md) consumer hook to easily retrieve this Context.
:::

:::info
[ObjectivProvider](/tracking/react-native/api-reference/providers/ObjectivProvider.md), [Location Wrappers](/tracking/react-native/api-reference/locationWrappers/overview.md) and [Tracked Components](/tracking/react-native/api-reference/trackedComponents/overview.md), all can provide TrackingContext via render-props to their children.
:::

<br />

:::info See also
- [ObjectivProvider](/tracking/react-native/api-reference/providers/ObjectivProvider.md)
- [ObjectivProviderContext](/tracking/react-native/api-reference/providers/ObjectivProviderContext.md)
- [TrackingContextProvider](/tracking/react-native/api-reference/providers/TrackingContextProvider.md)
- [LocationProvider](/tracking/react-native/api-reference/providers/LocationProvider.md)
- [LocationProviderContext](/tracking/react-native/api-reference/providers/LocationProviderContext.md)
- [TrackerProvider](/tracking/react-native/api-reference/providers/TrackerProvider.md)
- [TrackerProviderContext](/tracking/react-native/api-reference/providers/TrackerProviderContext.md)
:::
