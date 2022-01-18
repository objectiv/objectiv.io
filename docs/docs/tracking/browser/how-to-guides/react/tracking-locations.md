---
sidebar_position: 3
---

# Tagging Locations

Now that the [Tracker is up and running](/tracking/how-to-guides/react/getting-started.md) we can start 
thinking about Tagging some [Elements](/tracking/core-concepts/tagging.md#elements) as 
[LocationContexts](/taxonomy/reference/location-contexts/overview.md) using 
[Location Taggers](/tracking/api-reference/locationTaggers/overview.md).  

:::info why tagging?
If you want to know why we ask you to tag your elements, take a look at the [Core Concepts Introduction](/tracking/core-concepts).
:::

## Tagging Interactive Elements
A good rule of thumb is to start by identifying all interactive Elements in the Application. 

### Buttons
Anything that the user can interact with, but does not cause a URL change, can be considered a Button. 

```typescript jsx
// a button tag 
<button {...tagPressable({ id: 'button-1' })}>Click Me!</button>

// a Button component 
<Button {...tagPressable({ id: 'button-2' })}>Do It!</Button>

// a clickable image
<img {...tagPressable({ id: 'button-3' })} src="/img/ok.png" alt="OK!" />
```

:::info WIP
Currently it's necessary to specify `text` manually. We are working on improvements to make this easier.
:::


### Links
Links are interactive elements that cause, directly or indirectly, a change in the current URL.

```typescript jsx
// a link tag 
<a {...tagLink({ id: 'link-1', href:"/somewhere" })} href="/somewhere">Go!</a>

// a Link component 
<Link {...tagLink({ id: 'link-2', href:"/cart" })} to="/cart">Back</Link>
```

:::info WIP
Currently it's necessary to specify `text` and `href` manually. We are working on improvements to make this 
easier.
:::


### Expandables
Elements that cause other Elements, usually their children, to be expanded and displayed to the user, such as 
Accordions and collapsible Menus. 

```typescript jsx
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