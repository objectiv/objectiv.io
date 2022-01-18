# trackerErrorHandler

Generic error handler used by [Location Taggers](/tracking/api-reference/locationTaggers/overview.md)  and [Event Trackers](/tracking/api-reference/eventTrackers/overview.md).

If `onError` is provided it's going to be called with the given `error` as parameter. Else `error` will be logged to the console.

```typescript
trackerErrorHandler = (
  error: unknown, 
  parameters?: unknown, 
  onError?: TrackerErrorHandlerCallback
) => undefined
```  

## Parameters
|          |            | type                                 | default value
| :-:      | :--        | :--                                  | :--           
| required | **error**  | `unknown`                            |
| optional | parameters | `unknown`                            |
| optional | onError    | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) |

## Returns
`undefined`
