# parseJson

JSON Objects parser

```typescript
parseJson = (stringifiedObject: string | null) => unknown
```  

## Parameters
|          |                       | type               | default value
| :-:      | :--                   | :--                | :--           
| required | **stringifiedObject** | `string` \| `null` |

## Returns
`unknown`

## Throws
Error when the given `stringifiedObject` cannot be `JSON.parse`d
