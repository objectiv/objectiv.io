# ScreenContext

A [SectionContext](/taxonomy/reference/location-contexts/SectionContext.md) A SectionContext that carries a path in the ```screen``` property, representing a high-level location in the application.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext; 
        SectionContext --> ScreenContext["ScreenContext<br /><span class='properties'>screen: string</span>"];
    class ScreenContext diagramActive;
`} 
  caption="Diagram: ScreenContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' }
  ]}
/>

### Properties
|                | type        | description
| :--            | :--         | :--           
| **screen**     | string      | Name of the screen.
