# DeviceContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing meta information about the device that emitted the event.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>user-agent: string</span>"];
    class DeviceContext diagramActive;
`} 
  caption="Diagram: DeviceContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/global-contexts/AbstractGlobalContext' },
  ]}
/>

### Properties
|                 | type        | description
| :--             | :--         | :--           
| **user_agent**  | string      | String describing the user-agent that emitted the event.
