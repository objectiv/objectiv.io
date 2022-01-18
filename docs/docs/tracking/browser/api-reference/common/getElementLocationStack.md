# getElementLocationStack

Generates a [LocationStack](/tracking/api-reference/core/LocationStack.md) for the given [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md). If a [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md) instance is provided, also predicts its mutations.

```typescript
getElementLocationStack = (parameters: { 
  element: TaggedElement; 
  tracker?: BrowserTracker;
}) => LocationStack 
```  

## Parameters
|          |             | type                    | default value
| :-:      | :--         | :--                     | :--           
| required | **element** | [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md) |

## Returns
[LocationStack](/tracking/api-reference/core/LocationStack.md)

:::info See also
- [findParentTaggedElements](/tracking/api-reference/common/findParentTaggedElements.md)
:::
