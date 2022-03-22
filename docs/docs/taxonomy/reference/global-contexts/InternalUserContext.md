# InternalUserContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) to match a user in the Objectiv data to your internal user data. In the tracker you can choose which field(s) to put in the ID and hash this.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
	    AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> InternalUserContext["InternalUserContext<br><span class='properties'>input_fields: array<br />hash_type: string</span>"];
    class InternalUserContext diagramActive;
`} 
  caption="Diagram: InternalUserContext inheritance" 
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
| **input_fields** | array      | Field(s) used to create the user ID hash.   
| **hash_type** | string      | Algorithm used top create the user ID hash.   

:::info setting of the id & type
The tracker will enable you to set the id and _type based on the input_fields and hash-type.
:::