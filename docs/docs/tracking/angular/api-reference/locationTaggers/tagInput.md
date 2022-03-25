# tagInput

Tags a [BrowserSDK:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [InputContext](/taxonomy/reference/location-contexts/InputContext.md).

```typescript
tagInput = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserSDK:tagInput](/tracking/browser/api-reference/locationTaggers/tagInput.md)
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [BrowserSDK:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackBlurs: true }`
| optional | onError | [BrowserSDK:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
[BrowserSDK:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [BrowserSDK:trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md)

## Usage example

```html
<input [tagInput]="{ id: 'search' }" />
```
<br />

:::info See also
- [tagContent](/tracking/angular/api-reference/locationTaggers/tagContent.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
- [BrowserSDK:trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md)
:::
