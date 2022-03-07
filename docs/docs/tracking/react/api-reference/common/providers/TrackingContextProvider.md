# TrackingContextProvider

Wraps its children in both [TrackerProvider](/tracking/react/api-reference/common/providers/TrackerProvider.md) and [LocationProvider](/tracking/react/api-reference/common/providers/LocationProvider.md).

```ts
TrackingContextProvider = (props: {
  children: ReactNode | ((parameters: TrackingContext) => void), 
  tracker: ReactTracker, 
  locationStack?: LocationStack
}) => Context.Provider
```

:::info
Under normal circumstances there's no need to use this context, since [ObjectivProvider](/tracking/react/api-reference/common/providers/ObjectivProvider.md) wraps its children in it.  

The main use case for adding another TrackingContextProvider is to reconfigure or swap the ReactTracker instance with a new one and/or to initialize the LocationStack for a branch of Components. 

This may be necessary for utilizing different configurations, e.g. for privacy reasons. 
:::

## Parameters
|          |               | type                                                     | default value |
|:--------:|:--------------|:---------------------------------------------------------|:--------------|
| required | **children**  | ReactNode &vert; ((parameters: TrackingContext) => void) |               |
| required | **tracker**   | ReactTracker                                             |               |
| optional | locationStack | LocationStack                                            | `[]`          |

## Returns
`Context.Provider`


<br />

:::info See also
- [ObjectivProvider](/tracking/react/api-reference/common/providers/ObjectivProvider.md)
- [ObjectivProviderContext](/tracking/react/api-reference/common/providers/ObjectivProviderContext.md)
- [TrackingContext](/tracking/react/api-reference/common/providers/TrackingContext.md)
- [LocationProvider](/tracking/react/api-reference/common/providers/LocationProvider.md)
- [LocationProviderContext](/tracking/react/api-reference/common/providers/LocationProviderContext.md)
- [TrackerProvider](/tracking/react/api-reference/common/providers/TrackerProvider.md)
- [TrackerProviderContext](/tracking/react/api-reference/common/providers/TrackerProviderContext.md)
:::
