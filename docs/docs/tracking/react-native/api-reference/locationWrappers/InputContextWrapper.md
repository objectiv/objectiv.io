# InputContextWrapper

Wraps its children in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/providers/TrackingContext.md).

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
`ReactElement`

## Usage example

### Enrich Locations

```jsx
import { InputContextWrapper } from '@objectiv/tracker-react-native';
```

```jsx
<InputContextWrapper id={'email'}>
  <TextInput keyboardType={'email-address'} />
</InputContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  InputContextWrapper, 
  trackInputChangeEvent
} from '@objectiv/tracker-react-native';
```

```jsx
<InputContextWrapper id={'search'}>
  {(trackingContext) => (
    <TextInput
      onBlur={() => trackInputChangeEvent(trackingContext)} 
    />
  )}
</InputContextWrapper>
```

<br />

:::info
The above is just an example to illustrate the Render Props functionality.   
Check out our [Tracked Components](/tracking/react-native/api-reference/trackedComponents/overview.md) for ready-to-use Components.
:::

<br />

:::tip Did you know ?
`InputContextWrapper` internally uses [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react-native/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [LinkContextWrapper](/tracking/react-native/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react-native/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md)
:::
