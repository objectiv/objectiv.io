# ApplicationContext

import Mermaid from '@theme/Mermaid';

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing in which app the event happens, like a website or iOS app.

<Mermaid chart={`
	graph LR 
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> ApplicationContext;
    class ApplicationContext diagramActive;
`} 
  caption="Diagram: ApplicationContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/global-contexts/AbstractGlobalContext' }
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string describing the app in which the events happen.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.
