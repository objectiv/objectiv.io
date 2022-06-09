# PressableContextWrapper

Wraps its children in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/common/providers/TrackingContext.md).

```tsx
PressableContextWrapper: (props: {
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
import { PressableContextWrapper } from '@objectiv/tracker-react-native';
```

```jsx
<PressableContextWrapper id={'do-it'}>
  <Button title={'Do it'} onPress={() => doIt()}/>
</PressableContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  PressableContextWrapper,
  trackFailureEvent,
  trackPressEvent,
  trackSuccessEvent
} from '@objectiv/tracker-react-native';
```

```jsx
<PressableContextWrapper id={'do-it'}>
  {(trackingContext) => (
    <Button title={'Do it'} onClick={async () => {
      trackPressEvent(trackingContext);

      const response = await doIt();

      if (response.ok) {
        trackSuccessEvent({
          message: response.statusText,
          ...trackingContext
        });
      } else {
        trackFailureEvent({
          message: error.message,
          ...trackingContext
        });
      }
    }}/>
  )}
</PressableContextWrapper>
```

<br />

:::info
The above is just an example to illustrate the Render Props functionality.   
Check out our [Tracked Components](/tracking/react-native/api-reference/trackedComponents/overview.md) for ready-to-use Components. 
:::

<br />

:::tip Did you know ?
`PressableContextWrapper` internally uses [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react-native/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react-native/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react-native/api-reference/locationWrappers/OverlayContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md)
:::
