# OverlayContextWrapper

Wraps its children in a [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/common/providers/TrackingContext.md).

```tsx
OverlayContextWrapper: (props: {
  children: ReactNode | ((parameters: TrackingContext) => void),
  id: string
}) => ReactElement
```

## Parameters
|          |              | type                                                     |
|:--------:|:-------------|:---------------------------------------------------------|
| required | **children** | ReactNode &vert; ((parameters: TrackingContext) => void) |
| required | **id**       | string                                                   |

## Returns
`ReactElement`

## Usage example

### Enrich Locations

```jsx
import { OverlayContextWrapper } from '@objectiv/tracker-react-native';
```

```jsx
<OverlayContextWrapper id={'modal'}>
  <Modal>
    ...
  </Modal>
</OverlayContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  OverlayContextWrapper, 
  trackHiddenEvent,
  trackPressEvent,
  trackVisibleEvent
} from '@objectiv/tracker-react-native';
```

```jsx
<OverlayContextWrapper id={'modal'}>
  {(trackingContext) => (
    <Modal 
      onShow={() => trackVisibleEvent(trackingContext)}
      onDismiss={() => trackHiddenEvent(trackingContext)}
      closeButton={
        <Button title={'close'} onPress={() => trackPressEvent(trackingContext)} />
      }
    >
      ...
    </Modal>
  )}
</OverlayContextWrapper>
```

<br />

:::tip Did you know ?
`OverlayContextWrapper` internally uses [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react-native/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react-native/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md)
- [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md)
:::
