# tagExpandable

Tags a [BrowserTracker:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md).

```typescript
tagExpandable = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserTracker:tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [BrowserTracker:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackClicks: true, trackVisibility: { mode: 'auto' } }`
| optional | onError | [BrowserTracker:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[BrowserTracker:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [BrowserTracker:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
- [BrowserTracker:trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md)
- [BrowserTracker:trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)

## Usage example

```html
<div [tagExpandable]="{ id: 'faq-item-id' }">
  ...
</div>
```

<br />

:::info See also
- [tagPressable](/tracking/angular/api-reference/locationTaggers/tagPressable.md)
- [tagLink](/tracking/angular/api-reference/locationTaggers/tagLink.md)
- [tagContent](/tracking/angular/api-reference/locationTaggers/tagContent.md)
- [tagNavigation](/tracking/angular/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/angular/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/angular/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
- [BrowserTracker:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
- [BrowserTracker:trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md)
- [BrowserTracker:trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)
:::
