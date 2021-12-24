# tagPressable

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as [PressableContext](/taxonomy/reference/location-contexts/PressableContext.md).

```typescript
tagPressable = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |          | type                                                                                              | default value
| :-:      | :--      | :--                                                                                               | :--           
| required | **id**   | string                                                                                            |
| optional | options  | [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)                   | `{ trackClicks: true }`
| optional | onError  | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Events

Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)

## Returns
[TagLocationReturnValue](/tracking/api-reference/definitions/TagLocationReturnValue.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagPressable } from '@objectiv/tracker-browser';
```

```typescript jsx
<button {...tagPressable({ id: 'button-id' })}>Click Me!</button>
```

```typescript jsx
<Submit {...tagPressable({ id: 'submit' })}>Do It!</Submit>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<button [tagPressable]="{ id: 'button-id' }">Click Me!</button>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagPressable` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).
:::

<br />

:::info See also
- [tagLink](/tracking/api-reference/locationTaggers/tagLink.md)
- [tagExpandable](/tracking/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
  :::