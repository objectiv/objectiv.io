# isTaggableElement

A type guard to determine if the given [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) is a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [SVGElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement).

```typescript
isTaggableElement = (element: GuardableElement): element is TaggableElement => boolean
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) |

## Returns
boolean
