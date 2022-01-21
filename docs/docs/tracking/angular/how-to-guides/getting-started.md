---
sidebar_position: 2
---

# Getting Started

Follow the step-by-step Guide below to get started with tracking on your Angular application.

We provide an extra package for Angular with a Module and a set of Directives to ease the tracking instrumentation.

## Install Tracker from NPM

```bash
yarn add @objectiv/tracker-browser @objectiv/tracker-angular

# or 

npm install @objectiv/tracker-browser @objectiv/tracker-angular
```

## Configure the Tracker

The fastest way to configure a global Tracker instance is to import the **ObjectivTrackerModule** and call it's `forRoot` API.

:::info
Ideally, the tracker should be configured as early as possible. A good place is the `AppModule` or equivalent.
:::

```typescript
import { ObjectivTrackerModule } from '@objectiv/tracker-angular';

...

@NgModule({
  ...
  imports: [
    ...
    ObjectivTrackerModule.forRoot({
      applicationId: 'app-id',
      endpoint: 'https://collector.application.dev'
    })
  ],
  ...
})

export class AppModule {
  ...
}

```

## Optional - Configure Taggers Directive

While not required we highly recommend configuring our **ObjectivTrackerDirective** as well. This will enable tagging in
templates. Making it much easier to tag [Locations](/taxonomy/reference/location-contexts/overview.md).

How to do so varies widely depending on the architecture of the target Application. Here is just an example of a possible one-time configuration approach.

Assuming the Application has a shared module accessible to all UI templates:

```typescript
import { ObjectivTrackerModule } from '@objectiv/tracker-angular';

@NgModule({
  imports: [
    ...
    ObjectivTrackerModule
  ],
  exports: [
    ...
    ObjectivTrackerModule
  ]
})
export class SharedModule {
  ...
}

```


## Done
The tracker should now be running and auto-tracking some Events already, such as ApplicationLoaded.

Time to start [Tracking Locations](/tracking/angular/how-to-guides/tracking-locations.md)!
