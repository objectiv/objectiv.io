---
sidebar_position: 1
title: Overview
---

# React Native Tracker Plugins

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
- Plugin: [ApplicationContextPlugin](/tracking/react-native/plugins/application-context.md)
- Plugin: [OpenTaxonomyValidationPlugin](/tracking/react-native/plugins/open-taxonomy-validation.md)

## Optional
- Component library: [ReactNavigation](/tracking/react-native/plugins/react-navigation.md)
