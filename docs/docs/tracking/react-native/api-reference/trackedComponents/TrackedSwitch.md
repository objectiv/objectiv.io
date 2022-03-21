# TrackedActivityIndicator

Wraps [ActivityIndicator](https://reactnative.dev/docs/activityindicator) in a [OverlayContext](/taxonomy/reference/location-contexts/OverlayContext.md) and automatically tracks Visibility Events for it.

```tsx
TrackedActivityIndicator: (props: ActivityIndicatorProps & {
  id: string,
}) => ReactElement
```

## Additional Props
|               |         | type      | 
|:-------------:|:--------|:----------|
| **required**  | **id**  | string    |

## Automatic Events
- [VisibleEvent](/taxonomy/reference/events/VisibleEvent.md) when `animating` changes from `false` to `true`.
- [HiddenEvent](/taxonomy/reference/events/HiddenEvent.md) when `animating` changes from `true` to `false`.

## Usage example

```jsx
import { TrackedActivityIndicator } from '@objectiv/tracker-react';
```

```tsx
const Loading = ({ visible }: { visible:boolean }) => (
  <TrackedActivityIndicator animating={visible} />
);
```

<br />

:::tip Did you know ?
`TrackedActivityIndicator` internally uses [OverlayContextWrapper](/tracking/react/api-reference/locationWrappers/OverlayContextWrapper.md).
:::

<br />

:::info See also
:::
