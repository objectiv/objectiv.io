# isTagChildrenElement

A type guard to determine if the given [GuardableElement](/tracking/browser/api-reference/definitions/GuardableElement.md) is a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) decorated with [TaggingAttribute.tagChildren](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren).

```typescript
isTagChildrenElement = (element: GuardableElement): element is TagChildrenElement => boolean
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/browser/api-reference/definitions/GuardableElement.md) |

## Returns
boolean

:::info See also
- [TaggingAttribute.tagChildren](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren)
- [tagChildren](/tracking/browser/api-reference/locationTaggers/tagChildren.md)
:::
