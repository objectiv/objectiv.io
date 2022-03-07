# makeIdFromString

Converts the given string in an id-like string. If the given string cannot be converted, returns `null`.

```typescript
makeIdFromString = (sourceString: string) => string | null
```  

## Returns
- `string` if the conversion succeeded  
- `null` if it failed

## Usage

```ts
import { makeIdFromString } from "@objectiv/tracker-react";
```

```js
makeIdFromString('');                          // null
makeIdFromString('Click Me!');                 // 'click-me'
makeIdFromString('Annoying "LONG" sentence!'); // 'annoying-long-sentence'
```

<br />

:::info See also
- [makeTitleFromChildren](/tracking/react/api-reference/common/factories/makeTitleFromChildren.md)
:::
