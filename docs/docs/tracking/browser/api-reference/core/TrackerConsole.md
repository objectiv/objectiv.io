# TrackerConsole

TrackerConsole is a simplified implementation of [Window.console](https://developer.mozilla.org/en-US/docs/Web/API/Window/console) or 
[Node.js Console](https://nodejs.org/api/console.html).

```typescript
type TrackerConsole = Pick<
  Console,
  'debug' | 'error' | 'group' | 'groupCollapsed' | 'groupEnd' | 'info' | 'log' | 'warn'
>;
```

:::info
Most Core Tracker modules accept a `console` parameter. To quickly enable logging simply pass the Console API to it.
The tracker will use it to log various debugging info. 

The following example will enable `console` for all modules:

```typescript
makeTracker({
  applicationId: 'app',
  endpoint: 'https://collector.app.dev',
  console: window.console
})
```
:::