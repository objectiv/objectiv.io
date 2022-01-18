# MediaPlayerContextWrapper

Wraps its children in a [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md).

```tsx
MediaPlayerContextWrapper: (props: { 
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
import { MediaPlayerContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<MediaPlayerContextWrapper id={'video'}>
  <video src={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} />
</MediaPlayerContextWrapper>
```

<br />

:::tip Did you know ?
`MediaPlayerContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
