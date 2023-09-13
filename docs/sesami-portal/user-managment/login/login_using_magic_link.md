---
sidebar_position: 3
---

# Login Using Magic Link

## Send Magic Link

The first Step of login using magic link is to send a request to send an email to the user's email.

#### GraphQL Example

```graphql
mutation sendMagicLink {
  sendMagicLink(request: { email: "dayannilisani@gmail.com" })
}
```

#### REST Example

```curl
curl -X 'POST' \
  'http://localhost:9000/users/login/magicLink' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "email@email.com"
}'
```

### Expected Output

Neither of these methods returns anything as their purpose is to send an email which has a link inside it. here is an example of the link inside this email

```url
https://api.sesami.dev/users/validate/magicLink?email=email@eamil.com&code=someCode
```

This link will validate the email and the code and if everything was ok then It will be redirected to a url like this

```url
https://portal.sesami.dev/login?email=email@email.com&code=someCode
```

but if the email's link faced any error, it will redirect to a url like this

```url
https://portal.sesami.dev/action=loginWithMagicLink&message?payload=errorPayload
```

### Possible Errors

1. there is no user found with this email. the status code of this error is **404**
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
2. magic link is not in this user available login strategies list. the status code of this error is **401**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "login_strategy",
           "payload": "server preferred login strategy (e.g. Password, Google)"
         }
       ]
     }
   ]
   ```
3. an opt has been generated for user in the last 5 minutes. the status code of this error is **401**
   ```json
   [
     {
       "property": "code",
       "constraints": [
         {
           "name": "existing_otp"
         }
       ]
     }
   ]
   ```
4. user is not activated. the status code of this error would be **401**
   ```json
   [
     {
       "constraints": [
         {
           "name": "active_user"
         }
       ],
       "property": "ROOT"
     }
   ]
   ```

## Login By Magic Link Code

the final step of this login method is to send the email and code back to server and receive a token

#### GraphQL Example

```graphql
query loginWithOTP {
  loginWithOTP(request: { email: "email@email.com", code: "someCode" }) {
    token
  }
}
```

#### REST Example

```curl
curl --request GET \
  --url 'http://api.sesami.dev/users/login/otp?email=email%40email.com&code=someCode'
```

### Expected Output

these method would return an object which would have an attribute called `token` inside it.

```json
{
  "token": "token"
}
```

### Possible Errors

1. there is no user found with this email. the status code of this error is **404**
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
2. the code is not valid. either the latest code was not generated for this purpose or the code is dead. the status of this error is **400**
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
3. user is not activated. the status code of this error would be **401**
   ```json
   [
     {
       "constraints": [
         {
           "name": "active_user"
         }
       ],
       "property": "ROOT"
     }
   ]
   ```
