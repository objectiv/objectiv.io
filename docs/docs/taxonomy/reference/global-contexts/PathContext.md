# PathContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing the path where the user is when an event is sent.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
	    AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> PathContext;
    class PathContext diagramActive;
`} 
  caption="Diagram: PathContext inheritance" 
  baseColor="blue" 
  links={[
        { name: 'AbstractGlobalContext', to: '/taxonomy/global-contexts' }
]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.          

:::info setting of the id & type
The tracker will automatically set the id and _type based on path on web (including URL parameters, hashes) and pathname on native. When this is not possible on a specific platform, it will ask for a manual id and _type to be set.
:::