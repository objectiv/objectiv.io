# tagLink

Tags a [TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).

```typescript
tagLink = (parameters: {
  id: string,
  href: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |          | type                                                                                              | default value
| :-:      | :--      | :--                                                                                               | :--           
| required | **id**   | string                                                                                            |
| required | **href** | string                                                                                            |
| optional | options  | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackClicks: true }`
| optional | onError  | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)

## Usage examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagLink } from '@objectiv/tracker-browser';
```

```typescript jsx
<a {...tagLink({ id: 'lnk-id', href: '/path' })} href="/path">Go!</a>
```

```typescript jsx
<LinkComponent {...tagLink({ id: 'lnk-id', href: '/path' })} to="/path">Go!</LinkComponent>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/browser/how-to-guides/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<a [tagLink]="{ id: 'lnk-id', href: '/path' }" href="/path">Go!</a>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagLink` is just syntactic sugar on top of [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagPressable](/tracking/browser/api-reference/locationTaggers/tagPressable.md)
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md)
- [trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
:::
