# InputChangeEvent

An [InteractiveEvent](/taxonomy/reference/events/InteractiveEvent.md that's triggered when user input is modified.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
        AbstractEvent --> InteractiveEvent;
        InteractiveEvent --> InputChangeEvent["InputChangeEvent<br /><span class='properties'>requires:<br />InputContext</span>"];
    class InputChangeEvent diagramActive;
`} 
  caption="Diagram: InputChangeEvent" 
  baseColor="blue" 
  links={[
    { name: 'AbstractEvent', to: '/taxonomy/reference/events/AbstractEvent' },
    { name: 'InteractiveEvent', to: '/taxonomy/reference/events/InteractiveEvent' }
  ]}
/>

### Requires
- [InputContext](/taxonomy/reference/location-contexts/InputContext.md).