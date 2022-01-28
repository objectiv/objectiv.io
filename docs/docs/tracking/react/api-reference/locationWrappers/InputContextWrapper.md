# InputContextWrapper

Wraps its children in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react/api-reference/common/providers/TrackingContext.md).

```tsx
InputContextWrapper: (props: {
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
import { InputContextWrapper } from '@objectiv/tracker-react';
```

```jsx
<InputContextWrapper id={'email'}>
  <input type={'email'} />
</InputContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  InputContextWrapper, 
  trackInputChangeEvent
} from '@objectiv/tracker-react';
```

```jsx
<InputContextWrapper id={'search'}>
  {(trackingContext) => (
    <input 
      type={'text'} 
      onBlur={() => trackInputChangeEvent(trackingContext)} 
    />
  )}
</InputContextWrapper>
```

<br />

:::tip Did you know ?
`InputContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
:::
