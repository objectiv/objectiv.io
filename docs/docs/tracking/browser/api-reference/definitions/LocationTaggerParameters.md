# LocationTaggerParameters

The base parameters of all [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md).

```typescript

type LocationTaggerParameters = {
  id: string;
  options?: TagLocationOptions;
  onError?: TrackerErrorHandlerCallback;
};
```

## Parameters
|          |         | type                                                                                              | default value
| :-:      | :--     | :--                                                                                               | :--           
| required | **id**  | string                                                                                            |
| optional | options | [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | Dynamically calculated based on `instance`. See the [Events](/tracking/browser/api-reference/locationTaggers/tagLocation.md#events) table.
| optional | onError | [TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`
