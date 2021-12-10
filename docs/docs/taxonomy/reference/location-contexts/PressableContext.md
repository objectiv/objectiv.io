# PressableContext

An [AbstractLocationContext](/taxonomy/reference/location-contexts/AbstractLocationContext) that describes an interactive element (like a link, button, icon), that the user can press and will trigger an [Interactive Event](/taxonomy/reference/events/InteractiveEvent).

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> PressableContext;
        PressableContext --> LinkContext;
    class PressableContext diagramActive;
`} 
  caption="Diagram: PressableContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'LinkContext', to: '/taxonomy/reference/location-contexts/LinkContext' },
    { name: 'PressableContext', to: '/taxonomy/reference/location-contexts/PressableContext' },
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.

:::info setting of the id & type
The tracker will automatically set the id and _type based on the pressable element. When this is not possible on a specific platform, it will ask for a manual id and _type to be set.
:::