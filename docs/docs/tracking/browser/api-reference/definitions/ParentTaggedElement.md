# ParentTaggedElement

A [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md) with at least the [TaggingAttribute.parentElementId](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributeparentelementid) set.

```typescript
type ParentTaggedElement = TaggableElement &
  Pick<TagLocationAttributes, TaggingAttribute.parentElementId>;
```
