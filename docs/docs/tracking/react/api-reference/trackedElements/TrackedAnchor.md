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
| required | **href**         | string    |                                     |
| optional | forwardHref      | boolean   | `true`                              |
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
import { TrackedAnchor } from '@objectiv/tracker-react';
```

```jsx
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

By default, all Tracked Elements automatically normalize their Content identifiers to a kebab-cased format.

This can be disabled via the  `normalizeId` option:

```jsx
<div>
  <TrackedAnchor href={'/'} normalizeId={false}>Back to home</TrackedAnchor>
  
  <TrackedAnchor href={'/privacy'} title={'Privacy settings'} normalizeId={false}>
    <img src="/lock.jpg"/>
  </TrackedAnchor>

  <TrackedAnchor href={'/profile'} id={'Profile settings'} normalizeId={false}>
    <img src="/profile.jpg"/>
  </TrackedAnchor>
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
