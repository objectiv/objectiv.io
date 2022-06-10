# LocationContextWrapper

Wraps its children in the given [LocationContext](/taxonomy/reference/location-contexts/overview.md) instance.  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/common/providers/TrackingContext.md).

```tsx
LocationContextWrapper: (props: {
  children: ReactNode | ((parameters: TrackingContext) => void),
  locationContext: LocationContext
}) => ReactElement
```

:::caution
`LocationContextWrapper` is a lower-level Component. Unless really needed, it's easier to use specific [Location Wrappers](/tracking/react-native/api-reference/locationWrappers/overview.md).
:::

## Parameters
|          |                     | type                                                     |
|:--------:|:--------------------|:---------------------------------------------------------|
| required | **children**        | ReactNode &vert; ((parameters: TrackingContext) => void) |
| required | **locationContext** | LocationContext                                          |

## Returns
`ReactElement`

## Usage example

### Enrich Locations

```jsx
import { 
  LocationContextWrapper, 
  makeContentContext
} from '@objectiv/tracker-react-native';
```

```jsx
<LocationContextWrapper 
  locationContext={ makeContentContext({ id: 'content' }) 
}>
  <View>
    ...
  </View>
  <View>
    ...
  </View>
</LocationContextWrapper>
```

### Tracking via Render Props
```jsx
import {
  LocationContextWrapper, 
  trackPressEvent
} from '@objectiv/tracker-react-native';
```

```jsx
<LocationContextWrapper 
  locationContext={ makeContentContext({ id: 'content' })
}>
  {(trackingContext) => (
    <>
      <TouchableWithoutFeedback onPress={() => trackPressEvent(trackingContext)}>
        Hi!
      </TouchableWithoutFeedback>
      <View>
        ...
      </View>
    </>
  )}
</LocationContextWrapper>
```

<br />

<br />

:::info See also
- [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react-native/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react-native/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react-native/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md)
:::
