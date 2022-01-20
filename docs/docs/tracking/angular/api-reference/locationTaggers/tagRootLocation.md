# tagRootLocation

Tags a [BrowserTracker:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).

```typescript
tagRootLocation = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserTracker:tagRootLocation](/tracking/browser/api-reference/locationTaggers/tagRootLocation.md)
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [BrowserTracker:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | 
| optional | onError | [BrowserTracker:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[BrowserTracker:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Examples

```typescript jsx
<main [tagRootLocation]="{ id: 'page' }">
  ...
</main>
```

<br />

:::info See also
- [tagContent](/tracking/angular/api-reference/locationTaggers/tagContent.md)
- [tagOverlay](/tracking/angular/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/angular/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/angular/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
:::
