# TrackedRootLocationContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedRootLocationContext: (props: { 
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id: string,
  forwardId?: boolean
}) => ReactElement
```

## Parameters
|          |               | type                                 | default value |
|:--------:|:--------------|:-------------------------------------|:--------------|
| required | **children**  | ReactNode                            |               |
| required | **Component** | ComponentType &vert; keyof ReactHTML |               |
| required | **id**        | string                               |               |
| optional | forwardId     | boolean                              | `false`       |

## Returns
ReactElement.

## Automatic Events
None.

## Usage example

```typescript jsx
import { TrackedRootLocationContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedRootLocationContext id={'page'}>
  <Layout>
    ...
  </Layout>
</TrackedRootLocationContext>
```

<br />

:::tip Did you know ?
`TrackedRootLocationContext` internally uses [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
