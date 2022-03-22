# OpenTaxonomyValidation

Executes a number of validation rules to ensure the quality of the inbound data.  
When ReactTracker executes in development mode, all violations will be logged early to the console.

## Implementation
Implements PluginInterface's `validate`.

### validate
The following rules are executed:
- [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md) must be present once in Global Contexts.
- [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md) must be present once in Location Stack at position 0.

### isUsable
Always true; OpenTaxonomyValidationPlugin is always usable.

## Package
Bundled with [@objectiv/tracker-core](https://www.npmjs.com/package/@objectiv/tracker-core) and thus included by default in ReactTracker as well.
