# OverlayContext

A [LocationContext](/taxonomy/location-contexts/) that describes a section of the UI that represents an overlay, i.e. a Modal.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> OverlayContext;
    class AbstractContext diagramDisabled;
    class OverlayContext diagramActive;
`} 
  caption="Diagram: OverlayContext inheritance" 
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
The tracker will automatically set the id and _type based on the overlay element. When this is not possible on a specific platform, it will ask for a manual id and _type to be set.
:::