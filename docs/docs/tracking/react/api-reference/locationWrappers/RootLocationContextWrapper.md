# RootLocationContextWrapper

Wraps its children in a [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).

```tsx
RootLocationContextWrapper: (props: { 
  children: ReactNode, 
  id: string
}) => ReactElement
```

:::tip
For applications relying on URLs, `RootLocationContext` can be automatically instrumented via the RootLocationContextForURL Plugin.
This is enabled by default in [ReactTracker](/tracking/react/api-reference/ReactTracker.md#default-plugins).
:::

## Parameters
|          |              | type      | default value |
|:--------:|:-------------|:----------|:--------------|
| required | **children** | ReactNode |               |
| required | **id**       | string    |               |

## Returns
ReactElement.

## Usage example

```typescript jsx
import { RootLocationContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<RootLocationContextWrapper id={'page'}>
  <Layout>
    ...
  </Layout>
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
