# TrackerPlugins

A special Plugin that wraps around a list of Plugins. Offers methods to call their lifecycle methods in bulk.

## Construction
TrackerPlugins is initialized with a list of plugins and, optionally, a TrackerConsole.

```typescript
new TreackerPlugins({
  plugins: TrackerPlugin[],
  console?: TrackerConsole
})
```

## Properties

### console
Optional, [TrackerConsole](/tracking/browser/api-reference/core/TrackerConsole.md).    
TrackerConsole instance for logging.

### plugins
Private, [TrackerPlugin](/tracking/browser/api-reference/core/TrackerPlugin.md)[].  
Holds the list of TrackerPlugin[] received at construction. 

## Methods

### initialize
```typescript
initialize: (contexts: Required<ContextsConfig>) => void
```
Invokes the `initialize` lifecycle method of all plugins. 

### beforeTransport
```typescript
beforeTransport: (contexts: Required<ContextsConfig>) => void
```
Invokes the `beforeTransport` lifecycle method of all plugins. 

<br/>

:::info see also
- [TrackerPlugin](/tracking/browser/api-reference/core/TrackerPlugin.md)
- [TrackerConfig](/tracking/browser/api-reference/core/TrackerConfig.md)
- [Tracker](/tracking/browser/api-reference/core/Tracker.md)
:::
