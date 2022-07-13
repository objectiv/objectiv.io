---
title: "Release: User Identity resolution, and capturing locale & input field values"
description: "TODO"
slug: release-user-identity-resolution-and-capturing-locale-and-input-values/
tags: [releases]
image: /img/open-graph/TODO.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: User Identity resolution, and capturing locale & input field values" />
</head>

import BlogImage from '@site/src/components/blog-image'
import JoinSlackLink from '@site/src/components/join-slack-link';
import Mermaid from '@site/src/components/Mermaid';

[identity-context]: https://objectiv.io/docs/taxonomy/reference/global-contexts/IdentityContext/
[locale-context]: https://objectiv.io/docs/taxonomy/reference/global-contexts/LocaleContext/
[input-value-context]: https://objectiv.io/docs/taxonomy/reference/global-contexts/InputValueContext/
[identity-context-plugin]: https://objectiv.io/docs/tracking/react/plugins/identity-context
[get_objectiv_dataframe]: https://objectiv.io/docs/modeling/open-model-hub/api-reference/ModelHub/get_objectiv_dataframe/
[iso-639-1]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[locale-context-plugin]: https://objectiv.io/docs/tracking/react/plugins/locale-context
[example-notebook-open-taxonomy]: https://objectiv.io/docs/modeling/example-notebooks/open-taxonomy/
[npm]: https://www.npmjs.com/org/objectiv
[tracking]: https://objectiv.io/docs/tracking/
[taxonomy]: https://objectiv.io/docs/taxonomy/
[open-model-hub]: https://objectiv.io/docs/modeling/open-model-hub/
[office-hours]: https://calendly.com/objectiv_io/objectiv-office-hours

<intro>

This release makes three additions to the open analytics taxonomy and open model hub:
* Identity resolution of users across sessions/devices in a new [IdentityContext][identity-context], e.g. 
using your own internal User IDs, or simply using consent-based cookies;
* Store the user’s locale/language in a [LocaleContext][locale-context] to analyze multilingual applications; 
and 
* Capture the value of input fields like a search field in an [InputValueContext][input-value-context] to 
analyze searches, funnels, etc.

</intro>

<!--truncate-->

<Mermaid chart={`
	graph LR
        AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> IdentityContext["IdentityContext<br><span class='properties'>value: string</span>"]; 
        AbstractGlobalContext --> InputValueContext["InputValueContext<br><span class='properties'>value: string</span>"];
        AbstractGlobalContext --> LocaleContext;
    class IdentityContext diagramActive;
    class InputValueContext diagramActive;
    class LocaleContext diagramActive;
`} 
  caption="Global Contexts in the open analytics taxonomy; newly added highlighted" 
  baseColor="blue" 
  links={[
    { name: 'IdentityContext', to: 'https://objectiv.io/docs/taxonomy/reference/global-contexts/IdentityContext' },
    { name: 'InputValueContext', to: 'https://objectiv.io/docs/taxonomy/reference/global-contexts/InputValueContext' },
    { name: 'LocaleContext', to: 'https://objectiv.io/docs/taxonomy/reference/global-contexts/LocaleContext' }
  ]}
/>

# IdentityContext & Identity Resolution
Objectiv now enables you to easily configure a user’s identity during modeling with any identifier (e.g. a 
unique internal hashed ID, or an email address), and apply that to all users’ behavior retroactively. For 
instance, throughout a user’s journey, they can first just have a session cookie, and then get an ID on login 
or signup, which is automatically applied to all events that happened before. This also allows you to track 
their behavior across sessions, platforms, devices, etc.

To enable this, we added:
* An [IdentityContext][identity-context] to the open analytics taxonomy, which captures the identification 
method (e.g. a hashed user ID) and the value of the identifier.
* A plugin for the Tracker SDKs to capture the IdentityContext, e.g. for [React][identity-context-plugin].
* Parameters on [creating the Objectiv DataFrame][get_objectiv_dataframe] in the open model hub, to specify 
the right identity resolution and (optionally) how to handle anonymization.

