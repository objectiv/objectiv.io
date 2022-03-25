---
sidebar_position: 3
slug: /tracking/react/how-to-guides/test
---

# Tracking Locations

import useBaseUrl from '@docusaurus/useBaseUrl';

## Collisions
If you started [instrumenting your Interactions](/tracking/react/how-to-guides/tracking-interactions.md), chances are you already ran into some Collisions.

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
- [TrackedContentContext](/tracking/react/api-reference/trackedContexts/TrackedContentContext.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)

#### ExpandableContext
- [TrackedExpandableContext](/tracking/react/api-reference/trackedContexts/TrackedExpandableContext.md)

#### InputContext
- [TrackedInputContext](/tracking/react/api-reference/trackedContexts/TrackedInputContext.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)

#### LinkContext
- [TrackedLinkContext](/tracking/react/api-reference/trackedContexts/TrackedLinkContext.md)
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)

#### MediaPlayerContext
- [TrackedMediaPlayerContext](/tracking/react/api-reference/trackedContexts/TrackedMediaPlayerContext.md)

#### NavigationContext
- [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md)
- [TrackedNav](/tracking/react/api-reference/trackedElements/TrackedNav.md)

#### OverlayContext
- [TrackedOverlayContext](/tracking/react/api-reference/trackedContexts/TrackedOverlayContext.md)

#### PressableContext
- [TrackedPressableContext](/tracking/react/api-reference/trackedContexts/TrackedPressableContext.md)
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)

#### RootLocationContext
- [TrackedRootLocationContext](/tracking/react/api-reference/trackedContexts/TrackedRootLocationContext.md)


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
import { TrackedAnchor, TrackedContentContext, TrackedDiv } from '@objectiv/tracker-react';
```

```tsx
import { TrackedHeader } from "@objectiv/tracker-react";

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

More on that in our [best practices](/tracking/core-concepts/react/best-practices.md) around what to track and why.
:::

## Best practices
Solving Collisions should not be an issue to deal with frequently.    
[Check out how to avoid them](/tracking/core-concepts/react/best-practices.md) in the first place by reading what we think are good practices around tracking Locations.

## What's next?
This is pretty much it for the basics of tracking with React SDK.  
Check out the [API Reference](/tracking/react/api-reference/overview.md) and its examples for more details about all the available Components, Hooks and APIs.  
