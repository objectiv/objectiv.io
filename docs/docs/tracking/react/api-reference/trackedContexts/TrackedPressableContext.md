# TrackedPressableContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedPressableContext: (props: { 
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
import { TrackedPressableContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedPressableContext id={'content'}>
  <div>
    ...
  </div>
  <span>
    ...
  </span>
</TrackedPressableContext>
```

<br />

:::tip Did you know ?
`TrackedPressableContext` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
