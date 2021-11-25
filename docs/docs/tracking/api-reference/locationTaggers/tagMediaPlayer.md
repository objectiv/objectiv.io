# tagMediaPlayer

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as [MediaPlayerContext](/taxonomy/reference/location-contexts/MediaPlayerContext.md).

```typescript
tagMediaPlayer = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                               | default value
| :-:      | :--     | :--                                                                                                | :--           
| required | **id**  | string                                                                                             |
| optional | options | [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)                    | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackSectionVisible](/tracking/api-reference/eventTrackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/eventTrackers/trackSectionHidden.md)

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagMediaPlayer } from '@objectiv/tracker-browser';
```

```typescript jsx
<div {...tagMediaPlayer({ id: 'player-id' })}>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />  
</div>
```

```typescript jsx
<Player {...tagMediaPlayer({ id: 'player-id' })}>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
</Player>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<div [tagMediaPlayer]="{ id: 'player-id' }">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />  
</div>
```

```typescript jsx
<video [tagMediaPlayer]="{ id: 'player-id' }">
  <source src="video.mp4" type="video/mp4">
</video>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagMediaPlayer` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagElement](/tracking/api-reference/locationTaggers/tagElement.md)
- [tagNavigation](/tracking/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md)
- [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
- :::
