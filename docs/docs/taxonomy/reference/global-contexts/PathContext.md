# PathContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing the path where the user is when an event is sent.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
	    AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> PathContext;
    class HttpContext diagramActive;
`} 
  caption="Diagram: PathContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/global-contexts/AbstractGlobalContext' },
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Path on web including URL parameters and hashes, pathname on native. Set automatically by the tracker.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.