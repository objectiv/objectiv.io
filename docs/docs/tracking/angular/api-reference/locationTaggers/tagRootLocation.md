# tagRootLocation

Tags a [BrowserTracker:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).

```typescript
tagRootLocation = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::danger Low level api
Make sure to never use tagRootLocation while RootLocationContextFromURLPlugin is active. It will lead to multiple RootLocationContexts, which is forbidden.

For applications relying on URLs, RootLocationContext can be automatically instrumented via the `RootLocationContextFromURLPlugin`.
This is enabled by default in AngularTracker, inherited from [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md#plugins).

**Reconfiguring or removing RootLocationContextFromURLPlugin**   
If you need RootLocationContextFromURLPlugin to track a different url slug, search parameter or the hashtag, you can reconfigure it to do so.

When reconfiguring the RootLocationContextFromURLPlugin is not a viable option, the Plugin should be removed before using this Location Tagger to instrument roots manually.

- Check out [this guide](/#TODO) for some examples.
:::

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

```html
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
