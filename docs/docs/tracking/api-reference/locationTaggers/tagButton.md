# tagButton

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as [ButtonContext](/taxonomy/reference/location-contexts/ButtonContext.md).  

```typescript
tagButton = (parameters: {
  id: string,
  text: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |          | type                                                                                              | default value
| :-:      | :--      | :--                                                                                               | :--           
| required | **id**   | string                                                                                            |
| required | **text** | string                                                                                            |
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
import { tagButton } from '@objectiv/tracker-browser';
```

```typescript jsx
<button {...tagButton({ id: 'button-id', text: 'Click Me!' })}>Click Me!</button>
```

```typescript jsx
<Submit {...tagButton({ id: 'submit', text: 'Do It!' })}>Do It!</Submit>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<button [tagButton]="{ id: 'button-id', text: 'Click Me!' }">Click Me!</button>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagButton` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).
:::

<br />

:::info See also
- [tagLink](/tracking/api-reference/locationTaggers/tagLink.md)
- [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
:::
