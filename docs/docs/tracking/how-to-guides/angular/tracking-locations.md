---
sidebar_position: 3
---

# Tagging Locations

Now that the [Tracker is up and running](/tracking/how-to-guides/angular/getting-started.md) we can start thinking about Tagging some [Elements](/tracking/core-concepts/tagging.md#elements) as [LocationContexts](/taxonomy/reference/location-contexts/overview.md) using [Location Taggers](/tracking/api-reference/locationTaggers/overview.md).  

:::info why tagging?
If you want to know why we ask you to tag your elements, take a look at the [Core Concepts Introduction](/tracking/core-concepts).
:::

## Tagging Interactive Elements
A good rule of thumb is to start by identifying all interactive Elements in the Application. 

### Buttons
Anything that the user can interact with, but does not cause a URL change, can be considered a Button. 

```typescript jsx
// a button tag 
<button [tagButton]="{ id: 'button-1', text: 'Click Me!' }">Click Me!</button>

// a clickable image
<img [tagButton]="{ id: 'button-3', text: 'OK!' }" src="/img/ok.png" alt="OK!" />
```

:::info WIP
Currently it's necessary to specify `text` manually. We are working on improvements to make this easier.
:::


### Links
Links are interactive elements that cause, directly or indirectly, a change in the current URL.

```typescript jsx
// a link tag 
<a [tagLink]="{ id: 'link-1', text: 'Go!', href:'/somewhere' }" href="/somewhere">Go!</a>
```

:::info WIP
Currently it's necessary to specify `text` and `href` manually. We are working on improvements to make this easier.
:::


### Expandable Elements
Elements that cause other Elements, usually their children, to be expanded and displayed to the user. Such as Accordions and collapsible Menus. 

```typescript jsx
<ul [tagExpandableElement]="{ id: 'main-menu' }">
  <li>Menu A</li>
  ...
  <li>Menu Z</li>
</ul>
```



## Tracking Locations
To make modeling easier it's important to ensure all Tracked interactive Elements are uniquely identifiable.   

That said, assigning a unique identifier to each Element is not always possible and most often impractical. 
Think of reusable components for example.

See [Core Concepts - Locations](/tracking/core-concepts/locations.md#applying-locations) for an explanation 
of how Sections can be tagged to make Events unique without having to assign a unique idenitifier to each.

An example for Angular:
```js
<div [tagElement]="{ id: 'layout' }">
  <div [tagElement]="{ id: 'homepage-hero' }">
    <div [tagElement]="{ id: 'section1' }"
      <a [tagLink]="{ id: 'my-link', text: 'Link 1', href: '/link1'}" href="/link1">Link 1</a>
    </div>
    <div [tagElement]="{ id: 'section2' }"
      <a [tagLink]="{ id: 'my-link', text: 'Link 2', href: '/link2'}" href="/link2">Link 2</a>
    </div>
  </div>
</div>
```