# RootLocationContextFromURL

All Events must contain a [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md) in their Location Stacks.

On Web we retrieve this information from the first slug of URL by using the [Location.href](https://developer.mozilla.org/en-US/docs/Web/API/Location/href). This behavior is [customizable](#parameters). 

## Parameters

```ts
idFactoryFunction?: () => string;
```

The `idFactoryFunction` parameter can be used to customize how RootLocationContext identifier is generated.

Here is a simple example on how to reconfigure the Plugin: 

```tsx
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

:::tip
Check out this detailed how-to guide on [how to configure Root Locations](/tracking/browser/how-to-guides/configuring-root-locations.md).
:::

## Installation
The package [@objectiv/plugin-root-location-context-from-url](https://www.npmjs.com/package/@objectiv/plugin-root-location-context-from-url) is included by default in BrowserTracker.

## Implementation
Implements PluginInterface's `enrich`.

### enrich
Creates a new instance of RootLocationContext, where its identifier equals the result of `idFactoryFunction`, and adds it to the Location Stack of the outgoing Event in the first position.

### validate
Nothing. RootLocationContext validation is performed by [OpenTaxonomyValidationPlugin](/tracking/browser/plugins/open-taxonomy-validation-plugin).

### isUsable
True if both [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) and [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location) interfaces are available.
