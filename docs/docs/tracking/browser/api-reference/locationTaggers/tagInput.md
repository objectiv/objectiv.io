# tagInput

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [InputContext](/taxonomy/reference/location-contexts/InputContext.md).

```typescript
tagInput = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                                      | default value
| :-:      | :--     | :--                                                                                                       | :--           
| required | **id**  | string                                                                                                    |
| optional | options | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackBlurs: true }`
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md)

## Usage example

```jsx
import { tagInput } from '@objectiv/tracker-browser';
```

```jsx title="Automatically track InputChangeEvent onBlur"
<input {...tagInput({ id: 'search' })} />
```

```jsx title="Automatically track InputChangeEvent and InputValueContext onBlur"
<Search {...tagInput({ id: 'search', options: { trackBlurs: { trackValue: true } } })} />
```

```jsx title="Enrich location, but do not track InputChangeEvent"
<select {...tagInput({ id: 'search', options: { trackBlurs: false } })}>
  ...
</select>
```


<br />

:::tip Did you know ?
`tagInput` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagContent](/tracking/browser/api-reference/locationTaggers/tagContent.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
:::
