# getElementLocationStack

Generates a [LocationStack](/tracking/browser/api-reference/core/LocationStack.md) for the given [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md). If a [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md) instance is provided, also predicts its mutations.

```typescript
getElementLocationStack = (parameters: { 
  element: TaggedElement; 
  tracker?: BrowserTracker;
}) => LocationStack 
```  

## Parameters
|          |             | type                    | default value
| :-:      | :--         | :--                     | :--           
| required | **element** | [TaggedElement](/tracking/browser/api-reference/definitions/TaggedElement.md) |
| optional | tracker     | [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md) |

## Returns
[LocationStack](/tracking/browser/api-reference/core/LocationStack.md)

:::info See also
- [findParentTaggedElements](/tracking/browser/api-reference/common/findParentTaggedElements.md)
:::
