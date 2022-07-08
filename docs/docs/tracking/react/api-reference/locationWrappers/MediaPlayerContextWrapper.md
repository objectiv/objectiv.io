# MediaPlayerContextWrapper

Wraps its children in a [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react/api-reference/providers/TrackingContext.md).

```tsx
MediaPlayerContextWrapper: (props: {
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
import { MediaPlayerContextWrapper } from '@objectiv/tracker-react';
```

```jsx
<MediaPlayerContextWrapper id={'video'}>
  <video src={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} />
</MediaPlayerContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  MediaPlayerContextWrapper, 
  trackMediaLoadEvent, 
  trackMediaPauseEvent,
  trackMediaStartEvent,
  trackMediaStopEvent
} from '@objectiv/tracker-react';
```

```jsx
<MediaPlayerContextWrapper id={'video'}>
  {(trackingContext) => (
    <video 
      src={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} 
      onLoad={() => trackMediaLoadEvent(trackingContext)}
      onPlay={() => trackMediaStartEvent(trackingContext)}
      onPause={() => trackMediaPauseEvent(trackingContext)}
      onEnded={() => trackMediaStopEvent(trackingContext)}
    />
  )}
</MediaPlayerContextWrapper>
```

<br />

:::tip Did you know ?
`MediaPlayerContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
:::
