# tagRootLocation

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).

```typescript
tagRootLocation = (parameters: {
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

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagRootLocation } from '@objectiv/tracker-browser';
```

```typescript jsx
<body {...tagRootLocation({ id: 'page' })}>
  ...
</body>
```

```typescript jsx
<Layout {...tagRootLocation({ id: 'page' })}>
  ...
</Layout>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<main [tagRootLocation]="{ id: 'page' }">
  ...
</main>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagRootLocation` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagContent](/tracking/api-reference/locationTaggers/tagContent.md)
- [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
:::
