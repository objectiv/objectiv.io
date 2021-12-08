---
sidebar_position: 2
slug: /taxonomy/global-contexts
title: Overview
---

# Global Contexts

import Mermaid from '@theme/Mermaid';

Global contexts add global / general information about an [Event](/tracking/core-concepts/events.md). They 
carry information that is not related to where the [Event](/tracking/core-concepts/events.md) originated 
(location), such as device, platform or business data.

See the diagram below for the Global Contexts. Click each to learn more.

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> ApplicationContext;
        AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>cookie_id: string</span>"];
        AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>user-agent: string</span>"];
        AbstractGlobalContext --> ErrorContext["ErrorContext<br><span class='properties'>message: string</span>"];
        AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
        AbstractGlobalContext --> PathContext;
        AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
`} 
  caption="Diagram: Global Contexts" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/global-contexts/AbstractGlobalContext' },
    { name: 'ApplicationContext', to: '/taxonomy/reference/global-contexts/ApplicationContext' },
    { name: 'CookieIdContext', to: '/taxonomy/reference/global-contexts/CookieIdContext' },
    { name: 'DeviceContext', to: '/taxonomy/reference/global-contexts/DeviceContext' },
    { name: 'ErrorContext', to: '/taxonomy/reference/global-contexts/ErrorContext' },
    { name: 'HttpContext', to: '/taxonomy/reference/global-contexts/HttpContext' },
    { name: 'PathContext', to: '/taxonomy/reference/global-contexts/PathContext' },
    { name: 'SessionContext', to: '/taxonomy/reference/global-contexts/SessionContext' }
  ]}
/>
