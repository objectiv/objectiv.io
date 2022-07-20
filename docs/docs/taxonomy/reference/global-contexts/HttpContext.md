# HttpContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing meta information about the agent that sent the event.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referrer: string<br>user_agent: string<br>remote_address?: string</span>"];
    class HttpContext diagramActive;
`} 
  caption="Diagram: HttpContext inheritance" 
  baseColor="blue" 
  links={[
        { name: 'AbstractGlobalContext', to: '/taxonomy/global-contexts' }    
]}
/>

### Properties
|                     | type   | description                                                                                        |
|:--------------------|:-------|:---------------------------------------------------------------------------------------------------|
| **id**              | string | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.      |
| **_type**           | string | String literal used during serialization. Should always match the Context interface name.          |
| **referrer**        | string | The URL that the browser sets in the referrer header, in the request that loaded the current page. |
| **user_agent**      | string | User-agent of the agent that sent the event.                                                       |
| **remote_address**  | string | (public) IP address of the agent that sent the event.                                              |

:::info setting of properties
The tracker will automatically set the `_type`, `referrer` and `user_agent` properties, while the collector will automatically set the `remote_address`.
:::
