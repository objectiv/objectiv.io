# Tracker

Core Tracker is mainly responsible for finalizing Events and Queueing them for Transport. 

:::caution
This is a Core module meant to be used by contributors writing their own Trackers or Plugins.  
We heavily discourage using Core modules directly. Use [General APIs](/tracking/browser/api-reference/general/overview.md), [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) and [Event Trackers](/tracking/browser/api-reference/eventTrackers/overview.md) instead.
:::

## Construction
Trackers can be initialized with a TrackerConfig object and, optionally, one or more ContextsConfig.

```typescript
new Tracker(trackerConfig: TrackerConfig, ...contextConfigs: ContextsConfig[])
```

The instance will merge ContextsConfig in the correct order to produce valid LocationStack and GlobalContexts.

:::info 
Tracker's own LocationStack and GlobalContexts will be added to every Event being tracked. 
This enables the creation of Tracker instances preconfigured with LocationStacks and/or GlobalContexts.

Plugins can also contribute to this process by adding more LocationStacks and/or GlobalContexts. 
:::

## Properties

### active
Optional, boolean.    
Determines if trackEvent will process Events or not.

### applicationId
Required, string.   
Application identifier. Used to automatically generate [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md).

### global_contexts
Optional, [GlobalContexts](/tracking/browser/api-reference/core/GlobalContexts.md).   
Array of GlobalContext instances.

### location_stack
Optional, [LocationStack](/tracking/browser/api-reference/core/LocationStack.md).  
Array of LocationContext instances.

### queue
Optional, [TrackerQueue](/tracking/browser/api-reference/core/TrackerQueue.md).  
TrackerQueue instance. Responsible for queueing and batching Events.

### trackerId
Optional, string.  
Unique identifier for the TrackerInstance. Defaults to the same value of `applicationId`.

### transport
Optional, [TrackerTransport](/tracking/browser/api-reference/core/TrackerTransport.md).   
TrackerTransport instance. Responsible for sending Events.

### plugins
Optional, [TrackerPlugins](/tracking/browser/api-reference/core/TrackerPlugins.md).  
Plugins will be executed when the Tracker initializes and before the Event is sent.

### trackApplicationContext
Optional. Whether to track ApplicationContext automatically. Enabled by default.

## Default Plugins
Core Tracker comes preconfigured with the following plugins:
- ApplicationContextPlugin


## Methods

### flushQueue
```typescript
flushQueue(): void
```
Empties the TrackerQueue. Events that have not been sent yet will be permanently lost.

:::caution
This method is usually combined with `waitForQueue`, to allow the TrackerQueue to finish sending Events. 
:::

### setActive
```typescript
setActive(newActiveState: boolean): void
```

Set the `active` property state. If state transitions from `false` to `true`: 
- Initializes Plugins
- If Queue has been configured
  - Binds Transport to Queue
  - Starts Queue Runner

### trackEvent
```typescript
async trackEvent(event: TrackerEvent) => Promise<TrackerEvent>
```
The main entry point of the Tracker Instance:
- Prepends given Event's LocationStack and GlobalContexts with the Tracker's LocationStack and GlobalContexts
- Sets the Event's `time` attribute
- Invokes all Plugins `enrich` lifecycle method
- Invokes all Plugins `validate` lifecycle method
- If Queue has been configured
  - Hands the Event over to Queue 
- Else if Transport has been configured
  - Hands the Event over to Queue
- Depending on whether Queue and Transport have been configured, returns a Promise resolving to either 
  - The Event itself
  - The Queued Event
  - The Transported Event

### waitForQueue
```typescript
async waitForQueue(parameters?: { 
  intervalMs?: number; 
  timeoutMs?: number 
}): Promise<boolean>
```
Attempts to wait for TrackerQueue to be empty. This is usually invoked in combination with `flushQueue` when
attempting to finish the Tracker's work before starting a new session.

#### Parameters
|          |            | type    | default value                  | description
| :-:      | :--        | :--     | :--                            | :--
| optional | intervalMs | boolean | `100`                          | How often to poll the TrackerQueue
| optional | timeoutMs  | boolean | `2 * QueueConfig.batchDelayMs` | For how long to poll the TrackerQueue

