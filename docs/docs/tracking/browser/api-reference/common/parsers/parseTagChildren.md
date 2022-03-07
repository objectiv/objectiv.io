# parseTagChildren

[TagChildrenAttributes](/tracking/browser/api-reference/definitions/TagChildrenAttributes.md) parser

```typescript
parseTagChildren = (stringifiedChildrenTaggingAttribute: string | null) => ValidChildrenTaggingQuery[]
```  

## Parameters
|          |                                         | type             | default value
| :-:      | :--                                     | :--              | :--           
| required | **stringifiedChildrenTaggingAttribute** | string \| `null` |

## Returns
Array of [ChildrenTaggingQuery](/tracking/browser/api-reference/definitions/ChildrenTaggingQuery.md)

## Throws
Error when the given `stringifiedChildrenTaggingAttribute` cannot be parsed
