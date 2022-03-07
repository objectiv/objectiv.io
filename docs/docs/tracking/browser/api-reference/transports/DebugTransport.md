# DebugTransport

A [TrackerTransport](/tracking/browser/api-reference/core/TrackerConsole.md) that simply logs all Events it receives to the given [TrackerConsole.debug](/tracking/browser/api-reference/core/TrackerConsole.md).

Used primarily for debugging purposes or for unit testing.

## Usage
In the following example we are creating a test tracker that logs all of its messages to console. 

```typescript
makeTracker({
  applicationId: 'test',
  console: console,
  transport: new DebugTransport({
    console: console
  })
});
```

:::tip
An easy way to spy on Events as they would be sent to the Collector is to pass a mock to the `console` parameter. 
:::