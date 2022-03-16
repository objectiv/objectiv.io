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
Check out our how-to on how to [configure logging](/tracking/browser/how-to-guides/configuring-logging.md);
:::
