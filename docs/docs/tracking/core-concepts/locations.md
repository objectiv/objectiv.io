---
sidebar_position: 4
title: Locations
slug: locations
---

## Well-defined hierarchical UI positions
Locations in Objectiv describe the exact position in an application's UI from where an Event was triggered. 
It is composed of a hierarchical stack of UI elements; the order defines the hierarchy.

An example Location Stack for an Event:
```json
  "location_stack":[
    {
      "_type":"WebDocumentContext",
      "id":"test-page",
    },
    {
      "_type":"ContentContext",
      "id":"homepage"
    },
    {
      "_type":"ContentContext",
      "id":"hero"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "href":"/path"
    }
  ]
```

In this example, there is a link that lives in Section 'hero', within Section 'homepage'.

## Every Event is unique
Together with an `id`, a Location Stack makes every Event unique. For example, taking the previous example, 
another Link with the same `id` on the homepage, but in a Section called 'footer', is still unique:

```json
  "location_stack":[
    {
      "_type":"RootLocationContext",
      "id":"test-page",
    },
    {
      "_type":"ContentContext",
      "id":"homepage"
    },
    {
      "_type":"ContentContext",
      "id":"footer"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "href":"/path"
    }
  ]
```

## A contextual layer over your application's UI
Having a Location Stack for Events is like having a contextual layer over your UI that serves multiple 
purposes:
* The collected data becomes **rich and descriptive**. You can pinpoint exactly what event happened, which 
  type it was, in which context it happened and from which location in the UI it was triggered.
* Your tracking instrumentation becomes [**debuggable**](./validation.md). You'll be able to catch tracking 
  instrumentation errors early on because it is being validated as you’re developing it.
* The collected data **no longer requires significant cleaning and restructuring** before it can be used for 
  modeling because it was collected in a structured manner and validated at the first step of the pipeline.

## Applying Locations

### Tag any Element
Locations are usually applied automatically by 
[tagging](/tracking/api-reference/locationTaggers/overview.md) Elements in the UI. This binds the 
appropriate [LocationContext](/taxonomy/reference/location-contexts/overview.md) to it, using 
[Tagging Attributes](/tracking/api-reference/definitions/TaggingAttribute.md). Events are then triggered 
automatically based on that [LocationContext](/taxonomy/reference/location-contexts/overview.md) bound to the 
[Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements).

### Tag Sections
You can tag logical sections in your application's UI (e.g. the hero element on a homepage) using 
[tagContent](/tracking/api-reference/locationTaggers/tagContent.md). This binds a 
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
[tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md) API is available, which tags a Taggable 
Element to be tracked as any LocationContext.
