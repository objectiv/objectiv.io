# makeTitleFromChildren

Attempts to infer any text from the given React children. This can be used as title for Pressable and Link contexts.

```typescript
makeTitleFromChildren = (children: ReactNode) => string
```  

## Returns
`string`

## Usage

```ts
import { makeTitleFromChildren } from "@objectiv/tracker-react-native";
```

```tsx
makeTitleFromChildren(123);                       // '123'
makeTitleFromChildren(['test', 123], 'test 123'); // 'click-me'
makeTitleFromChildren(<div>what?</div>);          // 'what?'
```

<br />

:::info See also
- [makeIdFromString](/tracking/react-native/api-reference/common/factories/makeIdFromString.md)
:::
