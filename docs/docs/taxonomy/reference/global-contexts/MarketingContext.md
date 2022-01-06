# MarketingContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing the marketing channel & campaign from where the user came.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
	    AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> MarketingContext["MarketingContext<br><span class='properties'>source: string<br>medium: string<br>campaign: string<br>term: string<br>content: string<br></span>"];
    class MarketingContext diagramActive;
`} 
  caption="Diagram: PathContext inheritance" 
  baseColor="blue" 
  links={[
        { name: 'AbstractGlobalContext', to: '/taxonomy/global-contexts' }
]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.          
| **source**    | string      | The advertiser, site, publication, etc.
| **medium**    | string      | Advertising or marketing medium: cpc, banner, email newsletter, etc.
| **campaign**    | string      | Campaign name, slogan, promo code, etc.
| **term**    | string      | [optional] Search keywords.
| **content**    | string      | [optional] To differentiate similar content, or links within the same ad.

:::info setting of the properties
The backend will automatically set all the properties bases on the UTM parameters in the PathContext.
:::