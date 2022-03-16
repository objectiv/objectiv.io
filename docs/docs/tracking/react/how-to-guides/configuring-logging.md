---
sidebar_position: 6
---

# Configuring logging

All Trackers, Transports, Queues and Plugins log to TrackerConsole global singleton.

## What is TrackerConsole
TrackerConsole is a simplified wrapper implementation of node.js and browser's Console.

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
The default implementation of TrackerConsole detects the implementation to use by looking at the node environment.

All methods are simply proxied to the underlying implementation.

```ts
export const TrackerConsole: TrackerConsole = {
  implementation: isDevMode() ? console : NoopConsoleImplementation,
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
:::info is Dev Mode?
`isDevMode` is a Core Tracker helper that simply detects whether the node.js environment starts with 'dev'.
:::

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
TrackerConsole normally determines the implementation to use automatically by checking the node.js environment. 
```ts
implementation: isDevMode() ? console : NoopConsoleImplementation
```

If this behavior is not good enough for your application, or if you want more control, you can use `setImplementation` to specify which implementation to use.

You can even create your own implementation, for example to log to an external service.

### Specifying a custom implementation
In the following example we use dotenv to import some custom environment variable and enable logging based on that. 

This would allow enabling logging in a test / staging / production environment.

```ts
import { TrackerConsole } from "@objectiv/tracker-core";
import { ReactTracker } from "@objectiv/tracker-react";
import 'dotenv/config';

if (process.env.TRACKER_ENABLE_CONSOLE) {
  TrackerConsole.setImplementation(console);
}

const tracker = new ReactTracker({
  applicationId: process.env.TRACKER_APPLICATION_ID,
  endpoint: process.env.TRACKER_ENDPOINT
});
```

:::caution
Make sure to change implementation before creating the Tracker, else all initialization messages will still be logged to the default implementation.
:::
