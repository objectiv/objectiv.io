---
sidebar_position: 2
---

# ReactNativeTracker

ReactNativeTracker extends Core Tracker with a simplified constructor and some preconfigured Plugins.

## Usage
In this example we create a new ReactNativeTracker instance and wrap our entire App in [ObjectivProvider](/tracking/react-native/api-reference/providers/ObjectivProvider.md).

```ts
import { ObjectivProvider, ReactNativeTracker } from '@objectiv/tracker-react-native';
```

```tsx
const App = ({children}) => {

  const tracker = new ReactNativeTracker({
    endpoint: 'https://collector.app.dev',
    applicationId: 'app-id'
  })

  return (
    <ObjectivProvider tracker={tracker}>
      {children}
    </ObjectivProvider>
  );
}
```

## Configuration
ReactNativeTracker configuration requires at least an `applicationId` and either an `endpoint` or a custom `transport`.

|          |                                 | type             | default value                                           |
|:--------:|:--------------------------------|:-----------------|:--------------------------------------------------------|
| required | **applicationId**               | string           |                                                         |
| optional | **_endpoint_**                  | string           |                                                         |
| optional | **_transport_**                 | TrackerTransport | The result of makeReactNativeTrackerDefaultTransport    |
| optional | queue                           | TrackerQueue     | The result of makeReactNativeTrackerDefaultQueue        |
| optional | plugins                         | TrackerPlugin    | The result of makeReactNativeTrackerDefaultPluginsList  |
| optional | trackerId                       | string           | Same value as `applicationId`                           |
| optional | active                          | boolean          | `true`                                                  |
| optional | trackApplicationContext         | boolean          | `true`                                                  |
| optional | trackHttpContext                | boolean          | `true`                                                  |
| optional | trackPathContextFromURL         | boolean          | `true`                                                  |
| optional | trackRootLocationContextFromURL | boolean          | `true`                                                  |

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.

When providing only `endpoint`, the Tracker will automatically create a Transport configuration initialized with it.
:::

## Defaults 

### Transport
Fetch API.

### Queueing
TrackerQueue is configured to eagerly send max 10 events per batch, each batch is processed every 1000ms.  

### Persistence
TrackerQueue is configured to use an in-memory Queue.

### Retry logic
Configured for 10 retries with exponential backoff starting at 1000ms.

### Included plugins
- [ApplicationContextPlugin](/tracking/react-native/plugins/application-context.md)
- [OpenTaxonomyValidationPlugin](/tracking/react-native/plugins/open-taxonomy-validation.md)

### Optional Plugins
- [ReactNavigation](/tracking/react-native/plugins/react-navigation.md)


## Under the hood
The Tracker architecture is highly composable.  
To get an idea of how much React Native Tracker automates under the hood, compared to the Core Tracker, this statement:

```typescript
const tracker = new ReactNativeTracker({ 
  applicationId: 'app-id', 
  endpoint: 'https://collector.app.dev',
});
``` 

is equivalent to:

```typescript
const trackerId = trackerConfig.trackerId ?? trackerConfig.applicationId;
const transport = new FetchTransport({ endpoint: 'https://collector.app.dev' });
const queueStorage = new TrackerQueueMemoryStore()
const trackerQueue = new TrackerQueue({ storage: trackerStorage });
const applicationContextPlugin = new ApplicationContextPlugin({ applicationId: 'app-id' });
const plugins = [applicationContextPlugin];
const tracker = new Tracker({ trackerId, transport, queue, plugins });

```
