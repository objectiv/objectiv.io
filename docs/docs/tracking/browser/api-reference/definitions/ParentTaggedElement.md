# ParentTaggedElement

A [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md) with at least the [TaggingAttribute.parentElementId](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributeparentelementid) set.

```typescript
type ParentTaggedElement = TaggableElement &
  Pick<TagLocationAttributes, TaggingAttribute.parentElementId>;
```
