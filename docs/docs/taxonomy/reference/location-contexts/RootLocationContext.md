# RootLocationContext

A [LocationContext](/taxonomy/reference/location-contexts/overview.md) that uniquely represents the top-level UI location of the user.
 
import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> RootLocationContext;
    class RootLocationContext diagramActive;
`} 
  caption="Diagram: RootLocationContext inheritance" 
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
The tracker will automatically set the id and _type based on the top-level UI location of the user. When this is not possible on a specific platform, it will ask for a manual id and _type to be set.
:::