# PressableContextWrapper

Wraps its children in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).

```tsx
PressableContextWrapper: (props: { 
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
import { PressableContextWrapper } from '@objectiv/tracker-react';
```

```typescript jsx
<PressableContextWrapper id={'do-it'}>
  <button onClick={ () => doIt() }>
    Do it
  </button>
</PressableContextWrapper>
```

<br />

:::tip Did you know ?
`PressableContextWrapper` internally uses [LocationContextWrapper](/tracking/react/api-reference/locationWrappers/LocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
