# tagChildren

Tags a [BrowserSDK:Taggable Element](/tracking/core-concepts/browser/tagging.md#taggable-elements) as a root to track one or more of its children by specifying a set of **ChildrenTaggingQuery** objects.

```typescript
tagChildren = (parameters: ChildrenTaggingQueries) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserSDK:tagChildren](/tracking/browser/api-reference/locationTaggers/tagChildren.md)
:::

:::warning
`tagChildren` is a performance-sensitive API. Avoid using it whenever [Location Taggers](/tracking/angular/api-reference/locationTaggers/overview.md) could be used instead.
:::

### Parameters
|          |                | type
| :-:      | :--            | :--                                                                                       
| required | **parameters** | [BrowserSDK:ChildrenTaggingQueries](/tracking/browser/api-reference/definitions/ChildrenTaggingQueries.md)
| optional | onError        | [BrowserSDK:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md)

## tagChild - Single query shorthand
Syntactic sugar API built on top of **tagChildren** which processes a single ChildrenTaggingQuery.

```typescript
tagChild = (parameters: ChildrenTaggingQuery) => TagLocationReturnValue
```

### Parameters
|          |                | type
| :-:      | :--            | :--                                                                                       
| required | **parameters** | [BrowserSDK:ChildrenTaggingQuery](/tracking/browser/api-reference/definitions/ChildrenTaggingQuery.md)
| optional | onError        | [BrowserSDK:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md)

## Returns
[BrowserSDK:TagChildrenReturnValue](/tracking/browser/api-reference/definitions/TagChildrenReturnValue.md)

## Usage example

```html
<div
  [tagChildren]="[
    {
      queryAll: 'button[aria-label=&quot;Previous&quot;]',
      tagAs: tagPressable({ id: 'prev' })
    },
    {
      queryAll: 'button[aria-label=&quot;Next&quot;]',
      tagAs: tagPressable({ id: 'next' })
    }
  ]"
>
  ...
</div>
```
<br />

:::info See also
- [Location Taggers](/tracking/angular/api-reference/locationTaggers/overview.md)
- [tagPressable](/tracking/angular/api-reference/locationTaggers/tagPressable.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
- [BrowserSDK:tagChildren](/tracking/browser/api-reference/locationTaggers/tagChildren.md)
:::
