# Core Factories

Automatically generated factories based on the [Taxonomy](/taxonomy/introduction.md) schema. 

:::caution
These are core-level APIs needed only when diving into low-level tracking via [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md) or [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).   
:::

## Location Context Factories
These factories produce [LocationContext](/taxonomy/reference/location-contexts/overview.md) instances ready to be handed over to [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).

### Location Context Factory list

```typescript
makeApplicationContext = (props: { 
  id: string 
}) => ApplicationContext
```

```typescript
makeContentContext = (props: { 
  id: string 
}) => SectionContext
```

```typescript
makeExpandableContext = (props: { 
  id: string 
}) => ExpandableContext
```

```typescript
makeInputContext = (props: { 
  id: string 
}) => InputContext
```

```typescript
makeItemContext = (props: { 
  id: string 
}) => ItemContext
```

```typescript
makeLinkContext = (props: { 
  id: string, 
  text: string, 
  href: string 
}) => LinkContext
```

```typescript
makeMediaPlayerContext = (props: { 
  id: string 
}) => MediaPlayerContext
```

```typescript
makeNavigationContext = (props: { 
  id: string 
}) => NavigationContext
```

```typescript
makeOverlayContext = (props: { 
  id: string 
}) => OverlayContext
```

```typescript
makePressableContext = (props: { 
  id: string, 
  text: string 
}) => ButtonContext
```

## Event Factories
These factories produce [Event](/taxonomy/reference/events/overview.md) instances ready to be handed over to [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).

### Common parameters
All Event factories share some common, optional, parameters: 

|          |                 | type                                                                         | default value
| :-:      | :--             | :--                                                                          | :--           
| optional | location_stack  | [AbstractLocationContext](/taxonomy/reference/location-contexts/overview.md) | `[]` 
| optional | global_contexts | [AbstractGlobalContext](/taxonomy/reference/location-contexts/overview.md)   | `[]`

### Event Factory list

```typescript
makeApplicationLoadedEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => ApplicationLoadedEvent
```

```typescript
makeClickEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => ClickEvent
```

```typescript
makeInputChangeEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => InputChangeEvent
```

```typescript
makeInteractiveEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => InteractiveEvent
```

```typescript
makeHiddenEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => HiddenEvent
```

```typescript
makeMediaEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => MediaEvent
```

```typescript
makeMediaLoadEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => MediaLoadEvent
```

```typescript
makeMediaPauseEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => MediaPauseEvent
```

```typescript
makeMediaStartEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => MediaStartEvent
```

```typescript
makeMediaStopEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => MediaStopEvent
```

```typescript
makeNonInteractiveEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => NonInteractiveEvent
```

```typescript
makePressEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => PressEvent
```

```typescript
makeVisibleEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => VisibleEvent
```
