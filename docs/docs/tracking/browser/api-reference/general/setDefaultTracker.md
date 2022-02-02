# setDefaultTracker

Changes the default [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md) in the [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md). This is the instance [getTracker](/tracking/browser/api-reference/general/getTracker.md) returns by default.  

```typescript
setDefaultTracker = (trackerId: string) => void
```

:::tip Default Tracker ?
[Event Trackers](/tracking/browser/api-reference/eventTrackers/overview.md) internally use [getTracker](/tracking/browser/api-reference/general/getTracker.md) to retrieve the default [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md) instance to use.
:::

## Parameters
|          |               | type   | default value
| :-:      | :--           | :--    | :--           
| required | **trackerId** | string |

## Returns
`setDefaultTracker` is a void function.

## Usage example

```jsx
import { setDefaultTracker } from '@objectiv/tracker-browser';
```

```jsx
setDefaultTracker('secondary-tracker');
```

<br />

:::info See also
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [getTracker](/tracking/browser/api-reference/general/getTracker.md)
- [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md)
- [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md) 
- [Event Trackers](/tracking/browser/api-reference/eventTrackers/overview.md)
:::
