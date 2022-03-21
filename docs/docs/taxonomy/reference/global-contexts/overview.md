---
sidebar_position: 2
slug: /taxonomy/global-contexts
title: Overview
---

# Global Contexts

import Mermaid from '@theme/Mermaid';

Global Contexts add general information to an [Event](/taxonomy/reference/events/overview.md). 

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> ApplicationContext;
        AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>cookie_id: string</span>"];
        AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
        AbstractGlobalContext --> MarketingContext["MarketingContext<br><span class='properties'>source: string<br>medium: string<br>campaign: string<br>term?: string<br>content?: string</span>"];
        AbstractGlobalContext --> PathContext;
        AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
        AbstractGlobalContext --> UserContext["UserContext<br><span class='properties'>input_fields: string<br />hash_type: string</span>"];
    class ApplicationContext diagramActive;
    class CookieIdContext diagramActive;
    class HttpContext diagramActive;
    class MarketingContext diagramActive;
    class PathContext diagramActive;
    class SessionContext diagramActive;
    class UserContext diagramActive;
`} 
  caption="Diagram: Global Contexts" 
  baseColor="blue" 
  links={[
    { name: 'ApplicationContext', to: '/taxonomy/reference/global-contexts/ApplicationContext' },
    { name: 'CookieIdContext', to: '/taxonomy/reference/global-contexts/CookieIdContext' },
    { name: 'HttpContext', to: '/taxonomy/reference/global-contexts/HttpContext' },
    { name: 'MarketingContext', to: '/taxonomy/reference/global-contexts/MarketingContext' },
    { name: 'PathContext', to: '/taxonomy/reference/global-contexts/PathContext' },
    { name: 'SessionContext', to: '/taxonomy/reference/global-contexts/SessionContext' },
    { name: 'UserContext', to: '/taxonomy/reference/global-contexts/UserContext' }
  ]}
/>

AbstractContext & AbstractGlobalContext are the abstract parents of all Global Contexts. 