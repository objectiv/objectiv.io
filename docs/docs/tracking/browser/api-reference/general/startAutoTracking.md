# startAutoTracking

Initializes [Mutation Observer](/tracking/browser/api-reference/mutationObserver/overview.md) based automatic tracking.

```typescript
startAutoTracking = (options: {
  trackApplicationLoadedEvent?: boolean;
  console?: TrackerConsole
}): void
```

:::tip
Auto tracking is fully automated when using [makeTracker](/tracking/browser/api-reference/general/makeTracker.md) or [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md).
:::

:::caution
`startAutoTracking` can be called multiple times safely but will not re-initiate auto-tracking, nor change its configuration.
To restart auto-tracking with different options, first call [stopAutoTracking](/tracking/browser/api-reference/general/stopAutoTracking.md).
:::

## Parameters
|          |                             | type                                                                 | default value
| :-:      | :--                         | :--                                                                  | :--           
| optional | trackApplicationLoadedEvent | boolean                                                              | `true`
| optional | console                     | [TrackerConsole](/tracking/browser/api-reference/core/TrackerConsole.md)     |

## Events
- [trackApplicationLoadedEvent](/tracking/browser/api-reference/eventTrackers/trackApplicationLoadedEvent.md)
    
<br />

:::info see also
- [stopAutoTracking](/tracking/browser/api-reference/general/stopAutoTracking.md)
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md) 
- [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md) 
:::