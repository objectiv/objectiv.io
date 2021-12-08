import Mermaid from '@theme/Mermaid';

AbstractLocationContext defines the bare minimum properties for every Location Context. All Location Contexts 
inherit from it.

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> SectionContext;
        AbstractLocationContext --> ItemContext;
    class AbstractLocationContext diagramActive;
`} 
  caption="Diagram: AbstractLocationContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' },
    { name: 'ItemContext', to: '/taxonomy/reference/location-contexts/ItemContext' },
  ]}
/>

### Properties
All inherited from [AbstractContext](/taxonomy/reference/abstract-contexts/overview.md#abstractcontext).
