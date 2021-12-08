# ApplicationContext

import Mermaid from '@theme/Mermaid';

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing the origin (application id) of the event, in its `id`.

<Mermaid chart={`
	graph LR 
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> ApplicationContext;
    class ApplicationContext diagramActive;
`} 
  caption="Diagram: ApplicationContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/global-contexts/AbstractGlobalContext' }
  ]}
/>

### Properties
None.
