---
sidebar_position: 3
title: AbstractGlobalContext
---

# AbstractGlobalContext

import Mermaid from '@theme/Mermaid';

This is the abstract parent of all [Global Contexts](/taxonomy/reference/global-contexts/overview.md). Global contexts add general information to an Event.


See [Global Contexts](/taxonomy/reference/global-contexts/overview.md) for all Contexts that inherit from AbstractGlobalContext.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> ApplicationContext;
        AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>cookie_id: string</span>"];
        AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>user-agent: string</span>"];
        AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
        AbstractGlobalContext --> PathContext;
        AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
    class AbstractGlobalContext diagramActive;
`} 
  caption="Diagram: AbstractGlobalContext inheritance" 
  baseColor="blue"
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'ApplicationContext', to: '/taxonomy/reference/global-contexts/ApplicationContext' },
    { name: 'CookieIdContext', to: '/taxonomy/reference/global-contexts/CookieIdContext' },
    { name: 'DeviceContext', to: '/taxonomy/reference/global-contexts/DeviceContext' },
    { name: 'HttpContext', to: '/taxonomy/reference/global-contexts/HttpContext' },
    { name: 'PathContext', to: '/taxonomy/reference/global-contexts/PathContext' },
    { name: 'SessionContext', to: '/taxonomy/reference/global-contexts/SessionContext' }
]}
/>

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.

