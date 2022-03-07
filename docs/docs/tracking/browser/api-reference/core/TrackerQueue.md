# TrackerQueue

A very simple Batched Queue implementation for sending out Events in batches at regular intervals.

:::info Work In Progress
This Queue implementation is not final and will most probably be improved in the near future.
:::

## Construction
All Queues parameters are optional and fallback to sensible defaults. 

```typescript
new TrackerQueue(config: {
  console?: TrackerConsole;
  store?: TrackerQueueStore;
  batchSize?: number;
  batchDelayMs?: number;
  concurrency?: number;  
})
```

### Parameters
|          |              | type                                                             | default value
| :-:      | :--          | :--                                                              | :--           
| optional | console      | [TrackerConsole](/tracking/browser/api-reference/core/TrackerConsole.md) |
| console  | store        | TrackerQueueStore                                                | TrackerQueueMemoryStore
| optional | batchSize    | number                                                           | 10
| optional | batchDelayMs | number                                                           | 1000
| optional | concurrency  | number                                                           | 4

:::tip Browser Tracker
While TrackerQueue by default uses an in-memory Queue Store, Browser Tracker instead used [TrackerQueueLocalStorage](/tracking/browser/api-reference/queues/TrackerQueueLocalStorage.md)
:::

<br/>

:::info see also
- [TrackerQueueLocalStorage](/tracking/browser/api-reference/queues/TrackerQueueLocalStorage.md)
:::