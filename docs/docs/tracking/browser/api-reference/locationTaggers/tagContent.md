# tagContent

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```typescript
tagContent = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   |
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Usage example

```jsx
import { tagContent } from '@objectiv/tracker-browser';
```

```jsx
<Layout {...tagContent({ id: 'layout' })}>
  <div {...tagContent({ id: 'section' })}>
    ...
  </div>
</Layout>
```

<br />

:::tip Did you know ?
`tagContent` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagNavigation](/tracking/browser/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/browser/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
:::
