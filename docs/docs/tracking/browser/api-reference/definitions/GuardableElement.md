# GuardableElement

This is the most basic type of [DOM Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) we can traverse: [Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node) and [EventTargets](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

```typescript
type GuardableElement = Node | EventTarget | null;
```

:::tip Why not simply Element?
Elements are too broad and include things like comment blocks that don't support dataset attributes.
Type Guards, like [isTaggableElement](/tracking/browser/api-reference/common/guards/isTaggableElement.md), are designed to 
filter out anything that doesn't support [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md).
:::

:::info see also
- [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md)
- [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md)
- [isTaggableElement](/tracking/browser/api-reference/common/guards/isTaggableElement.md)
- [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md)
:::
