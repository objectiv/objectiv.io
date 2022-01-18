# isTagChildrenElement

A type guard to determine if the given [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) is a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) decorated with [TaggingAttribute.tagChildren](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren).

```typescript
isTagChildrenElement = (element: GuardableElement): element is TagChildrenElement => boolean
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) |

## Returns
boolean

:::info See also
- [TaggingAttribute.tagChildren](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren)
- [tagChildren](/tracking/api-reference/locationTaggers/tagChildren.md)
:::
