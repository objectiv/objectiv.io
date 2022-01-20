---
sidebar_position: 3
---

# Tracking Locations

Now that the [Tracker is up and running](/tracking/react/how-to-guides/getting-started.md) we can start 
thinking about Tracking some Elements or Components as 
[LocationContexts](/taxonomy/reference/location-contexts/overview.md) using [Tracked Elements](/tracking/react/api-reference/trackedElements/overview.md) or [Tracked Contexts](/tracking/react/api-reference/trackedElements/overview.md).

The former follow HTML semantic, while the latter are generic wrappers that can render any Component or Element. Both are built on top of our [Providers](/tracking/react/api-reference/common/providers/overview.md) and [Location Wrappers](/tracking/react/api-reference/locationWrappers/overview.md).

:::info Locations?
Take a look at the [Core Concepts Introduction](/tracking/core-concepts) for more information on what Locations are and why are they so important.
:::

## Interactions
A good rule of thumb is to start by identifying all the interactions in the Application. 

### Pressable
Anything that the user can interact with, but does not cause a URL change, can be considered Pressable. 

Here are some common examples of Pressable:

```tsx
// A button Element 
<button onClick={handleClick}>Click Me!</button>

// A Button Component 
<Button onClick={handleClick}>Do It!</Button>

// An arbitrary clickable Element
<img src="/img/ok.png" alt="OK!" onClick={handleClick}/>
```

This is how they can be tracked using React Tracker tracked components.

```ts
import { TrackedButton, TrackedPressableContext } from '@objectiv/tracker-react';
```

```tsx
// A button tag can be tracked by simply swapping the button Element tag with TrackedButton 
<TrackedButton onClick={handleClick}>Click Me!</TrackedButton>

// We can swap any Component with TrackedPressableContext configured to render the original 
<TrackedPressableContext Component={Button} onClick={handleClick}>Do It!</TrackedPressableContext>

// The same applies to an image, or any other Component or HTML Elements
<TrackedPressableContext Component={'img'} src="/img/ok.png" alt="OK!" onClick={handleClick} />
```


### Link
Links are interactive elements that cause a change in the current URL. Thus, we'd like to track the destination href.

```typescript jsx
// A link tag 
<a href="/somewhere">Go!</a>

// a Link component 
<Link to="/cart">Back</Link>
```

This is how they can be tracked using React Tracker tracked components.

```ts
import { TrackedAnchor, TrackedLinkContext } from '@objectiv/tracker-react';
```

```tsx
// A anchor tag can be tracked by simply swapping the anchor Element tag with TrackedAnchor 
<TrackedAnchor href="/somewhere">Go!</TrackedAnchor>

// Link can be swapped with a TrackedLinkContext with the addition of an extra `href` property   
<TrackedLinkContext Component={Link} href="/cart" to="/cart">Do It!</TrackedLinkContext>
```

:::tip
We highly recommend moving TrackedContext based Components to their own modules for re-usability.   

Here is a real example we made for Docusaurus Links:

```tsx
import Link, { LinkProps } from "@docusaurus/Link";
import { TrackedLinkContext, TrackedLinkContextProps } from "@objectiv/tracker-react";
import React from 'react';

export type TrackedLinkProps = Omit<TrackedLinkContextProps, 'Component' | 'href'> & LinkProps;

export const TrackedLink = React.forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  (props, ref) => (
    <TrackedLinkContext Component={Link} {...props} href={props.href ?? props.to} ref={ref}/>
  )
)
```

Now you can use `<TrackedLink to="/cart">Back</Link>` anywhere without having to remember to add the `href` each time.

:::

## Tracking Content
To make modeling easier it's important to ensure all Tracked interactive Elements are uniquely identifiable.   

That said, assigning a unique identifier to each Element is not always possible and most often impractical. 
Think of reusable components for example.

Unique identifiers are also harder to read and reason about on the Data side of things.

A more thorough example:
```ts
import { TrackedAnchor, TrackedContentContext, TrackedDiv } from '@objectiv/tracker-react';
```

```tsx
<TrackedContentContext Component={Layout} id={'layout'}>
  <header>
    <TrackedDiv id={'section1'}>
      <TrackedAnchor href="/link1">Link 1</TrackedAnchor>
    </TrackedDiv>
    <TrackedDiv id={'section2'}>
      <TrackedAnchor href="/link2">Link 2</TrackedAnchor>
    </TrackedDiv>
  </header>
</TrackedContentContext>
```

:::info
Interesting to note in the example above is that the two TrackedDiv are actually not really necessary, as the links
would be uniquely identifiable anyway. 

It's still good practice to wrap logical section in ContentContexts as they give a better understanding of what that section of the page means to the Data team, and safeguard for future addition of interactions to it.
:::
