import Mermaid from '@theme/Mermaid';

AbstractGlobalContext defines the bare minimum properties for every Global Context. All Global Contexts 
inherit from it.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> ApplicationContext;
        AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>user-agent: string</span>"];
        AbstractGlobalContext --> ErrorContext["ErrorContext<br><span class='properties'>message: string</span>"];
        AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>cookie_id: string</span>"];
        AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
        AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
    class AbstractGlobalContext diagramActive;
`} 
  caption="Diagram: AbstractGlobalContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'ApplicationContext', to: '/taxonomy/reference/global-contexts/ApplicationContext' },
    { name: 'DeviceContext', to: '/taxonomy/reference/global-contexts/DeviceContext' },
    { name: 'ErrorContext', to: '/taxonomy/reference/global-contexts/ErrorContext' },
    { name: 'CookieIdContext', to: '/taxonomy/reference/global-contexts/CookieIdContext' },
    { name: 'SessionContext', to: '/taxonomy/reference/global-contexts/SessionContext' },
    { name: 'HttpContext', to: '/taxonomy/reference/global-contexts/HttpContext' }
  ]}
/>

### Properties
All inherited from [AbstractContext](/taxonomy/reference/abstract-contexts/overview.md#abstractcontext).
