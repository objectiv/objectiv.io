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

### Specifying a customized Plugin
To override the default implementation of RootLocationContextFromURLPlugin we simply provide a new instance of it.

```ts
import { RootLocationContextFromURLPlugin } from '@objectiv/plugin-root-location-context-from-url';
import { makeTracker } from "@objectiv/tracker-browser";

makeTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
  plugins: [
    new RootLocationContextFromURLPlugin({
      idFactoryFunction: customIdFactoryFunction
    })
  ]
});
```

## idFactoryFunction examples
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
makeTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
  trackRootLocationContextFromURL: false
});
```

:::caution
Missing RootLocationContext will be reported as an error. All LocationStacks must contain a RootLocationContext as first Element, as defined by the [Open Taxonomy](/taxonomy/introduction.md).

There are several ways to track them without RootLocationContextFromURLPlugin:
- Tag logical pages in [tagRootLocation](/tracking/browser/api-reference/locationTaggers/tagRootLocation.md).
- Write your own Plugin and leverage your internal state or non-url based routing system.

And if you are unsure which to pick or how to begin, please let us know. We love a challenge.
:::