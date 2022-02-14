---
sidebar_position: 2
---

# Tagging Locations

Now that the [Tracker is up and running](/tracking/angular/how-to-guides/getting-started.md) we can start thinking about Tagging some [Elements](/tracking/core-concepts/angular/tagging.md#elements) as [LocationContexts](/taxonomy/reference/location-contexts/overview.md) using [Location Taggers](/tracking/angular/api-reference/locationTaggers/overview.md).  

:::info why tagging?
If you want to know why we ask you to tag your elements, take a look at the [Core Concepts Introduction](/tracking/core-concepts).
:::

## Tagging Interactive Elements
A good rule of thumb is to start by identifying all interactive Elements in the Application. 

### Buttons
Anything that the user can interact with, but does not cause a URL change, can be considered a Button. 

```html
// a button tag 
<button [tagPressable]="{ id: 'button-1' }">Click Me!</button>

// a clickable image
<img [tagPressable]="{ id: 'button-3' }" src="/img/ok.png" alt="OK!" />
```

### Links
Links are interactive elements that cause, directly or indirectly, a change in the current URL.

```html
// a link tag 
<a [tagLink]="{ id: 'link-1', href:'/somewhere' }" href="/somewhere">Go!</a>
```

:::info WIP
Currently it's necessary to specify `href` manually. We are working on improvements to make this easier.
:::


### Expandables
Elements that cause other Elements, usually their children, to be expanded and displayed to the user. Such as Accordions and collapsible Menus. 

```html
<ul [tagExpandable]="{ id: 'main-menu' }">
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
of how Sections can be tagged to make Events unique without having to assign a unique identifier to each.

An example:
```html
<div [tagContent]="{ id: 'layout' }">
  <div [tagContent]="{ id: 'homepage-hero' }">
    <div [tagContent]="{ id: 'section1' }"
      <a [tagLink]="{ id: 'my-link', href: '/link1'}" href="/link1">Link 1</a>
    </div>
    <div [tagContent]="{ id: 'section2' }"
      <a [tagLink]="{ id: 'my-link', href: '/link2'}" href="/link2">Link 2</a>
    </div>
  </div>
</div>
```


## makeIdFromString
When using Location Taggers, especially in generic components, it's likely to have to use dynamic data to populate the id attribute.

AngularTracker comes with a `makeIdFromString` [PipeFilter](https://angular.io/guide/pipes).  

In the following example a wrapper `div` will render multiple `button` elements. We make identifiers for PressableContext by piping `makeIdFromString` to `button.text`:

```html
<div *ngFor="let button of buttons">
  <button [tagPressable]="{ id: button.text | makeIdFromString }">{{ button.text }}</button>
</div>
```
