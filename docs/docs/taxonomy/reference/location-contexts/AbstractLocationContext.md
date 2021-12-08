import Mermaid from '@theme/Mermaid';

AbstractLocationContext defines the bare minimum properties for every Location Context. All Location Contexts 
inherit from it.

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> InputContext;
        AbstractLocationContext --> PressableContext;
        AbstractLocationContext --> SectionContext;
    class AbstractLocationContext diagramActive;
`} 
  caption="Diagram: AbstractLocationContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' },
    { name: 'PressableContext', to: '/taxonomy/reference/location-contexts/PressableContext' },
    { name: 'InputContext', to: '/taxonomy/reference/location-contexts/InputContext' }
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.
