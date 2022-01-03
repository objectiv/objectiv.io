# tagContent

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as [ContentContext](/taxonomy/reference/location-contexts/ContentContext.md).

```typescript
tagContent = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)                   |
| optional | onError | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/definitions/TagLocationReturnValue.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagContent } from '@objectiv/tracker-browser';
```

```typescript jsx
<Layout {...tagContent({ id: 'layout' })}>
  <div {...tagContent({ id: 'section' })}>
    ...
  </div>
</Layout>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<section [tagContent]="{ id: 'layout' }">
  <div [tagContent]="{ id: 'section' }">
    ...
  </div>
</section>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagContent` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagNavigation](/tracking/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
:::
