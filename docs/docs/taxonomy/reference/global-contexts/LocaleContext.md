# LocaleContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing the locale used by the user. E.g. an ISO 639-1 code.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> LocaleContext;
    class LocaleContext diagramActive;
`} 
  caption="Diagram: LocaleContext inheritance" 
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

:::info setting of properties
The tracker will automatically set all the properties.
:::
