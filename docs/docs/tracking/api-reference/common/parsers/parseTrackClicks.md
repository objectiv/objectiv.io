# parseTrackClicks

[TaggingAttribute.trackPressEvents](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks) to [TrackClicksOptions](/tracking/api-reference/definitions/TrackClicksOptions.md) parser

```typescript
parseTrackClicks = (stringifiedTrackClicksAttribute: string | null) => TrackClicksOptions
```  

:::info
Differently than other simplistic parsers, this one transforms the input to a different format.
:::

## Parameters
|          |                                     | type               | default value
| :-:      | :--                                 | :--                | :--           
| required | **stringifiedTrackClicksAttribute** | `string` \| `null` |

## Returns
[TrackClicksOptions](/tracking/api-reference/definitions/TrackClicksOptions.md) instance

## Throws
Error when the given `stringifiedTrackClicksAttribute` cannot be parsed
