# RootLocationContext

A [SectionContext](/taxonomy/reference/location-contexts/SectionContext.md) that uniquely represents the top-level UI location of the user.
 
import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
        SectionContext --> RootLocationContext;
    class RootLocationContext diagramActive;
`} 
  caption="Diagram: RootLocationContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' }
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Top-level UI location of the user, set automatically by the tracker.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.