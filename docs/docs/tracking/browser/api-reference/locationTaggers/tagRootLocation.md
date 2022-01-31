# tagRootLocation

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).

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
| optional | options | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | 
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```jsx
import { tagRootLocation } from '@objectiv/tracker-browser';
```

```jsx
<body {...tagRootLocation({ id: 'page' })}>
  ...
</body>
```

```jsx
<Layout {...tagRootLocation({ id: 'page' })}>
  ...
</Layout>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/browser/how-to-guides/getting-started.md#optional---configure-taggers-directive).

```jsx
<main [tagRootLocation]="{ id: 'page' }">
  ...
</main>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagRootLocation` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagContent](/tracking/browser/api-reference/locationTaggers/tagContent.md)
- [tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/browser/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
:::
