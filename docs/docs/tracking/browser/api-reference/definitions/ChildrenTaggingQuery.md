# ChildrenTaggingQuery

An object pairing a [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string to a set of [TaggingAttributes](/tracking/api-reference/definitions/TaggingAttribute.md).

[Tagged Elements Observer](/tracking/core-concepts/trackers.md#tagged-elements-observer) executes `queryAll` via [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll). Matches are decorated with `tagAs` attributes.

```typescript
type ChildrenTaggingQuery = {
  queryAll: string,
  tagAs: TagLocationAttributes,
}
```

:::info see also
- [TagLocationAttributes](/tracking/api-reference/definitions/TagLocationAttributes.md)
:::
