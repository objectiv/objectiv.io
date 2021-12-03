# tagLink

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).

```typescript
tagLink = (parameters: {
  id: string,
  text: string,
  href: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |          | type                                                                                              | default value
| :-:      | :--      | :--                                                                                               | :--           
| required | **id**   | string                                                                                            |
| required | **text** | string                                                                                            |
| required | **href** | string                                                                                            |
| optional | options  | [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)                   | `{ trackClicks: true }`
| optional | onError  | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)

## Usage examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagLink } from '@objectiv/tracker-browser';
```

```typescript jsx
<a {...tagLink({ id: 'lnk-id', text: 'Go!', href: '/path' })} href="/path">Go!</a>
```

```typescript jsx
<LinkComponent {...tagLink({ id: 'lnk-id', text: 'Go!', href: '/path' })} to="/path">Go!</LinkComponent>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<a [tagLink]="{ id: 'lnk-id', text: 'Go!', href: '/path' }" href="/path">Go!</a>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagLink` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagButton](/tracking/api-reference/locationTaggers/tagButton.md)
- [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
:::
