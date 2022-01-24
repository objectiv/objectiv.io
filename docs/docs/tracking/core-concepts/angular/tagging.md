---
sidebar_position: 2
title: Tagging
slug: /tracking/core-concepts/angular
---

:::info why tagging?
If you want to know why we ask you to tag your elements, take a look at the [Core Concepts Introduction](/tracking/core-concepts/angular).
:::

To understand **tagging**, we first need to know what we mean by **Elements**. 

## Elements 
When talking about **Elements** we usually refer to DOM Interfaces and APIs such as 
[Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node) / 
[Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) and 
[EventTargets](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

## Taggable Elements
Taggable Elements are [HTMLElements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and 
[SVGElements](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement), which are implementations of the 
beforementioned [Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element). 

Examples are a `<div>` or an `<a>` element in HTML.

## Tagging of Elements
[Location Taggers](/tracking/angular/api-reference/locationTaggers/overview.md) are used to **tag** any Element
that you want to track. The Tracker then uses this information to automatically decorate the Element in the 
DOM with the respective [BrowserTracker:TaggingAttributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md). 

A **tagging** example in React:
```js
<LinkComponent 
  {...tagLink({ id: 'link-id', href: '/path' })} 
  to="/path">
    Go!
</LinkComponent>
```

...would result in something like the following decorated attributes:

```html
<a 
  data-objectiv-element-id="<a unique identifier>" 
  data-objectiv-context="<string of encoded contexts>" 
  data-objectiv-track-clicks="true" 
  href="/path">
  Go!
</a>
```

When the Tracker wants to send an [Event](/taxonomy/reference/events/overview.md) related to an Element (e.g. a 
click), it uses its decorated [BrowserTracker:TaggingAttributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md) to 
compose the Event.

## Tagging Content
You can tag logical sections in your application's UI (e.g. the hero element on a homepage) using
[tagContent](/tracking/angular/api-reference/locationTaggers/tagContent.md). This binds a
[ContentContext](/taxonomy/reference/location-contexts/ContentContext.md) to it.

This might seem without benefit, as no Events are triggered (by default) on tagged sections. However,
tagging Elements is useful in two main ways:

1. When any Event triggers, a hierarchical Location Stack is generated for it, including all the sections it
   originated from. When analyzing the resulting data, you can fully understand where every Event came from.
2. Every Event becomes unique (see next section about collisions).

An example of tagging sections and Links in your UI:
```js
...
import { tagContent, tagLink } from '@objectiv/tracker-browser';

export default function Test() {
  return (
    <Layout {...tagContent({ id: 'layout' })}>
      <header {...tagContent({ id: 'homepage-hero' })}>
        <div {...tagContent({ id: 'section1' })}>
          <Link {...tagLink({ id: 'my-link', href: '/link1' })} to="/link1">Link 1</Link>
        </div>
        <div {...tagContent({ id: 'section2' })}>
          <Link {...tagLink({ id: 'my-link', href: '/link2' })} to="/link2">Link 2</Link>
        </div>
      </header>
    </Layout>
  );
}
```

As you can see, there are two links with the same ID (`my-link`). However, as they are contained within
different tagged Sections, they are still unique, and when analyzing the data, you can follow the Location
Stack to understand where in the UI each Event originated.

:::note
Tagging Sections can/should also be applied to pages/screens, see section
[Applying Locations to pages/screens](#applying-locations-to-pagesscreens) below.
:::

### Solving collisions
See below for a simplified example taken from [our website's About page](https://objectiv.io/about/), which
lists the contributors to Objectiv. It renders a link to each Contributor's profile:

```js
function Contributor({name, gitHubUsername}) {
  const ghProfileLink = "https://github.com/" + gitHubUsername;

  return (
    <div {...tagContent({id: 'contributor'})}>
      <Link 
        {...tagLink({id: gitHubUsername, href: ghProfileLink})}
        href={ghProfileLink}>
        @{gitHubUsername}
      </Link>
    </div>
  );
}

export default function Contributors() {
  return (
    <Layout>
      // `contributors` is retrieved from a JSON file
      {contributors && contributors.length > 0 && (
        <div {...tagContent({id: 'contributors'})}>
          {contributors.map((props, idx) => (
            <Contributor key={idx} {...props} />
          ))}
        </div>
      )}
    </Layout>
  );
}
```

As you can see, each contributor `<div>` has the same `id`, _'contributor'_. This will result in collisions in
the Location Stack, and the browser console will show a warning about the colliding elements:

![Collisions in browser console](/img/docs/tracking-collision-browser-console.png)

How to fix this?

* You could remove the `<div>` with the 'contributor' `<id>`. But it probably serves a purpose.
* Or: you could change the `id` to be unique, e.g. every contributor's GitHub username.

We will use the second option, making each contributor `<div>` ID unique:

```js
    <div {...tagContent({id: gitHubUsername})}>
```
instead of
```js
    <div {...tagContent({id: 'contributor'})}>
```

### Applying Locations manually
Sometimes it may be preferable, or necessary, to tag Locations manually; for these cases, a low-level
[tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md) API is available, which tags a Taggable
Element to be tracked as any LocationContext.


## Tagged Elements
These are **Taggable Elements** that have been already decorated by the Objectiv Tracker with at least the 
`elementId` and `context` [BrowserTracker:TaggingAttributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md). The 
Tagging Attributes supply the Tracker with the information needed to compose & send the right 
[Events](/taxonomy/reference/events/overview.md).

## Children Tagging Elements
These are **Taggable Elements** that have been already decorated with the 
[BrowserTracker:TaggingAttribute.tagChildren](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren) by using the [tagChildren](/tracking/angular/api-reference/locationTaggers/tagChildren.md) Location Tagger. They will execute the given [BrowserTracker:ChildrenTaggingQueries](/tracking/browser/api-reference/definitions/ChildrenTaggingQueries.md), at runtime, and tag matching children Elements.

[BrowserTracker:ChildrenTaggingQuery](/tracking/browser/api-reference/definitions/ChildrenTaggingQuery.md) objects are composed of a CSS Selector query and a set of TaggingAttributes. Each matching Element will be decorated with the given Location Tagger result. 

A **tagChildren** example in React:

```typescript jsx
<div
  {...tagChildren([
    {
      queryAll: 'button[aria-label="Previous"]',
      tagAs: tagPressable({ id: 'prev' })
    }
  ])}
>
  ...
</div>
```

The div Element above has been decorated with a ChildrenTaggingQuery. It will execute the given `queryAll` and apply the result of the `tagPressable` parameter to any matching child Element. 
