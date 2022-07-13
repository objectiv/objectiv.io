---
sidebar_position: 4
---

# Tracking User Identity

Objectiv enables you to easily 
[configure a user's identity during modeling](../../../modeling/open-model-hub/identity-resolution.mdx) with 
any identifier (e.g. a unique internal hashed ID, or an email address), and apply that to all users' behavior 
retroactively. This also allows you to track their behavior across sessions, platforms, devices, etc.

To enable this, the Tracker should be instructed to track the user identity explicitly in an 
[IdentityContext](../../../taxonomy/reference/global-contexts/IdentityContext.md).

All that's required is to track at least 1 event within the session that carries the 
[IdentityContext](../../../taxonomy/reference/global-contexts/IdentityContext.md), e.g. on tracker 
initialization or login; see the examples below. On all platforms there’s an `IdentityContextPlugin` to 
facilitate adding the IdentityContext.

Example on tracker initialization:

```tsx
/**
 * In this example we assume to have a cookie called `backend_user` holding an
 * an identifier of the currently logged in user.
 */
import { ReactTracker } from "@objectiv/tracker-react";
import Cookies from 'js-cookie';

const userId = Cookies.get('backend_user');

const testTracker4 = new ReactTracker({
  applicationId: 'app-id',
  transport: new DebugTransport(),
  plugins: [
    new IdentityContextPlugin({
      id: 'backend',
      value: userId
    })
  ],
});
```

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
