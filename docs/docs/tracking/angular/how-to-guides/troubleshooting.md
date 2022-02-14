---
sidebar_position: 5
---

# Troubleshooting 


## Problem: Collisions
Sometimes the browser console will show a warning about  colliding elements, e.g.:

![Collisions in browser console](/img/docs/tracking-collision-browser-console.png)


The [Core Concepts section explains Collisions and how to solve them](/tracking/core-concepts/locations.md#solving-collisions).

## Problem: Incorrect Location Stack
If the LocationStack is missing some elements, although they have been correctly tagged, the most likely cause is the use of [Portal-like](https://material.angular.io/cdk/portal/overview) methods to render their contents. Eg: they render part of their templates in an arbitrary location of the DOM.

Because the Tracker follows the DOM upwards, to reconstruct where an Interaction occurred, this will lead to incorrect Locations.

Check [this how-to-guide](/tracking/angular/how-to-guides/portals.md) for a detailed example.
