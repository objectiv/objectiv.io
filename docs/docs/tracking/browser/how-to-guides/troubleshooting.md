---
sidebar_position: 5
---

# Troubleshooting 
When dealing with regular HTML [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) should just work flawlessly. Unfortunately [JSX](https://reactjs.org/docs/introducing-jsx.html) and [React Components](https://reactjs.org/docs/components-and-props.html) may carry some challenges at times.

The most common issues will be:
- Incorrect [Locations](/tracking/core-concepts/locations.md) due to [React Portals](https://reactjs.org/docs/portals.html).
- [Events](/taxonomy/reference/events/overview.md) not triggering due to missing [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md).
- Non-unique [Locations](/tracking/core-concepts/locations.md), aka [Collisions](/tracking/core-concepts/locations.md#solving-collisions).


:::info Why not just wrap components?
Many of the issues below may be solved by just wrapping the problematic components in some extra HTML element.

While that works, sometimes it's not an option. Adding DOM Elements may affect CSS, other query selectors or even performance. 
Other times, especially with 3rd party components, events may not be bubbling up to our wrappers.

We prefer to approach each of these issues with the idea of not changing the Application to fit the tracking requirements.

That said, if adding an extra `<div>` around a hard-to-track Component works, that's probably a good option as well.
:::

## Problem: Incorrect Locations
If [Events](/taxonomy/reference/events/overview.md) are triggering correctly but Location are missing [Sections](/taxonomy/reference/location-contexts/overview.md), the most likely cause is [React Portals](https://reactjs.org/docs/portals.html).

[Event Trackers](/tracking/browser/api-reference/eventTrackers/overview.md) can reconstruct Locations by traversing the DOM from the target [Element](/tracking/core-concepts/browser/tagging.md#elements) upwards. Unfortunately we cannot 
follow, nor detect (yet), portaled subtrees. 

:::info Auto detect portals?
We are working on static analysis tools to make the detection of these cases possible.   
Nonetheless, it's still highly recommended covering all complex trackers with test cases. That's the most effective way of detecting anomalies and adding a cheap safe-guard for future regressions. 
:::

### Example of Component using Portals
The `Menu` component renders its contents in a [React Portal](https://reactjs.org/docs/portals.html). 

```jsx
<Card>
  <Menu>
    <MenuItem>Item A</MenuItem>
    <MenuItem>Item B</MenuItem>
    <MenuItem>Item C</MenuItem>
  </Menu> 
</Card>
```
:::tip
It's easier to tag siblings via [tagChildren](/tracking/browser/api-reference/locationTaggers/tagChildren.md) but, to keep this example simpler, we are going for the verbose syntax here.
:::

Unknowingly we may attempt to tag it by adding our [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) as follows:

```jsx
<Card {...tagContent({ id: 'card' })}>
  <Menu {...tagOverlay({ id: 'menu' })}>
    <MenuItem {...tagPressable({ id: 'menu-item-a' })}>Item A</MenuItem>
    <MenuItem {...tagPressable({ id: 'menu-item-b' })}>Item B</MenuItem>
    <MenuItem {...tagPressable({ id: 'menu-item-c' })}>Item C</MenuItem>
  </Menu> 
</Card>
```

Suppose we click on `Item B`. Our expected Location should look something like:
```
app-root > ... > card > menu > menu-item-b
```

But because `Menu` renders in a [React Portal](https://reactjs.org/docs/portals.html) we get something like this instead:
```
app-root > menu > menu-item-b
```

The Location ends abruptly at the `Menu` and jumps to the application root.


### Make Locations work across Portals

The solution is to specify the parent [Location Tagger](/tracking/browser/api-reference/locationTaggers/overview.md) of a portaled [Tagged Element](/tracking/core-concepts/browser/tagging.md#tagged-elements) manually. 

This tells the [Event Tracker](/tracking/browser/api-reference/eventTrackers/overview.md) to ignore the DOM and, when processing the `Menu` Location, to simply continue with and from its parent.

```jsx
const parent = tagContent({ id: 'card' });
...
<Card {...cardTracker}>
  <Menu {...tagOverlay({ id: 'menu', options: { parent } })}>
    <MenuItem {...tagPressable({ id: 'menu-item-a' })}>Item A</MenuItem>
    <MenuItem {...tagPressable({ id: 'menu-item-b' })}>Item B</MenuItem>
    <MenuItem {...tagPressable({ id: 'menu-item-c' })}>Item C</MenuItem>
  </Menu>
</Card>
```

## Problem: Events not triggering 
Usually this happens because the [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md) did not end up being applied to the target [Element](/tracking/core-concepts/browser/tagging.md#elements). This happens
almost exclusively when dealing with Components. 

### Check if TaggingAttributes are set
To verify if that's the issue we can simply inspect the DOM with the Browser's Developer Tools. 

If the target [Tagged Element](/tracking/core-concepts/browser/tagging.md#elements) we are trying to tag does not have at least `data-objectiv-element-id` set, most probably the [Location Tagger](/tracking/browser/api-reference/locationTaggers/overview.md) failed decorating it.

As an example a [Tagged Element](/tracking/core-concepts/browser/tagging.md#tagged-elements), in this case a `<button>`, should look at least like the following:
```
<button data-objectiv-element-id="..." data-objectiv-context="..." ...>...</button>
```

The values of the [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md) are not really important, as they are fully automated. What matters is their presence. 

We can now attempt to fix the issue in two ways:
1. Verify props forwarding
2. Manually orchestrating [events](/taxonomy/reference/events/overview.md)
   1. Via event handlers
   2. Via state
   3. Via a [Parent Element](/tracking/core-concepts/browser/tagging.md#children-tracking-elements)

### Props forwarding - own Components
Consider the following component:

```jsx
const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
)

// Used somewhere like so
<Button onClick={doSomething}>Do It!</Button>
```

If we try to tag it as we normally do:
```jsx
<Button {...tagPressable({ id: 'button-do-it' })} onClick={doSomething}>Yes!</Button>
```

It would not work, because extra props are not being forwarded to the `<button>` tag. Let's fix that:
```jsx
const Button = ({ children, onClick, ...otherProps }) => (
  <button onClick={onClick} {...otherProps}>{children}</button>
)
```

Tracking will now work as expected, since our extra [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md) will be forwarded correctly to the `<button>` 

### Props forwarding - 3rd party libraries
Third party components, especially UI libraries, usually allow specifying custom attributes. 
It's worth verifying by checking the documentation.

Let's look at an example with [InputBase](https://mui.com/api/input-base/) from [Material UI](https://mui.com/). This is a search input box.
```jsx
<InputBase
  id={'search'}
  placeholder="Search..."
/>
```

If InputBase would forwards props we could simply:
```jsx
<InputBase
  {...tagInput({ id: 'search' })}
  id={'search'}
  placeholder="Search..."
/>
```

Unfortunately that does not work and our [tagInput](/tracking/browser/api-reference/locationTaggers/tagInput.md) attributes will just get discarded. Luckily [InputBase](https://mui.com/api/input-base/) 
provides us with a specific property called `inputProps` that is directly forwarded to the `<input>` tag.

Now we can fix the issue by simply using it to apply our [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md):

```jsx
<InputBase
  id={'search'}
  placeholder="Search..."
  inputProps={tagInput({ id: 'search' })}
/>
```

:::tip
Sometimes properties for passing extra attributes are already used, and we can't assign directly to them as done above.    
Simply spread the [Tagging Attributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md) and merge them up with the existing props:

```jsx
<InputBase
  id={'search'}
  placeholder="Search..."
  inputProps={{ 
    'aria-label': 'search', 
    ...tagInput({ id: 'search' }) 
  }}
/>
```
:::


## Problem: Collisions
Sometimes the browser console will show a warning about  colliding elements, e.g.:

![Collisions in browser console](/img/docs/tracking-collision-browser-console.png)


The [Core Concepts section explains Collisions and how to solve them](/tracking/core-concepts/locations.md#solving-collisions).


## Manual orchestration
When forwarding properties is not possible, for whatever reason, there are still workarounds to be able to tag both
Elements and attach the correct [Events](/taxonomy/reference/events/overview.md) to uncooperative components.

Everything that [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) try to automate, together with the Tagged Elements Observer, can be done manually.

Let's look at some examples with solutions.

### Track Events via 3rd party handlers  
Let's look at a hypothetical component that does not allow forwarding props to its internal [JSX](https://reactjs.org/docs/introducing-jsx.html).

We want to track a list of FAQ Items and we use this 3rd party component for that. It's an expandable element that, 
on Click, will display its content / children to the user with an animation. 

```jsx
<FAQItem title={'How do I track 3rd party components?'}>
  Some explanatory text to be displayed on click
</FAQItem>
```

Objectiv Taxonomy has a Context specifically meant for tracking expandable elements, let's use that:
```jsx
<FAQItem
  {...tagExpandable({ id: 'faq-track-3rd-party-components' })}
  title={'How do I track 3rd party components?'}
>
  Some explanatory text to be displayed on click
</FAQItem>
```

Unfortunately after some testing we discover that `FAQItem` has its own internal event handling and doesn't allow clicks to bubble out for us to track.

Again, checking the documentation is our friend here. Turns out there are event handlers we can hook onto:
```jsx
 <FAQItem
  {...tagExpandable({ id: 'faq-track-3rd-party-components' })}
  onClick={(event) => {
    trackPressEvent({ element: event.target })
  }}  
  title={'How do I track 3rd party components?'}
>
  Some explanatory text to be displayed on click
</FAQItem>
```

### Tracking Visibility via state
Visibility Events can be difficult to detect due to the nature of DOM and the countless ways there to hide and show content.

By default, we track when components mount or unmount from the DOM but it's not efficient to check for actual visibility. 

Consider this menu:
```jsx
<Menu
  {...tagOverlay({ id: 'menu' })}
  open={isMenuOpen}
>
  <MenuItem>Profile</MenuItem>
  <MenuItem>My account</MenuItem>
</Menu>
```

If during testing we detect that we cannot automatically detect when the menu is visible or hidden, most probably it's being orchestrated via CSS.

Luckily the menu it's driven by the state variable `isMenuOpen`. We can use that to track its state. To do so we switch visibility tracking from automatic to manual and we tell the tracker what to monitor.

```jsx
<Menu
  {...tagOverlay({
     id: 'menu',
     options: { trackVisibility: { mode: 'manual', isVisible: isMenuOpen } }
  })}
  open={isMenuOpen}
>
  <MenuItem>Profile</MenuItem>
  <MenuItem>My account</MenuItem>
</Menu>
```

The `isMenuOpen` variable is now driving both the menu visibility and the tracker Visibility Events for it.

### Tracking Visibility via 3rd party handlers
Sometimes we can also leverage 3rd party event callbacks, like so:

```jsx
<Accordion
  {...tagExpandable({ id: 'fix' })}
  onChange={(event, expanded) => {
    trackVisibility({ element: event.target, isVisible: expanded })
  }}
>
```

In the example above the Accordion API has a `onChange` event handler triggered whenever the Accordion changes state.   
We can directly hook that information into our event tracking.
