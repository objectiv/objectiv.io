# LinkContext

An [ActionContext](/taxonomy/reference/location-contexts/ActionContext) that describes an interactive element that represents a (hyper)link.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> ItemContext;
        ItemContext --> ActionContext["ActionContext<br><span class='properties'>text: string"];
        ActionContext --> LinkContext["LinkContext<br><span class='properties'>href: string"];
    class LinkContext diagramActive;
`} 
  caption="Diagram: LinkContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'ItemContext', to: '/taxonomy/reference/location-contexts/ItemContext' },
    { name: 'ActionContext', to: '/taxonomy/reference/location-contexts/ActionContext' }
  ]}
/>


### Properties
|               | type        | description
| :--           | :--         | :--           
| **href**      | string      | URL (href) the link points to.
