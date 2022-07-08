# ContentContextWrapper

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react/api-reference/providers/TrackingContext.md).   

```tsx
ContentContextWrapper: (props: { 
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

## Usage examples


### Enrich Locations
```jsx
import { ContentContextWrapper } from '@objectiv/tracker-react';
```

```jsx
<ContentContextWrapper id={'content'}>
  <div>
    <ContentContextWrapper id={'sub-content'}>
      ...
      <a href={'/new-location'}>Go!</a>
    </ContentContextWrapper>
  </div>
  <span>
    ...
  </span>
</ContentContextWrapper>
```

### Tracking via Render Props
```jsx
import { 
  ContentContextWrapper, 
  trackPressEvent
} from '@objectiv/tracker-react';
```

```jsx
<ContentContextWrapper id={'content'}>
  <div>
    <ContentContextWrapper id={'sub-content'}>
      {(trackingContext) => (
        <div onClick={() => trackPressEvent(trackingContext)}>
          Hi!
        </div>
      )}
    </ContentContextWrapper>
  </div>
  <span>
    ...
  </span>
</ContentContextWrapper>
```


<br />

:::tip Did you know ?
`ContentContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
:::
