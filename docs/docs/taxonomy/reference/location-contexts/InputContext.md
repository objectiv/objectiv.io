# InputContext

A [AbstractLocationContext](/taxonomy/reference/location-contexts/AbstractLocationontext) that describes an element that accepts user input, i.e. a form field.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
        AbstractLocationContext --> InputContext;
    class InputContext diagramActive;
`} 
  caption="Diagram: InputContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
  ]}
/>

### Properties
None.