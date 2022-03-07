# TrackClicksAttribute

The definition of [TaggingAttribute.trackClicks](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks).

When a `boolean` is specified it either disables the feature entirely or applies sensible defaults.

The same applies to `waitUntilTracked`. Either it's left out, set to `true` for sensible defaults or a custom set of options can be specified. 

```jsx
type TrackClicksAttribute = boolean | {
  waitUntilTracked: true | WaitUntilTrackedOptions
};
```



:::info see also
- [WaitUntilTrackedOptions](/tracking/browser/api-reference/definitions/WaitUntilTrackedOptions.md)
- [TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)
- [TrackVisibilityAttribute](/tracking/browser/api-reference/definitions/TrackVisibilityAttribute.md)
- [ValidateAttribute](/tracking/browser/api-reference/definitions/ValidateAttribute.md)
:::
