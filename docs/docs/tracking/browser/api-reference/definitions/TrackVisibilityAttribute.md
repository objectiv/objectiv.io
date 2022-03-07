# TrackVisibilityAttribute

The definition of [TaggingAttribute.trackVisibility](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackvisibility).

Supports two modes currently. 

```jsx
type TrackVisibilityAttribute = boolean | { mode: 'auto' } | { mode: 'manual', isVisible: boolean };
```

## 'true'
Shorthand for Mode: auto.

## 'false'
Disables automatic visibility tracking.

## Mode: auto
Will trigger Visibility Events based on DOM mutations.


## Mode: manual
Will trigger Visibility Events solely based on the given `isVisible` parameter.

<br />

:::info see also
- [WaitUntilTrackedOptions](/tracking/browser/api-reference/definitions/WaitUntilTrackedOptions.md)
- [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)
- [TrackClicksAttribute](/tracking/browser/api-reference/definitions/TrackClicksAttribute.md)
- [ValidateAttribute](/tracking/browser/api-reference/definitions/ValidateAttribute.md)
:::
