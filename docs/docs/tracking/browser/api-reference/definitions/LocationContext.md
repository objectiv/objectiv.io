# LocationContext

[Structs](https://docs.superstructjs.org/) and Unions for each [LocationContext](/taxonomy/reference/location-contexts/overview.md) in the [Taxonomy](/taxonomy/introduction.md).

:::tip Struct > TS
TypeScript Definitions for Structs are usually already exported, if not they can be inferred using the `Infer` helper. For example:
```typescript
type AbstractContext = Infer<typeof AbstractContext>;
```
:::

## Abstract Context Structs

### AbstractContext
All Contexts inherit from AbstractContext.  
```typescript
const AbstractContext = object({
  id: string(),
  _type: string(),
});
```

### AbstractLocationContext 
`AbstractLocationContext` < `Abstract Context` 

```typescript
const AbstractLocationContext = assign(
  AbstractContext,
  object({
    __location_context: literal(true),
  })
);
```

### AbstractPressableContext
`AbstractPressableContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
export const AbstractPressableContext = assign(
  AbstractLocationContext,
  object({
    __pressable_context: literal(true),
  })
);
```

## Context Structs

:::info
Not all Location Contexts have a corresponding [Location Tagger](/tracking/browser/api-reference/locationTaggers/overview.md) shorthand.
Creating a new Location Tagger is as simple as writing a small wrapper around the low-level [tagLocation](/tracking/browser/api-reference/locationTaggers/tagLocation.md).

If a Location Tagger proves itself useful enough it may add it to the standard set of [Location Taggers](/tracking/browser/api-reference/locationTaggers/overview.md).
:::

### RootLocationContext
`RootLocationContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const RootLocationContext = assign(
  AbstractLocationContext,
  object({
    _type: literal('RootLocationContext'),
  })
);
```
#### Tagger
- [tagRootLocation](/tracking/browser/api-reference/locationTaggers/tagRootLocation.md)

### ContentContext
`ContentContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const ContentContext = assign(
  AbstractLocationContext,
  object({
    _type: literal('ContentContext'),
  })
);
```
#### Tagger
- [tagContent](/tracking/browser/api-reference/locationTaggers/tagContent.md)

### ExpandableContext
`ExpandableContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const ExpandableContext = assign(
  AbstractLocationContext,
  object({
    _type: literal('ExpandableContext'),
  })
);
```  

#### Tagger
- [tagExpandable](/tracking/browser/api-reference/locationTaggers/tagExpandable.md)

### MediaPlayerContext
`MediaPlayerContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const MediaPlayerContext = assign(
  AbstractLocationContext,
  object({
    _type: literal('MediaPlayerContext'),
  })
);
```  

#### Tagger
- [tagMediaPlayer](/tracking/browser/api-reference/locationTaggers/tagMediaPlayer.md)

### NavigationContext
`NavigationContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const NavigationContext = assign(
  AbstractLocationContext,
  object({
    _type: literal('NavigationContext'),
  })
);
```  
#### Tagger
- [tagNavigation](/tracking/browser/api-reference/locationTaggers/tagNavigation.md)


### OverlayContext
`OverlayContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const OverlayContext = assign(
  AbstractLocationContext,
  object({
    _type: literal('OverlayContext'),
  })
);
```  

#### Tagger
- [tagOverlay](/tracking/browser/api-reference/locationTaggers/tagOverlay.md)

### InputContext
`InputContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const InputContext = assign(
  AbstractLocationContext,
  object({
    _type: literal('InputContext'),
  })
);
```  

#### Tagger
- [tagInput](/tracking/browser/api-reference/locationTaggers/tagInput.md)

### PressableContext
`PressableContext` < `AbstractPressableContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const PressableContext = assign(
  AbstractPressableContext,
  object({
    _type: literal('PressableContext'),
  })
);
```  

#### Tagger
- [tagPressable](/tracking/browser/api-reference/locationTaggers/tagPressable.md)

### LinkContext
`LinkContext` < `AbstractPressableContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const LinkContext = assign(
  AbstractPressableContext,
  object({
    _type: literal('LinkContext'),
    href: string(),
  })
);
```  

#### Tagger
- [tagLink](/tracking/browser/api-reference/locationTaggers/tagLink.md)

## Unions
Unions are useful to match multiple Contexts sharing the same abstract or concern.

### AnyLocationContext
Struct union to match any LocationContext

```typescript
const AnyLocationContext = union([
  ContentContext,
  ExpandableContext,
  InputContext,
  LinkContext,
  MediaPlayerContext,
  NavigationContext,
  OverlayContext,
  PressableContext,
  RootLocationContext,
]);
```

### AnyPressableContext
Struct union to match any PressableContext

```typescript
const AnyPressableContext = union([
  LinkContext,
  PressableContext, 
]);
```

### AnyClickableContext
Struct union to match AnyPressableContext and ExpandableContext

```typescript
const AnyClickableContext = union([
  AnyPressableContext, 
  ExpandableContext
]);
```

### AnyShowableContext
Struct union to match OverlayContext and ExpandableContext

```typescript
const AnyShowableContext = union([
  OverlayContext, 
  ExpandableContext
]);
```
