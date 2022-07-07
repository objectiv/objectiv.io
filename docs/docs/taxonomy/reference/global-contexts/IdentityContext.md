# IdentityContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md)  to track the identity of users across sessions, platforms, devices. Multiple can be present.

The `id` field is used to specify the scope of identification e.g. backend, md5(email), supplier_cookie.
The `value` field should contain the unique identifier within that scope.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> IdentityContext["IdentityContext<br><span class='properties'>value: string</span>"];
    class IdentityContext diagramActive;
`} 
  caption="Diagram: IdentityContext inheritance" 
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
| **value**  | string   | The unique identifier for this user/group/entity within the scope defined by `id`.

:::info setting of properties
The tracker will automatically set all the properties.
:::
