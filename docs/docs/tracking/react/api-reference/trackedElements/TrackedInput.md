# TrackedInput

Generates a `<input>` Element wrapped in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md).

```tsx
TrackedInput: (props: {
  children: ReactNode,
  id: string,
  forwardId?: boolean,
  title?: string;
  forwardTitle?: boolean;
}) => ReactElement
```

## Parameters
|          |              | type      | default value |
|:--------:|:-------------|:----------|:--------------|
| required | **children** | ReactNode |               |
| required | **id**       | string    |               |
| optional | forwardId    | boolean   | `false`       |
| optional | title        | string    |               |
| optional | forwardTitle | boolean   | `false`       |

## Returns
ReactElement.

## Automatic Events
- [InputChangeEvent](/taxonomy/reference/events/InputChangeEvent.md) when `onBlur` triggers and the  value changed.

## Usage example

```typescript jsx
import { TrackedInput } from '@objectiv/tracker-react';
```

```typescript jsx
<div>
  <header>
    ...
  </header>
  <main>
    <label for={'email'}>Email:</label>
    <TrackedInput id={'email'} placeholder={'email address'} name={'email'} />
  </main>
  <footer>
    ...
  </footer>
</div>
```

<br />

:::tip Did you know ?
`TrackedInput` internally uses [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md).
:::

<br />

:::info See also
#TODO
:::
