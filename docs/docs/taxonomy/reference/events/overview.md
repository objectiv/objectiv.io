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
        NonInteractiveEvent --> ApplicationLoadedEvent["ApplicationLoadedEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
        NonInteractiveEvent --> FailureEvent["FailureEvent<br><span class='properties'>message: string</span>"]; 
        NonInteractiveEvent --> HiddenEvent["HiddenEvent<br /><span class='properties'>requires:<br />LocationContext</span>"];
        NonInteractiveEvent --> SuccessEvent["SuccessEvent<br><span class='properties'>message: string</span>"];
        NonInteractiveEvent --> VideoEvent["VideoEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
        NonInteractiveEvent --> VisibleEvent["VisibleEvent<br /><span class='properties'>requires:<br />LocationContext</span>"];
        VideoEvent --> VideoLoadEvent;
        VideoEvent --> VideoPauseEvent;
        VideoEvent --> VideoStartEvent;
        VideoEvent --> VideoStopEvent;
    class InteractiveEvent diagramActive;
    class PressEvent diagramActive;
    class InputChangeEvent diagramActive;
    class NonInteractiveEvent diagramActive;
    class ApplicationLoadedEvent diagramActive;
    class FailureEvent diagramActive;
    class VisibleEvent diagramActive;
    class HiddenEvent diagramActive;
    class SuccessEvent diagramActive;
    class VideoEvent diagramActive;
    class VideoLoadEvent diagramActive;
    class VideoPauseEvent diagramActive;
    class VideoStartEvent diagramActive;
    class VideoStopEvent diagramActive;
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
    { name: 'VideoEvent', to: '/taxonomy/reference/events/VideoEvent' },
    { name: 'VideoLoadEvent', to: '/taxonomy/reference/events/VideoLoadEvent' },
    { name: 'VideoPauseEvent', to: '/taxonomy/reference/events/VideoPauseEvent' },
    { name: 'VideoStopEvent', to: '/taxonomy/reference/events/VideoStopEvent' },
    { name: 'VideoStartEvent', to: '/taxonomy/reference/events/VideoStartEvent' },
    { name: 'InteractiveEvent', to: '/taxonomy/reference/events/InteractiveEvent' },
    { name: 'PressEvent', to: '/taxonomy/reference/events/PressEvent' },
    { name: 'InputChangeEvent', to: '/taxonomy/reference/events/InputChangeEvent' }
  ]}
/>
