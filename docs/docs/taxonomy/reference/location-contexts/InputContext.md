# InputContext

A [LocationContext](/taxonomy/location-contexts/)  that describes an element that accepts user input, i.e. a form field.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> LocationContext;
        LocationContext --> InputContext;
    class InputContext diagramActive;
`} 
  caption="Diagram: InputContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'LocationContext', to: '/taxonomy/location-contexts/' }
  ]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.

:::info setting of the id & type
The tracker will automatically set the id and _type based on the input element. When this is not possible on a specific platform, it will ask for a manual id and _type to be set.
:::