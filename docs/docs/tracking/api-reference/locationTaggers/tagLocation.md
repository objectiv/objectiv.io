# tagLocation

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as any [LocationContext](/taxonomy/reference/location-contexts/overview.md).

```typescript
tagLocation = (parameters: {
  instance: LocationContext,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::caution
`tagLocation` is a lower-level API. Unless really needed, it's easier to use specific [Location Taggers](/tracking/api-reference/locationTaggers/overview.md) APIs. 
:::

## Parameters
|          |              | type                                                                                              | default value
| :-:      | :--          | :--                                                                                               | :--           
| required | **instance** | [LocationContext](/taxonomy/reference/location-contexts/overview.md)                              |
| optional | options      | [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)                   | Dynamically calculated based on `instance`. See the [Events](#events) table below.
| optional | onError      | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/definitions/TagLocationReturnValue.md) 

## Events
Unless customized via the `options` parameter, the given `instance` determines which Events are triggered automatically:

| LocationContext                                                                   | Automatically triggers
| :--                                                                               | :--
| [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md)         | 
| [ExpandableContext](/taxonomy/reference/location-contexts/ExpandableContext.md)   | [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
| [InputContext](/taxonomy/reference/location-contexts/InputContext.md)             | [trackInputChange](/tracking/api-reference/eventTrackers/trackInputChange.md)
| [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md)               | [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
| [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md) | 
| [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md)   | 
| [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md)         | [trackSectionVisible](/tracking/api-reference/eventTrackers/trackSectionVisible.md), [trackSectionHidden](/tracking/api-reference/eventTrackers/trackSectionHidden.md)
| [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md)     | [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagLocation } from '@objectiv/tracker-browser';
```

```typescript jsx
<Layout {...tagLocation({ instance: makeSectionContext({ id: 'layout' }) })}>
  <div {...tagLocation({ instance: makeOverlayContext({ id: 'modal' }) })}>
    ...
  </div>
</Layout>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<section [tagLocation]="{ instance: makeSectionContext({ id: 'layout' }) }">
  <div [tagLocation]="{ instance: makeOverlayContext({ id: 'modal' }) }">
    ...
  </div>
</section>
```

  </TabItem>
</Tabs>

:::tip Did you notice ?
In the example above we factored the `instance` parameters by using [Location Context Core Factories](/tracking/api-reference/core/CoreFactories.md#location-context-factories).
:::

<br />

:::info See also
- [Location Taggers](/tracking/api-reference/locationTaggers/overview.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
