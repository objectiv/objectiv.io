# ActionContext

An [ItemContext](/taxonomy/reference/location-contexts/ItemContext) describes an actionable item. 
It represents an interactive element that will trigger an [Interactive Event](/taxonomy/reference/events/InteractiveEvent), e.g. a Button or a Link.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> ItemContext;
        ItemContext --> ActionContext["ActionContext<br><span class='properties'>text: string"];
        ActionContext --> ButtonContext;
        ActionContext --> LinkContext["LinkContext<br><span class='properties'>href: string"];
    class ActionContext diagramActive;
`} 
  caption="Diagram: ActionContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'ItemContext', to: '/taxonomy/reference/location-contexts/ItemContext' },
    { name: 'ButtonContext', to: '/taxonomy/reference/location-contexts/ButtonContext' },
    { name: 'LinkContext', to: '/taxonomy/reference/location-contexts/LinkContext' }
  ]}
/>

### Properties
|               | type        | description
| :--           | :--         | :--           
| **text**      | string      | The text of the interactive element or, for visuals, a string describing it.
