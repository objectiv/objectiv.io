---
sidebar_position: 1
---

# Getting Started

Follow the step-by-step Guide below to get started with tracking on your React application.

## Install Tracker from NPM

```bash
yarn add @objectiv/tracker-react

# or 

npm install @objectiv/tracker-react
```

## Configure the Tracker
Ideally, the tracker should be configured as early as possible. Best before the Application renders or as high up as possible in the component tree.

In this example we create the tracker instance in the `index` of the Application, right before rendering the App component.

```ts
import { ObjectivProvider, ReactTracker } from '@objectiv/tracker-react';
```

```tsx
const tracker = new ReactTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev'
})

ReactDOM.render(
  <ObjectivProvider tracker={tracker}>
    <App />
  </ObjectivProvider>,
  document.getElementById('root')
);
```

:::tip Just trying things out?
[React Tracker](/tracking/react/api-reference/ReactTracker.md) is quite modular, and it's possible to set it up without having a [Collector](/tracking/collector/getting-started.md) running.

In the following example we create a new Tracker instance that simply logs all Events to console.

```tsx
const loggingTracker = new ReactTracker({
  applicationId: 'test',
  transport: {
    transportName: 'TestLoggingTransport',
    isUsable: () => true,
    handle: async (payload) => console.log(payload)
  }
});
```

There's also a [DebugTransport](https://www.npmjs.com/package/@objectiv/transport-debug) available on npm with a similar functionality:

```ts
import { DebugTransport } from "@objectiv/transport-debug";
```

```tsx
const loggingTracker = new ReactTracker({
  applicationId: 'test',
  transport: new DebugTransport()
});
```

This tracker instance will log all Events to `console.debug`.
:::

## Enable logging and validation
While developing in a browser, or when running tests, it may be useful to enable more logging for debugging purposes.

To do so, simply require the Developer Tools package before creating the tracker. 

```ts
if (process.env.NODE_ENV.startsWith('dev')) {
  require('@objectiv/developer-tools');
}

const tracker = new ReactTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev'
})
```

The tracker instance will automatically detect their presence and log more info to the console and perform early validation.

For more details check out [how-to configure logging](/tracking/react/how-to-guides/configuring-logging.md).

## Done
The tracker should now be running and auto-tracking some Events already, such as ApplicationLoaded.

Time to start [Tracking Interactions](/tracking/react/how-to-guides/tracking-interactions.md)!
