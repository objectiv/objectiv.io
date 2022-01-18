# isTaggedElement

A type guard to determine if the given [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) is a [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md) decorated with [TaggingAttributes](/tracking/api-reference/definitions/TaggingAttribute.md).

```typescript
isTaggedElement = (element: GuardableElement): element is TaggedElement => boolean
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) |

## Returns
boolean
