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
        AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
        AbstractGlobalContext --> UserIDContext["UserIDContext<br><span class='properties'>name: string<br />value_hash: string<br />hash_type: string</span>"];
        UserIDContext --> AnonymousIDContext["AnonymousIDContext<br><span class='properties'>name: 'anonymous'</span>"];
        UserIDContext --> CookieIDContext["CookieIDContext<br><span class='properties'>name: 'objectiv_cookie'</span>"];
        UserIDContext --> CompanyUserIDContext["CompanyUserIDContext<br><span class='properties'>name: 'company_user_id'</span>"];
        UserIDContext --> AppleIDContext["AppleIDContext<br><span class='properties'>name: 'company_user_id'</span>"];
        UserIDContext --> AndroidIDContext["AndroidIDContext<br><span class='properties'>name: 'company_user_id'</span>"];
        AbstractGlobalContext --> UserDimensionContext["UserDimensionContext<br><span class='properties'>name: string<br />value_hash: string<br />hash_type: string</span>"];
        UserDimensionContext --> UserAccountTypeContext["UserAccountTypeContext<br><span class='properties'>name: 'account_type'</span>"];
        UserDimensionContext --> UserCompanyContext["UserCompanyContext<br><span class='properties'>name: 'company'</span>"];
        UserDimensionContext --> UserTeamContext["UserTeamContext<br><span class='properties'>name: 'tean'</span>"];
        AbstractGlobalContext --> MarketingContext["MarketingContext<br><span class='properties'>source: string<br>medium: string<br>campaign: string<br>term?: string<br>content?: string</span>"];
        AbstractGlobalContext --> PathContext;
        AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
    class ApplicationContext diagramActive;
    class HttpContext diagramActive;
    class UserIDContext diagramActive;
    class AnonymousIDContext diagramActive;
    class CookieIDContext diagramActive;
    class CompanyUserIDContext diagramActive;
    class AppleIDContext diagramActive;
    class AndroidIDContext diagramActive;
    class UserDimensionContext diagramActive;
    class UserAccountTypeContext diagramActive;
    class UserCompanyContext diagramActive;
    class UserTeamContext diagramActive;
    class MarketingContext diagramActive;
    class PathContext diagramActive;
    class SessionContext diagramActive;
`} 
  caption="Diagram: Global Contexts" 
  baseColor="blue" 
  links={[
    { name: 'ApplicationContext', to: '/taxonomy/reference/global-contexts/ApplicationContext' },
    { name: 'HttpContext', to: '/taxonomy/reference/global-contexts/HttpContext' },
    { name: 'InternalUserContext', to: '/taxonomy/reference/global-contexts/InternalUserContext' },
    { name: 'MarketingContext', to: '/taxonomy/reference/global-contexts/MarketingContext' },
    { name: 'PathContext', to: '/taxonomy/reference/global-contexts/PathContext' },
    { name: 'SessionContext', to: '/taxonomy/reference/global-contexts/SessionContext' }
  ]}
/>

AbstractContext & AbstractGlobalContext are the abstract parents of all Global Contexts. 