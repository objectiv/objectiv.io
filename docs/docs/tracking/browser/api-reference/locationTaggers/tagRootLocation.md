# tagRootLocation

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [RootLocationContext](/taxonomy/reference/location-contexts/RootLocationContext.md).

```typescript
tagRootLocation = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::danger Low level api
Make sure to never use tagRootLocation while RootLocationContextFromURLPlugin is active. It will lead to multiple RootLocationContexts, which is forbidden.

For applications relying on URLs, RootLocationContext can be automatically instrumented via the `RootLocationContextFromURLPlugin`.
This is enabled by default in [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md#plugins).

**Reconfiguring or removing RootLocationContextFromURLPlugin**   
If you need RootLocationContextFromURLPlugin to track a different url slug, search parameter or the hashtag, you can reconfigure it to do so.

When reconfiguring the RootLocationContextFromURLPlugin is not a viable option, the Plugin should be removed before using this Location Tagger to instrument roots manually.

- Check out [this guide](/tracking/browser/how-to-guides/configuring-root-locations.md) for some examples.
:::

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | 
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `TrackerConsole.error`

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
