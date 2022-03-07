# ExpandableContext

A [LocationContext](/taxonomy/reference/location-contexts/overview.md)  that describes a section of the UI that can expand & collapse.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> ExpandableContext;
    class ExpandableContext diagramActive;
`} 
  caption="Diagram: ExpandableContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractLocationContext', to: '/taxonomy/location-contexts/' }
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.

:::info setting of the id & type
The tracker will automatically set the id and _type based on the expandable element. When this is not possible on a specific platform, it will ask for a manual id and _type to be set.
:::