# TrackedAnchor

Generates a `<a>` Element wrapped in a [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).

```tsx
TrackedAnchor: (props: {
  children: ReactNode,
  id?: string,
  forwardId?: boolean,
  href: string,
  forwardHref?: boolean
  title?: string,
  forwardTitle?: boolean,
  waitUntilTracked?: boolean
}) => ReactElement
```

## Parameters
|          |                  | type      | default value                       |
|:--------:|:-----------------|:----------|:------------------------------------|
| required | **children**     | ReactNode |                                     |
| optional | id               | string    | inferred from `children` or `title` |
| optional | forwardId        | boolean   | `false`                             |
| required | **href**         | string    |                                     |
| optional | forwardHref      | boolean   | `false`                             |
| optional | title            | string    |                                     |
| optional | forwardTitle     | boolean   | `false`                             |
| optional | waitUntilTracked | boolean   | `false`                             |

## Returns
ReactElement.

## Automatic Events
- [PressEvent](/taxonomy/reference/events/PressEvent.md) when `onClick` triggers.

## Usage example

```typescript jsx
import { TrackedAnchor } from '@objectiv/tracker-react';
```

```typescript jsx
<div>
  <header>
    <TrackedAnchor href={'/'}>Homepage</TrackedAnchor>

    {/* Whenever inferring 'id' is not possible, due to children not having any text, a `title` can be specified */}
    <TrackedAnchor href={'/privacy'} title={'Privacy settings'}>
      <img src="/lock.jpg"/>
    </TrackedAnchor>

    {/* Or just a manual `id`, either one will do the job */}
    <TrackedAnchor href={'/profile'} id={'Profile settings'}>
      <img src="/profile.jpg"/>
    </TrackedAnchor>
  </header>
  <main>
    ...
  </main>
  <footer>
    ...
  </footer>
</div>
```

<br />

:::tip Did you know ?
`TrackedAnchor` internally uses [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md).
:::

<br />

:::info See also
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)
:::
