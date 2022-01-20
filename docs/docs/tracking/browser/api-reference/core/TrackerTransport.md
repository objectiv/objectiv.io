# TrackerTransport

Transports are composable instances with the ultimate goal of sending Events to the Collector.

They can receive both Events or Promises and share a very simple common interface.

## TrackerTransportInterface

```typescript
export type TransportableEvent = TrackerEvent | Promise<TrackerEvent>;

export interface TrackerTransportInterface {
  console?: TrackerConsole;
  transportName: string;
  isUsable(): boolean;
  handle(...args: NonEmptyArray<TransportableEvent>): Promise<any>;
}
```

## Properties

### console
Optional, [TrackerConsole](/tracking/browser/api-reference/core/TrackerConsole.md).    
TrackerConsole instance for logging.

### transportName
Required, string.  
Used for logging messages and, in general, to uniquely identify this Transport.

## Methods

### isUsable
```typescript
isUsable(): boolean
```
Should return if the TrackerTransport can be used. Most useful in combination with Control Flow Transports.

### handle
```typescript
async handle(...args: NonEmptyArray<TransportableEvent>): Promise<any>;
```
The main logic of the transport. Can either process one or more TransportableEvent or perform Control Flow logic. 


## Control Flow Transports
Not all Transports necessarily deliver messages to the Collector. They can also implement simple logic. 

### TrackerTransportGroup
Forwards received TransportableEvents to all of its usable Transports.

This allows to send an Event to multiple Collectors, Collector + Logging, Collector + Storage, etc.

```typescript
new TrackerTransportGroup({
  transports: NonEmptyArray<TrackerTransportInterface>
})
```

### TrackerTransportSwitch
Forwards received TransportableEvents to the first of its usable Transports.

This allows to implement preference logic between similar Transports. Eg. Fetch and XMLHttpRequest.

```typescript
new TrackerTransportSwitch({
  transports: NonEmptyArray<TrackerTransportInterface>
})
```

### TrackerTransportRetry
A TrackerTransport implementing exponential backoff retries.
```typescript
new TrackerTransportRetry({
  transport: TrackerTransportInterface,
  maxAttempts?: number,  // defaults to 10
  maxRetryMs?: number,   // defaults to Infinity
  minTimeoutMs?: number, // defaults to 1000
  maxTimeoutMs?: number, // defaults to Infinity
  retryFactor?: number,  // defaults to 2
});
```

:::info
With the standard defaults the maximum execution time of an Attempt is ~ 17 minutes.  
1000 + 2000 + 4000 + 8000 + 16000 + 32000 + 64000 + 128000 + 256000 + 512000 = 1023000 ms or 17.05 mins
:::

## BrowserTracker example
The following is the default Transport of Browser Tracker.

A Switch preferring Fetch over XMLHttpRequest, wrapped in an exponential backoff Retry with default settings. 

```typescript
new TrackerTransportRetry({
  console,
  transport: new TrackerTransportSwitch({
    console,
    transports: [
      new FetchAPITransport({ endpoint, console }),
      new XMLHttpRequestTransport({ endpoint, console }),
    ],
  }),
});
```


:::tip
If your Transport is too complex to structure with the Transports we offer, you can always opt to either create your custom ones or even provide your own entirely custom implementation.

In the following example we just create a Transport instance on the fly when making a new Tracker.

```typescript
makeTracker({
  transport: {
    transportName: 'AppCustomTransport',
    isUsable: () => true,
    handle: async (...args: NonEmptyArray<TransportableEvent>) => {
      // Custom transport logic here
    }    
  }
})
```

:::

:::info see also
- [DebugTransport](/tracking/browser/api-reference/transports/DebugTransport.md)
- [FetchAPITransport](/tracking/browser/api-reference/transports/FetchAPITransport.md)
- [XMLHttpRequestTransport](/tracking/browser/api-reference/transports/XMLHttpRequestTransport.md)
:::
