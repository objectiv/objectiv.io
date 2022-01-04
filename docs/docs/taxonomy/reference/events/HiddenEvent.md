# HiddenEvent

A [NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md) that's emitted after a [LocationContext](/taxonomy/location-contexts/) has become invisible.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
        AbstractEvent --> NonInteractiveEvent;
        NonInteractiveEvent --> HiddenEvent["HiddenEvent<br /><span class='properties'>requires:<br />AbstractLocationContext</span>"];
    class AbstractEvent diagramDisabled;
    class HiddenEvent diagramActive;
`} 
  caption="Diagram: HiddenEvent" 
  baseColor="blue" 
  links={[
    { name: 'NonInteractiveEvent', to: '/taxonomy/reference/events/NonInteractiveEvent' }
  ]}
/>

### Requires
- [AbstractLocationContext](/taxonomy/location-contexts/).

### Properties
|                | type        | description    | contains
| :--            | :--         | :--           | :--           
| **location_stack**    | array      | The location stack is an ordered list (stack), that contains a hierarchy of location contexts that deterministically describes where an event took place from global to specific. The whole stack (list) is needed to exactly pinpoint where in the UI the event originated.   | [AbstractLocationContext]
| **global_contexts**    | array      | Global contexts add global / general information about the event. They carry information that is not related to where the Event originated (location), such as device, platform or business data.   | [AbstractGlobalContext]
| **_type**      | string      | String containing the name of the event type. (eg. PressEvent).    |   
| **id**      | string      | Unique identifier for a specific instance of an event. Typically UUID's are a good way of implementing this. On the collector side, events should be unique, this means duplicate id's result in `not ok` events.    | pattern: `^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$`    | 
| **time**      | integer      | Timestamp indicating when the event was generated.    |  

:::info setting of properties
The tracker will automatically set all the properties.
:::