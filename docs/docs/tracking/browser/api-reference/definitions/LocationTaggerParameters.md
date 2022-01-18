# LocationTaggerParameters

The base parameters of all [Location Taggers](/tracking/api-reference/locationTaggers/overview.md).

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
| optional | options | [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)                   | Dynamically calculated based on `instance`. See the [Events](/tracking/api-reference/locationTaggers/tagLocation.md#events) table.
| optional | onError | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`
