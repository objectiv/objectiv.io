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

In this example we create a new ReactTracker instance and wrap our entire App in [ObjectivProvider](/tracking/react/api-reference/common/providers/ObjectivProvider.md).

```ts
import { ObjectivProvider, ReactTracker } from '@objectiv/tracker-react';
```

```tsx
const App = ({children}) => {

  const tracker = new ReactTracker({
    endpoint: 'collector-url',
    applicationId: 'app-id'
  })

  return (
    <ObjectivProvider tracker={tracker}>
      {children}
    </ObjectivProvider>
  );
}
```

:::info
Ideally, the tracker should be configured as early as possible. Best before the Application renders or as high up as possible in the component tree.
:::

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

### Before the Application renders
Here is how the same can be achieved in the `index` of the Application, right before rendering the App.

```ts
import { ObjectivProvider, ReactTracker } from '@objectiv/tracker-react';
```

```tsx
makeTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.application.dev'
});

ReactDOM.render(
  <ObjectivProvider tracker={tracker}>
    <App />
  </ObjectivProvider>,
  document.getElementById('root')
);
```

## Done
The tracker should now be running and auto-tracking some Events already, such as ApplicationLoaded.

Time to start [Tracking Interactions](/tracking/react/how-to-guides/tracking-interactions.md)!
