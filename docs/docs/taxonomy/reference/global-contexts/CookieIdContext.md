# CookieIdContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing information needed to reconstruct a user session.

The cookie_id is used to uniquely identify a user. Data teams using Objectiv data will see a user_id, which is equal to the cookie_id.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>cookie_id: string</span>"];
    class CookieIdContext diagramActive;
`} 
  caption="Diagram: CookieIdContext inheritance" 
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
| **cookie_id**  | string      | Unique identifier from the session cookie.

:::info setting of properties
The tracker will automatically set all the properties and assign a cookie_id.
:::