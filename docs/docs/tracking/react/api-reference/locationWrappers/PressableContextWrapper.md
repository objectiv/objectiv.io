# PressableContextWrapper

Wraps its children in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react/api-reference/common/providers/TrackingContext.md).

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
ReactElement.

## Usage example

### Enrich Locations

```jsx
import { PressableContextWrapper } from '@objectiv/tracker-react';
```

```jsx
<PressableContextWrapper id={'do-it'}>
  <button onClick={() => doIt()}>
    Do it
  </button>
</PressableContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  PressableContextWrapper, 
  trackPressEvent
} from '@objectiv/tracker-react';
```

```jsx
<PressableContextWrapper id={'do-it'}>
  {(trackingContext) => (
    <button onClick={() => {
      trackPressEvent(trackingContext);
      doIt();
    }}>
      Do it
    </button>
  )}
</PressableContextWrapper>
```

<br />

:::info
The above is just an example to illustrate the Render Props functionality.   
Check out our [Tracked Elements](/tracking/react/api-reference/trackedElements/overview.md) for a ready-to-use [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md) component. 
:::

<br />

:::tip Did you know ?
`PressableContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
:::
