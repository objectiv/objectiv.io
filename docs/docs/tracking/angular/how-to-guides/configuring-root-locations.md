---
sidebar_position: 4
---

# Configuring Root Locations

Since Angular Tracker is a small wrapper around Browser Tracker, the way to customize automatic Root Locations is similar.

The only difference is how to pass the new Plugins to the Tracker. Here is a full example:

```ts
import { RootLocationContextFromURLPlugin } from '@objectiv/plugin-root-location-context-from-url'
import { ObjectivTrackerModule, makeDefaultPluginsList } from '@objectiv/tracker-angular';

const trackerConfig = {
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev'
};

// Get the default list of Plugins of Angular/BrowserTracker
const trackerPlugins = makeDefaultPluginsList(trackerConfig)

  // Get rid of the default RootLocationContextFromURLPlugin
  .filter(plugin => plugin.pluginName !== 'RootLocationContextFromURLPlugin')

  // Add a new version of RootLocationContextFromURLPlugin
  .concat(
    new RootLocationContextFromURLPlugin({
      // Pass the trackerConfig to the Plugin
      ...trackerConfig,

      // And a custom, not yet very useful, idFactoryFunction 
      idFactoryFunction: () => {
        return 'not-so-useful-root-location-id'
      }
    })
  );

...

@NgModule({
  ...
  imports: [
    ...
    ObjectivTrackerModule.forRoot({
      ...trackerConfig,
      plugins: trackerPlugins
    })
  ],
  ...
})

export class AppModule {
  ...
}
```

For more details and info on how to compose a new set of Plugins, check out the [BrowserTracker: Configuring Root Locations](/tracking/browser/how-to-guides/configuring-root-locations.md) guide.
