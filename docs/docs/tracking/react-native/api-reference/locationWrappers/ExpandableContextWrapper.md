# ExpandableContextWrapper

Wraps its children in a [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/common/providers/TrackingContext.md).

```tsx
ExpandableContextWrapper: (props: {
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
import { ExpandableContextWrapper } from '@objectiv/tracker-react-native';
```

```jsx
<ExpandableContextWrapper id={'tooltip'}>
  <Tooltip>
    ...
  </Tooltip>
</ExpandableContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  ExpandableContextWrapper, 
  trackPressEvent, 
  trackVisibility
} from '@objectiv/tracker-react-native';
```

```jsx
<ExpandableContextWrapper id={'accordion'}>
  {(trackingContext) => (
    <Accordion
      onPress={() => trackPressEvent(trackingContext)}  
      onToggle={(isOpen) => trackVisibility({ 
        ...trackingContext, 
        isVisible: isOpen
      })}
    >
    ...
    </Accordion>
  )}
</ExpandableContextWrapper>
```

<br />

:::tip Did you know ?
`ExpandableContextWrapper` internally uses [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md)
- [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react-native/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react-native/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md)
:::
