# LocationContext

Unions of [LocationContexts](/taxonomy/reference/location-contexts/overview.md).  
Useful to match multiple Contexts sharing the same abstract or concern. Also used by type guards.

### AnyLocationContext
Struct union to match any LocationContext

```typescript
export type AnyLocationContext =
  | ContentContext
  | ExpandableContext
  | InputContext
  | LinkContext
  | MediaPlayerContext
  | NavigationContext
  | OverlayContext
  | PressableContext
  | RootLocationContext;
```

### AnyPressableContext
Struct union to match any PressableContext

```typescript
export type AnyPressableContext = LinkContext | PressableContext;
```

### AnyClickableContext
Struct union to match AnyPressableContext and ExpandableContext

```typescript
export type AnyClickableContext = AnyPressableContext | ExpandableContext;
```

### AnyShowableContext
Struct union to match OverlayContext and ExpandableContext

```typescript
export type AnyShowableContext = OverlayContext | ExpandableContext;
```
