# NavigationContextWrapper

Wraps its children in a [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md). Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react/api-reference/common/providers/TrackingContext.md).

```tsx
NavigationContextWrapper: (props: {
  children: ReactNode | ((parameters: TrackingContext) => void),
  id: string
}) => ReactElement
```

## Parameters
|          |              | type                                                     | default value |
|:--------:|:-------------|:---------------------------------------------------------|:--------------|
| required | **children** | ReactNode &vert; ((parameters: TrackingContext) => void) |               |
| required | **id**       | string                                                   |               |

## Returns
ReactElement.

## Usage example

### Enrich Locations

```jsx
import { NavigationContextWrapper } from '@objectiv/tracker-react';
```

```jsx
<NavigationContextWrapper id={'footer'}>
  <nav>
    <a href={'/'}>Homepage</a>
    <a href={'/privacy'}>Privacy</a>
    <a href={'/contact'}>Contact</a>
  </nav>
</NavigationContextWrapper>
```

### Render Props inline tracking

```jsx
import { 
  NavigationContextWrapper, 
  trackVisibleEvent, 
  trackHiddenEvent
} from '@objectiv/tracker-react';
```

```jsx
<NavigationContextWrapper id={'drawer'}>
  {(trackingContext) => (
    <Drawer
      onShow={() => trackVisibleEvent(trackingContext)}
      onHide={() => trackHiddenEvent(trackingContext)}
    >
      <a href={'/'}>Homepage</a>
      <a href={'/privacy'}>Privacy</a>
      <a href={'/contact'}>Contact</a>
    </Drawer>
  )}
</NavigationContextWrapper>
```

<br />

:::tip Did you know ?
`NavigationContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
:::
