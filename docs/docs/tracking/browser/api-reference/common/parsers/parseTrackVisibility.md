# parseTrackVisibility

[TaggingAttribute.trackVisibility](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackvisibility) parser

```typescript
parseTrackVisibility = (stringifiedTrackVisibilityAttribute: string | null) => TrackVisibilityAttribute
```  

## Parameters
|          |                                         | type               | default value
| :-:      | :--                                     | :--                | :--           
| required | **stringifiedTrackVisibilityAttribute** | `string` \| `null` |

## Returns
[TrackVisibilityAttribute](/tracking/api-reference/definitions/TrackVisibilityAttribute.md) instance

## Throws
Error when the given `stringifiedTrackVisibilityAttribute` cannot be parsed
