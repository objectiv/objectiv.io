---
sidebar_position: 1
slug: /taxonomy/location-contexts
title: Overview
---

# Location Contexts

import Mermaid from '@theme/Mermaid';

LocationContexts are used to populate a [Tracker's](/tracking/core-concepts/trackers) or 
[Event's](/tracking/core-concepts/events.md) `location_stack` properties. A Location Stack is 
meant to describe accurately where an [Event](/tracking/core-concepts/events.md) originated in the UI, e.g. 
Sections, Menus, etc.

See the diagram below for the Location Contexts. Click each to learn more.

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> ItemContext;
        ItemContext --> ActionContext["ActionContext<br><span class='properties'>text: string"];
        ActionContext --> ButtonContext;
        ActionContext --> LinkContext["LinkContext<br><span class='properties'>href: string"];    
        ItemContext --> InputContext;
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
    { name: 'ActionContext', to: '/taxonomy/reference/location-contexts/ActionContext' },
    { name: 'ButtonContext', to: '/taxonomy/reference/location-contexts/ButtonContext' },
    { name: 'ExpandableSectionContext', to: '/taxonomy/reference/location-contexts/ExpandableSectionContext' },
    { name: 'ItemContext', to: '/taxonomy/reference/location-contexts/ItemContext' },
    { name: 'InputContext', to: '/taxonomy/reference/location-contexts/InputContext' },
    { name: 'LinkContext', to: '/taxonomy/reference/location-contexts/LinkContext' },
    { name: 'MediaPlayerContext', to: '/taxonomy/reference/location-contexts/MediaPlayerContext' },
    { name: 'NavigationContext', to: '/taxonomy/reference/location-contexts/NavigationContext' },
    { name: 'OverlayContext', to: '/taxonomy/reference/location-contexts/OverlayContext' },
    { name: 'RootLocationContext', to: '/taxonomy/reference/location-contexts/RootLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' }
  ]}
/>
