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
      "id":"#document",
      "url":"https://example.com/path"
    },
    {
      "_type":"SectionContext",
      "id":"homepage"
    },
    {
      "_type":"SectionContext",
      "id":"hero"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "text":"Go!",
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
      "_type":"WebDocumentContext",
      "id":"#document",
      "url":"https://example.com/path"
    },
    {
      "_type":"SectionContext",
      "id":"homepage"
    },
    {
      "_type":"SectionContext",
      "id":"footer"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "text":"Go!",
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
[tagElement](tracking/api-reference/locationTaggers/tagElement.md). This binds a 
[SectionContext](taxonomy/reference/location-contexts/SectionContext.md) to it.

This might seem without benefit, as no Events are triggered (by default) on tagged Sections. However, 
tagging Elements is useful in two main ways:

1. When any Event triggers, a hierarchical Location Stack is generated for it, including all the Sections it 
  originated from. When analyzing the resulting data, you can fully understand where every Event came from.
2. Every Event becomes unique (see next section about collisions).

An example of tagging Sections and Links in your UI:
```js
...
import { tagElement, tagLink } from '@objectiv/tracker-browser';

export default function Test() {
  return (
    <Layout {...tagElement({ id: 'layout' })}>
      <header {...tagElement({ id: 'homepage-hero' })}>
        <div {...tagElement({ id: 'section1' })}>
          <Link {...tagLink({ id: 'my-link', text: 'Link 1', href: '/link1' })} to="/link1">Link 1</Link>
        </div>
        <div {...tagElement({ id: 'section2' })}>
          <Link {...tagLink({ id: 'my-link', text: 'Link 2', href: '/link2' })} to="/link2">Link 2</Link>
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
See below for a simplified example taken from [our website's About page](https://objectiv.io/about), which 
lists the contributors to Objectiv. It renders a link to each Contributor's profile:

```js
function Contributor({name, gitHubUsername}) {
  const ghProfileLink = "https://github.com/" + gitHubUsername;

  return (
    <div {...tagElement({id: 'contributor'})}>
      <Link 
        {...tagLink({id: gitHubUsername, text: '@'+gitHubUsername, href: ghProfileLink})}
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
        <div {...tagElement({id: 'contributors'})}>
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
    <div {...tagElement({id: gitHubUsername})}>
```
instead of
```js
    <div {...tagElement({id: 'contributor'})}>
```

### Applying Locations manually
Sometimes it may be preferable, or necessary, to tag Locations manually; for these cases, a low-level 
[tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md) API is available, which tags a Taggable 
Element to be tracked as any LocationContext.

## Applying Locations to pages/screens
When you have multiple pages or screens in your application/website, you can distinguish each via the 
corresponding [URLChangeEvent](/taxonomy/reference/events/URLChangeEvent.md) with a 
[WebDocumentContext](taxonomy/reference/location-contexts/WebDocumentContext.md). However, analyzing features 
with the same `id` on multiple pages/screens (not uncommon in many implementations) for each page/screen 
separately, is not so trivial.

To illustrate, consider different pages/screens that all contain a Section with `id: 'main'`, as in the 
partial Sankey chart below. In order to analyze a feature in the `main` Section (or the Section itself) 
separately for each unique page/screen, you will have to somehow factor in or slice on each 
page/screen's URL or path; and each URL or path can have multiple versions with GET parameters, the chosen 
language, a trailing slash, etc. 

![Sankey chart - different pages/screens with same Section IDs](/img/docs/different-pages-same-section-id-sankey-chart.png)

Therefore, **we highly recommend to tag the root of each page/screen with a unique identifier**, 
using [`tagElement`](/tracking/api-reference/locationTaggers/tagElement.md), as we'll explain below.

### Method 1: Use the root
On every page/screen, apply `tagElement` to a root element that contains all content. For example:

```js
<Layout {...tagElement({ id: 'page-home' })}>
  ...here goes the content of the page/screen
</Layout>
```

### Method 2: Wrap content in a new Element
If you don't have access to the root element for a page/screen, or you cannot tag it for any other reason, 
you can add a wrapper around the content, and tag that wrapper. For example, a `<div>`:

```js
<div {...tagElement({ id: 'page-home' })}>
  <Layout>
    ...here goes the content of the page/screen
  </Layout>
</div>
```

:::note
While this works, sometimes it's not an option. Adding DOM Elements may affect CSS, other query selectors or 
even performance. Other times, especially with 3rd party components, events may not be bubbling up to our 
wrappers. 

We prefer to approach each of these issues with the idea of not changing the application to fit the tracking 
requirements if not needed. Therefore, the third option below may be a good option for your use case.
:::

### Method 3: Use a Plugin to observe URLs
When wrapping elements is also not a viable option, another way is to have a Plugin automatically generate a 
Location Stack page/screen item for you.

In the following example we are going to create a Plugin to monitor URLs and create Section Contexts with a 
pagePath id for us. 

First let's create the Plugin:

```typescript
class PageContextFromURLPlugin implements TrackerPluginInterface {
  pluginName: `PageContextFromURLPlugin`;

  // Before sending any Event, get the current URL and parse it into a pagePath
  beforeTransport(contexts: Required<ContextsConfig>): void {
    // Build pagePath: get pathname and replace all '/' with '-', then prefix it with 'page'
    const pagePath = `page${document.location.pathname.replace(/\//g, '-')}`;
    
    // Create a new Section Context and push it on top of the Location Stack
    contexts.location_stack.unshift(makeSectionContext({ id: pagePath }));
  }

  // Make this plugin usable only if we have access to the Location API
  isUsable(): boolean {
    return typeof document !== 'undefined' && typeof document.location !== 'undefined';
  }
}
```

And now we can reconfigure our Tracker Instance to use it:

```typescript
const trackerConfig: BrowserTrackerConfig = {
  applicationId: APPLICATION_ID,
  endpoint: COLLECTOR_ENDPOINT
}

// Make a new list of Plugins
const customPluginsList = [
  new PageContextFromURLPlugin(),
  ...makeDefaultPluginsList(trackerConfig),
];

// Configure Tracker with custom Plugins
makeTracker({
  ...trackerConfig,
  plugins: new TrackerPlugins({ plugins: customPluginsList })
});
```

:::tip sharing is caring
Did you come up with some cool Plugin idea that may be of interest to others as well?  

Let us know or [submit a PR](https://www.objectiv.io/docs/the-project/contribute#submitting-a-pr), we are 
looking forward to checking it out! 
:::

### Page identifier convention
For all methods, we recommend the following convention for the page's unique `id`: 

`page-[page_path]` (e.g. `page-product-features`).

or if you're on an app:

`screen-[screen_path]` (e.g. `screen-product-features`).

This `page_path` or `screen_path` will generally be the path in the URL, or its place on the filesystem in 
your code.

### Result
As a result of assigning a unique identifier for each page/screen, you can:
* Easily distinguish each feature for every page/screen separately, e.g. "Section with `id` _page-home_ > 
  feature with `id` _cta-button_";
* But also easily aggregate the same feature over all pages/screens, e.g. just "feature with `id`
  _cta-button_".
