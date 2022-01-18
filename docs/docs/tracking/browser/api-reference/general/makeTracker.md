# makeTracker

Creates a new [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md) and adds it to the [TrackerRepository](/tracking/api-reference/core/TrackerRepository.md). Then calls [startAutoTracking](/tracking/api-reference/general/startAutoTracking.md) for it.

```typescript
makeTracker = (parameters: {
  applicationId: string,
  trackerId?: string,
  queue?: TrackerQueue,
  endpoint?: string,
  transport?: TrackerTransport,
  plugins?: TrackerPlugins,
  active?: boolean,
  trackApplicationLoadedEvent?: boolean
}) => BrowserTracker
```

:::info
The first created Tracker is automatically set as default in the [TrackerRepository](/tracking/api-reference/core/TrackerRepository.md). See also [getTracker](/tracking/api-reference/general/getTracker.md) and [setDefaultTracker](/tracking/api-reference/general/setDefaultTracker.md)
:::

## Parameters
|          |                             | type                                                                 | default value
| :-:      | :--                         | :--                                                                  | :--           
| required | **applicationId**           | string                                                               |
| optional | trackerId                   | string                                                               | Same value as `applicationId`
| optional | queue                       | [TrackerQueue](/tracking/api-reference/core/TrackerQueue.md)         | The result of [makeDefaultQueue](/tracking/api-reference/common/factories/makeDefaultQueue.md)
| optional | **_endpoint_**              | string                                                               |
| optional | **_transport_**             | [TrackerTransport](/tracking/api-reference/core/TrackerTransport.md) | The result of [makeDefaultTransport](/tracking/api-reference/common/factories/makeDefaultTransport.md)
| optional | plugins                     | [TrackerPlugins](/tracking/api-reference/core/TrackerPlugins.md)     | TrackerPlugins initiated with the result of [makeDefaultPluginsList](/tracking/api-reference/common/factories/makeDefaultPluginsList.md)
| optional | console                     | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)     |
| optional | active                      | boolean                                                              | `true`
| optional | trackApplicationLoadedEvent | boolean                                                              | `true`

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.

When providing only `endpoint`, the Tracker will automatically create a Transport configuration initialized with it.
:::

## Returns
 - [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)

## Usage example

```typescript jsx
import { makeTracker } from '@objectiv/tracker-browser';
```

```typescript jsx
makeTracker({
  applicationId: 'awesome-app',
  endpoint: 'https://collector.awesome-app.dev' 
})
```

```typescript jsx
makeTracker({
  applicationId: 'awesome-app',
  transport: CustomTransport,
  console: window.console
})
```

:::tip Transport ?
[Events](/taxonomy/reference/events/overview.md) are sent to the [Collector](/tracking/core-concepts/collector.md) via a composable layer of queueing, batching and sending classes called [Transport](/tracking/core-concepts/trackers.md#transport). 
:::

<br />

:::info See also
- [Location Taggers](/tracking/api-reference/locationTaggers/overview.md) 
- [Event Trackers](/tracking/api-reference/eventTrackers/overview.md)
- [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)
- [Collector](/tracking/core-concepts/collector.md)
- [startAutoTracking](/tracking/api-reference/general/startAutoTracking.md)
:::
