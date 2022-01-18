# TrackVisibilityAttribute

The definition of [TaggingAttribute.trackVisibility](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackvisibility).

Supports two modes currently. 

```typescript jsx
type TrackClicksAttribute = { mode: 'auto' } | { mode: 'manual', isVisible: boolean };
```

## Mode: auto
Will trigger Visibility Events based on DOM mutations.


## Mode: manual
Will trigger Visibility Events solely based on the given `isVisible` parameter.

<br />

:::info see also
- [WaitUntilTrackedOptions](/tracking/api-reference/definitions/WaitUntilTrackedOptions.md)
- [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)
- [TrackClicksAttribute](/tracking/api-reference/definitions/TrackClicksAttribute.md)
- [ValidateAttribute](/tracking/api-reference/definitions/ValidateAttribute.md)
:::
