# TrackedButton

Generates a `<button>` Element wrapped in a [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).

```tsx
TrackedButton: (props: {
  children: ReactNode,
  id?: string,
  forwardId?: boolean,
  title?: string,
  forwardTitle?: boolean,
  waitUntilTracked?: boolean,
  normalizeId?: boolean
}) => ReactElement
```

## Parameters
|          |                  | type      | default value                       |
|:--------:|:-----------------|:----------|:------------------------------------|
| required | **children**     | ReactNode |                                     |
| optional | id               | string    | inferred from `children` or `title` |
| optional | forwardId        | boolean   | `false`                             |
| optional | title            | string    |                                     |
| optional | forwardTitle     | boolean   | `false`                             |
| optional | waitUntilTracked | boolean   | `false`                             |
| optional | normalizeId      | boolean   | `true`                              |

## Returns
`ReactElement`

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onClick` triggers.

## Usage example

```jsx
import { TrackedButton } from '@objectiv/tracker-react';
```

```jsx
<div>
  <header>
    ...
  </header>
  <main>
    <TrackedButton onClick={ () => doIt() }>
      Do it
    </TrackedButton>

    {/* Whenever inferring 'id' is not possible, due to children not having any text, a `title` can be specified */}
    <TrackedButton onClick={ () => doIt() } title={'Do it'}>
      <img src="/do-it.jpg"/>
    </TrackedButton>

    {/* Or just a manual `id`, either one will do the job */}
    <TrackedButton onClick={ () => doIt() } id={'do-it'}>
      <img src="/button.jpg"/>
    </TrackedButton>
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
  <TrackedButton onClick={ () => doIt() } normalizeId={false}>
    Do it
  </TrackedButton>

  {/* Whenever inferring 'id' is not possible, due to children not having any text, a `title` can be specified */}
  <TrackedButton onClick={ () => doIt() } title={'Do it'} normalizeId={false}>
    <img src="/do-it.jpg"/>
  </TrackedButton>
    
  {/* Or just a manual `id`, either one will do the job */}
  <TrackedButton onClick={ () => doIt() } id={'Do it'} normalizeId={false}>
    <img src="/button.jpg"/>
  </TrackedButton>
</div>
```


<br />

:::tip Did you know ?
`TrackedButton` internally uses [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md).
:::

<br />

:::info See also
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)
:::
