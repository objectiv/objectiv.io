# XMLHttpRequestTransport

A [TrackerTransport](/tracking/browser/api-reference/core/TrackerConsole.md) based on [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

## Customizing `xmlHttpRequestFunction`
`XMLHttpRequestTransport` supports overriding the parameters of the default XMLHttpRequest function or the function itself.

In the following example we swap the default XMLHttpRequest implementation with an entirely custom one.

```typescript
import { XMLHttpRequestTransport } from '@objectiv/tracker-browser';

const COLLECTOR_ENDPOINT = 'https://collector.app.dev';

// Create a simple factory to make a custom XMLHttpRequestTransport with our custom xmlHttpRequestFunction
const makeCustomXMLHttpRequestTransport = ({ endpoint: string }) => new XMLHttpRequestTransport({
  endpoint,
  xmlHttpRequestFunction: ({ endpoint, events }): Promise<unknown> => {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      const async = true;
      xhr.open('POST', endpoint, async);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Custom-Header-X', 'custom-header-value');
      xhr.withCredentials = false;
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send(JSON.stringify(events));
    });
  }
});

// Create a custom Transport using our customXMLHttpRequestTransport
const customTransport = new TrackerTransportRetry({
  transport: new TrackerTransportSwitch({
    transports: [
      makeCustomXMLHttpRequestTransport({ endpoint: COLLECTOR_ENDPOINT }),
      new FetchAPITransport({ endpoint: COLLECTOR_ENDPOINT }),
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
- [FetchAPITransport](/tracking/browser/api-reference/transports/FetchAPITransport.md)
:::