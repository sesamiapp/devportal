---
sidebar_position: 4
---

# Google Strategy

user's need to sync their google account to their Sesami account, in case they want to login with Google Strategy.

## Initializing Sync

For this matter user should send a request to get an exchange code in order to start syncing. the response of this methods contains a code which will be used in the next step.

**User should be logged in.**

#### GraphQL Example

```graphql
mutation initGoogleSync {
  initGoogleSync {
    code
  }
}
```

#### REST Example

```curl
curl --request GET \
  --url https://api.sesami.dev/users/sync/google/code
```

## Google Account Selection

After user got the code from the previous step, the user should be redirected to the following url

```url
https://api.sesami.dev/users/sync/google?code=PreviousStepCode&email=userEmail
```

A page with user's google account will be opened and after that a set of actions will happen in the back end application and if all things went as intended, it will be redirected to

```url
https://portal.sesami.dev/profile?message=googleSynced
```

if not, it will be redirected to

```url
https://portal.sesami.dev/message?action=syncGoogle&payload=errorMessagepayload
```
