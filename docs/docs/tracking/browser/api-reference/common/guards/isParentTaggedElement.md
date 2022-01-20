# isParentTaggedElement

A type guard to determine if the given [GuardableElement](/tracking/browser/api-reference/definitions/GuardableElement.md) is a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) decorated with [TaggingAttribute.parentElementId](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributeparentelementid).

```typescript
isParentTaggedElement = (element: GuardableElement): element is ParentTaggedElement => boolean
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/browser/api-reference/definitions/GuardableElement.md) |

## Returns
boolean

:::info See also
- [TaggingAttribute.parentElementId](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributeparentelementid)
:::
