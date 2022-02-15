---
sidebar_position: 3
---

# Configuring Root Locations

RootLocationContextFromURLPlugin factors a RootLocationContext based on the first slug of the URL.

While this works for a lot of websites, there are scenarios where this logic needs to be adjusted:
- Applications running in sub-folder or subdomain
- Applications that rely on Search Parameters
- Applications that rely on Hashes
- Applications not using URLs at all

Let's see how we can reconfigure RootLocationContextFromURLPlugin to cover these cases.

## Reconfigure Tracker plugins
Normally a Tracker instance can be created using the following syntax: 
```ts
makeTracker({ 
  applicationId: 'app-id', 
  endpoint: 'https://collector.app.dev'
});
```

### Make a new list of Plugins
To reconfigure the tracker Plugins we have to make a new list of them. To do so, we need to:

1. Split out the configuration in its own variable.
2. Use `makeDefaultPluginsList`, from ReactTracker, to build the default list of plugins.
3. Filter out RootLocationContextFromURLPlugin and replace it with a new customized instance. 

```ts
import { RootLocationContextFromURLPlugin } from '@objectiv/plugin-root-location-context-from-url';
import { makeDefaultPluginsList } from "@objectiv/tracker-browser";

const trackerConfig = {
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev'
};

// Get the default list of Plugins of ReactTracker
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

makeTracker({
  ...trackerConfig,
  plugins: trackerPlugins
});
```

## Customize RootLocationContext identifiers
We are now ready to swap the `idFactoryFunction` of `RootLocationContextFromURLPlugin` with a custom implementation.
This function will be invoked before each Event is sent to generate a RootLocationContext.

:::caution
These are just examples. Actual implementations should perform a lot more validation and testing. 
:::

### Website running in sub-folder
Example URL: `http://www.website.dev/slug1/slug2`.   
Expected RootLocationContext id: `slug2`.  

```ts
idFactoryFunction: () => {
  const secondSlug = location.pathname.split('/')[2];

  return secondSlug ? secondSlug.trim().toLowerCase() : 'home';
}
```

### Website running in subdomain
Example URL: `http://organization.website.dev/`.   
Expected RootLocationContext id: `organization`.

```ts
idFactoryFunction: () => {
  return location.host.split('.')[0] ?? 'home';
}
```

### Search Parameter based routing
Example URL: `http://www.website.dev/?section=dashboard`.   
Expected RootLocationContext id: `dashboard`.

```ts
idFactoryFunction: () => {
  return new URLSearchParams(location.search).get('section') ?? 'home';
}
```

### Hash based routing
Example URL: `http://www.website.dev/#/dashboard`.   
Expected RootLocationContext id: `dashboard`.

```ts
idFactoryFunction: () => {
  return location.hash.split('/')[1] ?? 'home';
}
```

## Disabling RootLocation detection
If none of the methods above works for your specific scenario, there's always the option of disabling the plugin entirely.

```ts
import { makeDefaultPluginsList } from "@objectiv/tracker-react";

const trackerConfig = {
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev'
};

// Get the default list of Plugins of ReactTracker and remove RootLocationContextFromURLPlugin 
const trackerPlugins = makeDefaultPluginsList(trackerConfig)
  .filter(plugin => plugin.pluginName !== 'RootLocationContextFromURLPlugin');

makeTracker({
  ...trackerConfig,
  plugins: trackerPlugins
});
```

:::caution
RootLocationContext is obligatory in all LocationStacks.  

There are several ways to track them without RootLocationContextFromURLPlugin:
- Wrap logical pages in [RootLocationContextWrapper](/tracking/react/api-reference/locationWrappers/RootLocationContextWrapper.md).
- Enrich root Elements or Components with [TrackedRootLocation](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md). Eg: a Layout Component.
- Write your own Plugin and leverage your internal state or non-url based routing system.

And if you are unsure which to pick or how to begin, please let us know. We love a challenge.
:::