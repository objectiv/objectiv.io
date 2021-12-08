# LinkContext

An [PressableContext](/taxonomy/reference/location-contexts/PressableContext) that contains an href.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> PressableContext;
        PressableContext --> LinkContext["LinkContext<br><span class='properties'>href: string"];
    class LinkContext diagramActive;
`} 
  caption="Diagram: LinkContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'PressableContext', to: '/taxonomy/reference/location-contexts/PressableContext' },
    { name: 'ActionContext', to: '/taxonomy/reference/location-contexts/ActionContext' }
  ]}
/>


### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Element id, set automatically by the tracker.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.
| **href**      | string      | URL (href) the link points to.
