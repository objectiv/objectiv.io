# TrackedInput

Generates a `<input>` Element wrapped in a [InputContext](/taxonomy/reference/location-contexts/InputContext.md).

```tsx
TrackedInput: (props: {
  children: ReactNode,
  id: string,
  forwardId?: boolean,
  title?: string,
  forwardTitle?: boolean,
  normalizeId?: boolean,
  trackValue?: boolean,
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
| optional | normalizeId  | boolean   | `true`        |
| optional | trackValue   | boolean   | `false`       |

## Returns
`ReactElement`

## Automatic Events
- [InputChangeEvent](/taxonomy/reference/events/InputChangeEvent.md) when `onBlur` triggers and the  value changed.

## Global Contexts
- [InputValueContext](/taxonomy/reference/global-contexts/InputValueContext.md) with the changed value, if `trackValue` is set to `true`.

## Usage example

```jsx
import { TrackedInput } from '@objectiv/tracker-react';
```

```jsx
<div>
  <header>
    <label for={'search'}>Search:</label>
    <TrackedInput id={'search'} placeholder={'🔍'} name={'search'} trackValue={true} />
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

By default, all Tracked Elements automatically normalize their Context identifiers to a kebab-cased format.

This can be disabled via the  `normalizeId` option:

```jsx
<div>
  <TrackedInput id={'Email Address'} normalizeId={false} name={'email'} />
</div>
```
<br />

:::tip Did you know ?
`TrackedInput` internally uses [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md).
:::

<br />

:::info See also
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)
:::
