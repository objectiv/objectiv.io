# ObjectivProvider

ObjectivProvider wraps its children in [TrackingContextProvider](/tracking/react/api-reference/common/providers/TrackingContextProvider.md) and can automatically track [ApplicationLoadedEvent](/taxonomy/reference/events/ApplicationLoadedEvent.md).

```ts
ObjectivProvider = (props:{
  children: ReactNode | ((parameters: TrackingContext) => void),
  tracker: ReactTracker, 
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
| required | **tracker**                     | ReactTracker                                             |               |
| optional | options.trackApplicationLoaded  | boolean                                                  | `true`        |

## Returns
`Context.Provider`

## Usage
```ts
import { ObjectivProvider, ReactTracker } from "@objectiv/tracker-react";
```

```tsx
const App = ({children}) => {

  const tracker = new ReactTracker({
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
- [ObjectivProviderContext](/tracking/react/api-reference/common/providers/ObjectivProviderContext.md)
- [TrackingContextProvider](/tracking/react/api-reference/common/providers/TrackingContextProvider.md)
- [TrackingContext](/tracking/react/api-reference/common/providers/TrackingContext.md)
- [LocationProvider](/tracking/react/api-reference/common/providers/LocationProvider.md)
- [LocationProviderContext](/tracking/react/api-reference/common/providers/LocationProviderContext.md)
- [TrackerProvider](/tracking/react/api-reference/common/providers/TrackerProvider.md)
- [TrackerProviderContext](/tracking/react/api-reference/common/providers/TrackerProviderContext.md)
:::
