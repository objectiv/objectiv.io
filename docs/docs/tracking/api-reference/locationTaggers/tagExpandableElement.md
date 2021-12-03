# tagExpandableElement

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as [ExpandableSectionContext](/taxonomy/reference/location-contexts/ExpandableSectionContext.md).

```typescript
tagExpandableElement = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

::: info Element vs Section
Our Taxonomy names a logical UI unit as Section. We felt this would be confusing in Browser's world, hence Element. 
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)                   | `{ trackClicks: true, trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
- [trackSectionVisible](/tracking/api-reference/eventTrackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/eventTrackers/trackSectionHidden.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagExpandableElement } from '@objectiv/tracker-browser';
```

```typescript jsx
<div {...tagExpandableElement({ id: 'faq-item-id' })}>
  ...
</div>
```

```typescript jsx
<Accordion {...tagExpandableElement({ id: 'accordion-id' })}>
  ...
</Accordion>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<div [tagExpandableElement]="{ id: 'faq-item-id' }">
  ...
</div>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagExpandableElement` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagButton](/tracking/api-reference/locationTaggers/tagButton.md)
- [tagLink](/tracking/api-reference/locationTaggers/tagLink.md)
- [tagElement](/tracking/api-reference/locationTaggers/tagNavigation.md)
- [tagNavigation](/tracking/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
:::
