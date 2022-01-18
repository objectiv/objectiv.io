# isParentTaggedElement

A type guard to determine if the given [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) is a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) decorated with [TaggingAttribute.parentElementId](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributeparentelementid).

```typescript
isParentTaggedElement = (element: GuardableElement): element is ParentTaggedElement => boolean
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) |

## Returns
boolean

:::info See also
- [TaggingAttribute.parentElementId](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributeparentelementid)
:::
