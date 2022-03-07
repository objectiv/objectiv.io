# TaggableElement

Either an [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or an [SVGElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement).

```typescript
type TaggableElement = HTMLElement | SVGElement;
```

:::tip Why not simply Element?
Elements are too broad and include things like comment blocks that don't support dataset attributes.
Type Guards, like [isTaggableElement](/tracking/browser/api-reference/common/guards/isTaggableElement.md), are designed to
filter out anything that doesn't support [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md).
:::

:::info see also
- [GuardableElement](/tracking/browser/api-reference/definitions/GuardableElement.md)
- [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md)
- [isTaggableElement](/tracking/browser/api-reference/common/guards/isTaggableElement.md)
- [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md)
:::
