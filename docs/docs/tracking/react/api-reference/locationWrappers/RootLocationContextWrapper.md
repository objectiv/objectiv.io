# RootLocationContextWrapper

Wraps its children in a [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).  
Children can be a ReactNode or a [Render Props](https://reactjs.org/docs/render-props.html#using-props-other-than-render) function receiving [TrackingContext](/tracking/react/api-reference/common/providers/TrackingContext.md).

```tsx
RootLocationContextWrapper: (props: {
  children: ReactNode | ((parameters: TrackingContext) => void),
  id: string
}) => ReactElement
```

:::tip
For applications relying on URLs, `RootLocationContext` can be automatically instrumented via the RootLocationContextForURL Plugin.
This is enabled by default in [ReactTracker](/tracking/react/api-reference/ReactTracker.md#plugins).
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
import { RootLocationContextWrapper } from '@objectiv/tracker-react';
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
} from '@objectiv/tracker-react';
```

```jsx
<RootLocationContextWrapper id={'page'}>
  {(trackingContext) => (
    <>
      <Layout>
        ...
      </Layout>
      <SupportChatOverlay
        onShow={() => trackVisibleEvent(trackingContext)}
        onHide={() => trackHiddenEvent(trackingContext)}
      >
        ...
      </SupportChatOverlay>
    </>
  )}
</RootLocationContextWrapper>
```


<br />

:::tip Did you know ?
`RootLocationContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md)
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
:::
