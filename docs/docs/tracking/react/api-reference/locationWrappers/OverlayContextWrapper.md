# OverlayContextWrapper

Wraps its children in a [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md).

```tsx
OverlayContextWrapper: (props: { 
  children: ReactNode, 
  id: string
}) => ReactElement
```

## Parameters
|          |              | type      | default value |
|:--------:|:-------------|:----------|:--------------|
| required | **children** | ReactNode |               |
| required | **id**       | string    |               |

## Returns
ReactElement.

## Usage example

```typescript jsx
import { OverlayContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<OverlayContextWrapper id={'modal'}>
  <Modal>
    ...
  </Modal>
</OverlayContextWrapper>
```

<br />

:::tip Did you know ?
`OverlayContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ContentContextWrapper](/tracking/react/api-reference/locationWrappers/ContentContextWrapper.md)
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md)
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
:::
