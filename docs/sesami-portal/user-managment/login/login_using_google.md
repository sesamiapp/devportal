---
sidebar_position: 5
---

# Login Using Google

## Requirement

If user wants to login using this strategy, he/she have already sync their Sesami account to a google account. For more information check Google Strategy document.

## Google Account Selection

The first step of login using google is redirecting to a back-end url.

```url
https://api.sesami.dev/users/login/google
```

redirecting to this URL will start the flow of the Login with google. a page will be shown to the user too select their google account. if everything goes well this page would be redirected to this URL

```url
https://portal.sesami.dev?code=someCode&email=email@email.com
```

if something goes wrong this page would be redirected to this URL

```url
https://portal.sesami.dev/message?payload=errorPaylaod
```

### Expected Output

As we've discussed this api result is in the form of redirection.

### Possible Errors

1. no account was connected to this google account. the status code of this error is **404**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "not_found"
         }
       ]
     }
   ]
   ```
2. google strategy is not available for the found user. the status code of this error is **401**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "login_strategy",
           "payload": "server preferred login strategy (e.g. MagicLink, Password)"
         }
       ]
     }
   ]
   ```

## Google Code Exchange

As we've said before, in the pervious step, if everything goes well, we will be redirected to this url.

```url
https://portal.sesami.dev/login/google?code=someCode&email=email@email.com
```

As you can see there is a code and email inside this url. using this code and email and sending this back to the backend application will give user a access token.

#### GraphQL Example

```graphql
query loginWithOtp {
  loginWithOtp(request: { email: "email@email.com", code: "someCode" }) {
    token
  }
}
```

#### REST Example

```curl
curl -X 'GET' \
  'https://api.sesami.dev/users/login/otp?code=someCode&email=email%40email.com' \
  -H 'accept: */*'
```

### Expected Output

If everything goes well, the return object of these methods would have an attribute called `token`, which is the access token.

### Possible Errors

1. the code is dead. the status code of this error is **400**
   ```json
   [
     {
       "constraints": [
         {
           "name": "valid_otp"
         }
       ],
       "property": "code"
     }
   ]
   ```
2. the user with this email is not found. the status code of this error is **404**.
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "not_found"
         }
       ]
     }
   ]
   ```
