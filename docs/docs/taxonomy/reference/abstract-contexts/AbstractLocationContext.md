---
sidebar_position: 4
title: AbstractLocationContext
---

# AbstractLocationContext

import Mermaid from '@theme/Mermaid';

This is the abstract parent of all [Location Contexts](/taxonomy/reference/location-contexts/overview.md). Location Contexts are used to populate the `location_stack`  properties of an event. A Location Stack is meant to describe accurately where an event originated in the UI.

See [Location Contexts](/taxonomy/reference/location-contexts/overview.md) for all Contexts that inherit from AbstractGlobalContext.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> ItemContext;
        AbstractLocationContext --> PressableContext;
		AbstractLocationContext --> SectionContext;
    class AbstractLocationContext diagramActive;
`} 
  caption="Diagram: AbstractLocationContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'ItemContext', to: '/taxonomy/reference/location-contexts/ItemContext' },
    { name: 'PressableContext', to: '/taxonomy/reference/location-contexts/PressableContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' }
  ]}
/>

### Properties
All inherited from [AbstractContext](/taxonomy/reference/abstract-contexts/overview.md#abstractcontext).
