# tagExpandable

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md).

```typescript
tagExpandable = (parameters: {
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
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md)
- [trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)

## Usage example

```jsx
import { tagExpandable } from '@objectiv/tracker-browser';
```

```jsx
<div {...tagExpandable({ id: 'faq-item-id' })}>
  ...
</div>
```

```jsx
<Accordion {...tagExpandable({ id: 'accordion-id' })}>
  ...
</Accordion>
```

<br />

:::tip Did you know ?
`tagExpandable` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagPressable](/tracking/browser/api-reference/locationTaggers/tagPressable.md)
- [tagLink](/tracking/browser/api-reference/locationTaggers/tagLink.md)
- [tagContent](/tracking/browser/api-reference/locationTaggers/tagContent.md)
- [tagNavigation](/tracking/browser/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/browser/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
:::
