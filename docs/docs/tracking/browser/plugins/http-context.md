# HttpContext

[HttpContext](/taxonomy/reference/global-contexts/HttpContext.md) carries information about Referrer, User Agent and remote address.

This Plugin automatically retrieves the former from the [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) and the latter from the [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent).

## Installation
Bundled with [@objectiv/tracker-core](https://www.npmjs.com/package/@objectiv/tracker-core) and thus included by default in BrowserTracker as well.

## Implementation
Implements PluginInterface's `initialize` and `enrich` methods.

### initialize
Creates a new instance of HttpContext and stores it in its internal state.

### enrich
Adds the previously created HttpContext to the list of Global Contexts of the outgoing Event.

### isUsable
True if both [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) and [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) interfaces are available.

### Configuration
Can be disabled by setting BrowserTracker's [trackHttpContext parameter](/tracking/browser/api-reference/general/BrowserTracker.md#configuration) to false.

:::caution
Disabling this plugin implies providing your own implementation, as HttpContext is still required.
:::