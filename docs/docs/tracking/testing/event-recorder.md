---
sidebar_position: 1
title: Event Recorder
---

EventRecorder is part of the [`developer-tools`](https://www.npmjs.com/package/@objectiv/developer-tools) 
package, accessible via `globalThis.objectiv.devTools.EventRecorder`. 

It automatically records events and errors from all Tracker instances in the Application. It's commonly used 
in combination with end-to-end testing frameworks, e.g. to create snaphots of expected tracking Events and 
Errors, or as a debugging tool during development.

### How to get it
There are several ways to import the 
[`developer-tools`](https://www.npmjs.com/package/@objectiv/developer-tools) package in your application.

For some applications it may be as easy as importing the package globally, while for others there will 
probably be some logic to load them when needed, e.g. in a specific environment.  

For example, you may require them conditionally by checking the Node environment:
```ts
if (process.env.NODE_ENV.startsWith('dev')) {
  require('@objectiv/developer-tools');
}
```

Other approaches may include:
- Configuring the Application bundler to transpile out the Developer Tools when generating a production build.
- Injecting the Developer Tools in the application globals at runtime.
- Delegating loading the Developer Tools to an Application Wrapper. 

## EventRecorder interface

```ts
type EventRecorder = {
  enabled: boolean;
  recording: boolean;
  errors: string[];
  events: RecordedEvents {
    filter(eventName: string): RecordedEvents;
    filter(eventNames: string[]): RecordedEvents;
    filter(predicate: (recordedEvent: RecordedEvent) => boolean): RecordedEvents;
    withLocationContext(locationContextName: string, locationContextId?: string): RecordedEvents;
    withGlobalContext(globalContextName: string, globalContextId?: string): RecordedEvents;
  };
  clear: () => void;
  start: () => void;
  stop: () => void;
};

```

## Attributes and methods 

### `boolean` enabled
Whether EventRecorder is enabled at all.

### `boolean` recording
Whether EventRecorder is currently recording.
 
### `string[]` errors
Sorted list of recorded errors. This can be useful to spot regressions, such as 
[Collisions or Validation errors](../core-concepts/validation.md). For example, in our 
[Cypress](./ci-frameworks/cypress.md) commands, this is part of the snapshot we take. Any new entry in it 
will fail the tests. 

### `RecordedEvents` events
Gets a RecordedEvents instance initialized with a sorted list of recorded events.  

All RecordedEvents methods are chainable, meaning that they return a new instance of RecordedEvents. These 
include:
 - Filtering events by their name or names.
 - Filtering events by their Location Contexts. Name, id or both.
 - Filtering events by their global Contexts. Name, id or both.

The main purpose of filtering events, apart from easier debugging, is to reduce noise and overall size of 
snapshots.

### `clear()` 
Deletes all recorded events and errors. This can be useful when snapshot-testing multiple flows in the same 
test.
 
### `start()`
Starts recording, if EventRecorder was previously stopped or configured to not automatically record.

### `stop()`
Stops recording, if EventRecorder is running.

## Filtering RecordedEvents
RecordedEvents is a small wrapper around a sorted list of recorded events. It has a few methods to filter out 
noise, as in unwanted asynchronous Events, or Events that belong to other scenarios.

Here are some examples of how one would use it in the Browser's console.

#### Get specific Events

Get all [PressEvents](../../taxonomy/reference/events/PressEvent.md):
```js
objectiv.devTools.EventRecorder.events
  .filter('PressEvent')
```

Get all [PressEvents](../../taxonomy/reference/events/PressEvent.md) or 
[InputChangeEvents](../../taxonomy/reference/events/InputChangeEvent.md):
```js
objectiv.devTools.EventRecorder.events
  .filter(['PressEvent', 'InputChangeEvent'])
```

#### Filter on a Context
Get all events that originated from 
[ContentContext](../../taxonomy/reference/location-contexts/ContentContext.md) locations:
```js
objectiv.devTools.EventRecorder.events
  .withLocationContext('ContentContext')
```

Or from a specific [ContentContext](../../taxonomy/reference/location-contexts/ContentContext.md):
```js
objectiv.devTools.EventRecorder.events
  .withLocationContext('ContentContext', 'hero-element')
```

Get events that have a specific [ContentContext](../../taxonomy/reference/global-contexts/overview.md):
```js
objectiv.devTools.EventRecorder.events
  .withGlobalContext('ApplicationContext', 'public-application')

objectiv.devTools.EventRecorder.events
  .withGlobalContext('ApplicationContext', 'admin')
```

#### Combine filters
Get all [PressEvents](../../taxonomy/reference/events/PressEvent.md) or 
[InputChangeEvents](../../taxonomy/reference/events/InputChangeEvent.md) originating from the hero-element 
in the main app:
```js
objectiv.devTools.EventRecorder.events
  .filter(['PressEvent', 'InputChangeEvent'])
  .withLocationContext('ContentContext', 'hero-element')
  .withGlobalContext('ApplicationContext', 'main-application')
```

#### Complex queries via predicate
The same example as above, written via a predicate instead:
```js
objectiv.devTools.EventRecorder.events
  .filter(
    (event) =>
      ['PressEvent', 'InputChangeEvent'].includes(event._type) 
      && Cypress._.find(
        event.location_stack,
        ({ _type, id }) => _type === 'ContentContext' && id === 'hero-element'
      )
      && Cypress._.find(
        event.global_contexts,
        ({ _type, id }) => _type === 'ApplicationContext' && id === 'main-application'
      )
  )
```

## Next: E2E testing with CI Frameworks
EventRecorder becomes even more useful when paired with a testing framework.  

Check out how to set up [E2E Testing with CI Frameworks](/tracking/testing/ci-frameworks/introduction.md) in 
the next section.