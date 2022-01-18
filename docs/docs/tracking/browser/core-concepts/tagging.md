---
sidebar_position: 2
title: Tagging
slug: tagging
---
:::info why tagging?
If you want to know why we ask you to tag your elements, take a look at the [Core Concepts Introduction](/tracking/core-concepts).
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
[Objectiv's Tracker API](/tracking/api-reference/locationTaggers/overview.md) is used to **tag** any Element
that you want to track. The Tracker then uses this information to automatically decorate the Element in the 
DOM with the respective [TaggingAttributes](/tracking/api-reference/definitions/TaggingAttribute.md). 

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

When the Tracker wants to send an [Event](/tracking/core-concepts/events.md) related to an Element (e.g. a 
click), it uses its decorated [TaggingAttributes](/tracking/api-reference/definitions/TaggingAttribute.md) to 
compose the Event.

## Tagged Elements
These are **Taggable Elements** that have been already decorated by the Objectiv Tracker with at least the 
`elementId` and `context` [TaggingAttributes](/tracking/api-reference/definitions/TaggingAttribute.md). The 
Tagging Attributes supply the Tracker with the information needed to compose & send the right 
[Events](/tracking/core-concepts/events.md).

## Children Tagging Elements
These are **Taggable Elements** that have been already decorated with the 
[TaggingAttribute.tagChildren](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetagchildren) by using the [tagChildren](/tracking/api-reference/locationTaggers/tagChildren.md) Location Tagger. They will execute the given [ChildrenTaggingQueries](/tracking/api-reference/definitions/ChildrenTaggingQueries.md), at runtime, and tag matching children Elements.

[ChildrenTaggingQuery](/tracking/api-reference/definitions/ChildrenTaggingQuery.md) objects are composed of a CSS Selector query and a set of TaggingAttributes. Each matching Element will be decorated with the given Location Tagger result. 

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
