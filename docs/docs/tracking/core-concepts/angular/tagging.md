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
```html
<a 
  [tagLink]="{ id: 'lnk-id', href: '/path' }"
  href="/path"
>
    Go!
</a>
```

...would result in something like the following decorated attributes:

```html
<a 
  data-objectiv-element-id="<a unique identifier>" 
  data-objectiv-context="<stringified location context>" 
  data-objectiv-track-clicks="true" 
  href="/path"
>
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
```html
 <section [tagContent]="{ id: 'layout' }">
   <header [tagContent]="{ id: 'homepage-hero' }">
     <div [tagContent]="{ id: 'section1' }">
       <a [tagLink]="{ id: 'my-link', href: '/link1' }" href="/link1">Link 1</a>
     </div>
     <div [tagContent]="{ id: 'section2' }">
       <a [tagLink]="{ id: 'my-link', href: '/link2' }" href="/link2">Link 2</a>
     </div>
   </header>
 </section>
```

As you can see, there are two links with the same ID (`my-link`). However, as they are contained within
different tagged Sections, they are still unique, and when analyzing the data, you can follow the Location
Stack to understand where in the UI each Event originated.

## Tagged Elements
These are **Taggable Elements** that have been already decorated by the Objectiv Tracker with at least the 
`elementId` and `context` [BrowserTracker:TaggingAttributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md). The 
Tagging Attributes supply the Tracker with the information needed to compose & send the right 
[Events](/taxonomy/reference/events/overview.md).

## Children Tagging Elements
These are **Taggable Elements** that have been already decorated with the 
[BrowserTracker:TaggingAttribute.tagChildren](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren) by using the [tagChildren](/tracking/angular/api-reference/locationTaggers/tagChildren.md) Location Tagger. They will execute the given [BrowserTracker:ChildrenTaggingQueries](/tracking/browser/api-reference/definitions/ChildrenTaggingQueries.md), at runtime, and tag matching children Elements.

[BrowserTracker:ChildrenTaggingQuery](/tracking/browser/api-reference/definitions/ChildrenTaggingQuery.md) objects are composed of a CSS Selector query and a set of TaggingAttributes. Each matching Element will be decorated with the given Location Tagger result. 

A **tagChildren** example:

```html
<div
  [tagChildren]="[
    {
      queryAll: 'button[aria-label=&quot;Previous&quot;]',
      tagAs: tagPressable({ id: 'prev' })
    },
    {
      queryAll: 'button[aria-label=&quot;Next&quot;]',
      tagAs: tagPressable({ id: 'next' })
    }
  ]"
>
  ...
</div>
```

The div Element above has been decorated with a ChildrenTaggingQuery. It will execute the given `queryAll` and apply the result of the `tagPressable` parameter to any matching child Element. 
