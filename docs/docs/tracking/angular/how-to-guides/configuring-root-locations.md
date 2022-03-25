---
sidebar_position: 4
---

# Configuring Root Locations

Since Angular Tracker is a small wrapper around Browser Tracker, the way to customize automatic Root Locations is similar.

The only difference is how to pass the new Plugins to the Tracker. Here is a full example:

```ts
import { RootLocationContextFromURLPlugin } from '@objectiv/plugin-root-location-context-from-url';
import { ObjectivTrackerModule, makeDefaultPluginsList } from '@objectiv/tracker-angular';

...

@NgModule({
  ...
  imports: [
    ...
    ObjectivTrackerModule.forRoot({
      applicationId: 'app-id',
      endpoint: 'https://collector.app.dev',
      plugins: [
        new RootLocationContextFromURLPlugin({
          idFactoryFunction: customIdFactoryFunction
        })
      ]
    })
  ],
  ...
})

export class AppModule {
  ...
}
```

For more details and info on how to compose a new set of Plugins, check out the [BrowserSDK: Configuring Root Locations](/tracking/browser/how-to-guides/configuring-root-locations.md) guide.
