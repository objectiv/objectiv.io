# TagLinkParameters

[tagLink](/tracking/api-reference/locationTaggers/tagLink.md) has an extra attributes, `href`, as mandatory parameter.

```typescript
type TagLinkParameters = LocationTaggerParameters & { 
  href: string
};
```

## Parameters
|          |          | type   | default value
| :-:      | :--      | :--    | :--           
| required | **href** | string |

<br />

:::info see also
- [LocationTaggerParameters](/tracking/api-reference/definitions/LocationTaggerParameters.md)
:::
