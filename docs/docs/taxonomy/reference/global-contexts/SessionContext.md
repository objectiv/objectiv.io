# SessionContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing meta information about the current session.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
    class SessionContext diagramActive;
`} 
  caption="Diagram: SessionContext inheritance" 
  baseColor="blue" 
  links={[
        { name: 'AbstractGlobalContext', to: '/taxonomy/global-contexts' }
]}
/>

### Properties
|                 | type      | description
| :--             | :--       | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.     
| **hit_number**  | integer   | Hit counter relative to the current session, this event originated in.

:::info setting of properties
The tracker will automatically set all the properties and assign a `hit_number`.
:::
