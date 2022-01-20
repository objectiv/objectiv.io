# tagNavigation

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md).

```typescript
tagNavigation = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | 
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Examples

```typescript jsx
import { tagNavigation } from '@objectiv/tracker-browser';
```

```typescript jsx
<nav {...tagNavigation({ id: 'navigation-id' })}>
  ...
</nav>
```

```typescript jsx
<TopNav {...tagNavigation({ id: 'navigation-id' })}>
  ...
</TopNav>
```

<br />

:::tip Did you know ?
`tagNavigation` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagContent](/tracking/browser/api-reference/locationTaggers/tagContent.md)
- [tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/browser/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
:::
