---
sidebar_position: 4
title: Validation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Data tracked by Objectiv adheres to an open, standardized [Taxonomy](/taxonomy/introduction.md). This means it's 
well-structured & self-descriptive, and can be validated at the first step of the pipeline. Objectiv provides 
several tools to catch errors before data starts flowing in, outlined below.

## Build-time validation
All Objectiv's functions come with TypeScript definitions.

During instrumentation, you'll get inline documentation for every function, and linting for any validation 
issues: unknown tagging/tracking calls, missing properties, or wrongly typed properties.

Example inline error in IDE:
<img alt="IDE validation: property id" src={useBaseUrl('img/docs/ide-typescript-validation.png')} />

## Run-time validation
When you run your application, any validation errors are caught by the Objectiv debugger, and displayed in the
browser console:

* **Errors**: Warnings are thrown for unknown tagging/tracking calls, missing properties, or wrongly typed 
  properties.
* **Uniqueness**: If an Event `id` and its [Location Stack](locations.md) are not unique, an Error is thrown.

## Collector validation
As a final catch-all, Objectiv's [Collector](/tracking/collector/introduction.md) validates any incoming Event against the 
[Taxonomy and its properties](/taxonomy/reference/events/overview.md). 

For more background, see the [Collector docs](/tracking/collector/introduction.md).
