# FailureEvent

A [NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md) that is sent when a user action results in a error, like an invalid email when sending a form.


import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
        AbstractEvent --> NonInteractiveEvent;
        NonInteractiveEvent --> FailureEvent;
    class AbortedEvent diagramActive;
`} 
  caption="Diagram: NonInteractiveEvent" 
  baseColor="blue" 
  links={[
    { name: 'AbstractEvent', to: '/taxonomy/reference/events/AbstractEvent' },
    { name: 'NonInteractiveEvent', to: '/taxonomy/reference/events/NonInteractiveEvent' }
  ]}
/>

### Requires
None.