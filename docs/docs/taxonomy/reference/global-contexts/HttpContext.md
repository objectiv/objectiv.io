# HttpContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing meta information about the agent that sent the event.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
    class HttpContext diagramActive;
`} 
  caption="Diagram: HttpContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/global-contexts/AbstractGlobalContext' },
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.          
| **referer**         | string          | Full URL to HTTP referrer of the current page.
| **user_agent**      | string          | User-agent of the agent that sent the event.
| **remote_address**  | string          | (public) IP address of the agent that sent the event.

:::info setting of properties
The tracker will automatically set all the properties and assign a cookie_id.
:::
