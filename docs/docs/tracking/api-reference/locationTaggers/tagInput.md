# tagInput

Tags a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be tracked as [InputContext](/taxonomy/reference/location-contexts/InputContext.md).

```typescript
tagInput = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)                   | `{ trackBlurs: true }`
| optional | onError | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackInputChange](/tracking/api-reference/eventTrackers/trackInputChange.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagInput } from '@objectiv/tracker-browser';
```

```typescript jsx
<input {...tagInput({ id: 'search' })} />
```

```typescript jsx
<Search {...tagInput({ id: 'search' })} />
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<input [tagInput]="{ id: 'search' }" />
```

  </TabItem>
</Tabs>



<br />

:::tip Did you know ?
`tagInput` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).
:::

<br />


:::info See also
- [tagElement](/tracking/api-reference/locationTaggers/tagElement.md)
- [tagButton](/tracking/api-reference/locationTaggers/tagButton.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
:::
