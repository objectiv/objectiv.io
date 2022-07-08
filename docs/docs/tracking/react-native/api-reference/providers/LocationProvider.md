# LocationProvider

LocationProviders inherits LocationStack from their parent LocationProviders and use it to enrich their own.   

```ts
LocationProvider = (props: { 
  children: ReactNode | ((parameters: LocationProviderContext) => void), 
  locationStack: LocationStack
}) => Context.Provider
```

:::caution
This is a lower-level Component used internally to share LocationStacks across Location based Components.    
For tracking purposes, see instead [ObjectivProvider](/tracking/react-native/api-reference/providers/ObjectivProvider.md) and [TrackingContextProvider](/tracking/react-native/api-reference/providers/TrackingContextProvider.md).  
:::

## Parameters
|          |                   | type                                                             | default value |
|:--------:|:------------------|:-----------------------------------------------------------------|:--------------|
| required | **children**      | ReactNode &vert; ((parameters: LocationProviderContext) => void) |               |
| required | **locationStack** | LocationStack                                                    |               |

## Returns
`Context.Provider`

<br />

:::info See also
- [ObjectivProvider](/tracking/react-native/api-reference/providers/ObjectivProvider.md)
- [ObjectivProviderContext](/tracking/react-native/api-reference/providers/ObjectivProviderContext.md)
- [TrackingContextProvider](/tracking/react-native/api-reference/providers/TrackingContextProvider.md)
- [TrackingContext](/tracking/react-native/api-reference/providers/TrackingContext.md)
- [LocationProviderContext](/tracking/react-native/api-reference/providers/LocationProviderContext.md)
- [TrackerProvider](/tracking/react-native/api-reference/providers/TrackerProvider.md)
- [TrackerProviderContext](/tracking/react-native/api-reference/providers/TrackerProviderContext.md)
:::
