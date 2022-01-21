# parseLocationContext

[LocationContext](/tracking/browser/api-reference/definitions/LocationContext.md) parser

```typescript
parseLocationContext = parseLocationContext = (stringifiedContext: string | null) => AnyLocationContext
```  

## Parameters
|          |                        | type               | default value
| :-:      | :--                    | :--                | :--           
| required | **stringifiedContext** | `string` \| `null` |

## Returns
[AnyLocationContext](/tracking/browser/api-reference/definitions/LocationContext.md#anylocationcontext) instance

## Throws
Error when the given `stringifiedContext` cannot be parsed

:::info See also
- [LocationContext](/tracking/browser/api-reference/definitions/LocationContext.md)
- [LocationContext Core Factories](/tracking/browser/api-reference/core/CoreFactories.md#location-context-factories)
:::
