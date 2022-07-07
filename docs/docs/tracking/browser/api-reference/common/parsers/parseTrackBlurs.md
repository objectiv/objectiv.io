# parseTrackBlurs

[TaggingAttribute.trackBlurs](/tracking/browser/api-reference/definitions/TaggingAttribute.md#taggingattributetrackblurs) to [TrackBlursOptions](/tracking/browser/api-reference/definitions/TrackBlursOptions.md) parser

```typescript
parseTrackBlurs = (stringifiedTrackBlursAttribute: string | null) => TrackBlursOptions
```  

:::info
Differently than other simplistic parsers, this one transforms the input to a different format.
:::

## Parameters
|          |                                    | type               | default value
| :-:      | :--                                | :--                | :--           
| required | **stringifiedTrackBlursAttribute** | `string` \| `null` |

## Returns
[TrackBlursOptions](/tracking/browser/api-reference/definitions/TrackBlursOptions.md) instance

## Throws
Error when the given `stringifiedTrackBlursAttribute` cannot be parsed
