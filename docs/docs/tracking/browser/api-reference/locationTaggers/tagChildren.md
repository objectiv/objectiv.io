# tagChildren

Tags a [Taggable Element](/tracking/browser/core-concepts/tagging.md#taggable-elements) as a root to track one or more of its children by specifying a set of **ChildrenTaggingQuery** objects.

```typescript
tagChildren = (parameters: ChildrenTaggingQueries) => TagLocationReturnValue
```

:::warning
`tagChildren` is a performance-sensitive API. Avoid using it whenever [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) could be used instead.
:::

### Parameters
|          |                | type
| :-:      | :--            | :--                                                                                       
| required | **parameters** | [ChildrenTaggingQueries](/tracking/browser/api-reference/definitions/ChildrenTaggingQueries.md)
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md)

## tagChild - Single query shorthand
Syntactic sugar API built on top of **tagChildren** which processes a single ChildrenTaggingQuery.

```typescript
tagChild = (parameters: ChildrenTaggingQuery) => TagLocationReturnValue
```

### Parameters
|          |                | type
| :-:      | :--            | :--                                                                                       
| required | **parameters** | [ChildrenTaggingQuery](/tracking/browser/api-reference/definitions/ChildrenTaggingQuery.md)
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md)

## Returns
[TagChildrenReturnValue](/tracking/browser/api-reference/definitions/TagChildrenReturnValue.md)

## Usage example

```typescript jsx
import { tagChildren, tagPressable } from '@objectiv/tracker-browser';
```

```typescript jsx
<div
  {...tagChildren([
    {
      queryAll: 'button[aria-label="Previous"]',
      tagAs: tagPressable({ id: 'prev' })
    },
    {
      queryAll: 'button[aria-label="Next"]',
      tagAs: tagPressable({ id: 'next' })
    }
  ])}
>
  ...
</div>
```

<br />

:::info See also
- [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md)
- [tagPressable](/tracking/browser/api-reference/locationTaggers/tagPressable.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
- [Mutation Observer](/tracking/browser/api-reference/mutationObserver/overview.md)
:::
