# processTagChildrenElement

If the given [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) has the [TaggingAttribute.tagChildren](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren), its queries will be executed, tagging matching Elements.

A list of newly [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md) is then returned.

```typescript
const processTagChildrenElement = (
  element: GuardableElement
) => TaggedElement[]
```

## Parameters
|          |                      | type                                                                        | default value
| :-:      | :--                  | :--                                                                         | :--           
| required | **GuardableElement** | [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) |


## Returns
Array of [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md)