## How to use it in the open model hub?
Identity Resolution should be configured on [creating the Objectiv DataFrame][get_objectiv_dataframe], e.g.:

```python
get_objectiv_dataframe(identity_resolution=’email’, 
                       anonymize_unidentified_users=False)
```

What this example above does is assign the last identity available  to all events captured in the session, 
with any parallel sessions (e.g. same user logged in on multiple devices) remaining intact. As the 
`anonymize_unidentified_users` parameter is set to `False`, sessions for users that do not have a new 
identity are not fully anonymized, and for instance keep their original cookie ID.

## How to use it in the Tracker SDK?
The Tracker should be instructed to track the user identity explicitly in the new 
[IdentityContext][identity-context]. 

All that’s required is to track at least 1 event within the session that carries the IdentityContext, e.g. on 
tracker initialization or login. On all platforms there’s an `IdentityContextPlugin` to help with this (e.g. 
for React).

Example on user login:

```tsx
/**
 * In this example we append the identity of the logged in user when triggering
 * a success event from a hypothetical Login button.
 */
const trackSuccessEvent = useSuccessEventTracker()

trackSuccessEvent({
  message: 'Logged in successfully',
  globalContexts: [
    new IdentityContextPlugin({
      id: 'authentication',
      value: response.user_id
    })
  ]
});
```

# LocaleContext
If your application is multilingual, the new [LocaleContext][locale-context] can be used to capture the 
locale used by the user, e.g. in an [ISO 639-1][iso-639-1] code.

For example, to set the locale from the URL in [React][locale-context-plugin], use the following on tracker 
initialization:

```js
const tracker = new ReactTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.app.dev',
  plugins: [
    new LocaleContextPlugin({
      idFactoryFunction: () => location.pathname.split('/')[1] ?? null 
    })
  ]
});  
```

This GlobalContext can then be easily used to slice on in modeling (see the 
[open taxonomy example notebook][example-notebook-open-taxonomy] in our documentation).

# InputValueContext
The newly added [InputValueContext][input-value-context] can be used to track a user’s input value. This 
enables, for instance, to analyze searches performed on your site, navigation via dropdowns, or funnel usage. 
The tracker SDKs also enable automatically tracking these [InputValueContexts][input-value-context].

For example, on input change for input fields on React:
```tsx
<TrackedInput id={'search'} placeholder={'🔍'} trackValue={true} />
```

<BlogImage url="/img/blog/releases/20220714/search.png" 
  caption="Figure: a search in the Objectiv documentation" />

Another example: the value of a switch on React Native.

```tsx
<TrackedSwitch
  id="on-off"
  onValueChange={toggleSwitch}
  value={isEnabled}
  trackValue={true}
/>
```

This GlobalContext can then be easily used in modeling (see the 
[open taxonomy example notebook][example-notebook-open-taxonomy] in our documentation).

# How to get it
To capture the new Contexts, new versions of the tracker are available on [NPM][npm]. To upgrade or install, 
follow instructions for [your platform][tracking].

To use the new Contexts & functions in modeling, update or install your model hub packages. 

Install from PyPI:

```console
pip install objectiv-modelhub
```

To upgrade:

```console
pip install --upgrade objectiv-modelhub
```

# Summarizing
We added three new Contexts and functions to the [open analytics taxonomy][taxonomy] and 
[open model hub][open-model-hub] to enable you to easily perform identity resolution of users across 
sessions/devices, store the user’s locale/language for multilingual applications, and capture the value of 
input fields like a search field for analysis. 

Use/upgrade the [Objectiv Trackers][tracking] to get the latest functionality to easily track the new 
Contexts, and get the latest modelhub package to use them in your analyses.


:::info
## Office Hours
If you have any questions about this release or anything else, or if you just want to say 'Hi!' to team 
Objectiv, we have [Office Hours every Thursday at 4pm CET, 10am EST][office-hours] that you 
can freely dial in to. If you're in a timezone that doesn’t fit well, just ping us 
on <JoinSlackLink linkText="Slack" /> and we'll send over an invite for a better moment.

[Join the Office Hours][office-hours]
:::