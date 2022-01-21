# tagOverlay

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md).

```typescript
tagOverlay = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md)
- [trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)

## Examples

```typescript jsx
import { tagOverlay } from '@objectiv/tracker-browser';
```

```typescript jsx
<div {...tagOverlay({ id: 'modal-id' })}>
  ...
</div>
```

```typescript jsx
<Modal {...tagOverlay({ id: 'modal-id' })}>
  ...
</Modal>
```

<br />

:::tip Did you know ?
`tagOverlay` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagContent](/tracking/browser/api-reference/locationTaggers/tagContent.md)
- [tagNavigation](/tracking/browser/api-reference/locationTaggers/tagNavigation.md)
- [tagMediaPlayer](/tracking/browser/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
:::
