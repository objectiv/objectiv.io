# ContentContextWrapper

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/providers/TrackingContext.md).   

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
import { ContentContextWrapper } from '@objectiv/tracker-react-native';
```

```jsx
<ContentContextWrapper id={'content'}>
  <View>
    ...
    <ContentContextWrapper id={'sub-content'}>
      <Button title={'Go!'} onPress={doSomething}/>
    </ContentContextWrapper>
  </View>
  <View>
    ...
  </View>
</ContentContextWrapper>
```

### Tracking via Render Props
```jsx
import { 
  ContentContextWrapper, 
  trackPressEvent
} from '@objectiv/tracker-react-native';
```

```jsx
<ContentContextWrapper id={'content'}>
  <View>
    <ContentContextWrapper id={'sub-content'}>
      {(trackingContext) => (
        <Button
          title={'Hi!'}  
          onPress={() => { 
          trackPressEvent(trackingContext); 
          doSomethingElse();
        }}/>
      )}
    </ContentContextWrapper>
  </View>
  <View>
    ...
  </View>
</ContentContextWrapper>
```


<br />

:::tip Did you know ?
`ContentContextWrapper` internally uses [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ExpandableContextWrapper](/tracking/react-native/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react-native/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react-native/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md)
:::
