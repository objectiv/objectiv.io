# LinkContextWrapper

Wraps its children in a [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/common/providers/TrackingContext.md).

```tsx
LinkContextWrapper: (props: {
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
import { LinkContextWrapper } from '@objectiv/tracker-react-native';
```

```jsx
<LinkContextWrapper id={'privacy'}>
  <a href={'/privacy'}>Privacy</a>
</LinkContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  LinkContextWrapper, 
  trackPressEvent 
} from '@objectiv/tracker-react-native';
```

```jsx
<LinkContextWrapper id={'privacy'}>
  {(trackingContext) => (
    <a 
      href={'/privacy'} 
      onClick={() => trackPressEvent(trackingContext)}
    >
      Privacy
    </a>
  )}
</LinkContextWrapper>
```

<br />

:::info
The above is just an example to illustrate the Render Props functionality.   
Check out our [Tracked Components](/tracking/react-native/api-reference/trackedComponents/overview.md) for ready-to-use Components.
:::

<br />

:::tip Did you know ?
`LinkContextWrapper` internally uses [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react-native/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react-native/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md)
:::
