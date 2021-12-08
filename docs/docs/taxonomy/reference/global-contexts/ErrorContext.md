# ErrorContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) to encapsulate errors.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> ErrorContext["ErrorContext<br><span class='properties'>message: string</span>"];
    class ErrorContext diagramActive;
`} 
  caption="Diagram: ErrorContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/global-contexts/AbstractGlobalContext' },
  ]}
/>

### Properties
|              | type        | description
| :--          | :--         | :--           
| **message**  | string      | Error message.
