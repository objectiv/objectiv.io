# findParentTaggedElements

Walks the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) upwards looking for [TaggedElements](/tracking/browser/api-reference/definitions/TaggedElement.md). The resulting array can be used to reconstruct a [LocationStack](/tracking/browser/api-reference/core/LocationStack.md).

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
| required | **element**    | [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) \| `null` |
| optional | parentElements | [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md)[]             | `[]`

:::tip
`findTaggedParentElements` starting `element` does not have to be a [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md). Any [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) will do. 
:::

## Returns
Array of [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md)

:::info See also
- [getElementLocationStack](/tracking/browser/api-reference/common/getElementLocationStack.md)
:::
