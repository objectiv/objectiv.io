---
sidebar_position: 2
---

# Tagging Locations

Now that the [Tracker is up and running](/tracking/browser/how-to-guides/getting-started.md) we can start 
thinking about Tagging some [Elements](/tracking/core-concepts/browser/tagging.md#elements) as 
[LocationContexts](/taxonomy/reference/location-contexts/overview.md) using 
[Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md).  

:::info why tagging?
If you want to know why we ask you to tag your elements, take a look at the [Core Concepts Introduction](/tracking/core-concepts/browser/tagging.md).
:::

## Tagging Interactive Elements
A good rule of thumb is to start by identifying all interactive Elements in the Application. 

### Buttons
Anything that the user can interact with, but does not cause a URL change, can be considered a Button. 

```jsx
// a button tag 
<button {...tagPressable({ id: 'button-1' })}>Click Me!</button>

// a Button component 
<Button {...tagPressable({ id: 'button-2' })}>Do It!</Button>

// a clickable image
<img {...tagPressable({ id: 'button-3' })} src="/img/ok.png" alt="OK!" />
```

### Links
Links are interactive elements that cause, directly or indirectly, a change in the current URL.

```jsx
// a link tag 
<a {...tagLink({ id: 'link-1', href:"/somewhere" })} href="/somewhere">Go!</a>

// a Link component 
<Link {...tagLink({ id: 'link-2', href:"/cart" })} to="/cart">Back</Link>
```

:::info WIP
Currently it's necessary to specify `href` manually. We are working on improvements to make this 
easier.
:::


### Expandables
Elements that cause other Elements, usually their children, to be expanded and displayed to the user, such as 
Accordions and collapsible Menus. 

```jsx
// an Accordion-like component 
<FAQItem {...tagExpandable({ id: 'how-to-1' })} description="How to track Accordions?">
  Some content here that will be displayed on click
</FAQItem>

// a contextual Menu 
<Menu {...tagExpandable({ id: 'main-menu' })}>
  <MenuItem>Menu A</MenuItem>
  ...
  <MenuItem>Menu Z</MenuItem>
</Menu>
```



## Tracking Locations
To make modeling easier it's important to ensure all Tracked interactive Elements are uniquely identifiable.   

That said, assigning a unique identifier to each Element is not always possible and most often impractical. 
Think of reusable components for example.

See [Core Concepts - Locations](/tracking/core-concepts/locations.md#applying-locations) for an explanation 
of how Sections can be tagged to make Events unique without having to assign a unique idenitifier to each.

An example for React:
```js
<Layout {...tagContent({ id: 'layout' })}>
  <header {...tagContent({ id: 'homepage-hero' })}>
    <div {...tagContent({ id: 'section1' })}>
      <a {...tagLink({ id: 'my-link', href: '/link1' })} href="/link1">Link 1</a>
    </div>
    <div {...tagContent({ id: 'section2' })}>
      <a {...tagLink({ id: 'my-link', href: '/link2' })} href="/link2">Link 2</a>
    </div>
  </header>
</Layout>
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
[tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md) API is available, which tags a Taggable
Element to be tracked as any LocationContext.