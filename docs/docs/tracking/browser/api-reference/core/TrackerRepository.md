# TrackerRepository

TrackerRepository is a global Singleton. 

```typescript
TrackerRepository<T extends Tracker>
```

It allows the creation and use of multiple Tracker instances in the same Application.

## Properties

### trackersMap
```typescript
trackersMap = new Map<string, T>();
```
A Map of all Trackers that have been pushed in the Repository using `add`.

:::tip FYI
[makeTracker](/tracking/browser/api-reference/general/makeTracker.md) and [getOrMakeTracker](/tracking/browser/api-reference/general/getOrMakeTracker.md) automatically push new Tracker instances in the TrackerRepository.
:::

### defaultTracker
```typescript
defaultTracker?: T;
```
The default Tracker instance. It's going to be used by any API not receiving a specific Tracker instance.

:::tip FYI
The first Tracker instance added to the TrackerRepository is also automatically set as default
:::

## Methods

### add
```typescript
add(newInstance: T): void
```
Add a new Tracker instance to the trackersMap. The first instance added is also set onto `defaultTracker`.

### delete
```typescript
delete(trackerId: string): void
```
Delete a Tracker instance from the `trackersMap` by trackerId.

### get
```typescript
get(trackerId?: string): T
```
Get a Tracker instance from the `trackersMap` by trackerId. If trackerId is omitted, `defaultTracker` is returned, if set.

:::tip FYI
This method can be invoked also by using the [getTracker](/tracking/browser/api-reference/general/getTracker.md) general API.
:::

### setDefault
```typescript
setDefault(trackerId: string): void
```
Changes the default Tracker instance by replacing the instance stored in `defaultTracker`.

:::tip FYI
This method can be invoked also by using the [setDefaultTracker](/tracking/browser/api-reference/general/setDefaultTracker.md) general API. 
:::

### activateAll
```typescript
activateAll(): void
```
Iterates through all instances in `trackersMap` and calls [setActive(true)](/tracking/browser/api-reference/core/Tracker.md#setactive) method for each.

### deactivateAll
```typescript
deactivateAll(): void
```
Iterates through all instances in `trackersMap` and calls [setActive(false)](/tracking/browser/api-reference/core/Tracker.md#setactive) method for each.

### flushAllQueues
```typescript
flushAllQueues(): void
```
Iterates through all instances in `trackersMap` and calls [flushQueue()](/tracking/browser/api-reference/core/Tracker.md#flushqueue) method for each.

<br/>

:::info see also
- [getTrackerRepository](/tracking/browser/api-reference/general/getTrackerRepository.md)
- [getTracker](/tracking/browser/api-reference/general/getTracker.md)
- [setDefaultTracker](/tracking/browser/api-reference/general/setDefaultTracker.md)
- [Tracker](/tracking/browser/api-reference/core/Tracker.md)
:::