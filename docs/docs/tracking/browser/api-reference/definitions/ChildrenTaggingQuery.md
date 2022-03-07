# ChildrenTaggingQuery

An object pairing a [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string to a set of [TaggingAttributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md).

[Mutation Observer](/tracking/browser/api-reference/mutationObserver/overview.md) executes `queryAll` via [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll). Matches are decorated with `tagAs` attributes.

```typescript
type ChildrenTaggingQuery = {
  queryAll: string,
  tagAs: TagLocationAttributes,
}
```

:::info see also
- [TagLocationAttributes](/tracking/browser/api-reference/definitions/TagLocationAttributes.md)
:::
