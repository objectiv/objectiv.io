# TrackerPlugin

Plugins can enrich a Tracker's [LocationStack](/tracking/browser/api-reference/core/Tracker.md#location_stack) or [GlobalContexts](/tracking/browser/api-reference/core/Tracker.md#global_contexts) or even trigger automatic Events.

## Properties

### console
Optional, [TrackerConsole](/tracking/browser/api-reference/core/TrackerConsole.md).    
TrackerConsole instance for logging.

### pluginName
Required, string.  
Used for logging messages and, in general, to uniquely identify this plugin.

## Methods

### isUsable
```typescript
isUsable(): boolean
```
Should return if the TrackerPlugin can be used, e.g. a browser based plugin may want to return `false` during SSR.

## Lifecycle
Plugins may implement lifecycle methods. These receive as parameter the Tracker's contexts.

### initialize
```typescript
initialize: (contexts: Required<ContextsConfig>) => void
```
Trackers will invoke `initialize` when constructed as `active` or when switching from inactive to active.

### beforeTransport
```typescript
beforeTransport: (contexts: Required<ContextsConfig>) => void
```
Trackers will invoke `beforeTransport` before handing events over to Queue / Transport.

<br/>

:::info see also
- [TrackerPlugins](/tracking/browser/api-reference/core/TrackerPlugins.md)
- [Tracker](/tracking/browser/api-reference/core/Tracker.md)
:::
