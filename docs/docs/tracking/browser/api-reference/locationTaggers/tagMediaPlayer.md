# tagMediaPlayer

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md).

```typescript
tagMediaPlayer = (parameters: {
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
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Examples
```jsx
import { tagMediaPlayer } from '@objectiv/tracker-browser';
```

```jsx
<div {...tagMediaPlayer({ id: 'player-id' })}>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />  
</div>
```

```jsx
<Player {...tagMediaPlayer({ id: 'player-id' })}>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
</Player>
```

<br />

:::tip Did you know ?
`tagMediaPlayer` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagContent](/tracking/browser/api-reference/locationTaggers/tagContent.md)
- [tagNavigation](/tracking/browser/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md)
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
- :::
