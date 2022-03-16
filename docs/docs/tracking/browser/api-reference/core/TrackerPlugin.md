# TrackerPlugin

Plugins can enrich a Tracker's [LocationStack](/tracking/browser/api-reference/core/Tracker.md#location_stack) or [GlobalContexts](/tracking/browser/api-reference/core/Tracker.md#global_contexts) or even trigger automatic Events.

## Properties

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
initialize: (tracker: TrackerInterface) => void
```
Trackers will invoke `initialize` when constructed as `active` or when switching from inactive to active.

### enrich
```typescript
enrich: (contexts: Required<ContextsConfig>) => void
```
Trackers will invoke `enrich` before `validate`.

### validate
```typescript
validate: (event: TrackerEvent) => void
```
Trackers will invoke `validate` before handing events over to Queue / Transport.

<br/>

:::info see also
- [TrackerPlugins](/tracking/browser/api-reference/core/TrackerPlugins.md)
- [Tracker](/tracking/browser/api-reference/core/Tracker.md)
:::
