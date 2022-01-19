# TrackedPressableContext

Wraps its children in a [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```tsx
TrackedPressableContext: (props: { 
  children: ReactNode,
  Component: ComponentType | keyof ReactHTML,
  id?: string,
  forwardId?: boolean,
  title?: string;
  forwardTitle?: boolean;
}) => ReactElement
```

## Parameters
|          |               | type                                 | default value                       |
|:--------:|:--------------|:-------------------------------------|:------------------------------------|
| required | **children**  | ReactNode                            |                                     |
| required | **Component** | ComponentType &vert; keyof ReactHTML |                                     |
| optional | id            | string                               | inferred from `children` or `title` |
| optional | forwardId     | boolean                              | `false`                             |
| optional | title         | string                               |                                     |
| optional | forwardTitle  | boolean                              | `false`                             |

## Returns
ReactElement.

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onClick` triggers.

## Usage example

```typescript jsx
import { TrackedPressableContext } from '@objectiv/tracker-react';
```

```typescript jsx
<TrackedPressableContext Component={'button'} onClick={ () => doIt() }>
  Do it
</TrackedPressableContext>

// Whenever inferring 'id' is not possible, due to children not having any text, a `title` can be specified
<TrackedPressableContext Component={'a'} onClick={ () => doIt() } title={'Do it'}>
  <img src="/do-it.jpg"/>
</TrackedPressableContext>

// Or just a manual `id`, either one will do the job
<TrackedPressableContext Component={'a'} onClick={ () => doIt() } id={'do-it'}>
  <img src="/do-it.jpg"/>
</TrackedPressableContext>
```

<br />

:::tip Did you know ?
`TrackedPressableContext` internally uses [PressableContextWrapper](/tracking/react/api-reference/locationWrappers/PressableContextWrapper.md).
:::

<br />

:::info See also
#TODO
:::
