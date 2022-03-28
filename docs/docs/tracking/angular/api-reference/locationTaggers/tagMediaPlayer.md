# tagMediaPlayer

Tags a [BrowserSDK:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md).

```typescript
tagMediaPlayer = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserSDK:tagMediaPlayer](/tracking/browser/api-reference/locationTaggers/tagMediaPlayer.md)
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [BrowserSDK:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | 
| optional | onError | [BrowserSDK:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
[BrowserSDK:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Examples

```html
<div [tagMediaPlayer]="{ id: 'player-id' }">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />  
</div>
```

```html
<video [tagMediaPlayer]="{ id: 'player-id' }">
  <source src="video.mp4" type="video/mp4">
</video>
```

<br />

:::info See also
- [tagContent](/tracking/angular/api-reference/locationTaggers/tagContent.md)
- [tagNavigation](/tracking/angular/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/angular/api-reference/locationTaggers/tagOverlay.md)
- [tagExpandable](/tracking/angular/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
:::
