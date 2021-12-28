# TagLocationOptions

The `options` object parameter allows to override the default automatic tracking behavior of [Location Taggers](/tracking/api-reference/locationTaggers/overview.md) APIs.

| Option          | Possible value
| :--             | :--
| trackClicks     | `boolean` \| `{ waitUntilTracked: true}` \| `{ waitUntilTracked: WaitUntilTrackedOptions}`
| trackBlurs      | `boolean`
| trackVisibility | `{ mode: 'auto' }` \| `{ mode: 'manual': isVisible: boolean }`
| parent          | `TagLocationReturnValue`
| validate        | `{ locationUniqueness: bolean }`

:::info
All options are optional and can be either omitted or set to `undefined` to revert to the default values.
:::

## options.trackClicks
Used to customize whether and how [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) are attached to [Tagged Elements](/tracking/core-concepts/tagging.md#tagged-elements).


### options.trackClicks.waitUntilTracked
Some interactions may lead to the current session being closed. For example external links.

To avoid losing those events the `waitUntilTracked` option can be specified. This will attach a capture Event Listener which will attempt to wait for the Tracker to finish its work before allowing the User Agent to follow its destination. 

When setting `waitUntilTracked` to `true` we will use some sensible defaults for `WaitUntilTrackedOptions`. 

Custom values can be specified as well:  

#### WaitUntilTrackedOptions
| Option     | Possible value
| :--        | :--
| intervalMs | `number`
| timeoutMs  | `number`
| flushQueue | `true` \| `false` \| `onTimeout`

In the following example we are instructing our [Tagged Elements Observer](/tracking/core-concepts/trackers.md#tagged-elements-observer) to attach a [Click Event handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers#eventtarget.addeventlistener) that will attempt to wait for up to 3 seconds, polling every 100ms and flushing the `TrackerQueue` only on timeout. 

```typescript jsx
<link
  {...tagLink({
    id: 'external',
    href: 'https://www.external.com',
    options: {
      trackClicks: {
        waitUntilTracked: { 
          intervalMs: 100,
          timeoutMs: 3000,
          flushQueue: 'onTimeout'
        },
      }
    }
  })}
  href="https://www.external.com"
>Bye</link>
```

## options.trackBlurs
Used to either force or prevent [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) being attached to [Tagged Elements](/tracking/core-concepts/tagging.md#tagged-elements).

## options.trackVisibility
Used to customize whether to track [trackHiddenEventEvent](/tracking/api-reference/eventTrackers/trackHiddenEvent.md) and [trackVisibleEvent](/tracking/api-reference/eventTrackers/trackVisibleEvent.md) events, either automatically or manually.

### Visibility mode:auto  
Either [trackHiddenEvent](/tracking/api-reference/eventTrackers/trackHiddenEvent.md) or [trackVisibleEvent](/tracking/api-reference/eventTrackers/trackVisibleEvent.md) are triggered when [Tagged Elements](/tracking/core-concepts/tagging.md#tagged-elements) are added or removed to/from the DOM.

```js
trackVisibility = {
  mode: 'auto'
}
```

### Visibility mode:manual  
Either [trackHiddenEvent](/tracking/api-reference/eventTrackers/trackHiddenEvent.md) or [trackVisibleEvent](/tracking/api-reference/eventTrackers/trackVisibleEvent.md) are triggered whenever the `isVisible` boolean state attribute changes.

```js
trackVisibility = {
  mode: 'manual',
  isVisible: boolean
}
```

## options.parent
Used to override how the parent of a [Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements) gets determined. When reconstructing the [Location Stack](/tracking/core-concepts/locations.md) the given `parent` will be followed instead of the DOM tree.   

A practical is to track dynamically placed nodes in the DOM, such as React Portals. 

```typescript jsx
const parentDiv = tagContent({ id: 'section' });

<div {...parentDiv}>

  <Modal {...tagOverlay({ id: 'portal-modal', options: { parent: parentDiv } })}>
    ...
  </Modal>  
</div>
```

See [Example of Component using Portals](/tracking/how-to-guides/react/troubleshooting.md#example-of-component-using-portals) for another example.

## options.validate
Used to configure client-side validation. 

| Option             | Possible value
| :--                | :--
| locationUniqueness | boolean


### options.validate.locationUniqueness
Sometimes the same piece of UI can have mutually exclusive variants. Eg: a menu switching to its mobile version via CSS.

In those cases uniqueness checking can be disabled setting `validate.locationUniqueness` to false.
