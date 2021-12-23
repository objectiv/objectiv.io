# LinkContext

A [PressableContext](/taxonomy/reference/location-contexts/PressableContext) that contains an href.

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
    { name: 'AbstractLocationContext', to: '/taxonomy/location-contexts/' },
    { name: 'PressableContext', to: '/taxonomy/reference/location-contexts/PressableContext' }
  ]}
/>


### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.
| **href**      | string      | URL (href) the link points to.

:::info setting of the id & type
The tracker will automatically set the id and _type based on the link element. When this is not possible on a specific platform, it will ask for a manual id and _type to be set.
:::