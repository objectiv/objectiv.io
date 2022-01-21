# TrackerErrorHandlerCallback

The `onError` parameter of [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) APIs is a callback that gets invoked when Errors are caught during tracking. 

```typescript jsx

type TrackerErrorHandlerCallback = <T = unknown>(error: unknown, parameters?: T) => void

```
:::info
`onError` is optional for all [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md) APIs. It's default value is simply `console.error`.
:::