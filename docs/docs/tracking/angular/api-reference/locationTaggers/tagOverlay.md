# tagOverlay

Tags a [BrowserSDK:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md).

```typescript
tagOverlay = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserSDK:tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md)
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [BrowserSDK:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [BrowserSDK:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
[BrowserSDK:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [BrowserSDK:trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md)
- [BrowserSDK:trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)

## Examples

```html
<div [tagOverlay]="{ id: 'modal-id' }">
  ...
</div>
```

<br />

:::info See also
- [tagContent](/tracking/angular/api-reference/locationTaggers/tagContent.md)
- [tagNavigation](/tracking/angular/api-reference/locationTaggers/tagNavigation.md)
- [tagMediaPlayer](/tracking/angular/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/angular/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
- [BrowserSDK:trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md)
- [BrowserSDK:trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)
:::
