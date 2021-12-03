# trackURLChange

Triggers a [URLChangeEvent](/taxonomy/reference/events/URLChangeEvent.md).

```typescript
trackURLChange = (parameters: {
  element?: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackURLChange` events are triggered automatically by the [Tagged Elements Observer](/tracking/core-concepts/trackers.md#tagged-elements-observer) whenever [Location.href](https://developer.mozilla.org/en-US/docs/Web/API/Location/href) changes.
:::

## Parameters
|          |         | type                                                                                                                                                     | default value
| :-:      | :--     | :--                                                                                                                                                      | :--           
| optional | element        | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           | `document`
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackURLChange` is a void function.

## Usage example

```typescript jsx
import { trackURLChange } from '@objectiv/tracker-browser';
```

```typescript
const App = () => {
  ...
  const MonitorURLChanges = () => {
    const location = useLocation();
    const [previousHref, setPreviousHref] = useState(document.location.href);
    
    useEffect(() => {
      if (location.href !== previousHref) {
        setPreviousHref(location.href);
        trackURLChange();
      }
    }, [location, previousHref])
    return null;
  };
  ...
  return (
    <BrowserRouter>
      <Route component = { MonitorURLChanges } />
      ...
    </BrowserRouter>
  )
}
```

:::warning
Make sure to set [makeTracker](/tracking/api-reference/general/makeTracker.md)'s `trackURLChanges` to `false`, when manually tracking this event, to avoid double calls.
:::

:::caution Just pseudocode
These are rather simplistic examples to illustrate the idea.  

The definition of a `URL Change` is a fuzzy one at best and there are many ways of tracking URL changes depending on architecture, used frameworks and requirements. 

In fact, [Browser Tracker](/tracking/core-concepts/trackers.md#browser-tracker) uses none of the above. Instead, it relies on a [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) in combination with some state. 
:::

<br />

:::tip Did you know ?
`trackURLChange` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [trackApplicationLoaded](/tracking/api-reference/eventTrackers/trackApplicationLoaded.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
