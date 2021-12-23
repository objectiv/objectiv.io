---
sidebar_position: 3
slug: /taxonomy/events
title: Overview
sidebar_label: Overview
---

# Events

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

Describe interactive and non-interactive events.

<Mermaid chart={`
	graph LR
        AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
        AbstractEvent --> InteractiveEvent;
        InteractiveEvent["InteractiveEvent<br /><span class='properties'>requires:<br />SectionContext</span>"]
        InteractiveEvent --> PressEvent["PressEvent<br /><span class='properties'>requires:<br />PressableContext</span>"];
        InteractiveEvent --> InputChangeEvent["InputChangeEvent<br /><span class='properties'>requires:<br />InputContext</span>"];
        AbstractEvent --> NonInteractiveEvent;
        NonInteractiveEvent --> ApplicationLoadedEvent;
        NonInteractiveEvent --> FailureEvent["FailureEvent<br><span class='properties'>message: string</span>"]; 
        NonInteractiveEvent --> HiddenEvent["HiddenEvent<br /><span class='properties'>requires:<br />LocationContext</span>"];
        NonInteractiveEvent --> MediaEvent["MediaEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
        NonInteractiveEvent --> SuccessEvent["SuccessEvent<br><span class='properties'>message: string</span>"];
        NonInteractiveEvent --> VisibleEvent["VisibleEvent<br /><span class='properties'>requires:<br />LocationContext</span>"];
        MediaEvent --> MediaLoadEvent;
        MediaEvent --> MediaPauseEvent;
        MediaEvent --> MediaStartEvent;
        MediaEvent --> MediaStopEvent;
    class InteractiveEvent diagramActive;
    class PressEvent diagramActive;
    class InputChangeEvent diagramActive;
    class NonInteractiveEvent diagramActive;
    class ApplicationLoadedEvent diagramActive;
    class FailureEvent diagramActive;
    class VisibleEvent diagramActive;
    class HiddenEvent diagramActive;
    class SuccessEvent diagramActive;
    class MediaEvent diagramActive;
    class MediaLoadEvent diagramActive;
    class MediaPauseEvent diagramActive;
    class MediaStartEvent diagramActive;
    class MediaStopEvent diagramActive;
`} 
  caption="Diagram: Events" 
  baseColor="blue" 
  links={[
    { name: 'FailureEvent', to: '/taxonomy/reference/events/FailureEvent' },
    { name: 'ApplicationLoadedEvent', to: '/taxonomy/reference/events/ApplicationLoadedEvent' },
    { name: 'NonInteractiveEvent', to: '/taxonomy/reference/events/NonInteractiveEvent' },
    { name: 'SuccessEvent', to: '/taxonomy/reference/events/SuccessEvent' },
    { name: 'VisibleEvent', to: '/taxonomy/reference/events/VisibleEvent' },
    { name: 'HiddenEvent', to: '/taxonomy/reference/events/HiddenEvent' },
    { name: 'MediaEvent', to: '/taxonomy/reference/events/MediaEvent' },
    { name: 'MediaLoadEvent', to: '/taxonomy/reference/events/MediaLoadEvent' },
    { name: 'MediaPauseEvent', to: '/taxonomy/reference/events/MediaPauseEvent' },
    { name: 'MediaStopEvent', to: '/taxonomy/reference/events/MediaStopEvent' },
    { name: 'MediaStartEvent', to: '/taxonomy/reference/events/MediaStartEvent' },
    { name: 'InteractiveEvent', to: '/taxonomy/reference/events/InteractiveEvent' },
    { name: 'PressEvent', to: '/taxonomy/reference/events/PressEvent' },
    { name: 'InputChangeEvent', to: '/taxonomy/reference/events/InputChangeEvent' }
  ]}
/>
