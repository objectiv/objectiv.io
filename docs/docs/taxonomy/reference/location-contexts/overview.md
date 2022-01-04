---
sidebar_position: 1
slug: /taxonomy/location-contexts
title: Overview
---

# Location Contexts

import Mermaid from '@theme/Mermaid';

Location Contexts are meant to describe where an event originated from in the visual UI.

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> ContentContext;
        AbstractLocationContext --> ExpandableContext;
        AbstractLocationContext --> InputContext;
        AbstractLocationContext --> MediaPlayerContext;
        AbstractLocationContext --> NavigationContext;
        AbstractLocationContext --> OverlayContext;
        AbstractLocationContext --> PressableContext;
        PressableContext --> LinkContext["LinkContext<br><span class='properties'>href: string"];
        AbstractLocationContext --> RootLocationContext;
    class ContentContext diagramActive;
    class ExpandableContext diagramActive;
    class InputContext diagramActive;
    class MediaPlayerContext diagramActive;
    class NavigationContext diagramActive;
    class OverlayContext diagramActive;
    class PressableContext diagramActive;
    class LinkContext diagramActive;
    class RootLocationContext diagramActive;
`} 
  caption="Diagram: Location Contexts" 
  baseColor="blue" 
  links={[
    { name: 'ContentContext', to: '/taxonomy/reference/location-contexts/ContentContext' },
    { name: 'ExpandableContext', to: '/taxonomy/reference/location-contexts/ExpandableContext' },
    { name: 'InputContext', to: '/taxonomy/reference/location-contexts/InputContext' },
    { name: 'LinkContext', to: '/taxonomy/reference/location-contexts/LinkContext' },
    { name: 'MediaPlayerContext', to: '/taxonomy/reference/location-contexts/MediaPlayerContext' },
    { name: 'NavigationContext', to: '/taxonomy/reference/location-contexts/NavigationContext' },
    { name: 'OverlayContext', to: '/taxonomy/reference/location-contexts/OverlayContext' },
    { name: 'RootLocationContext', to: '/taxonomy/reference/location-contexts/RootLocationContext' },
    { name: 'PressableContext', to: '/taxonomy/reference/location-contexts/PressableContext' },
  ]}
/>
AbstractContext & AbstractLocationContext are the abstract parents of all Location Contexts.

