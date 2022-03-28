# tagContent

Tags a [BrowserSDK:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```typescript
tagContent = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserSDK:tagContent](/tracking/browser/api-reference/locationTaggers/tagContent.md)
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [BrowserSDK:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   |
| optional | onError | [BrowserSDK:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
[BrowserSDK:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Usage example

```html
<section [tagContent]="{ id: 'layout' }">
  <div [tagContent]="{ id: 'section' }">
    ...
  </div>
</section>
```

<br />

:::info See also
- [tagNavigation](/tracking/angular/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/angular/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/angular/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/angular/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
:::
