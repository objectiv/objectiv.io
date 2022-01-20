# tagLocation

Tags a [BrowserTracker:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as any [LocationContext](/taxonomy/reference/location-contexts/overview.md).

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

:::info
This attribute directive builds on top of [BrowserTracker:tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
:::

## Parameters
|          |              | type                                                                                              | default value
| :-:      | :--          | :--                                                                                               | :--           
| required | **instance** | [BrowserTracker:LocationContext](/taxonomy/reference/location-contexts/overview.md)                              |
| optional | options      | [BrowserTracker:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | Dynamically calculated based on `instance`. See the [Events](#events) table below.
| optional | onError      | [BrowserTracker:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[BrowserTracker:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md) 

## Events
Unless customized via the `options` parameter, the given `instance` determines which Events are triggered automatically:

| LocationContext                                                                   | Automatically triggers
| :--                                                                               | :--
| [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md)         | 
| [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md)   | [BrowserTracker:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
| [InputContext](/taxonomy/reference/location-contexts/InputContext.md)             | [BrowserTracker:trackInputChangeEvent](/tracking/browser/api-reference/eventTrackers/trackInputChangeEvent.md)
| [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md)               | [BrowserTracker:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
| [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md) | 
| [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md)   | 
| [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md)         | [BrowserTracker:trackVisibleEvent](/tracking/browser/api-reference/eventTrackers/trackVisibleEvent.md), [BrowserTracker:trackHiddenEvent](/tracking/browser/api-reference/eventTrackers/trackHiddenEvent.md)
| [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md)     | [BrowserTracker:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)

## Usage example

```html
<section [tagLocation]="{ instance: makeContentContext({ id: 'layout' }) }">
  <div [tagLocation]="{ instance: makeOverlayContext({ id: 'modal' }) }">
    ...
  </div>
</section>
```

:::tip Did you notice ?
In the example above we factored the `instance` parameters by using [BrowserTracker:Location Context Core Factories](/tracking/browser/api-reference/core/CoreFactories.md#location-context-factories).
:::

<br />

:::info See also
- [Location Taggers](/tracking/angular/api-reference/locationTaggers/overview.md)
- [BrowserTracker:trackEvent](/tracking/browser/api-reference/eventTrackers/trackEvent.md)
:::
