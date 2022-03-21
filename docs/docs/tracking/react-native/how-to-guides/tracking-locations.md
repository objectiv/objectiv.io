---
sidebar_position: 3
---

# Tracking Locations

import useBaseUrl from '@docusaurus/useBaseUrl';

## Collisions
If you started [instrumenting your Interactions](/tracking/react-native/how-to-guides/tracking-interactions.md), chances are you already ran into some Collisions.

Example of a collision of the `footer` element in the browser's console:

<img alt="Collision: duplicated footer" src={useBaseUrl('img/docs/tracking-collision-react.png')} style={{ border: '1px solid lightgrey'}} />

### Unique Locations

To make modeling easier it's important to ensure all Tracked interactive Elements are uniquely identifiable. Assigning a unique identifier to each Element is not always possible, most often impractical. Think of reusable components. 

This is where our LocationStack comes in handy in the form of Tracked Context and Element components.

## Tracked Contexts and Elements

Our [Taxonomy](/taxonomy/introduction.md) comes with a number of [LocationContexts](/taxonomy/reference/location-contexts/overview.md) aimed at describing the UI unambiguously.

For each of these, the React SDK offers a TrackedContext component.     

There are also some HTML semantic aliases, called TrackedElements, aimed at tracking JSX HTML Elements. We may add more of these in the future.

Here is a full recap:

#### ContentContext
// TODO

#### ExpandableContext
// TODO

#### InputContext
// TODO

#### LinkContext
// TODO

#### MediaPlayerContext
// TODO

#### NavigationContext
// TODO

#### OverlayContext
// TODO

#### PressableContext
// TODO

#### RootLocationContext
// TODO


## Example of collision
Let's see how these Components can help us in making all Interactions uniquely identifiable in the UI.

Here is an example page with a collision:
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

The same link has been used multiple times across the page.  

React Tracker will notify of the collision of the second link with the first one.

### Solving a collision
To solve the issue, we can simply make the Location of these Elements richer:

```ts
import { TrackedAnchor, TrackedContentContext, TrackedDiv } from '@objectiv/tracker-react-native';
```

```tsx
import { TrackedHeader } from "@objectiv/tracker-react-native";

<TrackedContentContext Component={Layout} id={'layout'}>
  <TrackedHeader>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </TrackedHeader>
  <TrackedDiv id={'body'}>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </TrackedDiv>
</TrackedContentContext>
```

:::tip
You may have noticed that the TrackedDiv in the example above is not strictly necessary to solve the collision. So, why did we add it?

More on that in our [best practices](/tracking/core-concepts/react-native/best-practices.md) around what to track and why.
:::

## Best practices
Solving Collisions should not be an issue to deal with frequently.    
[Check out how to avoid them](/tracking/core-concepts/react-native/best-practices.md) in the first place by reading what we think are good practices around tracking Locations.

## What's next?
This is pretty much it for the basics of tracking with React SDK.  
Check out the [API Reference](/tracking/react-native/api-reference/overview.md) and its examples for more details about all the available Components, Hooks and APIs.  
