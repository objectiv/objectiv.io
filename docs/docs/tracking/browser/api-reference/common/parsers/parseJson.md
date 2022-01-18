# parseJson

JSON Objects parser

```typescript
parseJson = <T = unknown>(stringifiedObject: string | null, struct: Struct<T>) => T
```  

:::info struct?
Browser Tracker currently uses [Superstruct](https://docs.superstructjs.org/) for validation and parsing of some objects.
:::

## Parameters
|          |                       | type               | default value
| :-:      | :--                   | :--                | :--           
| required | **stringifiedObject** | `string` \| `null` |

## Returns
Object, of shape `T` if specified 

## Throws
Error when the given `stringifiedObject` cannot be `JSON.parse`d
