# parseTrackVisibility

[TaggingAttribute.trackVisibility](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackvisibility) parser

```typescript
parseTrackVisibility = (stringifiedTrackVisibilityAttribute: string | null) => TrackVisibilityAttribute
```  

## Parameters
|          |                                         | type               | default value
| :-:      | :--                                     | :--                | :--           
| required | **stringifiedTrackVisibilityAttribute** | `string` \| `null` |

## Returns
[TrackVisibilityAttribute](/tracking/browser/api-reference/definitions/TrackVisibilityAttribute.md) instance

## Throws
Error when the given `stringifiedTrackVisibilityAttribute` cannot be parsed
