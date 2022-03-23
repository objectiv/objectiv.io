# ApplicationContext

All Events must contain an [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md) in their Global Contexts.

This Plugin automatically creates one using ReactNativeTracker's [applicationId parameter](/tracking/react-native/api-reference/ReactNativeTracker.md#configuration) as its identifier.

## Installation
Bundled with [@objectiv/tracker-core](https://www.npmjs.com/package/@objectiv/tracker-core) and thus included by default in ReactNativeTracker as well.

## Implementation
Implements PluginInterface's `initialize` and `enrich` methods.

### initialize
Creates a new instance of ApplicationContext using the Tracker's `applicationId` and stores it in its internal state.

### enrich
Adds the previously created ApplicationContext to the list of Global Contexts of the outgoing Event.

### validate
Nothing. ApplicationContext validation is performed by [OpenTaxonomyValidationPlugin](/tracking/react-native/plugins/open-taxonomy-validation.md).

### isUsable
Always true; ApplicationContextPlugin is always usable.

## Configuration
Can be disabled by setting ReactNativeTracker's [trackApplicationContext parameter](/tracking/react-native/api-reference/ReactNativeTracker.md#configuration) to false.   

:::caution
Disabling this plugin implies providing your own implementation, as ApplicationContext is still required.
:::
