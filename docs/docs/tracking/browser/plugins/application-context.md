# ApplicationContext

All Events must contain an [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md) in their Global Contexts.

This Plugin automatically creates one using BrowserTracker's [applicationId parameter](/tracking/browser/api-reference/general/BrowserTracker.md#configuration) as its identifier.

## Installation
Bundled with [@objectiv/tracker-core](https://www.npmjs.com/package/@objectiv/tracker-core) and thus included by default in BrowserTracker as well.

## Implementation
Implements PluginInterface's `initialize` and `enrich` methods.

### initialize
Creates a new instance of ApplicationContext using the Tracker's `applicationId` and stores it in its internal state.

### enrich
Adds the previously created ApplicationContext to the list of Global Contexts of the outgoing Event.

### validate
Nothing. ApplicationContext validation is performed by [OpenTaxonomyValidationPlugin](/tracking/browser/plugins/open-taxonomy-validation-plugin).

### isUsable
Always true; ApplicationContextPlugin is always usable.
