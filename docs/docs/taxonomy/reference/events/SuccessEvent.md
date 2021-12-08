# SuccessEvent

A [NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md) that is sent when a user action is successfully completed, like sending an email form.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
        AbstractEvent --> NonInteractiveEvent;
        NonInteractiveEvent --> SuccessEvent;
    class CompletedEvent diagramActive;
`} 
  caption="Diagram: SuccessEvent" 
  baseColor="blue" 
  links={[
    { name: 'AbstractEvent', to: '/taxonomy/reference/events/AbstractEvent' },
    { name: 'NonInteractiveEvent', to: '/taxonomy/reference/events/NonInteractiveEvent' }
  ]}
/>

### Requires
- None.