# tagInput

Tags a [BrowserTracker:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [InputContext](/taxonomy/reference/location-contexts/InputContext.md).

```typescript
tagInput = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserTracker:tagInput](/tracking/browser/api-reference/locationTaggers/tagInput.md)
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [BrowserTracker:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackBlurs: true }`
| optional | onError | [BrowserTracker:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[BrowserTracker:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [BrowserTracker:trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md)

## Usage example

```html
<input [tagInput]="{ id: 'search' }" />
```
<br />

:::info See also
- [tagContent](/tracking/angular/api-reference/locationTaggers/tagContent.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
- [BrowserTracker:trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md)
:::
