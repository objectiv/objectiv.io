---
sidebar_position: 1
title: Overview
---

# React Tracker Plugins

There are two kind of Plugins: Plugin implementations and Component libraries.

## Plugin Implementations
These may implement PluginInterface methods:
- `initialize`, executed when the Plugin is created
- `enrich`, executed before an event is validated
- `validate`, executed before an event is sent
- `isUsable`, used to determine if the plugin can function in the target environment

## Component libraries
These are simply modules containing pre-made tracked Components, hooks, factories and helpers to ease tracking third party libraries.

## Included by default
- Plugin: [ApplicationContextPlugin](/tracking/react/plugins/application-context.md)
- Plugin: [HttpContextPlugin](/tracking/react/plugins/http-context.md)
- Plugin: [OpenTaxonomyValidationPlugin](/tracking/react/plugins/open-taxonomy-validation.md)
- Plugin: [PathContextFromURLPlugin](/tracking/react/plugins/path-context-from-url.md)
- Plugin: [RootLocationContextFromURLPlugin](/tracking/react/plugins/root-location-context-from-url.md)

## Optional
- Component library: [ReactRouterTrackedComponents](/tracking/react/plugins/react-router-tracked-components.md)
