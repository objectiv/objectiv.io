# NavigationContextWrapper

Wraps its children in a [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/common/providers/TrackingContext.md).

```tsx
NavigationContextWrapper: (props: {
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
import { NavigationContextWrapper } from '@objectiv/tracker-react-native';
```

```jsx
<NavigationContextWrapper id={'footer'}>
  <View>
    <Link to={'Home'}>Home</Link>
    <Link to={'Privacy'}>Privacy</Link>
    <Link to={'Contact'}>Contact</Link>
  </View>
</NavigationContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  NavigationContextWrapper, 
  trackHiddenEvent,
  trackVisibleEvent 
} from '@objectiv/tracker-react-native';
```

```jsx
<NavigationContextWrapper id={'drawer'}>
  {(trackingContext) => (
    <DrawerLayoutAndroid
      onDrawerOpen={() => trackVisibleEvent(trackingContext)}
      onDrawerClose={() => trackHiddenEvent(trackingContext)}
    >
        <Link to={'Home'}>Home</Link>
        <Link to={'Privacy'}>Privacy</Link>
        <Link to={'Contact'}>Contact</Link>
    </DrawerLayoutAndroid>
  )}
</NavigationContextWrapper>
```

<br />

:::tip Did you know ?
`NavigationContextWrapper` internally uses [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react-native/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react-native/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [OverlayContextWrapper](/tracking/react-native/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md)
:::
