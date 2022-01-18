# findParentTaggedElements

Walks the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) upwards looking for [TaggedElements](/tracking/api-reference/definitions/TaggedElement.md). The resulting array can be used to reconstruct a [LocationStack](/tracking/api-reference/core/LocationStack.md).

```typescript
findParentTaggedElements = (
  element: TaggableElement | null, 
  parentElements: TaggedElement[] = []
) => TaggedElement[]
```  

:::info
`findParentTaggedElements` is recursive. The `parentElements` parameter is the accumulator.
:::

## Parameters
|          |                | type                                                                                | default value
| :-:      | :--            | :--                                                                                 | :--           
| required | **element**    | [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) \| `null` |
| optional | parentElements | [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md)[]             | `[]`

:::tip
`findTaggedParentElements` starting `element` does not have to be a [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md). Any [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) will do. 
:::

## Returns
Array of [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md)

:::info See also
- [getElementLocationStack](/tracking/api-reference/common/getElementLocationStack.md)
:::
