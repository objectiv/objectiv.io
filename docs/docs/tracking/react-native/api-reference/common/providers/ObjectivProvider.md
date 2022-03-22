# ObjectivProvider

ObjectivProvider wraps its children in [TrackingContextProvider](/tracking/react-native/api-reference/common/providers/TrackingContextProvider.md) and can automatically track [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md).

```ts
ObjectivProvider = (props:{
  children: ReactNode | ((parameters: TrackingContext) => void),
  tracker: ReactNativeTracker, 
  options?: {
    trackApplicationLoaded?: boolean
  }
}) => Context.Provider
```

:::caution
ObjectivProvider is supposed to be placed as high as possible in the Component tree, and only once.
:::

## Parameters
|          |                                 | type                                                     | default value |
|:--------:|:--------------------------------|:---------------------------------------------------------|:--------------|
| required | **children**                    | ReactNode &vert; ((parameters: TrackingContext) => void) |               |
| required | **tracker**                     | ReactNativeTracker                                             |               |
| optional | options.trackApplicationLoaded  | boolean                                                  | `true`        |

## Returns
`Context.Provider`

## Usage
```ts
import { ObjectivProvider, ReactNativeTracker } from "@objectiv/tracker-react-native";
```

```tsx
const App = ({children}) => {

  const tracker = new ReactNativeTracker({
    endpoint: 'https://collector.app.dev',
    applicationId: 'app-id'
  })

  return (
    <ObjectivProvider tracker={tracker}>
      {children}
    </ObjectivProvider>
  );
}
```

<br />

:::info See also
- [ObjectivProviderContext](/tracking/react-native/api-reference/common/providers/ObjectivProviderContext.md)
- [TrackingContextProvider](/tracking/react-native/api-reference/common/providers/TrackingContextProvider.md)
- [TrackingContext](/tracking/react-native/api-reference/common/providers/TrackingContext.md)
- [LocationProvider](/tracking/react-native/api-reference/common/providers/LocationProvider.md)
- [LocationProviderContext](/tracking/react-native/api-reference/common/providers/LocationProviderContext.md)
- [TrackerProvider](/tracking/react-native/api-reference/common/providers/TrackerProvider.md)
- [TrackerProviderContext](/tracking/react-native/api-reference/common/providers/TrackerProviderContext.md)
:::
