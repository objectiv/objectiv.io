# makeMutationCallback

A factory to generate our [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) callback. The core of our auto-tracking and validation logic. 

The callback orchestrates events handling and triggering, plus tagging validation based on the type of mutations it receives.

```typescript
const makeMutationCallback = (
  console?: TrackerConsole
) => MutationCallback
```

## Parameters
|          |         | type                                                             | default value
| :-:      | :--     | :--                                                              | :--           
| optional | console | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md) |

## New nodes mutation
For each new node we invoke [trackNewElements](/tracking/api-reference/mutationObserver/trackNewElements.md), which:

- Traverses the new Nodes and scouts for Elements that have been enriched with [TaggingAttributes](/tracking/api-reference/definitions/TaggingAttribute.md).   
- For those Elements we attach [Event Handlers](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) to automatically handle their tracking.  
- New Elements are also validated for [LocationStack](/tracking/api-reference/core/LocationStack.md) uniqueness.  
- New Elements may trigger [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md) events.

## Removed nodes mutation
- Removed Elements may trigger [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md) events.

## Nodes attributes mutation
- Changed Elements may trigger [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md) events.

## SPA URL changes
- On every DOM change we double-check the URL. If the last URL is different from the current we trigger a URL change event.

<br/>

:::info see also
- [trackNewElements](/tracking/api-reference/mutationObserver/trackNewElements.md)
- [trackRemovedElements](/tracking/api-reference/mutationObserver/trackRemovedElements.md)
- [trackVisibilityVisibleEvent](/tracking/api-reference/mutationObserver/trackVisibilityVisibleEvent.md)
- [trackVisibilityHiddenEvent](/tracking/api-reference/mutationObserver/trackVisibilityHiddenEvent.md)
:::