---
sidebar_position: 4
---

# Tracking Locations
If you started [instrumenting your Interactions](/tracking/react/how-to-guides/tracking-interactions.md), chances are you already ran into some Collisions.

## The importance of unique Locations

To make modeling easier it's important to ensure all Tracked interactive Elements are uniquely identifiable.

Assigning a unique identifier to each Element is not always possible, most often impractical, and simply doesn't work in many scenarios. Think of reusable components for example. Unique identifiers are also harder to read and reason about on the Data side of things.

This is where our LocationStack comes in handy.  

## Example of collision
Let's take a look at this page:

```tsx
<TrackedContentContext Component={Layout} id={'layout'}>
  <header>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </header>
  <div>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </div>
</TrackedContentContext>
```

In the example above we have a page with the same link used multiple times across the page.  
This is not so unlikely for CTAs, especially on longer pages.

React Tracker will notify of the collision of the second link with the first one.

## Solving a collision
To solve the issue, we can simply make the Location of these Elements richer:

```ts
import { TrackedAnchor, TrackedContentContext, TrackedDiv } from '@objectiv/tracker-react';
```

```tsx
import { TrackedHeader } from "@objectiv/tracker-react";

<TrackedContentContext Component={Layout} id={'layout'}>
  <TrackedHeader>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </TrackedHeader>
  <TrackedDiv>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </TrackedDiv>
</TrackedContentContext>
```

## Best practices
Solving Collisions should not be a issue to deal with frequently.    
[Check out how to avoid them](/tracking/react/core-concepts/best-practices.md) in the first place by reading what we think are good practices around tracking Locations.
