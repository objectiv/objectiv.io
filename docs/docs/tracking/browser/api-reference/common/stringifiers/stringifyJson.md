# stringifyJson

JSON Objects stringifier

```typescript
stringifyJson = <T = unknown>(object: T, struct: Struct<T>): string
```  

:::info struct?
Browser Tracker currently uses [Superstruct](https://docs.superstructjs.org/) for validation and parsing of some objects.
:::

## Parameters
|          |            | type     | default value
| :-:      | :--        | :--      | :--           
| required | **object** | `object` |

## Returns
string

## Throws
Error when the given `object` cannot be `JSON.stringify`d
