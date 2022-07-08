# RootLocationContextWrapper

Wraps its children in a [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react-native/api-reference/providers/TrackingContext.md).

```tsx
RootLocationContextWrapper: (props: {
  children: ReactNode | ((parameters: TrackingContext) => void),
  id: string
}) => ReactElement
```

:::danger Low level api
Make sure to never use RootLocationContextWrapper while ReactNavigationPlugin is active. It will lead to multiple RootLocationContexts, which is forbidden.

For applications relying on React Navigation, RootLocationContext can be automatically instrumented via the `ReactNavigationPlugin`.
Check out how to [Install React Navigation Plugin](/tracking/react-native/how-to-guides/getting-started.md#install-react-navigation).
:::

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
import { RootLocationContextWrapper } from '@objectiv/tracker-react-native';
```

```jsx
<RootLocationContextWrapper id={'page'}>
  <Layout>
    ...
  </Layout>
</RootLocationContextWrapper>
```

### Tracking via Render Props

```jsx
import { 
  RootLocationContextWrapper, 
  trackHiddenEvent,
  trackVisibleEvent
} from '@objectiv/tracker-react-native';
```

```jsx
<RootLocationContextWrapper id={'page'}>
  {(trackingContext) => (
    <>
      <Layout>
        ...
      </Layout>
      <ChatModal
        onShow={() => trackVisibleEvent(trackingContext)}
        onHide={() => trackHiddenEvent(trackingContext)}
      >
        ...
      </ChatModal>
    </>
  )}
</RootLocationContextWrapper>
```


<br />

:::tip Did you know ?
`RootLocationContextWrapper` internally uses [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react-native/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react-native/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react-native/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react-native/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react-native/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react-native/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react-native/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react-native/api-reference/locationWrappers/PressableContextWrapper.md)
- [LocationContextWrapper](/tracking/react-native/api-reference/locationWrappers/LocationContextWrapper.md)
:::
