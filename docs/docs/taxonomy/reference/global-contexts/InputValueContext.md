# InputValueContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) containing the value of a single input element. Multiple InputValueContexts may be present in Global Contexts at the same time.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> InputValueContext["InputValueContext<br><span class='properties'>value: string</span>"];
    class InputValueContext diagramActive;
`} 
  caption="Diagram: InputValueContext inheritance" 
  baseColor="blue" 
  links={[
        { name: 'AbstractGlobalContext', to: '/taxonomy/global-contexts' }
]}
/>

### Properties
|            | type        | description
| :--        | :--         | :--           
| **id**     | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type**  | string      | String literal used during serialization. Should always match the Context interface name.     
| **value**  | string      | The value of the input element.

:::info setting of properties
The tracker will automatically set all properties when using Tracked Components or Taggers. On manual creation `id` and `value` must be provided.
:::
