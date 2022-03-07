# FetchAPITransport

A [TrackerTransport](/tracking/browser/api-reference/core/TrackerConsole.md) based on [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Customizing `fetchFunction`
`FetchAPITransport` supports overriding the parameters of the default Fetch function or the function itself.

In the following example we use the default fetch implementation and customize its parameters.  

```typescript
import { 
  defaultFetchFunction, 
  defaultFetchParameters, 
  FetchAPITransport 
} from '@objectiv/tracker-browser';

const COLLECTOR_ENDPOINT = 'https://collector.app.dev';

// Create a simple factory to make a custom FetchAPITransport with our customFetchParameters.  
const makeCustomFetchAPITransport = ({ endpoint: string }) => new FetchAPITransport({
  endpoint,
  fetchFunction: ({ endpoint, events }) => defaultFetchFunction({
    endpoint,
    events,
    // Pass our custom parameters to the defaultFetchFunction
    parameters: {
      ...defaultFetchParameters,
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }),
});

// Create a custom Transport using our customFetchAPITransport
const customTransport = new TrackerTransportRetry({
  transport: new TrackerTransportSwitch({
    transports: [
      makeCustomFetchAPITransport({ endpoint: COLLECTOR_ENDPOINT }),
      new XMLHttpRequestTransport({ endpoint: COLLECTOR_ENDPOINT }),
    ],
  }),
})

// Now we can pass the custom Transport to makeTracker or a Browser Tracker instance
makeTracker({
  applicationId: 'test',
  transport: customTransport,
});
```

<br />

:::info see also
- [XMLHttpRequestTransport](/tracking/browser/api-reference/transports/XMLHttpRequestTransport.md)
:::
