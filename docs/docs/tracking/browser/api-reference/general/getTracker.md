# getTracker

Retrieves a [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md) from the [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md).  

```typescript
getTracker = (trackerId?: string) => BrowserTracker
```

:::info
If not `trackerId` is specified, the default [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md) is returned. See also [setDefaultTracker](/tracking/browser/api-reference/general/setDefaultTracker.md).
:::

## Parameters
|          |               | type   | default value
| :-:      | :--           | :--    | :--           
| optional | **trackerId** | string |

:::caution
`getTracker` will throw an Error if [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md) is empty.
:::

## Returns
 - [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)

## Usage example

```typescript jsx
import { getTracker } from '@objectiv/tracker-browser';
```

```typescript jsx
const tracker = getTracker();
```

```typescript jsx
const defaultTracker = getTracker();
const secondaryTracker = getTracker('secondary-tracker');
```

<br />

:::info See also
- [setDefaultTracker](/tracking/browser/api-reference/general/setDefaultTracker.md)
- [makeTracker](/tracking/browser/api-reference/general/makeTracker.md)
- [TrackerRepository](/tracking/browser/api-reference/core/TrackerRepository.md)
- [Event Trackers](/tracking/browser/api-reference/eventTrackers/overview.md)
- [BrowserTracker](/tracking/browser/api-reference/general/BrowserTracker.md)
:::
