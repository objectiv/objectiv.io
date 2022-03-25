# tagPressable

Tags a [BrowserSDK:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).

```typescript
tagPressable = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserSDK:tagPressable](/tracking/browser/api-reference/locationTaggers/tagPressable.md)
:::

## Parameters
|          |          | type                                                                                              | default value
| :-:      | :--      | :--                                                                                               | :--           
| required | **id**   | string                                                                                            |
| optional | options  | [BrowserSDK:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackClicks: true }`
| optional | onError  | [BrowserSDK:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
[BrowserSDK:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events

Unless customized via the `options` parameter, automatically triggers:

- [BrowserSDK:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)


## Usage example

```html
<button [tagPressable]="{ id: 'button-id' }">Click Me!</button>
```

<br />

:::info See also
- [tagLink](/tracking/angular/api-reference/locationTaggers/tagLink.md)
- [tagExpandable](/tracking/angular/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
- [BrowserSDK:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
:::
