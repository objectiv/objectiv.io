# TrackingContextProvider

Wraps its children in both [TrackerProvider](/tracking/react-native/api-reference/providers/TrackerProvider.md) and [LocationProvider](/tracking/react-native/api-reference/providers/LocationProvider.md).

```ts
TrackingContextProvider = (props: {
  children: ReactNode | ((parameters: TrackingContext) => void), 
  tracker: ReactNativeTracker, 
  locationStack?: LocationStack
}) => Context.Provider
```

:::info
Under normal circumstances there's no need to use this context, since [ObjectivProvider](/tracking/react-native/api-reference/providers/ObjectivProvider.md) wraps its children in it.  

The main use case for adding another TrackingContextProvider is to reconfigure or swap the ReactNativeTracker instance with a new one and/or to initialize the LocationStack for a branch of Components. 

This may be necessary for utilizing different configurations, e.g. for privacy reasons. 
:::

## Parameters
|          |               | type                                                     | default value |
|:--------:|:--------------|:---------------------------------------------------------|:--------------|
| required | **children**  | ReactNode &vert; ((parameters: TrackingContext) => void) |               |
| required | **tracker**   | ReactNativeTracker                                             |               |
| optional | locationStack | LocationStack                                            | `[]`          |

## Returns
`Context.Provider`


<br />

:::info See also
- [ObjectivProvider](/tracking/react-native/api-reference/providers/ObjectivProvider.md)
- [ObjectivProviderContext](/tracking/react-native/api-reference/providers/ObjectivProviderContext.md)
- [TrackingContext](/tracking/react-native/api-reference/providers/TrackingContext.md)
- [LocationProvider](/tracking/react-native/api-reference/providers/LocationProvider.md)
- [LocationProviderContext](/tracking/react-native/api-reference/providers/LocationProviderContext.md)
- [TrackerProvider](/tracking/react-native/api-reference/providers/TrackerProvider.md)
- [TrackerProviderContext](/tracking/react-native/api-reference/providers/TrackerProviderContext.md)
:::
