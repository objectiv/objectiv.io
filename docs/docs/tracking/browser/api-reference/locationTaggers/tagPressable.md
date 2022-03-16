# tagPressable

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).

```typescript
tagPressable = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |          | type                                                                                              | default value
| :-:      | :--      | :--                                                                                               | :--           
| required | **id**   | string                                                                                            |
| optional | options  | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackClicks: true }`
| optional | onError  | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Events

Unless customized via the `options` parameter, automatically triggers:

- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Usage example

```jsx
import { tagPressable } from '@objectiv/tracker-browser';
```

```jsx
<button {...tagPressable({ id: 'button-id' })}>Click Me!</button>
```

```jsx
<Submit {...tagPressable({ id: 'submit' })}>Do It!</Submit>
```

<br />

:::tip Did you know ?
`tagPressable` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />

:::info See also
- [tagLink](/tracking/browser/api-reference/locationTaggers/tagLink.md)
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
:::