# ContentContextWrapper

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
ContentContextWrapper: (props: { 
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
import { ContentContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<ContentContextWrapper id={'content'}>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</ContentContextWrapper>
```

<br />

:::tip Did you know ?
`ContentContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
- [ExpandableContextWrapper](/tracking/react/api-reference/locationWrappers/ExpandableContextWrapper.md)
- [InputContextWrapper](/tracking/react/api-reference/locationWrappers/InputContextWrapper.md)
- [LinkContextWrapper](/tracking/react/api-reference/locationWrappers/LinkContextWrapper.md)
- [MediaPlayerContextWrapper](/tracking/react/api-reference/locationWrappers/MediaPlayerContextWrapper.md)
- [NavigationContextWrapper](/tracking/react/api-reference/locationWrappers/NavigationContextWrapper.md)
- [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md)
- [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md)
- [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md)
- [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md)
:::
