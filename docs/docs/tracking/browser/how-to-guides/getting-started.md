---
sidebar_position: 1
---

# Getting Started

Follow the step-by-step Guide below to get started with tracking on your application.

## Install Tracker from NPM

```bash
yarn add @objectiv/tracker-browser

# or 

npm install @objectiv/tracker-browser
```

## Configure the Tracker

The fastest way to configure a global BrowserTracker instance is to import and call [makeTracker](/tracking/browser/api-reference/general/makeTracker.md).

:::info
Ideally, the tracker should be configured as early as possible. Best before the Application renders or as high up as possible in the component tree.
:::

### Before the Application renders
Here is how that can be achieved in the `index` of the Application, right before rendering the App.

```tsx
import { makeTracker } from "@objectiv/tracker-browser";

makeTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev'
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### In a root-like Component
No `index` access? Any high-up enough component will do as well. Think of an `App` or equivalent component.

In such cases it's necessary to stabilize `makeTracker` by wrapping it in a [useEffect](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) without dependencies. This will ensure it will be unaffected by re-renders.

```tsx
const App = () => {
  import { makeTracker } from "@objectiv/tracker-browser";
  ...
  useEffect(
    () => {
      makeTracker({
        applicationId: 'app-id',
        endpoint: 'https://collector.app.dev'
      });
    },
    [] // no dependencies => no side effects on re-render
  );
  ...
}
```

## Enable logging and validation
While developing in a browser, or when running tests, it may be useful to enable more logging for debugging purposes.

To do so, simply require the Developer Tools package before creating the tracker. 

```ts
if (process.env.NODE_ENV.startsWith('dev')) {
  require('@objectiv/developer-tools');
}

const tracker = makeTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
});
```

The tracker instance will automatically detect their presence and log more info to the console and perform early validation.

For more details check out [how-to configure logging](/tracking/browser/how-to-guides/configuring-logging.md).

## Done
The tracker should now be running and auto-tracking some Events already, such as ApplicationLoaded.

Time to start [Tagging Locations](/tracking/browser/how-to-guides/tagging-locations.md)!
