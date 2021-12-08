# NonInteractiveEvent

The parent of [Events](/taxonomy/events) that are not directly triggered by a user action.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
        AbstractEvent --> NonInteractiveEvent;
        NonInteractiveEvent --> ApplicationLoadedEvent["ApplicationLoadedEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
        NonInteractiveEvent --> FailureEvent;  
        NonInteractiveEvent --> SectionVisibleEvent["SectionVisibleEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
        NonInteractiveEvent --> SectionHiddenEvent["SectionHiddenEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
        NonInteractiveEvent --> SuccessEvent;
        NonInteractiveEvent --> VideoEvent["VideoEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
        VideoEvent --> VideoLoadEvent;
        VideoEvent --> VideoPauseEvent;
        VideoEvent --> VideoStopEvent;
        VideoEvent --> VideoStartEvent;
    class NonInteractiveEvent diagramActive;
`} 
  caption="Diagram: NonInteractiveEvent" 
  baseColor="blue" 
  links={[
    { name: 'AbstractEvent', to: '/taxonomy/reference/events/AbstractEvent' },
    { name: 'SuccessEvent', to: '/taxonomy/reference/events/SuccessEvent' },
    { name: 'FailureEvent', to: '/taxonomy/reference/events/FailureEvent' },
    { name: 'ApplicationLoadedEvent', to: '/taxonomy/reference/events/ApplicationLoadedEvent' },
    { name: 'SectionVisibleEvent', to: '/taxonomy/reference/events/SectionVisibleEvent' },
    { name: 'SectionHiddenEvent', to: '/taxonomy/reference/events/SectionHiddenEvent' },
    { name: 'VideoEvent', to: '/taxonomy/reference/events/VideoEvent' },
    { name: 'VideoLoadEvent', to: '/taxonomy/reference/events/VideoLoadEvent' },
    { name: 'VideoPauseEvent', to: '/taxonomy/reference/events/VideoPauseEvent' },
    { name: 'VideoStopEvent', to: '/taxonomy/reference/events/VideoStopEvent' },
    { name: 'VideoStartEvent', to: '/taxonomy/reference/events/VideoStartEvent' }
  ]}
/>

### Requires
- None.