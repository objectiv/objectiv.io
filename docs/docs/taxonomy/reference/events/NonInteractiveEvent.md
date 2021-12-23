# NonInteractiveEvent

The parent of [Events](/taxonomy/events) that are not directly triggered by a user action.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
        AbstractEvent --> NonInteractiveEvent;
        NonInteractiveEvent --> ApplicationLoadedEvent;
        NonInteractiveEvent --> FailureEvent["FailureEvent<br><span class='properties'>message: string</span>"];  
        NonInteractiveEvent --> HiddenEvent["HiddenEvent<br /><span class='properties'>requires:<br />AbstractLocationContext</span>"];
        NonInteractiveEvent --> MediaEvent["MediaEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
        NonInteractiveEvent --> SuccessEvent["SuccessEvent<br><span class='properties'>message: string</span>"];
        NonInteractiveEvent --> VisibleEvent["VisibleEvent<br /><span class='properties'>requires:<br />AbstractLocationContext</span>"];
        MediaEvent --> MediaLoadEvent;
        MediaEvent --> MediaPauseEvent;
        MediaEvent --> MediaStartEvent;
        MediaEvent --> MediaStopEvent;
    class NonInteractiveEvent diagramActive;
`} 
  caption="Diagram: NonInteractiveEvent" 
  baseColor="blue" 
  links={[
    { name: 'SuccessEvent', to: '/taxonomy/reference/events/SuccessEvent' },
    { name: 'FailureEvent', to: '/taxonomy/reference/events/FailureEvent' },
    { name: 'ApplicationLoadedEvent', to: '/taxonomy/reference/events/ApplicationLoadedEvent' },
    { name: 'VisibleEvent', to: '/taxonomy/reference/events/VisibleEvent' },
    { name: 'HiddenEvent', to: '/taxonomy/reference/events/HiddenEvent' },
    { name: 'MediaEvent', to: '/taxonomy/reference/events/MediaEvent' },
    { name: 'MediaLoadEvent', to: '/taxonomy/reference/events/MediaLoadEvent' },
    { name: 'MediaPauseEvent', to: '/taxonomy/reference/events/MediaPauseEvent' },
    { name: 'MediaStartEvent', to: '/taxonomy/reference/events/MediaStartEvent' },
    { name: 'MediaStopEvent', to: '/taxonomy/reference/events/MediaStopEvent' }
  ]}
/>

### Requires
- None.

### Properties
|                | type        | description    | contains
| :--            | :--         | :--           | :--           
| **location_stack**    | array      | The location stack is an ordered list (stack), that contains a hierarchy of location contexts that deterministically describes where an event took place from global to specific. The whole stack (list) is needed to exactly pinpoint where in the UI the event originated.   | [AbstractLocationContext]
| **global_contexts**    | array      | Global contexts add global / general information about the event. They carry information that is not related to where the Event originated (location), such as device, platform or business data.   | [AbstractGlobalContext]
| **_type**      | string      | String containing the name of the event type. (eg. ClickEvent).    |   
| **id**      | string      | Unique identifier for a specific instance of an event. Typically UUID's are a good way of implementing this. On the collector side, events should be unique, this means duplicate id's result in `not ok` events.    | pattern: `^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$`    | 
| **time**      | integer      | Timestamp indicating when the event was generated.    |  