# PathContextFromURL

[PathContext](/taxonomy/reference/global-contexts/PathContext.md) indicates where an event occurred.

On Web we retrieve this information from the URL by using the [Location.href](https://developer.mozilla.org/en-US/docs/Web/API/Location/href).

:::info
PathContexts are parsed further server-side for generating other Contexts as well, such as [MarketingContext](/taxonomy/reference/global-contexts/MarketingContext.md).
:::

## Installation
The package [@objectiv/plugin-path-context-from-url](https://www.npmjs.com/package/@objectiv/plugin-path-context-from-url) is included by default in BrowserTracker.

## Implementation
Implements PluginInterface's `enrich` and `validate` methods.

### enrich
Creates a new instance of PathContext, where its identifier equals the current URL, and adds it to the list of Global Contexts of the outgoing Event.

### validate
If this plugin is usable, [PathContext](/taxonomy/reference/global-contexts/PathContext.md) must be present once in Global Contexts.  

### isUsable
True if both [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) and [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location) interfaces are available.
