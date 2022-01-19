# TrackingContext

A utility React Context combining TrackerProviderContext and LocationProviderContext.

```ts
type TrackingContext = TrackerProviderContext & LocationProviderContext;
```

:::tip
Use the [useTrackingContext](/tracking/react/api-reference/hooks/consumers/useTrackingContext.md) consumer hook to easily retrieve this Context.
:::

:::info
[ObjectivProvider](/tracking/react/api-reference/common/providers/ObjectivProvider.md), [Location Wrappers](/tracking/react/api-reference/locationWrappers/overview.md), [Tracked Contexts](/tracking/react/api-reference/trackedContexts/overview.md) and [Tracked Elements](/tracking/react/api-reference/trackedElements/overview.md), all can provide TrackingContext via render-props to their children.
:::

<br />

:::info See also
- [ObjectivProvider](/tracking/react/api-reference/common/providers/ObjectivProvider.md)
- [ObjectivProviderContext](/tracking/react/api-reference/common/providers/ObjectivProviderContext.md)
- [TrackingContextProvider](/tracking/react/api-reference/common/providers/TrackingContextProvider.md)
- [LocationProvider](/tracking/react/api-reference/common/providers/LocationProvider.md)
- [LocationProviderContext](/tracking/react/api-reference/common/providers/LocationProviderContext.md)
- [TrackerProvider](/tracking/react/api-reference/common/providers/TrackerProvider.md)
- [TrackerProviderContext](/tracking/react/api-reference/common/providers/TrackerProviderContext.md)
:::
