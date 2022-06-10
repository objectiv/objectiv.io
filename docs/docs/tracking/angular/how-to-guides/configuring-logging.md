---
sidebar_position: 5
---

# Configuring logging

All Trackers, Transports, Queues and Plugins log to the TrackerConsole global singleton.

## Enabling Developer Tools
TrackerConsole is part of the Developer Tools, thus accessible via `globalThis.objectiv`.

To import the Developer Tools, simply require them e.g.:

```ts
if (process.env.NODE_ENV.startsWith('dev')) {
  require('@objectiv/developer-tools');
}
```

:::info
There's no `right` way of importing the Developer Tools, as requirements may be very different depending on the target application.
The example above shows some conditional logic in the Application itself. 

Other approaches may include:
- Configure the Application bundler to transpile out the Developer Tools when generating a production build.
- Inject the Developer Tools in globalThis at runtime.
- Delegate loading the developer tools to an Application Wrapper.

And, of course, in some cases it may also make sense to leave them present in the final build and just silence them.
:::

### Interacting with TrackerConsole
```ts
if(globalThis.objectiv) {
  const { TrackerConsole } = globalThis.objectiv; 
  TrackerConsole.log('Message to log');
}
```

Or in one line:
```ts
globalThis.objectiv?.TrackerConsole.log('Message to log');
```

## What is TrackerConsole
TrackerConsole is a simplified wrapper implementation of node.js and browsers' Console.

### TrackerConsoleImplementation interface
TrackerConsoleImplementations only implement a subset of native Consoles:
```ts
export type TrackerConsoleImplementation = Pick<
  Console,
  'debug' | 'error' | 'group' | 'groupCollapsed' | 'groupEnd' | 'info' | 'log' | 'warn'
>;
```

### TrackerConsole interface
Extends TrackerConsoleImplementation with a couple of getter / setter methods to configure the implementation to use.

```ts
export type TrackerConsole = TrackerConsoleImplementation & {
  implementation: TrackerConsoleImplementation;
  setImplementation: (implementation: TrackerConsoleImplementation) => void;
};
```

### Default TrackerConsole
The default implementation of TrackerConsole detects the implementation to use by looking at the Window interface.

All methods are simply proxied to the underlying implementation.

```ts
export const TrackerConsole: TrackerConsole = {
  implementation: typeof window !== 'undefined' ? console : NoopConsoleImplementation,
  setImplementation: (implementation: TrackerConsoleImplementation) => {
    TrackerConsole.implementation = implementation;
  },
  debug: (...args: any[]) => TrackerConsole.implementation.debug(...args),
  error: (...args: any[]) => TrackerConsole.implementation.error(...args),
  group: (...args: any[]) => TrackerConsole.implementation.group(...args),
  groupCollapsed: (...args: any[]) => TrackerConsole.implementation.groupCollapsed(...args),
  groupEnd: () => TrackerConsole.implementation.groupEnd(),
  info: (...args: any[]) => TrackerConsole.implementation.info(...args),
  log: (...args: any[]) => TrackerConsole.implementation.log(...args),
  warn: (...args: any[]) => TrackerConsole.implementation.warn(...args),
};
```

### NoopConsoleImplementation
This is a special TrackerConsoleImplementation that doesn't do anything. 

It's used to disable console logging altogether, and it's the default implementation used in production.

```ts
export const NoopConsoleImplementation: TrackerConsoleImplementation = {
  debug: () => {},
  error: () => {},
  group: () => {},
  groupCollapsed: () => {},
  groupEnd: () => {},
  info: () => {},
  log: () => {},
  warn: () => {},
};
```

## Reconfigure TrackerConsole
TrackerConsole normally determines the implementation to use automatically by checking the Window interface. 
```ts
implementation: typeof window !== 'undefined' ? console : NoopConsoleImplementation
```

If this behavior is not good enough for your application, or if you want more control, you can use `setImplementation` to specify which implementation to use.

You can even create your own implementation, for example to log to an external service.

### Specifying a custom implementation
In the following example we swap the default implementation with a custom one. 

```typescript
import { ObjectivTrackerModule } from '@objectiv/tracker-angular';

if (process.env.NODE_ENV.startsWith('dev')) {
  require('@objectiv/developer-tools');
  const { CustomConsole } = require('./CustomConsole');
  globalThis.objectiv?.TrackerConsole.setImplementation(CustomConsole);
}

...

@NgModule({
  ...
  imports: [
    ...
    ObjectivTrackerModule.forRoot({
      applicationId: process.env.TRACKER_APPLICATION_ID,
      endpoint: process.env.TRACKER_ENDPOINT
    })
  ],
  ...
})

export class AppModule {
  ...
}

```

:::caution
Make sure to change implementation before creating the Tracker, else all initialization messages will still be logged to the default implementation.
:::
