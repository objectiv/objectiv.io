---
sidebar_position: 1
slug: /taxonomy/location-contexts
title: Overview
---

# Location Contexts

import Mermaid from '@theme/Mermaid';

Used to populate the `location_stack` properties of an [event](/taxonomy/reference/events/overview.md). A Location Stack is 
meant to describe accurately where an event originated in the UI.

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> InputContext;
        AbstractLocationContext --> PressableContext;
        PressableContext --> LinkContext;
        AbstractLocationContext --> SectionContext;
        SectionContext --> ExpandableSectionContext;
        SectionContext --> MediaPlayerContext;
        SectionContext --> NavigationContext;
        SectionContext --> OverlayContext;
        SectionContext --> RootLocationContext;
`} 
  caption="Diagram: Location Contexts" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'ExpandableSectionContext', to: '/taxonomy/reference/location-contexts/ExpandableSectionContext' },
    { name: 'InputContext', to: '/taxonomy/reference/location-contexts/InputContext' },
    { name: 'LinkContext', to: '/taxonomy/reference/location-contexts/LinkContext' },
    { name: 'MediaPlayerContext', to: '/taxonomy/reference/location-contexts/MediaPlayerContext' },
    { name: 'NavigationContext', to: '/taxonomy/reference/location-contexts/NavigationContext' },
    { name: 'OverlayContext', to: '/taxonomy/reference/location-contexts/OverlayContext' },
    { name: 'RootLocationContext', to: '/taxonomy/reference/location-contexts/RootLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' },
    { name: 'PressableContext', to: '/taxonomy/reference/location-contexts/PressableContext' },
  ]}
/>
