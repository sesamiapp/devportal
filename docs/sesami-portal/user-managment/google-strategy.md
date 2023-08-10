---
sidebar_position: 4
---

# Google Strategy

user's need to sync their google account to their Sesami account, in case they want to login with Google Strategy.

## Google Account Selection

The first step and last step of these flow is to redirect to this url.

```url
https://api.sesami.dev/users/sync/google
```

**User should be logged in to be able to redirect to this url.**

A page with user's google account will be opened and after that a set of actions will happen in the back end application and if all things went as intended, it will be redirected to

```url
https://portal.sesami.dev/profile?message=googleSynced
```

if not, it will be redirected to

```url
https://portal.sesami.dev/message?payload=errorMessagepayload
```
