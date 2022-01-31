# TagLocationReturnValue

[LocationTaggers](/tracking/browser/api-reference/locationTaggers/overview.md) APIs return either a set of [TaggingAttributes](/tracking/browser/api-reference/definitions/TaggingAttribute.md) or `undefined`. The latter occurs whenever an Error is thrown. 

```jsx

type TagLocationReturnValue = TagLocationAttributes | undefined; 

```

:::info
Returning `undefined` in case of Errors works because it's spreadable: `{...undefined}` returns `{}`.
:::
