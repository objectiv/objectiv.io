# SectionContext

SectionContext is a special [LocationContext](/taxonomy/reference/location-contexts/overview.md) representing a logical area of the UI or the system. It is used to build hierarchy and usually contains other [LocationContexts](/taxonomy/reference/location-contexts/overview.md). [Events](/taxonomy/events) typically target its children, not the SectionContext itself.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
        SectionContext --> RootLocationContext;
        SectionContext --> ExpandableSectionContext;
        SectionContext --> MediaPlayerContext;
        SectionContext --> NavigationContext;
        SectionContext --> OverlayContext;
    class SectionContext diagramActive;
`} 
  caption="Diagram: SectionContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'RootLocationContext', to: '/taxonomy/reference/location-contexts/RootLocationContext' },
    { name: 'ExpandableSectionContext', to: '/taxonomy/reference/location-contexts/ExpandableSectionContext' },
    { name: 'MediaPlayerContext', to: '/taxonomy/reference/location-contexts/MediaPlayerContext' },
    { name: 'NavigationContext', to: '/taxonomy/reference/location-contexts/NavigationContext' },
    { name: 'OverlayContext', to: '/taxonomy/reference/location-contexts/OverlayContext' }
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.