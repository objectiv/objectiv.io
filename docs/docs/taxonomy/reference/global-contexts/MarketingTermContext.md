# MarketingTermContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing the search term from which the user came.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
	    AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> MarketingTermContext["MarketingTermContext<br><span class='properties'>term: string</span>"];
    class MarketingTermContext diagramActive;
`} 
  caption="Diagram: MarketingTermContext inheritance" 
  baseColor="blue" 
  links={[
        { name: 'AbstractGlobalContext', to: '/taxonomy/global-contexts' },
]}
/>

### Requires
- [MarketingContext](/taxonomy/reference/global-contexts/MarketingContext).

### Properties
|           | type        | description
| :--       | :--         | :--
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.
| **term**    | string      | Search keywords.

:::info setting of the properties
The backend will automatically set all the properties bases on the UTM parameters in the PathContext.
:::