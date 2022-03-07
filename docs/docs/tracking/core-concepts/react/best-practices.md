---
sidebar_position: 4
slug: /tracking/core-concepts/react
---

# Best practices

## Tracking Locations
Even when Context wrapping would not be required for obtaining location uniqueness, it's still a good idea to wrap interactions in a LocationContext anyway.

An extra LocationContext:
- Will give a better understanding of what that area of the page means to your Data team.
- It will act as a safeguard against future additions of interactions in the same area of the page.
- It takes not that much effort to instrument.

### Example of non-futureproof page
Consider the following scenario:

```tsx
<TrackedContentContext Component={Layout} id={'layout'}>
  <header>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </header>
  <TrackedDiv>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </TrackedDiv>
  <footer>
    <TrackedAnchor href="/privacy">Privacy</TrackedAnchor>
    <TrackedAnchor href="/contact">Contact</TrackedAnchor>
  </footer>
</TrackedContentContext>
```

Note how `footer` and `header` have not been instrumented as a Tracked elements.

#### What could possibly go wrong?
Suppose we decide to add another `Sign Up` link in the footer; suddenly we have two identical links under the Layout Content.
It's still easy to fix, but now instead of adding just a link, we have to fix our tracking instrumentation as well.

#### How to avoid collisions
Making sure there's at least one LocationContext tracked around all interactions will suffice to avoid future collisions.

This doesn't mean wrapping every single Link and Button with their own LocationContext.
It's more an exercise of critically identifying the logical sections of your page and tracking them:

##### Thought process
- Do we have interactions with only RootLocationContexts in their LocationStack?
- Which sections already have interactions but not LocationContext around them?
- Which section may get (more) interactions in the future?

It's absolutely worth spending a bit of time understanding what a page does and how it may evolve.

### Example of future-proof page
In this last example, we are free to add any link we want to any of the areas, without risk of collisions.

```tsx
<TrackedContentContext Component={Layout} id={'layout'}>
  <TrackedHeader>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </TrackedHeader>
  <TrackedDiv>
    <TrackedAnchor href="/signup">Sign up</TrackedAnchor>
  </TrackedDiv>
  <TrackedFooter>
    <TrackedAnchor href="/privacy">Privacy</TrackedAnchor>
    <TrackedAnchor href="/contact">Contact</TrackedAnchor>
  </TrackedFooter>
</TrackedContentContext>
```
