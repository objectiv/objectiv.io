# parseValidate

[TaggingAttribute.validate](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributevalidate) parser

```typescript
parseValidate = (stringifiedValidateAttribute: string | null) => ValidateAttribute
```  

## Parameters
|          |                                  | type               | default value
| :-:      | :--                              | :--                | :--           
| required | **stringifiedValidateAttribute** | `string` \| `null` |

## Returns
[ValidateAttribute](/tracking/browser/api-reference/definitions/ValidateAttribute.md) instance

## Throws
Error when the given `stringifiedValidateAttribute` cannot be parsed
