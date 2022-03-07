# tagLocation

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as any [LocationContext](/taxonomy/reference/location-contexts/overview.md).

```typescript
tagLocation = (parameters: {
  instance: LocationContext,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::caution
`tagLocation` is a lower-level API. Unless really needed, it's easier to use specific [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) APIs. 
:::

## Parameters
|          |              | type                                                                                              | default value
| :-:      | :--          | :--                                                                                               | :--           
| required | **instance** | [LocationContext](/taxonomy/reference/location-contexts/overview.md)                              |
| optional | options      | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | Dynamically calculated based on `instance`. See the [Events](#events) table below.
| optional | onError      | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md) 

## Events
Unless customized via the `options` parameter, the given `instance` determines which Events are triggered automatically:

| LocationContext                                                                   | Automatically triggers
| :--                                                                               | :--
| [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md)         | 
| [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md)   | [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
| [InputContext](/taxonomy/reference/location-contexts/InputContext.md)             | [trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md)
| [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md)               | [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
| [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md) | 
| [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md)   | 
| [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md)         | [trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md), [trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)
| [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md)     | [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)

## Usage example

```jsx
import { tagLocation } from '@objectiv/tracker-browser';
```

```jsx
<Layout {...tagLocation({ instance: makeContentContext({ id: 'layout' }) })}>
  <div {...tagLocation({ instance: makeOverlayContext({ id: 'modal' }) })}>
    ...
  </div>
</Layout>
```

:::tip Did you notice ?
In the example above we factored the `instance` parameters by using [Location Context Core Factories](/tracking/browser/api-reference/core/CoreFactories.md#location-context-factories).
:::

<br />

:::info See also
- [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md)
- [trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
:::
